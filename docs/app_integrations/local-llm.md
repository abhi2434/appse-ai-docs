---
title: "Local AI"
slug: /app-integrations/local-llm/
description: Connect appse ai to a self-hosted, OpenAI-compatible LLM server (Ollama, LM Studio, llama.cpp, vLLM, text-generation-webui) for chat completions, completions, and embeddings.
---

**Local AI** connects appse ai to any self-hosted, OpenAI-compatible LLM server — **Ollama**, **LM Studio**, **llama.cpp**, **vLLM**, **text-generation-webui**, and similar runtimes. Use it to run chat completions, text completions, and embeddings against a model you host yourself, so prompts and data never leave your own infrastructure.

Local AI works with any server, local network address, or public domain — as long as it exposes the standard OpenAI-compatible endpoints (`/v1/chat/completions`, `/v1/completions`, `/v1/embeddings`, `/v1/models`).

---

## How appse ai Reaches Your Server

This is the most important decision when setting up Local AI: **where does appse ai's cloud connect from, and can it actually reach your server URL?**

| Mode | Typical Server URL | On-Prem Connector required? |
|---|---|---|
| **On-Premises** — server only reachable inside your network | `http://localhost:1234`, `http://192.168.1.20:1234`, `http://llm.internal.corp` | **Yes** |
| **Publicly exposed** — server reachable from the internet | `https://llm.example.com` | **No** |

### On-Premises: requires an On-Prem Connector

If your LLM server runs on `localhost`, a loopback address, a LAN IP, or an internal hostname, appse ai's cloud runners **cannot** reach it directly — that address only resolves inside your own network. Route the connection through an **On-Prem Connector** installed on a machine that sits in the same network as the LLM server.

Follow **[On-Prem Connector Setup](/platform/key-concepts/on-premise-agent/on-premise-agent-setup)** to install the connector, then select it while creating the Local AI credential.

<img src="/img/credentials/local-llm/Credential-Local.png" alt="Local AI credential with Server URL set to a localhost address" width="500"/>

*Server URL pointed at `localhost` — reachable only through an On-Prem Connector.*

### Publicly exposed: forward a port instead

If you'd rather not run an On-Prem Connector, you can port-forward your LLM server to a public IP or domain on your router/firewall and expose it directly to the internet. In that case, appse ai's cloud calls the server the same way it would any public API — no On-Prem Connector is needed. Just point **Server URL** at the public address.

:::warning
Exposing an LLM server to the public internet means anyone who finds the address can call it. If you go this route:
- Serve over **HTTPS**, not plain HTTP.
- Put an **API key or reverse-proxy authentication** in front of it — most local servers (default Ollama, LM Studio) accept unauthenticated requests out of the box.
- Restrict access by IP allow-list at the firewall/reverse-proxy where possible.
:::

#### Temporary public access with ngrok

