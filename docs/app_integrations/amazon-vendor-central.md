---
title: "Amazon Vendor Central"
description: Step-by-step guide to set up Amazon Vendor Central credentials and automate purchase order, shipment, and invoice workflows in appse ai.
slug: /app-integrations/amazon-vendor-central/
---

Amazon Vendor Central is the portal used by first-party vendors who sell their products directly to Amazon. It allows you to manage purchase orders, confirm and ship orders, submit invoices, and track retail performance. Integrating Amazon Vendor Central into appse ai enables you to automate order management, feed submissions, financial reporting, and more — directly within your AI-powered workflows.

---

## Set Up Credential

:::info

Before you create a credential for Amazon Vendor Central using appse ai, ensure you have an [Amazon Vendor Central](https://vendorcentral.amazon.com/) account with permission to authorize applications. appse ai connects through its own registered Selling Partner API application, so you do not need to register as a developer or supply a client ID or client secret.

:::

### Required Fields

| Field                         | Description                                                                                                                                                                                                                                                                                                                                                                                                   |
| ----------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Connection Name**           | A label to identify this credential within appse ai.                                                                                                                                                                                                                                                                                                                                                          |
| **Select Marketplace Region** | The Amazon Selling Partner API region your vendor account operates in:<ul><li>**NA** — North America: US, CA, MX, BR</li><li>**EU** — Europe, Middle East, Africa and India: UK, IE, DE, FR, IT, ES, NL, SE, PL, BE, TR, ZA, EG, SA, AE, IN</li><li>**FE** — Far East: JP, AU, SG</li></ul>See Amazon's [SP-API endpoints](https://developer-docs.amazon/sp-api/docs/sp-api-endpoints) for the complete list. |

:::note
You will also need your Amazon Vendor Central login credentials and access to your registered two-step verification device during the authorization flow.
:::

### Step-by-Step Guide

#### 1. Open the Credential Form

Click **Select a Credential** and choose **Amazon Vendor Central** from the application list.

<img src="/img/credentials/amazon-vendor-central/create-new-credential-appseai-amazon-vendor-central.png" alt="appse ai Amazon Vendor Central Connection Name" width="700"/>

This opens the Amazon Vendor Central credential form. Add your **Connection Name**.

#### 2. Select Your Region

Choose the region your vendor account operates in from the **Select Region** dropdown — **NA**, **EU**, or **FE**. This sets the Selling Partner API endpoint appse ai calls, so choosing the wrong region will prevent appse ai from accessing your account data.

<img src="/img/credentials/amazon-vendor-central/select-region-vendor-central.png" alt="appse ai Amazon Vendor Central region and marketplace selector" width="700"/>

#### 3. Authorize the App and Complete Two-Step Verification

You are redirected to the Amazon Vendor Central authorization page. Log in to your Amazon Vendor Central account and complete the two-step verification process.

Follow the Log in with Amazon (LWA) flow to authorize your application against your Vendor account. LWA is Amazon's OAuth-based authorization system used to grant appse ai access to your Vendor account.

Enter your Amazon Vendor Central registered email address or mobile number and click **Continue**.

<img src="/img/credentials/amazon-vendor-central/enter-email-vendor-central.png" alt="appse ai Amazon Vendor Central sign-in email screen" width="700"/>

Enter your Amazon account password and click **Sign in**.

<img src="/img/credentials/amazon-vendor-central/enter-password-vendor-central.png" alt="appse ai Amazon Vendor Central enter password" width="700"/>

Enter the one-time password (OTP) sent to your registered device.

<img src="/img/credentials/amazon-vendor-central/enter-otp-vendor-central.png" alt="appse ai Amazon Vendor Central enter OTP" width="700"/>

Select your country from the dropdown.

<img src="/img/credentials/amazon-vendor-central/select-country-vendor-central.png" alt="appse ai Amazon Vendor Central select country" width="700"/>

Click **Confirm** to complete the verification process.

<img src="/img/credentials/amazon-vendor-central/click-confirm-vendor-central.png" alt="appse ai Amazon Vendor Central click confirm" width="700"/>

Click **Save and Authorize** in appse ai to complete the connection.

<img src="/img/credentials/amazon-vendor-central/click-save-authorize-appseai-amazon-vendor-central.png" alt="appse ai Amazon Vendor Central save and authorize button" width="700"/>

Once the verification is successfully completed, your credentials will be validated and saved within appse ai. You will see a confirmation message once the connection is successful.

:::tip
If the authorization flow fails, ensure the Amazon account you signed in with has Vendor Central access and permission to authorize applications for your vendor group.
:::

---

## Triggers and Actions

Here is a list of the available triggers and actions for Amazon Vendor Central:

### Triggers

- **New Purchase Order (Retail)** — Triggers when Amazon creates a new wholesale purchase order for a vendor. Fires once per PO so downstream steps can acknowledge, plan fulfilment, or sync order details to ERP and WMS systems.
- **New Direct Fulfillment Purchase Order** — Triggers when Amazon creates a new direct fulfillment purchase order for a vendor. Fires once per PO so downstream steps can accept, ship, or sync order details to warehouse and logistics systems.

### Actions

#### Retail (Wholesale) Orders

| Action                                    | Description                                                                                                                                                                                            |
| ----------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Create order acknowledgement (Retail)** | Submit one or more acknowledgements for retail (wholesale) purchase orders, confirming, backordering, or rejecting ordered items.                                                                      |
| **Create shipment confirmation (Retail)** | Submit shipment confirmation after a retail purchase order has been shipped from the vendor's warehouse, enabling Amazon to update order status, start goods-receipt processing, and unlock invoicing. |
| **Create sales order invoice (Retail)**   | Submit one or more invoices for retail purchase orders so Amazon can process vendor payment for received items.                                                                                        |
| **Get transaction status**                | Retrieve the processing status of a previously submitted vendor transaction (acknowledgement, shipment confirmation, invoice, etc.) using its transaction ID.                                          |

#### Direct Fulfillment (Drop-Ship) Orders

| Action                                                          | Description                                                                                                                                                                                                                                                                  |
| --------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Create purchase order acknowledgement (Direct Fulfillment)**  | Acknowledge direct fulfillment (drop-ship) purchase orders, confirming the order and the quantities that can be fulfilled per line item. Must be submitted within 24 hours of receiving the PO per Amazon's Direct Fulfillment SLA.                                          |
| **Update inventory per warehouse (Direct Fulfillment)**         | Submit an inventory update (partial or full feed) for a direct fulfillment warehouse, reporting on-hand availability so Amazon knows whether to route drop-ship orders to the vendor.                                                                                        |
| **Create shipment confirmation (Direct Fulfillment)**           | Submit shipment confirmation after a direct fulfillment purchase order has been shipped, enabling Amazon to update order status, start customer tracking, and unlock invoicing.                                                                                              |
| **Create shipment status update (Direct Fulfillment)**          | Submit shipment status updates (for example shipped, delivering, delivered) for direct fulfillment purchase orders, keeping Amazon and the end customer informed of delivery progress.                                                                                       |
| **Create sales order invoice (Direct Fulfillment)**             | Submit one or more invoices for direct fulfillment orders so Amazon can process vendor payment for shipped items.                                                                                                                                                            |
| **Create shipping label (Direct Fulfillment)**                  | Request Amazon to create shipping labels for one or more direct fulfillment purchase orders by providing shipment container details. Amazon processes the request asynchronously and returns a transaction ID; the finished label is retrieved with **Get shipping labels**. |
| **Get shipping labels (Direct Fulfillment)**                    | Download Amazon-generated shipping labels for direct fulfillment purchase orders within a label-creation time window, so the vendor can print the label and ship to the end customer.                                                                                        |
| **Get packing slip by purchase order (Direct Fulfillment)**     | Retrieve the packing slip for a direct fulfillment purchase order, so the vendor can print it and include it with the shipment.                                                                                                                                              |
| **Get customer invoice by purchase order (Direct Fulfillment)** | Retrieve the customer invoice for a specific direct fulfillment purchase order, so the vendor can include it with the shipment to the end customer.                                                                                                                          |
| **Get transaction status (Direct Fulfillment)**                 | Retrieve the processing status of a previously submitted direct fulfillment transaction (acknowledgement, shipment confirmation, shipment status update, etc.) using its transaction ID.                                                                                     |

---

## Support

Need help? Contact our support team at [hello@appse.ai](mailto:hello@appse.ai)
