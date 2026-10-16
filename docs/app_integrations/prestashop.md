---
title: "PrestaShop"
sidebar_label: "PrestaShop"
description: "Step-by-step guide to set up PrestaShop Webservice API credentials for appse ai integration"
slug: /app-integrations/prestashop-webservice/
---

PrestaShop is an open-source e-commerce platform used to build and run online stores, with built-in catalog, order, customer, and stock management. With appse ai, you can connect your PrestaShop store through the classic **Webservice API** to automate customer, address, product, stock, and order workflows across your business systems.

This guide explains how to configure a PrestaShop credential in appse ai using the **Webservice API**.

:::info

The **Webservice API** (Advanced Parameters → Webservice) is PrestaShop's original REST API, secured with a single key sent as a query parameter. It is **not** the same as the newer **Admin API**, which uses OAuth 2.0 client credentials. This guide covers the Webservice key.

:::

---

## Setup Credential

Follow the steps below to set up your PrestaShop Webservice credential.

### Required Fields

You'll be asked to fill in the following details:

| Field            | Description                                                                                                                                                                 |
| ---------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection Name  | A name to help you identify this connection.                                                                                                                              |
| Shop URL         | The webservice **Main entry point** URL shown in **Advanced Parameters (Left menu Configure section) → Webservice** once the webservice is enabled. Paste it exactly as shown, including `/api`, without a trailing slash. |
| Webservice Key   | The key generated under **Advanced Parameters (Left menu Configure section) → Webservice** in your PrestaShop back office. appse ai sends it as the `ws_key` query parameter.                          |

---

### Step-by-Step Guide

#### 1. Log in to the PrestaShop back office

Open your PrestaShop back office and log in with an employee account that can access **Advanced Parameters (Left menu Configure section)**.

#### 2. Open the Webservice page

In the left menu, go to **Advanced Parameters (Configure section) → Webservice**.

<img src="/img/credentials/prestashop-webservice/ps-menu-webservice.png" alt="PrestaShop Advanced Parameters menu with Webservice" width="700"/>

#### 3. Enable the webservice

Set **Enable PrestaShop's webservice** to **Yes**, then click **Save**.

#### 4. Add a new webservice key

Click **Add a new webservice key**. PrestaShop generates a key for you; use the regenerate icon if you'd rather issue a new one. Enter a **Description**, e.g. `appse ai`.

<img src="/img/credentials/prestashop-webservice/ps-add-webservice-key.png" alt="PrestaShop Add a new webservice key form with generated key and description" width="700"/>

#### 5. Grant the resources and methods appse ai needs

Tick **GET** on **Customers** at minimum — the connection test reads one customer by id. Then tick the permissions for every resource the actions and triggers you plan to use require:

| Resource            | Used for                                                           |
| ------------------- | ------------------------------------------------------------------- |
| `customers`          | Creating, updating, reading, and searching customers.              |
| `addresses`          | Creating, updating, and reading customer addresses.                |
| `products`           | Creating, updating, reading, and searching products.               |
| `combinations`       | Creating and reading product variants (combinations).              |
| `stock_availables`   | Reading and updating stock quantities.                              |
| `orders`             | Reading orders.                                                     |
| `order_histories`    | Reading and updating order status.                                  |
| `order_carriers`     | Reading and updating order tracking numbers.                        |
| `countries`          | Searching countries and populating the Country option list.         |
| `states`             | Searching states and populating the State option list.              |
| `groups`             | Populating the Default customer group option list.                  |
| `categories`         | Populating the Categories option list.                              |
| `tax_rule_groups`    | Populating the Tax rule option list.                                 |
| `order_states`       | Populating the New status option list.                               |

<img src="/img/credentials/prestashop-webservice/ps-webservice-permissions.png" alt="PrestaShop webservice key permissions grid with resources and methods ticked" width="700"/>

:::note

Enable all of the above if you're not sure which workflows you'll build, or come back and add resources later — appse ai only needs **GET** permission on a resource it uses to populate a dropdown.

:::

Click **Save**.

#### 6. Copy the key

Copy the key before leaving the page — PrestaShop keeps showing it on this page, but you'll need it for the next step.

<img src="/img/credentials/prestashop-webservice/ps-webservice-key-saved.png" alt="PrestaShop saved webservice key displayed on the Webservice page" width="700"/>

#### 7. Add the credential in appse ai

In appse ai, open the PrestaShop **Configure Credentials** form and fill in:

- **Connection Name:** a name to identify this connection.
- **Shop URL:** 	The webservice Main entry point URL shown in Advanced Parameters → Webservice. Paste it exactly as shown, including /api, without a trailing slash.
- **Webservice Key:** the key copied in Step 6.

<img src="/img/credentials/prestashop-webservice/appseai-credential-form.png" alt="appse ai PrestaShop Webservice Configure Credentials form" width="700"/>

Click **Save**. On successful authorization, your credential is saved and your PrestaShop store is connected to **appse ai**.

---

## How data moves

- **Read** actions and triggers return PrestaShop's data as JSON, as is.
- **Create** actions send your input as JSON; appse ai converts it to the XML PrestaShop's Webservice expects.
- **Update** actions read the existing record first, then apply only the fields you filled in, and write the whole record back. An empty field means "leave unchanged" — an update can't blank a value this way; edit it directly in PrestaShop if you need to clear it.
- Fields that vary by language, such as a product name, take one entry per language id:

