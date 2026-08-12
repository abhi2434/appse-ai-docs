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
- **New Order Created** — Initiates the workflow when a new order is created for the selected marketplace, using the legacy Orders v0 API.
- **New Orders Created** — Initiates the workflow when new orders are created after a specified date and time, using the newer Orders 2026-01-01 API.
- **Order Updated** — Initiates the workflow when an existing order is updated — a status change, shipment, or cancellation.

**Feeds & Reports**

- **Feed Created or Updated** — Initiates the workflow when a submitted feed finishes processing and its status becomes **Done** or **Fatal**. Useful for monitoring the outcome of bulk data uploads in real time.
- **New Report** — Initiates the workflow when a new report matching your filters is generated.
- **Report Processing Completed** — Initiates the workflow when a report finishes processing and its status becomes **Done**. Poll for completed reports of a specific type.

**Inventory & Shipments (FBA)**

- **Inbound Shipment Created** — Initiates the workflow when a new FBA inbound shipment is created, for tracking shipped vs. received quantities.
- **Inbound Shipment Updated** — Initiates the workflow when an FBA inbound shipment is created or updated, for tracking consignment status and mismatches.
- **Inventory Level Changed** — Initiates the workflow when FBA inventory levels change for a SKU, useful for syncing stock to an ERP, WMS, or storefront.
- **Inventory Reconciliation** — Initiates the workflow with a full FBA inventory quantity breakdown, useful for reconciling stock discrepancies.
- **Low Inventory Alert** — Initiates the workflow with FBA inventory summaries for a marketplace. Pair with a workflow condition to detect low stock, out-of-stock SKUs, or inventory changes.

**Financial Events**

- **New Sales Order Financial Event** — Initiates the workflow when a new shipment-related charge or fee is posted against a completed order.
- **New Return Financial Event** — Initiates the workflow when a return-related financial event is logged, such as a customer refund or return adjustment that impacts your account balance.

**Vendor (Wholesale)**

- **Vendor Purchase Order Created** — Initiates the workflow when Amazon creates a new wholesale purchase order for a vendor, so downstream steps can acknowledge the PO, plan fulfillment, or sync order details to an ERP or WMS.

### Actions

**Orders**

| Action | Description |
|---|---|
| **Get Order** | Retrieves a single order by its **Order ID**. |
| **Get Orders** | Retrieves orders created or updated in a time frame, including both pending and shipped orders. Requires a **Marketplace**, **Last Updated After** date, and **Max Results Per Page**. |
| **Get Order Address** | Retrieves the shipping address for an order. Requires an **Order ID**. Restricted operation — requires a Restricted Data Token (RDT) for PII access. |
| **Get Order Buyer Info** | Retrieves buyer information for an order. Requires an **Order ID**. Restricted operation — requires an RDT. |
| **Get Order Items** | Retrieves detailed item information for an order. Requires an **Order ID**. |
| **Get Order Items Buyer Info** | Retrieves buyer information for the items in an order. Requires an **Order ID** and a **Restricted Data Token (RDT)**. |
| **Get Order Metrics** | Retrieves aggregated sales metrics (units, orders, average price, total sales) for a marketplace over a date range and granularity. |

**Feeds**

| Action | Description |
|---|---|
| **Submit Feed Data** | A guided, multi-step action that submits a feed for a price update, inventory update, or shipment confirmation, then pairs with **Get Feed Result** to confirm processing. Required fields vary by **Feed Type**. |
| **Create Feed** | Creates a feed from a previously uploaded feed document. Requires **Feed Type**, **Marketplace**, and **Input Feed Document ID**. |
| **Create Feed Document** | Creates a feed document and returns a presigned upload URL and encryption key for the feed content. Requires a **Content Type**. |
| **Cancel Feed** | Cancels a feed that hasn't started processing yet. Requires a **Feed ID**. |
| **Get Feed** | Retrieves the details and current processing status of a specific feed. Requires a **Feed ID**. |
| **Get Feeds** | Retrieves feed details for feeds matching the filters you specify. Requires **Feed Types** and **Marketplace**. |
| **Get Feed Document** | Downloads and decodes the contents of a processed feed document. Requires a **Feed Document ID**. |
| **Get Feed Result** | Checks the processing status/result of a submitted feed. Requires a **Feed ID** and **Feed Type**. |

**Reports**

| Action | Description |
|---|---|
| **Get Report** | Retrieves the details and status of a specific report. Requires a **Report ID**. |
| **Create Report** | Creates a report request. Requires a **Report Type** and **Marketplace**. |
| **Cancel Report** | Cancels a report that hasn't started processing yet. Requires a **Report ID**. |
| **Get Reports** | Retrieves report details for reports matching the filters you specify. Requires **Report Types**. |
| **Get Report Document** | Retrieves the download URL for a processed report document. Requires a **Report Document ID**. |
| **Create SP Advertising Report** | Creates a Sponsored Products advertised-product report (cost, impressions, clicks, and 14-day attributed sales by ASIN) via the Amazon Advertising API. Requires a **Profile ID**, **Region**, **Start Date**, and **End Date**. |

**Catalog & Listings**

