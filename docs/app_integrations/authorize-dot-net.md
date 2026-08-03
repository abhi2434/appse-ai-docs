---
title: "Authorize.Net"
description: Step-by-step guide to set up Authorize.Net credentials and automate payment reporting workflows in appse ai.
slug: /app-integrations/authorize-dot-net/
---

**Authorize.Net** is a payment gateway that enables businesses to accept, process, and manage online payments. With **appse ai**, you can connect your Authorize.Net merchant account to automate settlement reporting workflows — monitor newly settled batches and retrieve transaction details for reconciliation, accounting, and downstream system updates.

---

## Key Features

- **Settlement Monitoring** — Detect newly settled payment batches within a date range.
- **Transaction Reporting** — Retrieve transaction lists and detailed transaction records from settled batches.
- **Secure Authentication** — Connect using your merchant API Login ID and Transaction Key.

---

## Setup Credential

To get started with Authorize.Net integration, set up credentials in appse ai.

1. Log in to **appse ai**
2. Navigate to **Credentials**

<img src="/img/credentials/authorize-dot-net/navigate-to-credentials.png" alt="Navigate to Credentials" width="700"/>

3. Click on **Add credentials**

<img src="/img/credentials/authorize-dot-net/add-credential.png" alt="Add Credentials" width="700"/>

4. Search for **Authorize.Net**
5. Select it to open the credential form.

<img src="/img/credentials/authorize-dot-net/select-app.png" alt="Select App" width="700" height="550"/>

:::note
You can also create a credential while building a workflow by clicking **Create a new credential**.
:::

### Required Fields

| Field            | Description                                                                 |
| ---------------- | --------------------------------------------------------------------------- |
| Connection Name  | A name to help you identify this Authorize.Net connection in appse ai.     |
| Environment      | Select **Sandbox** for testing or **Production** for live payment processing. |
| API Login ID     | Your merchant API Login ID from the Authorize.Net Merchant Interface.       |
| Transaction Key  | Your merchant Transaction Key from the Authorize.Net Merchant Interface.    |

### Authorize.Net Environments

| Environment | Merchant Interface URL              | API Base URL                      |
| ----------- | ----------------------------------- | --------------------------------- |
| Sandbox     | `https://sandbox.authorize.net/`    | `https://apitest.authorize.net/`  |
| Production  | `https://account.authorize.net/`    | `https://api.authorize.net/`      |

:::note
The **Environment** field in appse ai maps to the API base URL. Your API Login ID and Transaction Key must come from the matching environment.
:::
---

## Step-by-Step Guide

### Step 1. Sign in to the Authorize.Net Merchant Interface

Open the Merchant Interface for the environment you want to connect:

