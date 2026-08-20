---
title: "SparkLayer"
description: Step-by-step guide to set up SparkLayer credentials and automate B2B commerce workflows in appse ai.
slug: /app-integrations/sparklayer/
---

**SparkLayer** is a B2B commerce platform that adds wholesale ordering, customer-specific pricing, quotes, and sales agent tools on top of an existing storefront. With **appse ai**, you can connect your SparkLayer site to automate B2B data flows.

---

## Setup Credential

To get started with the SparkLayer integration, set up credentials in appse ai.

1. Log in to **appse ai**.
2. Navigate to **Credentials**.
3. Click on **Add credentials**.
4. Search for **SparkLayer**.
5. Select it to open the credential form.

### Required Fields

| Field           | Description                                                                                   |
| --------------- | --------------------------------------------------------------------------------------------- |
| Connection Name | A name to help you identify this SparkLayer connection inside the appse ai platform.           |
| Environment     | Select **Production** for your live SparkLayer site or **Test** for your test site.            |
| Site ID         | The unique identifier of your SparkLayer site, found in the SparkLayer Dashboard.              |
| Client ID       | The Client ID of the API key generated in the SparkLayer Dashboard.                            |
| Client Secret   | The Client Secret issued alongside the Client ID. Shown once at creation — store it securely.  |

### SparkLayer Environments

| Environment | Dashboard / API Base URL         |
| ----------- | -------------------------------- |
| Production  | `https://app.sparklayer.io`      |
| Test        | `https://test.app.sparklayer.io` |

:::info
The **Environment** field determines which SparkLayer base URL appse ai calls. Your Site ID, Client ID, and Client Secret must all come from the **same** environment — test credentials will not authenticate against production, and vice versa.
:::

---

## Step-by-Step Guide

### Step 1. Sign in to the SparkLayer Dashboard

Open the SparkLayer Dashboard for the environment you want to connect:

- [Production](https://app.sparklayer.io)
- [Test](https://test.app.sparklayer.io)

Sign in with a SparkLayer user that has administrator access, so you can view account settings and generate API keys.

### Step 2. Copy Your Site ID

1. Click on Profile section and select Account option from the SparkLayer Dashboard.
2. Locate the **Site ID** field.
3. Copy the value and keep it available for the appse ai credential form.

### Step 3. Generate an API Key

1. Go to Settings → API in the SparkLayer Dashboard.
2. Click to create a **new API key**.
3. Give the key a recognisable name, for example `appse ai integration`.
4. Save the key to generate the credentials.

### Step 4. Copy the Client ID and Client Secret

After the API key is created, SparkLayer displays:

- **Client ID**
- **Client Secret**

Copy both values immediately and store them securely.

:::caution
The **Client Secret** is shown only at the time of creation. If it is lost, generate a new API key in SparkLayer and update the credential in appse ai.
:::

### Step 5. Add the Credential in appse ai

Return to the SparkLayer credential form in appse ai and enter the following:

1. **Connection Name** — For example, `SparkLayer Production` or `SparkLayer Test`.
2. **Environment** — Select **Production** or **Test** to match the site the credentials belong to.
3. **Site ID** — Paste the Site ID from Step 2.
4. **Client ID** — Paste the Client ID from Step 4.
5. **Client Secret** — Paste the Client Secret from Step 4.
6. Click **Save** to validate and store the credential.

If the connection is successful, the credential is listed  with a green tick and is ready to use in your workflows.

---

## Actions

Here is the list of available actions for SparkLayer:

| Action                                    | Description                                                                                                    |
| ----------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| **Update pricing for multiple price lists** | Updates pricing across several price lists in a single call, useful for bulk price rollouts from an ERP or PIM. |
| **Create price list**                     | Creates a new price list in SparkLayer for a customer segment, region, or currency.                              |
| **Get price list by slug**                | Retrieves a single price list using its unique slug identifier.                                                  |
| **Get price lists (v2)**                  | Returns the price lists configured on your SparkLayer site, with support for the `page_size`, `order_by`, and `source` query parameters so you can page, sort, and filter the results. |
| **Get price lists (v1)**                  | Returns all price lists configured on your SparkLayer site as a single list.|
| **Update a price list**                   | Updates the details and settings of an existing price list.                                                      |
| **Update pricing by price list**          | Updates the prices of products within a specific price list.                                                     |
| **Update pricing by SKU**                 | Updates the pricing of a specific SKU wherever it appears in your price lists.                                   |

---

## Support

Need help? Contact the support team at [support@appse.ai](mailto:support@appse.ai)