| Action | Description |
|---|---|
| [**Create or Replace Listings Item**](/app-integrations/amazon-seller-central-create-or-replace-listings-item/) | Creates a new listing or fully replaces an existing one. Requires **Seller ID**, **SKU**, **Marketplace**, **Product Type**, **Requirements**, and the item's **Attributes**. See the [detailed guide](/app-integrations/amazon-seller-central-create-or-replace-listings-item/) for request/response examples. |
| **Update Item Price** | Partially updates a listing's price without submitting a feed. Requires **Seller ID**, **SKU**, **Marketplace**, **Product Type**, **Currency**, and **Price**. |
| **Update Item Inventory** | Updates a listing's available inventory quantity synchronously, without submitting a feed. Requires **Seller ID**, **SKU**, **Marketplace**, **Product Type**, **Fulfillment Channel Code**, and **Quantity**. |
| **Get Listings Item** | Retrieves details about a listings item. Requires **Seller ID**, **SKU**, and **Marketplace**. |
| **Delete Listings Item** | Removes a listings item from a marketplace. Requires **Seller ID**, **SKU**, and **Marketplace**. |
| **Get Catalog Item** | Retrieves Amazon catalog details for an item by ASIN. Requires an **ASIN** and **Marketplace**. |
| **Search Catalog Items** | Searches the Amazon catalog by identifier or keyword. Requires a **Marketplace**. |
| **Get Product Type Definition** | Retrieves the attribute and data requirements for a product type in a marketplace. Requires a **Product Type** and **Marketplace**. |
| **Search Product Types** | Finds valid Amazon product type names for use with the listings actions. Requires a **Marketplace**. |

**Pricing & Fees**

| Action | Description |
|---|---|
| **Get Pricing** | Retrieves pricing information for your offer listings by seller SKU or ASIN. Requires a **Marketplace** and **Item Type**. |
| **Get Competitive Pricing** | Retrieves competitive pricing information for your offer listings by ASIN or seller SKU. Requires a **Marketplace** and **Item Type**. |
| **Get Item Offers** | Retrieves the lowest priced offers for a single item by ASIN. Requires an **ASIN**, **Marketplace**, and **Item Condition**. |
| **Get Listing Offers** | Retrieves the lowest priced offers for a single SKU listing. Requires a **Seller SKU**, **Marketplace**, and **Item Condition**. |
| **Get Product Fees Estimate** | Estimates Amazon fees and additional taxes for an item, by ASIN or Seller SKU. Requires an **Identifier Type** and **Fees Estimate Request**. |

**Inventory & Fulfillment (FBA)**

| Action | Description |
|---|---|
| **Get FBA Inventory Summaries** | Retrieves FBA inventory summaries, including fulfillable, reserved, and researching quantities. Requires a **Granularity Type**, **Granularity ID**, and **Marketplace**. |
| **Get Shipments** | Retrieves inbound shipments matching a status, ID, date range, or marketplace filter you specify. Requires a **Marketplace**. |
| **Get Shipment Items** | Retrieves the items included in a specific inbound shipment. Requires a **Shipment ID** and **Marketplace**. |
| **Create Inbound Shipment Plan** | Creates an inbound shipment plan for items you intend to ship to Amazon fulfillment centers. Requires a **Ship From Address**, **Shipment Plan Request Items**, and **Label Prep Preference**. |
| **Update Inbound Shipment** | Updates items or header information on an inbound shipment before it's received. Requires a **Shipment ID**, **Shipment Header**, **Shipment Items**, and **Marketplace**. |
| **Confirm Shipment** | Confirms a shipment after purchasing a shipping label via the Amazon Shipping API. Requires a **Shipment ID**. |

**Financial Events**

| Action | Description |
|---|---|
| **Get Financial Events** | Retrieves financial events for a date range, for automated financial reporting and reconciliation. Requires **Posted After**, **Posted Before**, and a **Limit**. |
| **List Financial Event Groups** | Retrieves financial event groups for a given date range. |
| **List Financial Events By Group** | Retrieves all financial events for a specific financial event group. Requires an **Event Group ID**. |
| **List Financial Events By Order** | Retrieves all financial events for a specific order. Requires an **Order ID**. |

**Notifications: Destinations & Subscriptions**

| Action | Description |
|---|---|
| **Create Notification Destination** | Creates a destination (an Amazon SQS queue or EventBridge event bus) to receive notifications. Requires a **Destination Name** and **Resource Specification**. |
| **Get Notification Destinations** | Retrieves information about all configured notification destinations. |
| **Delete Notification Destination** | Deletes a destination and all subscriptions associated with it. Requires a **Destination ID**. |
| **Create Notification Subscription** | Subscribes a destination to a notification type. Requires a **Notification Type**, **Payload Version**, and **Destination ID**. |
| **Get Notification Subscription** | Retrieves subscription information for a notification type. Requires a **Notification Type**. |
| **Delete Notification Subscription** | Deletes a subscription. Requires a **Notification Type** and **Subscription ID**. |

**Vendor / Direct Fulfillment (Wholesale)**

| Action | Description |
|---|---|
| **Get Packing Slips** | Retrieves packing slips for vendor direct fulfillment purchase orders created in a time frame. Requires a **Ship From Party ID**, **Created After**, and **Created Before**. |
| **Get Shipping Labels** | Retrieves shipping labels for vendor direct fulfillment orders created in a time frame. Requires a **Ship From Party ID**, **Created After**, and **Created Before**. |
| **Submit Invoice** | Submits electronic invoices or credit notes to Amazon for vendor wholesale purchase orders. Requires **Invoices**. |
| **Submit Order Acknowledgement** | Acknowledges vendor purchase orders with Amazon, accepting or rejecting individual line items with a reason code. Requires **Acknowledgements**. |
| **Submit Shipment Confirmations** | Submits carrier and tracking information for vendor wholesale purchase orders. Requires **Shipment Confirmations**. |

**Account & Authorization**

| Action | Description |
|---|---|
| **Get Marketplace Participations** | Retrieves the marketplaces your seller account can sell in, and your participation status in each. |
| **Create Restricted Data Token** | Generates a Restricted Data Token (RDT), required to call restricted operations that return PII such as buyer information or shipping addresses. Requires **Restricted Resources**. |

---

## Support

Need help? Contact our support team at [support@appse.ai](mailto:support@appse.ai)
