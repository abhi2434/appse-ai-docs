---
title: "Pinecone"
slug: /app-integrations/pinecone/
description: Step-by-step guide to set up Pinecone credentials and use available actions in workflows within appse ai.
---

Pinecone is a vector database designed for building scalable AI applications. It allows you to store, index, and search high-dimensional embeddings efficiently, making it ideal for semantic search and retrieval-augmented generation (RAG) use cases.

## Set Up Credential

:::note  
To use the Pinecone API, you need a Pinecone account and an active project with an index created.  
:::

### Required Fields

You'll be asked to fill in the following details:

| Field           | Description                                      |
| --------------- | ------------------------------------------------ |
| Connection Name | A name to help you identify this connection      |
| API Key         | Your Pinecone API Key                            |
| Base URL        | The index host URL from the Pinecone console (for example, `https://your-index-name-xxxx.svc.pinecone.io`) |

### Step-by-Step Guide

#### 1. Open the Credential Form

Click **Select a Credential** and choose **Pinecone** from the application list.

<img src="/img/credentials/pinecone/pinecone-create-new-connection.png" alt="appse ai Pinecone Select Credential" width="700"/>

This opens the Pinecone credential form. Add your **Connection Name**.

<img src="/img/credentials/pinecone/pinecone-connection-name.png" alt="appse ai Pinecone Connection Name" width="700"/>

#### 2. Sign In / Create an Account

Go to [https://www.pinecone.io](https://www.pinecone.io) and sign in or sign up. You can use Google sign-in for faster access.

#### 3. Open the Pinecone Console

Once logged in, open the [Pinecone Console](https://app.pinecone.io).

#### 4. Navigate to API Keys

From the left sidebar, click on **API Keys**.

<img src="/img/credentials/pinecone/api-keys.png" alt="appse ai Pinecone API Keys" width="700"/>

#### 5. Create a New API Key

Click **Create API Key**, give it a name, and click **Create**.

<img src="/img/credentials/pinecone/create-api-key.png" alt="appse ai Pinecone Create API Key" width="700"/>

#### 6. Copy Your API Key

Copy the API key immediately after creation.

:::caution
You will **not be able to see this key again** after closing the dialog. Store it somewhere safe before proceeding.
:::

<img src="/img/credentials/pinecone/copy-api-key.png" alt="appse ai Pinecone Copy API Key" width="700"/>

#### 7. Create an Index (if not already created)

Go to the **Indexes** section and click **Create Index**. Provide:

- Index name
- Dimension (based on your embedding model)
- Metric (cosine, dotproduct, euclidean)
- Cloud and region (e.g. AWS, us-west-2)

<img src="/img/credentials/pinecone/create-index.png" alt="appse ai Pinecone Create Index" width="700"/>

#### 8. Paste into appse ai

Return to the appse ai credential form:

- Copy your **API Key** from Step 6 and paste it into the **API Key** field.
- Go to **Indexes** → click on your index → copy the **Index URL** (e.g. `https://your-index-name-xxxx.svc.pinecone.io`) and paste it into the **Base URL** field.

Click **Save**. Your Pinecone credential should now be connected.

<img src="/img/credentials/pinecone/add-credentials.png" alt="appse ai Pinecone Add Credentials" width="700"/>

---

## Triggers and Actions

### Actions

| Action | Description | Pinecone API |
| ------ | ----------- | ------------ |
| **Upsert Documents** | Insert a new record or update an existing record by ID. Pinecone embeds the document text automatically. | [Upsert text](https://docs.pinecone.io/reference/api/2025-10/data-plane/upsert_records) |
| **Search** | Run semantic search using a natural-language query and return the most similar records. | [Search with text](https://docs.pinecone.io/reference/api/2025-10/data-plane/search_records) |

---

## 1. Upsert Documents

Inserts a new document into a namespace or updates an existing document if the same **Document Identifier** (`_id`) already exists. Pinecone converts the **Document Text** into a vector using the embedding model configured on your index — you do not need to generate or pass embeddings yourself.

### Configuration Fields

| Field | Required | Default | Description |
| ----- | -------- | ------- | ----------- |
| **Index Namespace** | Yes | `__default__` | The namespace inside your index where the record is stored. Use `__default__` for the default namespace, or enter a custom name to partition data. |
| **Document Identifier** (`_id`) | Yes | — | A unique ID for this record. If a record with the same ID already exists in the namespace, it is replaced. Use stable IDs when you plan to update content later (for example, `article-1042` or a database primary key). |
| **Document Text** | Yes | — | The text content to store and embed. Pinecone converts this text into a vector using the index's integrated embedding model. Keep chunks focused — shorter, coherent passages generally produce better search results than very long documents. |
| **Api Version** | Yes | `2025-10` | The Pinecone API version header (`X-Pinecone-Api-Version`). Leave at `2025-10` unless Pinecone documentation specifies a newer version for your use case. |

### Example

| Field | Example value |
| ----- | ------------- |
| Index Namespace | `__default__` |
| Document Identifier | `rec1` |
| Document Text | `Apples are a great source of dietary fiber, which supports digestion and helps maintain a healthy gut.` |
| Api Version | `2025-10` |

### Workflow Example

<img src="/img/credentials/pinecone/pinecone1.png" alt="appse ai Pinecone upsert record configuration" width="700"/>

---

## 2. Search

Performs semantic search over records in a namespace using a natural-language **Text Query**. Pinecone embeds the query text with the same model used by the index, finds the nearest matching records, and returns them ranked by similarity score.

### Configuration Fields

| Field | Required | Default | Description |
| ----- | -------- | ------- | ----------- |
| **Index Namespace** | Yes | `__default__` | The namespace to search within. Must match the namespace where records were upserted. Searching `__default__` will not return records stored in a custom namespace. |
| **Text Query** | Yes | — | The natural-language question or phrase to search for. Pinecone embeds this text and compares it against stored records. Use clear, descriptive queries (for example, `disease prevention` or `how do I reset my password`). |
| **Top K** | Yes | `1` | The maximum number of similar records to return. For example, `4` returns up to four hits ordered by relevance. Increase this when you need broader context for RAG; use `1` when you only need the single best match. |

### Example

| Field | Example value |
| ----- | ------------- |
| Index Namespace | `__default__` |
| Text Query | `Disease prevention` |
| Top K | `4` |

### Workflow Example

<img src="/img/credentials/pinecone/pinecone2.png" alt="appse ai Pinecone search record configuration" width="700"/>

<img src="/img/credentials/pinecone/pinecone3.png" alt="appse ai Pinecone search record response" width="700"/>
---

## Support

Need help? Contact the support team at [support@appse.ai](mailto:support@appse.ai)