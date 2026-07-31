---
title: "Lightspeed (X-Series)"
description: "Step-by-step guide to set up Lightspeed X-Series credentials and automate retail, POS, and inventory workflows in appse ai."
slug: /app-integrations/lightspeed/
---

Lightspeed X-Series (formerly Vend) is a cloud-based POS and retail management platform for managing products, customers, sales, and inventory across physical and online stores. With appse ai, you can connect your Lightspeed store to keep products, customers, sales, and stock levels in sync with your ERP, eCommerce, and back-office systems—removing manual data entry across your retail operations.

---

## Setup Credential

Before setting up your Lightspeed credential in appse ai, you need a **Lightspeed Developer Account** to create an application and generate a `Client ID` and `Client Secret`.

### Required Fields

You’ll be asked to fill in the following details:

| Field                | Description                                                                                  |
|----------------------|----------------------------------------------------------------------------------------------|
| Connection Name      | A name to help you identify this connection                                                  |
| Store Domain Prefix  | The subdomain of your store URL — enter `mystore` for `mystore.retail.lightspeed.app`         |
| Client ID            | OAuth 2.0 Client ID from your Lightspeed Developer application                                |
| Client Secret        | OAuth 2.0 Client Secret from your Lightspeed Developer application                            |
| API Access Scope     | Space-separated list of OAuth 2.0 scopes — pre-filled with the scopes appse ai needs          |

### Step-by-Step Guide

#### 1. Create a Developer Account