Router-level port forwarding is a permanent change to your network — often more than you need for a demo, a proof of concept, or short-lived testing. [ngrok](https://ngrok.com/docs/getting-started/) creates a temporary public HTTPS tunnel to a port on your machine without touching your router or firewall:

1. [Download and install ngrok](https://ngrok.com/download) on the machine running your LLM server.
2. Sign up for a free ngrok account and authenticate the CLI with your authtoken:
   ```bash
   ngrok config add-authtoken <your-authtoken>
   ```
3. Start your LLM server locally as usual (e.g. LM Studio on port `1234`, Ollama on port `11434`).
4. Start the tunnel, pointing at that same port:
   ```bash
   ngrok http 1234
   ```
5. Copy the `https://xxxx.ngrok-free.app`-style **Forwarding** URL ngrok prints, and paste it into **Server URL** on the Local AI credential.

<img src="/img/credentials/local-llm/Credential-URL1.png" alt="Local AI credential with Server URL set to a temporary public tunnel address" width="500"/>

*Server URL pointed at a temporary public tunnel — works the same way any public domain would, no On-Prem Connector required.*

:::note
Free ngrok URLs are ephemeral — they change every time you restart the tunnel, so you'll need to update the credential's Server URL after each restart. Treat ngrok tunnels as a **temporary** bridge for testing, not a permanent connection method for production workflows; use router port forwarding or an On-Prem Connector for anything long-running. The same security precautions from the warning above still apply — an ngrok tunnel is just as public as a forwarded port.
:::

---

## Set Up Credential

### Required Fields

| Field | Description |
|---|---|
| Connection Name | A name to help you identify this connection |
| Server URL | Base URL of your OpenAI-compatible server, including port and API path |
| API Key (optional) | Sent as `Authorization: Bearer <key>`. Leave blank or anything in this box, unless your server/proxy checks it |

### Step-by-Step Guide

#### 1. Get your server's base URL

Every OpenAI-compatible runtime exposes its API on a base URL and default port. If you haven't installed one yet, each one has an official install guide:

| Server | Install Guide | Default base URL |
|---|---|---|
| LM Studio | [lmstudio.ai/docs](https://lmstudio.ai/docs) | `http://localhost:1234` |
| Ollama | [ollama.com/download](https://ollama.com/download) | `http://localhost:11434` |
| vLLM | [docs.vllm.ai — Quickstart](https://docs.vllm.ai/en/latest/getting_started/quickstart.html) | `http://localhost:8000` |
| text-generation-webui | [GitHub — Installation](https://github.com/oobabooga/text-generation-webui#how-to-install) | `http://localhost:5000` |
| llama.cpp server | [GitHub — Server docs](https://github.com/ggerganov/llama.cpp/tree/master/tools/server) | `http://localhost:8080` |

#### 2. Decide how appse ai will reach it

- Server only reachable on your local network → install an [On-Prem Connector](/platform/key-concepts/on-premise-agent/on-premise-agent-setup) first, and select it on the credential form.
- Server port-forwarded to a public IP/domain → skip the connector and use the public URL directly.

#### 3. Fill in the credential form

Enter a **Connection Name**, paste the **Server URL** from step 1 (swap in the LAN/internal/public address that matches your setup), and add an **API Key** only if your server or reverse proxy enforces one.

#### 4. Save and validate

Click **Save**. appse ai validates the credential with a `GET /v1/models` call — if your server responds with its loaded model list, the connection is ready to use.

---

## Actions

### 1. Create Chat Completion

Sends a list of role/content messages to the server and returns the generated reply. Use this for conversational or instruction-style prompts.

| Field | Description |
|---|---|
| Model | Model currently loaded on your server, fetched live from `GET /v1/models` |
| Messages | The conversation so far, as a list of `role` (System / User / Assistant) and `content` pairs |
| Temperature | Sampling temperature — higher is more random, lower is more focused. Typical range 0–2 |
| Max Tokens | Maximum tokens to generate. `-1` means no limit (LM Studio/llama.cpp convention) |
| Response Format | Optional JSON schema the model should structure its reply as — see [Response Format](#response-format) below |

### 2. Create Completion

Sends a raw text prompt to the legacy `/v1/completions` endpoint and returns the generated text. Use this for older, non-chat completion models.

| Field | Description |
|---|---|
| Model | Model currently loaded on your server, fetched live from `GET /v1/models` |
| Prompt | The text prompt to complete |
| Temperature | Sampling temperature — higher is more random, lower is more focused. Typical range 0–2 |
| Max Tokens | Maximum tokens to generate. `-1` means no limit |

### 3. Create Embeddings

Generates a vector embedding for a piece of text using the embedding model loaded on your server. Use this for similarity search, semantic retrieval (RAG), clustering, or deduplication — not for generating a text reply.

| Field | Description |
|---|---|
| Input | The text to generate an embedding vector for |
| Model | Embedding model currently loaded on your server, fetched live from `GET /v1/models`. Pick an embedding-capable model, not a chat model |
| Encoding Format | `Float` returns a plain array of numbers; `Base64` returns a packed string |

:::note
All three actions return a single, complete response — streaming is not supported.
:::

---

## AI Tools

Local AI also exposes an agent-callable tool so an AI Processor / agent node can call your server mid-conversation:

- **Create Embeddings** — same fields as the action above. Give an agent this tool when it needs to turn text into a vector for RAG or semantic search as part of its own reasoning, rather than as a fixed workflow step.

---

## Using Local AI as an AI Processor Model

Once a Local AI credential is connected, its loaded model becomes selectable directly inside **AI Processor** nodes — the model list is fetched live from your server, and you can set a default **Temperature** alongside it, without needing to configure a separate action.

---

## Response Format

The **Response Format** option (on Create Chat Completion) lets you request a structured JSON reply instead of free-form text, following the same convention as OpenAI's Structured Outputs.

:::info
Support for `response_format` varies by runtime. llama.cpp, vLLM, and LM Studio generally support JSON-schema-constrained decoding; check your specific server's documentation to confirm before relying on it.
:::

**Reference format:**

```json
{
  "type": "json_schema",
  "json_schema": {
    "name": "product_response",
    "strict": true,
    "schema": {
      "type": "object",
      "properties": {
        "name": { "type": "string" },
        "price": { "type": "number" },
        "in_stock": { "type": "boolean" }
      },
      "required": ["name", "price", "in_stock"],
      "additionalProperties": false
    }
  }
}
```

Key rules:

- `type` is set to `"json_schema"` at the top level; `name`, `strict`, and `schema` are all nested inside `json_schema`.
- Every `object` needs `properties`, `required`, and `additionalProperties: false`.
- Every `array` needs an `items` block describing a single element.
- Every field needs a `type`.

If you only need valid JSON without enforcing an exact structure, check whether your server supports a simpler JSON mode instead of a full schema.

---

## Support

Need help? Contact our support team at [support@appse.ai](mailto:support@appse.ai)