```json
{ "name": [{ "id": "1", "value": "Blue Cotton Shirt" }] }
```

:::warning Known limits

- An email containing a `+` (e.g. `riya+shop@acme-corp.com`) can't be searched yet — the `+` turns into a space on the way to PrestaShop.
- Records saved in the same second as the last record a trigger saw can be missed if a run ends exactly at its limit. Keep **Limit** at 50 or higher.

:::

---

## Triggers

Here is the list of available triggers for PrestaShop. Each one takes a **Fetch data since** date/time (in your shop's time zone) and a **Limit** on how many records to fetch per run.

| Trigger                       | Description                                                                               |
| ------------------------------ | ------------------------------------------------------------------------------------------- |
| **New Customer Created**       | Starts the workflow for each new customer account in PrestaShop.                           |
| **Customer Updated**           | Starts the workflow for each customer that was created or changed in PrestaShop.           |
| **Address Updated**            | Starts the workflow for each customer address that was created or changed in PrestaShop.   |
| **New Order Created**          | Starts the workflow for each new order placed in PrestaShop.                               |
| **Order Updated**              | Starts the workflow for each order that was created or changed in PrestaShop.              |
| **Order Status Changed**       | Starts the workflow each time an order moves to a new status.                              |
| **Product Updated**            | Starts the workflow for each product that was created or changed in PrestaShop.            |
| **New Combination Created**    | Starts the workflow for each new product combination (variant) created in PrestaShop.      |

---

## Actions

Here is the list of available actions for PrestaShop, grouped by area.

### Customer Actions

| Action                     | Description                                                                                       |
| --------------------------- | ----------------------------------------------------------------------------------------------- |
| **Create Customer**         | Creates a customer account in PrestaShop and returns the new customer.                           |
| **Update Customer**         | Updates a customer in PrestaShop. Only the fields you fill are changed.                          |
| **Get Customer by ID**      | Gets one customer from PrestaShop by its id.                                                     |
| **Find Customers by Email**| Finds PrestaShop customers whose email matches exactly. Returns no records when there's no match.|

### Address Actions

| Action                          | Description                                                                             |
| -------------------------------- | --------------------------------------------------------------------------------------- |
| **Create Address**                | Creates a customer address in PrestaShop and returns the new address.                   |
| **Update Address**                | Updates a customer address in PrestaShop. Only the fields you fill are changed.         |
| **Get Address by ID**              | Gets one address from PrestaShop by its id.                                             |
| **Get Addresses by Customer**     | Gets every address belonging to a PrestaShop customer. Returns no records when the customer has none. |

### Product Actions

| Action                          | Description                                                                                           |
| -------------------------------- | ------------------------------------------------------------------------------------------------------- |
| **Create Product**                | Creates a product in PrestaShop and returns the new product. Set stock with **Update Stock Quantity** afterwards. |
| **Update Product**                | Updates a product in PrestaShop. Only the fields you fill are changed. Stock isn't changed here.      |
| **Get Product by ID**             | Gets one product from PrestaShop by its id.                                                           |
| **Find Products by Reference**    | Finds PrestaShop products whose reference (SKU) matches exactly. Returns no records when there's no match. |

### Combination (Variant) Actions

| Action                                | Description                                                                                                  |
| -------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Create Combination**                 | Creates a combination (variant) of a product, e.g. a size or colour, and returns the new combination. Set its stock with **Update Stock Quantity** afterwards. |
| **Get Combinations by Product ID**     | Gets every combination (variant) of a product, with its attribute values and images. Returns no records when the product has none. |

### Stock Actions

| Action                            | Description                                                                                                    |
| ------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| **Get Stock for Product**            | Gets the stock records of a product. Each record's `id_product_attribute` is `0` for the product itself or the combination id. |
| **Get Stock for Product Variant**    | Gets the stock record of one specific product variant (combination).                                         |
| **Update Stock Quantity**            | Sets the available quantity of a stock record. Get the stock id with **Get Stock for Product** first.        |

### Order Actions

| Action                           | Description                                                                                          |
| ----------------------------------- | -------------------------------------------------------------------------------------------------- |
| **Get Order by ID**                 | Gets one order from PrestaShop by its id, with its order lines under `associations.order_rows`.     |
| **Update Order Status**             | Moves an order to a new status, the same as changing it in the back office.                         |
| **Get Order Shipments**             | Gets the carrier records of an order. Use a record id with **Update Order Tracking Number**.        |
| **Update Order Tracking Number**    | Sets the tracking number on an order's carrier record.                                              |

### Country & State Actions

| Action                           | Description                                                                              |
| ----------------------------------- | ----------------------------------------------------------------------------------------- |
| **Find Countries by ISO Code**      | Finds PrestaShop countries whose ISO code matches exactly. Returns no records when there's no match. |
| **Get Country by ID**               | Gets one country from PrestaShop by its id.                                              |
| **Find States by ISO Code**         | Finds PrestaShop states whose ISO code matches exactly. Returns no records when there's no match.    |
| **Get State by ID**                 | Gets one state from PrestaShop by its id.                                                |

---

## Support

Need help? Contact the support team at [support@appse.ai](mailto:support@appse.ai)