- **Sandbox:** [https://sandbox.authorize.net/](https://sandbox.authorize.net/)
- **Production:** [https://account.authorize.net/](https://account.authorize.net/)

Sign in with your merchant account credentials.

<img src="/img/credentials/authorize-dot-net/login-to-authorize-dot-net.png" alt="Login to Authorize Dot Net" width="700"/>

:::note
If you do not have a sandbox account, create one from the [Authorize.Net Developer Center](https://developer.authorize.net/hello_world/sandbox.html) before testing your integration.
:::

### Step 2. Open API Credentials and Keys

1. From the main toolbar, select **Account**.

<img src="/img/credentials/authorize-dot-net/navigate-to-account.png" alt="Navigate to Account" width="700"/>

2. Go to **Account and API Settings**.

<img src="/img/credentials/authorize-dot-net/navigate-to-account-and-api-settings.png" alt="Navigate to Account and API Settings" width="700"/>

3. Under **Security Settings** select **API Credentials and Keys**.

<img src="/img/credentials/authorize-dot-net/select-api-credentials-and-keys.png" alt="Navigate to API Credentials and Keys" width="700"/>

This page displays your **API Login ID** and lets you generate a **Transaction Key**.

:::caution
Your API Login ID and Transaction Key are not the same as your Merchant Interface login username and password. They are used exclusively for API authentication.
:::

### Step 3. Copy Your API Login ID

On the **API Credentials and Keys** page, locate your **API Login ID**.

- Copy the API Login ID and keep it in a secure location.
- You can view the API Login ID at any time from this page.

<img src="/img/credentials/authorize-dot-net/api-login-id.png" alt="Authorize API Login Id" width="700"/>

### Step 4. Generate a Transaction Key

1. Click **New Transaction Key** (or **Generate New Transaction Key**).

<img src="/img/credentials/authorize-dot-net/click-generate-transaction-key.png" alt="Generate Transaction Key" width="700"/>

2. Complete any verification steps prompted by Authorize.Net (for example, a one-time passcode or secret answer).
3. Copy the **Transaction Key** immediately — it is shown only once.

:::note
If you already have a Transaction Key and need a new one (for example, the previous key was lost or compromised), click **Generate New Transaction Key** again. When prompted, choose whether to disable the previous Transaction Key immediately or let it expire after 24 hours.
:::

:::caution
Store your Transaction Key securely. If you lose it, you must generate a new one from the Merchant Interface.
:::

### Step 5. Add the Credential in appse ai

Return to the Authorize.Net credential form in appse ai and enter the following:

1. **Connection Name** — For example, `Authorize.Net Sandbox` or `Authorize.Net Production`.
2. **Environment** — Select **Sandbox** or **Production** to match the credentials you copied.
3. **API Login ID** — Paste the API Login ID from Step 3.
4. **Transaction Key** — Paste the Transaction Key from Step 4.

<img src="/img/credentials/authorize-dot-net/provide-credential.png" alt="Provide Credential" width="700" height="550"/>

5. Click **Save** to validate and store the credential.

<img src="/img/credentials/authorize-dot-net/click-button-to-authorize.png" alt="Authorize Credential" width="700" height="550"/>

If the connection is successful, the credential shows as validated and is ready to use in your workflows.

---

## Triggers

Here is the list of available triggers for Authorize.Net:

| Trigger                      | Description                                                                 |
| ---------------------------- | --------------------------------------------------------------------------- |
| **On new settled batch list** | Returns settled batches within a specified date range, including optional transaction statistics per batch. Use this to detect new settlement activity and kick off downstream reconciliation workflows. |

### Trigger Parameters

| Parameter               | Description                                                                 |
| ----------------------- | --------------------------------------------------------------------------- |
| **First Settlement Date** | Start of the settlement date range in UTC ISO 8601 format (for example, `2024-01-01T00:00:00Z`). |

---

## Actions

Here is the list of available actions for Authorize.Net:

| Action                     | Description                                                                 |
| -------------------------- | --------------------------------------------------------------------------- |
| **Get Transaction List**   | Returns summary details for each transaction in a settled batch, including transaction ID, settlement amount, and submit time. |
| **Get Transaction Details** | Retrieves detailed information about a specific transaction, including transaction ID, reference transaction ID, fee amount, and merchant-defined user fields. |

### Action Parameters

| Action                     | Parameter        | Description                                                                 |
| -------------------------- | ---------------- | --------------------------------------------------------------------------- |
| **Get Transaction List**   | **Batch ID**     | The settlement batch ID returned from the **On new settled batch list** trigger or a prior batch lookup. |
| **Get Transaction Details** | **Transaction ID** | The Authorize.Net transaction ID (`transId`) from a transaction list, settlement report, or prior workflow step. |

### Typical Workflow Pattern

A common reporting workflow looks like this:

1. **On new settled batch list** — Poll for newly settled batches since the last run.
2. **Get Transaction List** — Pass the `batchId` from each settled batch to retrieve its transactions.
3. **Get Transaction Details** — Pass each `transId` to fetch full transaction data for accounting, ERP sync, or notifications.

---

## Support

Need help? Contact the support team at [support@appse.ai](mailto:support@appse.ai)
