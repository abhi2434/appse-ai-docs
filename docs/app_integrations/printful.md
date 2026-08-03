---
title: "Printful"
slug: /app-integrations/printful/
description: Step-by-step guide to set up Printful credentials and automate print-on-demand fulfillment workflows in appse ai.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Printful is a print-on-demand and fulfillment platform that enables businesses to create, print, and ship custom products without holding inventory. With appse ai, you can connect your Printful account to automate order management, product synchronization, and fulfillment tracking. This integration helps streamline your e-commerce workflows, reduce manual effort, and ensure seamless order processing across all connected systems.

---

## Authentication Methods

**appse ai** supports one primary authentication method: Bearer Token (Private Access Token). This method uses a secure token generated from your Printful account.

<Tabs>
  <TabItem value="bearer-token" label="Bearer Token" default>

## Setup Credential

Follow the steps below to connect your Printful account to appse ai using a Private Access Token. This method provides secure, account-level access to your Printful store.

### Prerequisites

Before starting, make sure:

- You have access to a Printful account with admin or developer permissions.
- You can log in to the Printful Dashboard.

### Required Fields

You'll be asked to fill in the following details:

| Field           | Description                                                                              |
|-----------------|------------------------------------------------------------------------------------------|
| Connection Name | A name to help you identify this connection.                                             |
| Private Access Token | The secret token obtained from your Printful account for API access.                 |

---

### Step-by-Step Guide

#### Step 1: Log in to Printful Dashboard

