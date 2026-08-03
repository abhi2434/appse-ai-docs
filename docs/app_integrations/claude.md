---
title: "Claude"
slug: /app-integrations/claude/
---

Claude is Anthropic's family of advanced AI models designed for safety, intelligence, and helpfulness. Integrating Claude into appse ai enables you to build powerful agents and workflows with state-of-the-art reasoning, text generation, and real-time web capabilities.

---

## Set Up Credential

:::info

Before you create a credential for Claude using appse ai, ensure you have an Anthropic account and have generated an API key from the Anthropic Console.

:::

### Required Fields

You'll be asked to fill in the following details:

| Field           | Description                                        |
| --------------- | -------------------------------------------------- |
| Connection Name | A name to help you identify this connection        |
| API Key         | Your API Key from the Anthropic Console            |

---

### Step-by-Step Guide

#### 1. Open the Credential Form

Click **Select a Credential** and choose **Claude** from the application list.

<img src="/img/credentials/claude/Select-claude-credential-1.png" alt="appse ai Claude Select Credential" width="700"/>

<br/>

This opens the Claude credential form. Add your **Connection Name**.

<img src="/img/credentials/claude/claude-connection-name.png" alt="appse ai Claude Connection Name" width="700"/>

#### 2. Sign In to the Anthropic Console

Go to [Anthropic Console](https://console.anthropic.com/) and sign in with your Anthropic account.

#### 3. Create an API Key

Navigate to the **Dashboard** section from the left sidebar. Click on **"Get API Key"**.

<img src="/img/credentials/claude/Get-Claud-Api-Key.png" alt="appse ai Claude Get API Key" width="700"/>

<br/>

Click the **Create Key** button.

<img src="/img/credentials/claude/click-create-new-api-key-claude.png" alt="appse ai Claude Click Create Key" width="700"/>

<br/>

<img src="/img/credentials/claude/Create-new-api-key.png" alt="appse ai Claude Create New Key" width="700"/>

#### 4. Copy and Store Your API Key

Once generated, copy the API key string.

<img src="/img/credentials/claude/copy-api-key-claude.png" alt="appse ai Claude Copy API Key" width="700"/>

#### 5. Paste API Key in appse ai

Return to the appse ai credential form. Paste the copied API key into the **API Key** field and click **"Save"** to store and validate your credential.

<img src="/img/credentials/claude/claude-crediential-api-key-paste.png" alt="appse ai Claude Save Credential" width="700"/>

<br/>

:::warning

Keep your API key secure. Do not share it publicly. Anthropic does not display the key again after creation, so store it somewhere safe immediately.

:::

---

## Triggers and Actions

Here is a list of the available actions for Claude:

### Actions

- **Generate Text Content** — Generate text content using Claude. Default model: `claude-sonnet-4-6`.

- **Web Search** — Search the web in real-time using Claude's built-in web search tool. Claude browses the internet, reads the results, and returns a summarized answer to your query. Available models: `claude-haiku-4-5`, `claude-sonnet-4-6`, `claude-opus-4-6`. Default model: `claude-sonnet-4-6`.

- **Web Fetch From Specified Web Page** — Fetch and extract content from a URL using Claude's built-in web fetch tool. Claude retrieves and summarizes the page content. Default model: `claude-sonnet-4-6`.

---

## Support

Need help? Contact our support team at [hello@appse.ai](mailto:hello@appse.ai)