Sign up for a Lightspeed Developer account at [developers.retail.lightspeed.app/register](https://developers.retail.lightspeed.app/register).

> **Note:** Developer credentials are separate from your Lightspeed Retail store account.

#### 2. Sign In to the Developer Portal

Sign in to the [Lightspeed Developer Portal](https://developers.retail.lightspeed.app).

#### 3. Navigate to Applications

Go to the [Applications](https://developers.retail.lightspeed.app/applications) section in your developer dashboard.

#### 4. Create a New Application

Click **Create Application** and provide a name for your app.

#### 5. Add the Redirect URL from appse ai

Go back to your Lightspeed credential form in appse ai, copy the **Redirect URL**, and add it to the application settings in the Lightspeed Developer Portal.

> **Note:** The redirect URL must exactly match what is registered in your developer dashboard.

#### 6. Configure Scopes

Make sure the following scopes are added to your application:

`products:read` `products:write` `products:read:price_books` `customers:read` `customers:write` `sales:read` `sales:write` `fulfillments:read` `fulfillments:write` `inventory:read` `gift_cards:read` `gift_cards:write:issue` `outlets:read` `registers:read` `payment_types:read` `channels:read` `users:read` `retailer:read`

> **Note:** These scopes are added by default when setting up the credential in appse ai. You can adjust them based on your integration needs — requesting unnecessary scopes may cause retailers to reject authorization.

#### 7. Copy the Client ID and Client Secret

After creating the application, copy the **Client ID** and **Client Secret** from the application settings page.

#### 8. Enter the Store Domain Prefix

In the appse ai credential form, enter your **Store Domain Prefix** — the subdomain part of your Lightspeed store URL. For example, if your store URL is `mystore.retail.lightspeed.app`, enter `mystore`.

#### 9. Paste the Credentials in appse ai

Paste the **Client ID** and **Client Secret** into the respective fields on the appse ai credential form.

#### 10. Save & Authorize

Click **Save & Authorize** to initiate the OAuth 2.0 connection.

#### 11. Authorize Access

You will be redirected to the Lightspeed authorization page. Sign in with your **Lightspeed Retail store account** (not your developer account) and authorize the application.

> **Note:** Unapproved apps can connect to a maximum of 30 stores. Submit your app for approval in the Developer Portal for production use.

#### 12. Credential Connected

Once authorized, the credential status will update to **Connected** in appse ai.

---

## Triggers and Actions

Here is a list of the available actions and triggers for Lightspeed:

### Triggers

- **New product created** — Triggers when a new product is created in Lightspeed after the specified date and time.
- **New customer created** — Triggers when a new customer is added to Lightspeed after the specified version checkpoint.
- **New sale created** — Triggers when a new sale is processed in Lightspeed after the specified version checkpoint.
- **Price book created or updated** — Triggers when a price book is created or updated in Lightspeed after the specified version checkpoint.

> **Note:** Every trigger uses an incremental sync cursor — **Fetch data since** for products, **After Version** for customers, sales, and price books. Set it to `0` (or an early date) on the first run; subsequent runs advance the cursor automatically.

---

### Actions

> Product Actions

- **Get Product** — Retrieve a single product by its ID.
- **Update Product** — Update an existing product by product ID. Only the fields provided are updated. Family-level fields apply to every variant in the product family, while detail-level fields apply only to the product ID supplied.

---

> Customer Actions

- **Create Customer** — Create a new customer record.
- **Get Customer** — Retrieve a single customer by their ID.
- **Update Customer** — Update an existing customer by customer ID. Only the fields provided are updated; all other fields remain unchanged.

---

> Customer Address Actions

- **Create Customer Address** — Add a new billing or shipping address to an existing customer. A customer can hold multiple addresses of each type.
- **List Customer Addresses** — Retrieve all billing and shipping addresses held against a customer.
- **Update Customer Address** — Update an existing address by customer ID and address ID.

> **Note:** Address Type must be **Billing** or **Shipping**, and Address Line 1, City, Postcode, and Country Code are always required — addresses are validated against country-specific rules. **Update Customer Address** replaces the address rather than merging it, so supply the full address every time; use **List Customer Addresses** to obtain the Address ID it needs.

---

> Sales Actions

- **Create Sale** — Create a sale with one or more line items. Requires the author (cashier) and a state — `closed` for a completed sale, `pending` for one still being built, `parked` to hold it, or `voided` to void it. Each line item requires a product, quantity, unit price, and tax.
- **Update Sale** — Update an existing sale by sale ID. The author (cashier) and the sale state must be supplied on every update. Supplying a line item or payment with an existing ID updates that entry instead of creating a new one. Use this to close a parked or pending sale, add payments, or amend line items.
- **Create Return** — Initiate a return against an existing closed sale. Lightspeed creates a new return sale in the `parked` state with the original line items negated and no payments, linked back to the original sale. Multiple and partial returns against the same sale are supported.

> **Note:** To finalise a refund, follow **Create Return** with **Update Sale** on the returned sale ID — set the state to `closed` and add a payment with a negative amount.

---

> Fulfillment Actions

- **Fulfill Sale** — Complete every fulfillment on a sale, marking all its items as fulfilled in a single call. Returns the ID and new version of each fulfillment it updated.

> **Note:** Lightspeed creates fulfillments automatically when a sale carries a delivery or pickup attribute, so this action completes existing fulfillments rather than creating new ones. The call is idempotent and safe to retry. Requires the `fulfillments:read` and `fulfillments:write` scopes.

---

> Gift Card Actions

- **Create Gift Card** — Create and activate a gift card with an initial balance. The card is returned in the `ACTIVE` state with a single `ACTIVATION` transaction recorded against it.

> **Note:** The gift card number must be unique across your store — reusing a number that has already been activated returns an error. Expiry Date is optional and requires gift card expiry to be enabled in your Lightspeed store settings; leave it blank to let Lightspeed derive the expiry from those settings. Requires the `gift_cards:write:issue` scope.

---

> Quote Actions

- **Get Quote** — Retrieve a single quote by its ID, including its customer, outlet, and register references, product line items, pricing totals, status, timestamps, and any note.

---

> Inventory Actions

- **Get Inventory by Product ID** — Retrieve the inventory records for a product across all outlets, including current stock level, average cost, and reorder figures. Can optionally cover every variant of the product.
- **Get Inventory Levels by Product ID** — Retrieve the aggregated inventory levels for a product across all outlets, including stock count, costs, and reorder figures.

---

> Search Actions

- **Search Records** — Search records in a Lightspeed module. Choose **Search (Products, Customers or Sales)** to query those record types by attribute — SKU, email, invoice number, date range, and more — or select **Product Categories**, **Variant Attributes**, **Gift Cards**, **Outlets**, **Registers**, **Payment Types**, **Users**, or **Channels** to list that module's records.

> **Note:** Each **Search Records** module needs its matching read scope on the connection — `products:read`, `customers:read`, or `sales:read` for Search depending on the type you filter on, `products:read` for Product Categories and Variant Attributes, `gift_cards:read` for Gift Cards, `outlets:read` for Outlets, `registers:read` for Registers, `payment_types:read` for Payment Types, `users:read` for Users, and `channels:read` for Channels. Filters are entered as a URL query string, and for the Search module the `type` filter is always required.

---

## Support

Need help? Contact our support team at [support.appse.ai](mailto:support.appse.ai)
