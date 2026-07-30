---
title: "Amazon Seller Central"
slug: /app-integrations/amazon-seller-central/
---

Amazon Seller Central is the marketplace for managing your Amazon selling account. It allows you to list products, manage inventory, fulfill orders, and track your business performance. Integrating Amazon Seller Central into appse ai enables you to automate order management, feed submissions, financial reporting, and more — directly within your AI-powered workflows.

---

## Set Up Credential

:::info

Before you create a credential for Amazon Seller Central using appse ai, ensure you have an Amazon Seller Central account and have registered as a developer (or authorized a developer app). You can register at the [Amazon SP-API Developer Registration page](https://developer.amazonservices.com/).

:::

### Required Fields

| Field | Description |
|---|---|
| **Connection Name** | A label to identify this credential within appse ai. |
| **Marketplace Region** | The Amazon region your seller account operates in (e.g., North America, Europe, Far East). |

:::note
You will also need your Amazon Seller Central login credentials and access to your registered two-step verification device during the authorization flow.
:::

### Step-by-Step Guide

#### 1. Open the Credential Form

Click **Select a Credential** and choose **Amazon Seller Central** from the application list.

<img src="/img/credentials/amazon-seller-central/create-new-credential-appseai-amazon-seller-central.png" alt="appse ai Amazon Seller Central Connection Name" width="700"/>

This opens the Amazon Seller Central credential form. Add your **Connection Name**.

#### 2. Select Your Region / Marketplace

Select the correct Amazon marketplace region for your seller account (e.g., North America, Europe, Far East). Choosing the wrong region will prevent appse ai from accessing your account data.

<img src="/img/credentials/amazon-seller-central/select-region-seller-central.png" alt="appse ai Amazon Seller Central region and marketplace selector" width="700"/>

#### 3. Authorize the App and Complete Two-Step Verification

Log in to your Amazon Seller Central account and complete the two-step verification process.

Follow the Log in with Amazon (LWA) flow to authorize your application against your Seller account. LWA is Amazon's OAuth-based authorization system used to grant appse ai access to your Seller account.

Enter your Amazon account password to proceed.

<img src="/img/credentials/amazon-seller-central/enter-password-seller-central.png" alt="appse ai Amazon Seller Central enter password" width="700"/>

Enter the one-time password (OTP) sent to your registered device.

<img src="/img/credentials/amazon-seller-central/enter-otp-seller-central.png" alt="appse ai Amazon Seller Central enter OTP" width="700"/>

Select your country from the dropdown.

<img src="/img/credentials/amazon-seller-central/select-country-seller-central.png" alt="appse ai Amazon Seller Central select country" width="700"/>

Click **Confirm** to complete the verification process.

<img src="/img/credentials/amazon-seller-central/click-confirm-seller-central.png" alt="appse ai Amazon Seller Central click confirm" width="700"/>

Click **Save and Authorize** in appse ai to complete the connection.

<img src="/img/credentials/amazon-seller-central/click-save-authorize-appseai-amazon-seller-central.png" alt="appse ai Amazon Seller Central save and authorize button" width="700"/>

Once the verification is successfully completed, your credentials will be validated and saved within appse ai. You will see a confirmation message once the connection is successful.

:::tip
If the authorization flow fails, ensure your Amazon account has Seller Central access and that your developer app has been approved for SP-API.
:::

---

## Triggers and Actions

Here is a list of the available triggers and actions for Amazon Seller Central:

### Triggers

All triggers below are **polling-based** — appse ai periodically checks Amazon for new or changed data since the last run.

**Orders**

- **New Orders Search (All Details)** — Initiates the workflow for new or updated orders and returns full order, buyer, shipping, and item details in a single event.

**Feeds & Reports**

- **Feed Created or Updated** — Initiates the workflow when a feed is submitted or its processing status changes. Useful for monitoring the outcome of bulk data uploads in real time.
- **New Report** — Initiates the workflow when a new report matching your filters is generated.

**Inventory & Shipments (FBA)**

- **Inbound Shipment Created** — Initiates the workflow when a new FBA inbound shipment is created, for tracking shipped vs. received quantities.
- **Inbound Shipment Updated** — Initiates the workflow when an FBA inbound shipment is created or updated, for tracking consignment status and mismatches.
- **Inventory Level Changed** — Initiates the workflow when FBA inventory levels change for a SKU, useful for syncing stock to an ERP, WMS, or storefront.
- **Inventory Reconciliation** — Initiates the workflow with a full FBA inventory quantity breakdown, useful for reconciling stock discrepancies.

**Financial Events**

- **New Sales Order Financial Event** — Initiates the workflow when a new sales order financial event is recorded in your account, such as a charge, refund, or fee associated with a completed order.
- **New Return Financial Event** — Initiates the workflow when a return-related financial event is logged, such as a customer refund or return adjustment that impacts your account balance.

### Actions

**Orders**

| Action | Description |
|---|---|
| **Get Order** | Retrieves a single order by its **Order ID**. |
| **Get Order Metrics** | Retrieves aggregated sales metrics (units, orders, average price, total sales) for a marketplace over a date range and granularity. |

**Feeds**

| Action | Description |
|---|---|
| **Submit Feed Data** | A guided, multi-step action that submits a feed for a price update, inventory update, or shipment confirmation, then pairs with **Get Feed Result** to confirm processing. Required fields vary by **Feed Type**. |
| **Get Feed** | Retrieves the details and current processing status of a specific feed. Requires a **Feed ID**. |
| **Get Feed Document** | Downloads and decodes the contents of a processed feed document. Requires a **Feed Document ID**. |
| **Get Feed Result** | Checks the processing status/result of a submitted feed. Requires a **Feed ID** and **Feed Type**. |

**Reports**

| Action | Description |
|---|---|
| **Get Report** | Retrieves the details and status of a specific report. Requires a **Report ID**. |

**Catalog & Listings**

| Action | Description |
|---|---|
| [**Create or Replace Listings Item**](/app-integrations/amazon-seller-central-create-or-replace-listings-item/) | Creates a new listing or fully replaces an existing one. Requires **Seller ID**, **SKU**, **Marketplace**, **Product Type**, and the item's **Attributes**. See the [detailed guide](/app-integrations/amazon-seller-central-create-or-replace-listings-item/) for request/response examples. |
| **Update Item Price** | Partially updates a listing's price without submitting a feed. Requires **Seller ID**, **SKU**, **Marketplace**, **Product Type**, **Currency**, and **Price**. |
| **Update Item Inventory** | Updates a listing's available inventory quantity synchronously, without submitting a feed. Requires **Seller ID**, **SKU**, **Marketplace**, **Product Type**, **Fulfillment Channel Code**, and **Quantity**. |

**Inventory & Fulfillment (FBA)**

| Action | Description |
|---|---|
| **Get FBA Inventory Summaries** | Retrieves FBA inventory summaries, including fulfillable, reserved, and researching quantities. Requires a **Granularity Type**, **Granularity ID**, and **Marketplace**. |
| **Get Shipment Items** | Retrieves the items included in a specific inbound shipment. Requires a **Shipment ID** and **Marketplace**. |

---

## Support

Need help? Contact our support team at [hello@appse.ai](mailto:hello@appse.ai)