Open [Printful Dashboard](https://www.printful.com/dashboard) and log in using your Printful account credentials.

<img src="/img/credentials/printful/p1.jpg" alt="Printful dashboard login" width="700"/>

---

#### Step 2: Navigate to API Settings

From the dashboard, click on **Settings** in the top navigation menu. In the left sidebar, expand **Store settings** and click on **API**.

<img src="/img/credentials/printful/p2.jpg" alt="Printful API settings page" width="700"/>

---

#### Step 3: Access Printful Developers Portal

In the **API Access** section, click the **Go to Printful Developers** button to open the Printful Developers portal.

<img src="/img/credentials/printful/p3.jpg" alt="Printful Developers button" width="700"/>

---

#### Step 4: Navigate to Tokens

In the Developers portal, click on **Tokens** from the left sidebar to view your API tokens.

<img src="/img/credentials/printful/p4.jpg" alt="Tokens page in Printful Developers" width="700"/>

---

#### Step 5: Create a New Private Access Token

On the **Tokens** page, click the **Add new token** button to create a new token for your integration.

<img src="/img/credentials/printful/p5.jpg" alt="Add new token button" width="700"/>

---

#### Step 6: Configure Token Details

Fill in the token creation form with the following details:

- **Token Name**: Enter a descriptive name (e.g., "appse ai Integration")
- **Expiration Date**: Set an expiration date or leave it open-ended (recommended for integrations)
- **Access Level**: Choose **Account-level** for full account access or **Store-level** for specific store access
- **Scopes**: Select the required permissions based on your needs (minimum: "View and manage orders of the authorized store", "View and manage store products","View and manage store files","View store webhooks", "View and manage product templates")

<img src="/img/credentials/printful/p6.jpg" alt="Token creation form with details" width="700"/>

Click **Create new token** to generate the token.

---

#### Step 7: Copy the Private Access Token

After creating the token, Printful will display it **only once**. Click the copy button to copy the token to your clipboard.

<img src="/img/credentials/printful/p7.jpg" alt="Copy private access token" width="700"/>

:::caution
Store this token securely. Printful will not display it again. If you lose it, you will need to create a new token and delete the old one.
:::

---

#### Step 8: Configure the Credential Form in appse ai

1. **Enter the Connection Name**  
   In the appse ai credential form, enter a descriptive name for this connection (e.g., "My Printful Store").

   <img src="/img/credentials/printful/p8.jpg" alt="appse ai credential form - Connection Name field" width="700"/>

2. **Paste the Private Access Token**  
   Paste the token you copied from Printful into the **Private Access Token** field.

   <img src="/img/credentials/printful/p9.jpg" alt="appse ai credential form - Token field" width="700"/>

3. **Save the Configuration**  
   Click on the **"Save"** button. appse ai will validate the connection by checking the token's permissions.

4. **Confirmation**  
   Once validated, the credential will be saved and appear on the **Credentials** page with a green checkmark indicating successful validation.

   <img src="/img/credentials/printful/p10.png" alt="Credential Listing Page" width="700"/>

You can now use this credential for the required workflow integrations.

  </TabItem>
</Tabs>

---

## Triggers and Actions

Every application has a pre-defined set of triggers and actions that allow users to perform application-specific activities within the platform. Here is the current Printful action set available in the platform.

<Tabs>

<TabItem value="actions" label="Actions">

### Actions

Printful provides a comprehensive set of actions for managing orders, products, and catalog items. Below is the complete list of available actions.

### Order Management Actions

#### Create Order

Create Order action sends a new order to Printful for printing and delivery. The order can be saved as a draft for review or submitted immediately for printing.

##### Select Credentials and Action Events

<img src="/img/credentials/printful/C-CO1.jpg" alt="Printful Create Order action configuration" width="700"  />

Click on **Continue** button

-----------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Store Id | Select your Printful store from the available list. |
| Your Order Reference | Your own order number for tracking (e.g., "ORD-12345"). |
| Submit for Printing | Whether to send the order for printing immediately (true) or save as draft (false). |
| Update If Already Sent | Whether to update an existing order instead of creating a duplicate. |
| Shipping Method | Delivery speed: STANDARD for normal delivery or PRINTFUL_FAST for express shipping where available. |
| Delivery Address | Complete shipping address for the order (name, address, city, state, country, ZIP). |
| Items | Array of products to be printed. Each item includes variant ID, quantity, retail price, and artwork files. |
| Retail Costs | Summary of charges (subtotal, discount, shipping, tax) shown on the packing slip. |
| Gift Message | Optional: Subject and message text to be included in the packing slip. |
| Packing Slip | Optional: Custom branding details including logo, store name, and customer service contact info. |

:::note
All required fields must be completed for the order to be created. Ensure delivery address fields are accurate as they determine shipping costs and tax calculations.
:::

Click on **Continue**, then click **Run** node.

-----------------

##### Example Configuration

<img src="/img/credentials/printful/AC-CO2.jpg" alt="Printful Create Order action example configuration" width="700"  />

---

#### Get Orders

Get Orders action fetches a paginated list of orders from your Printful store. Use it to review order status and track fulfillment progress.

##### Select Credentials and Action Events

<img src="/img/credentials/printful/C-GO3.jpg" alt="Printful Get Orders action configuration" width="700"  />

Click on **Continue** button

-----------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Status | Filter orders by status: draft, inreview, pending, failed, canceled, onhold, inprocess, partial, or fulfilled. Leave blank to fetch all statuses. |
| Page Size | Number of orders to fetch per request (1-100, default 20). |
| Skip Count | Number of orders to skip for pagination (use 0 for first page, 20 for second, etc.). |

Click on **Continue**, then click **Run** node.

-----------------

##### Example Configuration

<img src="/img/credentials/printful/AC-GO4.jpg" alt="Printful Get Orders action example configuration" width="700"  />

---

#### Get Order by ID

Get Order by ID action retrieves detailed information about a specific order using its order ID or your order reference.

##### Select Credentials and Action Events

<img src="/img/credentials/printful/C-GOBI5.jpg" alt="Printful Get Order by ID action configuration" width="700"  />

Click on **Continue** button

-----------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Store Id | Select your Printful store from the available list. |
| Order ID | The Printful order number (e.g., "13") or your own order reference prefixed with @ (e.g., "@4235234213"). |

Click on **Continue**, then click **Run** node.

-----------------

##### Example Configuration

<img src="/img/credentials/printful/AC-GOBI6.jpg" alt="Printful Get Order by ID action example configuration" width="700"  />

---

#### Confirm Order for Printing

Confirm Order for Printing action approves a draft order so Printful begins production and shipping. Charges apply at this stage.

##### Select Credentials and Action Events

<img src="/img/credentials/printful/C-COFP7.jpg" alt="Printful Confirm Order action configuration" width="700"  />

Click on **Continue** button

-----------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Store Id | Select your Printful store from the available list. |
| Order ID | The order to confirm for printing (Printful order number or your order reference with @). |

:::caution
Confirming an order triggers production and billing. Ensure all order details are correct before confirming.
:::

Click on **Continue**, then click **Run** node.

-----------------

##### Example Configuration

<img src="/img/credentials/printful/AC-COFP8.jpg" alt="Printful Confirm Order action example configuration" width="700"  />

---

#### Update Order

Update Order action modifies an existing order's details such as shipping address or recipient information.

##### Select Credentials and Action Events

<img src="/img/credentials/printful/C-UO9.jpg" alt="Printful Update Order action configuration" width="700"  />

Click on **Continue** button

-----------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Store Id | Select your Printful store from the available list. |
| Order ID | The order to update (Printful order number or your order reference with @). |
| Recipient | Updated shipping address information (name, address, city, state, country, ZIP, phone, email). |

:::note
Only draft and pending orders can be updated. Orders already in production cannot be modified.
:::

Click on **Continue**, then click **Run** node.

-----------------

##### Example Configuration

<img src="/img/credentials/printful/AC-UO10.jpg" alt="Printful Update Order action example configuration" width="700"  />

---

#### Cancel Order

Cancel Order action cancels a draft or pending order that has not yet started production.

##### Select Credentials and Action Events

<img src="/img/credentials/printful/C-CAN11.jpg" alt="Printful Cancel Order action configuration" width="700"  />

Click on **Continue** button

-----------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Store Id | Select your Printful store from the available list. |
| Order ID | The order to cancel (Printful order number or your order reference with @). |

:::note
Only draft and pending orders can be cancelled. Orders in production cannot be cancelled.
:::

Click on **Continue**, then click **Run** node.

-----------------

##### Example Configuration

<img src="/img/credentials/printful/AC-CAN12.jpg" alt="Printful Cancel Order action example configuration" width="700"  />

---

#### Estimate Order Costs

Estimate Order Costs action calculates the production and shipping costs for an order before submission to Printful.

##### Select Credentials and Action Events

<img src="/img/credentials/printful/C-EOC13.jpg" alt="Printful Estimate Order Costs action configuration" width="700"  />

Click on **Continue** button

-----------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Store Id | Select your Printful store from the available list. |
| Shipping Method | Delivery speed: STANDARD or PRINTFUL_FAST. |
| Recipient Country | Two-letter country code for shipping destination (e.g., "US", "GB"). |
| Items | Array of items with variant ID, quantity, and any additional options. |

Click on **Continue**, then click **Run** node.

-----------------

##### Example Configuration

<img src="/img/credentials/printful/AC-EOC14.jpg" alt="Printful Estimate Order Costs action example configuration" width="700"  />

---

### Catalog Actions

#### Get Catalog Products

Get Catalog Products action fetches the list of blank products available in Printful's catalog that can be printed on.

##### Select Credentials and Action Events

<img src="/img/credentials/printful/C-GCP15.jpg" alt="Printful Get Catalog Products action configuration" width="700"  />

Click on **Continue** button

-----------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Category IDs | Filter by category (e.g., "24" for t-shirts, or "24,6" for multiple). Leave blank to fetch all products. |
| Page Size | Number of products to fetch per request (1-100, default 20). |
| Skip Count | Number of products to skip for pagination (0 for first page, 20 for second, etc.). |

Click on **Continue**, then click **Run** node.

-----------------

##### Example Configuration

<img src="/img/credentials/printful/AC-GCP16.jpg" alt="Printful Get Catalog Products action example configuration" width="700"  />

---

#### Get Catalog Categories

Get Catalog Categories action retrieves the product categories available in Printful's catalog.

##### Select Credentials and Action Events

<img src="/img/credentials/printful/C-GCC17.jpg" alt="Printful Get Catalog Categories action configuration" width="700"  />

Click on **Continue** button

-----------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Page Size | Number of categories to fetch per request (1-100, default 20). |
| Skip Count | Number of categories to skip for pagination. |

Click on **Continue**, then click **Run** node.

-----------------

##### Example Configuration

<img src="/img/credentials/printful/AC-GCC18.jpg" alt="Printful Get Catalog Categories action example configuration" width="700"  />

---

#### Get Catalog Product by ID

Get Catalog Product by ID action retrieves detailed information about a specific product from Printful's catalog, including all available variants.

##### Select Credentials and Action Events

<img src="/img/credentials/printful/C-GCPBI19.jpg" alt="Printful Get Catalog Product by ID action configuration" width="700"  />

Click on **Continue** button

-----------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Product ID | The Printful catalog product ID (e.g., "23"). |

Click on **Continue**, then click **Run** node.

-----------------

##### Example Configuration

<img src="/img/credentials/printful/AC-GCPBI20.jpg" alt="Printful Get Catalog Product by ID action example configuration" width="700"  />

---

#### Get Catalog Category by ID

Get Catalog Category by ID action retrieves details about a specific product category.

##### Select Credentials and Action Events

<img src="/img/credentials/printful/C-GCCBI21.jpg" alt="Printful Get Catalog Category by ID action configuration" width="700"  />

Click on **Continue** button

-----------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Category ID | The Printful catalog category ID (e.g., "24"). |

Click on **Continue**, then click **Run** node.

-----------------

##### Example Configuration

<img src="/img/credentials/printful/AC-GCCBI22.jpg" alt="Printful Get Catalog Category by ID action example configuration" width="700"  />

---

#### Get Catalog Variant by ID

Get Catalog Variant by ID action retrieves information about a specific product variant including pricing and available options.

##### Select Credentials and Action Events

<img src="/img/credentials/printful/C-GCVBI23.jpg" alt="Printful Get Catalog Variant by ID action configuration" width="700"  />

Click on **Continue** button

-----------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Variant ID | The Printful catalog variant ID (e.g., "4011"). |

Click on **Continue**, then click **Run** node.

-----------------

##### Example Configuration

<img src="/img/credentials/printful/AC-GCVBI24.jpg" alt="Printful Get Catalog Variant by ID action example configuration" width="700"  />

---

#### Get Catalog Product Sizes

Get Catalog Product Sizes action retrieves the available sizes for a specific product in Printful's catalog.

##### Select Credentials and Action Events

<img src="/img/credentials/printful/C-GCPS25.jpg" alt="Printful Get Catalog Product Sizes action configuration" width="700"  />

Click on **Continue** button

-----------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Product ID | The Printful catalog product ID (e.g., "23"). |

Click on **Continue**, then click **Run** node.

-----------------

##### Example Configuration

<img src="/img/credentials/printful/AC-GCPS26.jpg" alt="Printful Get Catalog Product Sizes action example configuration" width="700"  />

---

### Store Products (Sync) Actions

#### Create Store Product

Create Store Product action creates a new product in your Printful store that syncs with your catalog. This product can then be ordered.

##### Select Credentials and Action Events

<img src="/img/credentials/printful/C-CSP27.jpg" alt="Printful Create Store Product action configuration" width="700"  />

Click on **Continue** button

-----------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Store Id | Select your Printful store from the available list. |
| External Id | Your own product ID for tracking (e.g., "prod-12345"). |
| External Variant Id | Your own variant ID for the store product. |
| Catalog Product Id | The Printful catalog product ID this store product is based on. |

Click on **Continue**, then click **Run** node.

-----------------

##### Example Configuration

<img src="/img/credentials/printful/AC-CSP28.jpg" alt="Printful Create Store Product action example configuration" width="700"  />

---

#### Get Sync Products

Get Sync Products action fetches all products you have synced in your Printful store.

##### Select Credentials and Action Events

<img src="/img/credentials/printful/C-GSP29.jpg" alt="Printful Get Sync Products action configuration" width="700"  />

Click on **Continue** button

-----------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Store Id | Select your Printful store from the available list. |
| Page Size | Number of products to fetch per request (default 20). |
| Skip Count | Number of products to skip for pagination. |

Click on **Continue**, then click **Run** node.

-----------------

##### Example Configuration

<img src="/img/credentials/printful/AC-GSP30.jpg" alt="Printful Get Sync Products action example configuration" width="700"  />

---

#### Get Sync Product by ID

Get Sync Product by ID action retrieves detailed information about a specific store product including its variants.

##### Select Credentials and Action Events

<img src="/img/credentials/printful/C-GSPBI31.jpg" alt="Printful Get Sync Product by ID action configuration" width="700"  />

Click on **Continue** button

-----------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Store Id | Select your Printful store from the available list. |
| Product ID | The Printful store product ID or your external product ID with @ prefix (e.g., "@prod-12345"). |

Click on **Continue**, then click **Run** node.

-----------------

##### Example Configuration

<img src="/img/credentials/printful/AC-GSPBI32.jpg" alt="Printful Get Sync Product by ID action example configuration" width="700"  />

---

#### Update Store Product

Update Store Product action modifies the details of an existing synced product.

##### Select Credentials and Action Events

<img src="/img/credentials/printful/C-USP33.jpg" alt="Printful Update Store Product action configuration" width="700"  />

Click on **Continue** button

-----------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Store Id | Select your Printful store from the available list. |
| Product ID | The product to update (Printful ID or your external ID with @). |
| Name | Updated product name. |
| Description | Updated product description. |

Click on **Continue**, then click **Run** node.

-----------------

##### Example Configuration

<img src="/img/credentials/printful/AC-USP34.jpg" alt="Printful Update Store Product action example configuration" width="700"  />

---

#### Delete Store Product

Delete Store Product action removes a synced product from your Printful store.

##### Select Credentials and Action Events

<img src="/img/credentials/printful/C-DSP35.jpg" alt="Printful Delete Store Product action configuration" width="700"  />

Click on **Continue** button

-----------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Store Id | Select your Printful store from the available list. |
| Product ID | The product to delete (Printful ID or your external ID with @). |

:::caution
Deleting a product cannot be undone. Ensure you want to remove this product before proceeding.
:::

Click on **Continue**, then click **Run** node.

-----------------

##### Example Configuration

<img src="/img/credentials/printful/AC-DSP36.jpg" alt="Printful Delete Store Product action example configuration" width="700"  />

---

### Store Variants (Sync) Actions

#### Create Store Variant

Create Store Variant action adds a new variant (size, color, etc.) to an existing store product.

##### Select Credentials and Action Events

<img src="/img/credentials/printful/C-CSV37.jpg" alt="Printful Create Store Variant action configuration" width="700"  />

Click on **Continue** button

-----------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Store Id | Select your Printful store from the available list. |
| Product ID | The store product to add a variant to. |
| Catalog Variant ID | The Printful catalog variant to use for this store variant. |
| External Variant Id | Your own variant ID for tracking. |

Click on **Continue**, then click **Run** node.

-----------------

##### Example Configuration

<img src="/img/credentials/printful/AC-CSV38.jpg" alt="Printful Create Store Variant action example configuration" width="700"  />

---

#### Get Sync Variant by ID

Get Sync Variant by ID action retrieves detailed information about a specific store variant.

##### Select Credentials and Action Events

<img src="/img/credentials/printful/C-GSVBI39.jpg" alt="Printful Get Sync Variant by ID action configuration" width="700"  />

Click on **Continue** button

-----------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Store Id | Select your Printful store from the available list. |
| Variant ID | The store variant ID or your external variant ID with @ prefix. |

Click on **Continue**, then click **Run** node.

-----------------

##### Example Configuration

<img src="/img/credentials/printful/AC-GSVBI40.jpg" alt="Printful Get Sync Variant by ID action example configuration" width="700"  />

---

#### Update Store Variant

Update Store Variant action modifies an existing variant's details such as retail price or name.

##### Select Credentials and Action Events

<img src="/img/credentials/printful/C-USV41.jpg" alt="Printful Update Store Variant action configuration" width="700"  />

Click on **Continue** button

-----------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Store Id | Select your Printful store from the available list. |
| Variant ID | The variant to update (Printful ID or your external ID with @). |
| Name | Updated variant name. |
| Sku | Updated SKU for the variant. |
| Retail Price | Updated retail price. |

Click on **Continue**, then click **Run** node.

-----------------

##### Example Configuration

<img src="/img/credentials/printful/AC-USV42.jpg" alt="Printful Update Store Variant action example configuration" width="700"  />

---

#### Delete Store Variant

Delete Store Variant action removes a variant from a store product.

##### Select Credentials and Action Events

<img src="/img/credentials/printful/C-DSV43.jpg" alt="Printful Delete Store Variant action configuration" width="700"  />

Click on **Continue** button

-----------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Store Id | Select your Printful store from the available list. |
| Variant ID | The variant to delete (Printful ID or your external ID with @). |

:::caution
Deleting a variant cannot be undone. Ensure you want to remove this variant before proceeding.
:::

Click on **Continue**, then click **Run** node.

-----------------

##### Example Configuration

<img src="/img/credentials/printful/AC-DSV44.jpg" alt="Printful Delete Store Variant action example configuration" width="700"  />

---

### Store Statistics Action

#### Get Store Statistics

Get Store Statistics action retrieves general statistics about your Printful store, including order counts and fulfillment metrics.

##### Select Credentials and Action Events

<img src="/img/credentials/printful/C-GSS45.jpg" alt="Printful Get Store Statistics action configuration" width="700"  />

Click on **Continue** button

-----------------

##### Configuration Fields

| Field | Description |
|------|-------------|
| Store Id | Select your Printful store from the available list. |

Click on **Continue**, then click **Run** node.

-----------------

##### Example Configuration

<img src="/img/credentials/printful/AC-GSS46.jpg" alt="Printful Get Store Statistics action example configuration" width="700"  />

---

</TabItem>

</Tabs>

---

## Support

Need help? Contact our support team at [hello@appse.ai](mailto:hello@appse.ai)
