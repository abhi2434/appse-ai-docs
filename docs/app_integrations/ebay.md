---
title: "eBay"
slug: /app-integrations/ebay/
description: Step-by-step guide to set up eBay credentials and automate e-commerce workflows in appse ai.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

eBay is a global e-commerce marketplace that enables businesses and individuals to buy and sell products across consumer and business segments. Integrating eBay with appse ai allows you to automate order management, inventory tracking, return processing, and fulfillment — directly within your AI-powered workflows.

---

## Setup Credential

:::note

Before you create a credential for eBay using appse ai, ensure you have an [eBay Developer Account](https://developer.ebay.com/) and have created a Production application to obtain your API keys.

:::

### Required Fields

You'll be asked to fill in the following details:

| Field | Description |
|---|---|
| **Connection Name** | A label to identify this credential within appse ai. |
| **App ID (Client ID)** | The Client ID from your eBay Developer Portal Production keyset. |
| **Cert ID (Client Secret)** | The Client Secret from your eBay Developer Portal Production keyset. |
| **RuName (Redirect URL Name)** | The RuName (eBay Redirect URL Name) associated with the redirect URL entry registered in the eBay Developer Portal for appse ai. |
| **Base API URL** | Pre-filled: `https://api.ebay.com/` |
| **Authorization URL** | Pre-filled: `https://auth.ebay.com/oauth2/authorize` |
| **Token URL** | Pre-filled: `https://api.ebay.com/identity/v1/oauth2/token` |
| **API Access Scope** | Pre-filled with the required eBay Sell and Commerce API scopes. |

### Step-by-Step Guide

#### 1. Open the Credential Form

Click **Select a Credential** and choose **eBay** from the application list.

<img src="/img/credentials/ebay/select-app.png" alt="appse ai eBay Select Credential" width="700"/>

This opens the eBay credential form. Enter your **Connection Name**.

---

#### 2. Get Your App ID and Cert ID

Navigate to the [eBay Developer Portal — Application Keys](https://developer.ebay.com/my/keys).

<img src="/img/credentials/ebay/application-keys.png" alt="eBay Developer Portal Application Keys" width="700"/>

Under the **Production** keyset:

- Copy the **App ID (Client ID)** and paste it into the **App ID (Client ID)** field in appse ai.
- Copy the **Cert ID (Client Secret)** and paste it into the **Cert ID (Client Secret)** field in appse ai.

:::note
Use the **Production** keyset, not the Sandbox keyset. The Sandbox environment is for testing only and will not work with live data.
:::

On the same page, locate the **User Tokens** link next to your Client ID and click it to proceed to the next step.

---

#### 3. Get Your RuName (Redirect URL Name)

You should now be on the **User Tokens** page. If not, navigate directly to [eBay Developer Portal — User Tokens](https://developer.ebay.com/my/auth).

<img src="/img/credentials/ebay/user-tokens-ru-name.png" alt="eBay Developer Portal User Tokens RuName" width="700"/>

1. Click **Get a Token from eBay via Your Application**.
2. In the **RuName** section, click **Add eBay Redirect URL**.
3. If this is your first time, eBay will display a **"Confirm the Legal Address for the Primary Contact or Business"** form before proceeding. Complete and submit this form to continue.
4. A new entry row appears. eBay pre-assigns a **RuName** to this entry immediately — a unique alphanumeric identifier string (e.g., `AppName-AppName-PRD-a1b2c3d4e-12345678`), not a URL. Note this value now — it does not change after saving.
5. In the same entry row, paste the following appse ai callback URL into the **Your Auth accepted URL** field: `https://embedded-ui.appse.ai/oauth-callback.html`
6. Click **Save** to confirm the redirect URL entry.
7. Copy the **RuName** from the entry and paste it into the **RuName (Redirect URL Name)** field in appse ai.

:::note
The callback URL to register can be found in the appse ai credential form under the **RuName (Redirect URL Name)** field help text or your appse ai workspace settings.
:::

---

#### 4. Confirm Pre-filled URL Fields

The following fields are pre-filled and do not require changes for Production use:

| Field | Pre-filled Value |
|---|---|
| Base API URL | `https://api.ebay.com/` |
| Authorization URL | `https://auth.ebay.com/oauth2/authorize` |
| Token URL | `https://api.ebay.com/identity/v1/oauth2/token` |
| API Access Scope | eBay Sell and Commerce API scopes |

---

#### 5. Authorize and Save

Once all fields are filled in, click **Save and Authorize** in appse ai.

<img src="/img/credentials/ebay/credential-form.png" alt="appse ai eBay Save and Authorize" width="700"/>

You will be redirected to eBay's OAuth authorization page. Log in with your eBay seller account and grant the requested permissions. Once authorized, you will be redirected back to appse ai.

<img src="/img/credentials/ebay/save-credentials.png" alt="appse ai eBay Credential Saved" width="700"/>

If successful, your eBay credential will display a **✓** icon. You can now use eBay in your workflows.

If it fails, a **!** icon will appear — recheck your App ID, Cert ID, and RuName, or contact support.

:::caution
Keep your Cert ID (Client Secret) secure. Do not share it publicly. Anyone with access to your credentials can interact with your eBay seller account.
:::

---

## Triggers and Actions

Every application has a pre-defined set of triggers and actions. Here is the current eBay trigger and action set available in appse ai.

<Tabs>

<TabItem value="triggers" label="Triggers" default>

### Trigger Events

#### New Order Created

Triggers when a new order is created in eBay. Use this to automate order processing, fulfillment, and notifications.

##### Select Credentials and Trigger Event

Click on **Continue**.

##### Configuration Fields

| Field | Description |
|---|---|
| **Fetch data since** | Set the start date and time for fetching new orders. **Note:** eBay only allows filtering orders created within the last **90 days**. Dates older than 90 days will result in an API error. |
| **Limit** | Maximum number of orders to retrieve per run. Default is 10. |

Click on **Continue**, then **Run** the node.

---

#### New Return Created

Triggers when a buyer creates a new return request in eBay. Use this to automate return approvals, refund workflows, and seller notifications.

##### Select Credentials and Trigger Event

Click on **Continue**.

##### Configuration Fields

| Field | Description |
|---|---|
| **Fetch data since** | Set the start date and time for fetching new return requests. It is recommended to set this carefully before activating the workflow — changes after activation will not affect running executions. |
| **Limit** | Maximum number of return records to retrieve per run. Default is 10. |

Click on **Continue**, then **Run** the node.

</TabItem>

<TabItem value="actions" label="Actions">

### Inventory Actions

#### Get Inventory Item by SKU

Retrieves a single inventory item from eBay using its seller-defined SKU.

##### Select Credentials and Action Event

Click on **Continue**.

##### Configuration Fields

| Field | Description |
|---|---|
| **SKU** *(required)* | The seller-defined Stock Keeping Unit (SKU) of the inventory item. The SKU is case-sensitive and must match exactly as defined in your eBay seller account. (e.g., `TSHIRT-RED-L`) |

Click on **Continue**, then **Run** the node.

---

### Return Actions

#### Get Return by Return ID

Retrieves the details of a specific return request using its unique return ID from the eBay Post-Order API.

##### Select Credentials and Action Event

Click on **Continue**.

##### Configuration Fields

| Field | Description |
|---|---|
| **Return ID** *(required)* | The unique identifier of the return request to retrieve. (e.g., `5000000000`) |

:::note
Use the **New Return Created** trigger or **Decide Return** action to obtain the return ID.
:::

Click on **Continue**, then **Run** the node.

---

#### Decide Return

Accepts or declines a buyer's return request in eBay using the Post-Order API.

##### Select Credentials and Action Event

Click on **Continue**.

##### Configuration Fields

| Field | Description |
|---|---|
| **Return ID** *(required)* | The unique identifier of the buyer's return request. (e.g., `5000000000`) |
| **Decision** *(required)* | Whether to **Approve** or **Decline** the buyer's return request. |
| **Keep Original Item** *(optional)* | Set to `true` if the seller does not require the buyer to ship the item back. Applicable only when approving the return. Default is `false`. |

Click on **Continue**, then **Run** the node.

---

### Order Actions

#### Get Shipping Fulfillments

Retrieves a list of all shipping fulfillments (shipments) created for a specific order in eBay.

##### Select Credentials and Action Event

Click on **Continue**.

##### Configuration Fields

| Field | Description |
|---|---|
| **Order ID** *(required)* | The unique identifier of the order to retrieve shipping fulfillments for. (e.g., `12-12345-12345`) |

:::note
Use the **New Order Created** trigger or **Get Record by ID** action to obtain the order ID.
:::

Click on **Continue**, then **Run** the node.

---

### Taxonomy Actions

#### Get Default Category Tree ID

Retrieves the default category tree ID for a specific eBay marketplace using the Taxonomy API. Useful for mapping products to the correct eBay category hierarchy.

##### Select Credentials and Action Event

Click on **Continue**.

##### Configuration Fields

| Field | Description |
|---|---|
| **Marketplace** *(required)* | The eBay marketplace for which to retrieve the category tree. Options include eBay US, UK, Germany, Australia, Canada, France, Italy, Spain, India, Hong Kong, and Singapore. |

Click on **Continue**, then **Run** the node.

---

### Generic Actions

#### Get Record by ID

Retrieve a single record by its unique identifier from any supported eBay API resource.

##### Select Credentials and Action Event

Click on **Continue**.

##### Configuration Fields

| Field | Description |
|---|---|
| **Resource Type** *(required)* | The eBay API resource to retrieve the record from. Options: Order, Inventory Item (by SKU), Inventory Item Group, Offer, Listing (Buy), Shipment, Return, Payment Dispute. |
| **Record ID** *(required)* | The unique identifier of the record. For Orders enter the order ID (e.g., `12-12345-12345`), for Inventory Items enter the SKU, for Offers enter the offer ID. |

Click on **Continue**, then **Run** the node.

</TabItem>

</Tabs>

---

## Support

Need help? Contact our support team at [support@appse.ai](mailto:support@appse.ai)
