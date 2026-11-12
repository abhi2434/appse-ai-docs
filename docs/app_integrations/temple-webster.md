---
title: "Temple & Webster"
slug: /app-integrations/temple-webster/
---

Temple & Webster is an Australian online retailer of furniture and homewares that works with drop-ship suppliers through its Supplier API. With appse ai, you can connect your Temple & Webster supplier account to automate purchase order intake, carrier label generation, order manifesting, and cancellation handling.

## Setup Credential

To connect Temple & Webster, you need the **supplier API key** issued by the Temple & Webster Supplier Operations team. appse ai exchanges this key for a short-lived bearer token and uses that token on every call.

### Required Fields

| Field                          | Description                                                                                       |
| ------------------------------ | ------------------------------------------------------------------------------------------------- |
| Connection name                | A name to help you identify this connection.                                                      |
| Environment                    | The Temple & Webster API host: **Production** or **Staging**.                                     |
| API Key      | The supplier API key provided by Temple & Webster Supplier Operations.                            |
| Cloudflare Access Client ID     | `CF-Access-Client-Id`. Required for **Staging** only; leave it blank for Production.             |
| Cloudflare Access Client Secret | `CF-Access-Client-Secret`. Required for **Staging** only; leave it blank for Production.         |

### Step-by-Step Guide

1. **Request API access**: Contact the Temple & Webster Supplier Operations team and ask for supplier API access. They'll give you:
   - A requested key for each environment you need.
   - For Staging, a **Cloudflare Access Client ID** and **Client Secret**.
2. **Create the connection in appse ai**:
   - Go to **Credentials** and select **Temple & Webster**.
   - Choose the **Environment**:
     - **Staging** for testing. You must enter the Cloudflare Access Client ID and Secret.
     - **Production** for live orders. Leave the Cloudflare fields blank.
   - Paste your **API Key**.
   - Click **Save**.

:::tip
Build and test your workflows against **Staging** first. When you're ready for live orders, switch the connection's environment to **Production**. Staging and Production keys are not interchangeable.
:::

---

## Order Lifecycle

Temple & Webster purchase orders move through these statuses. The triggers and actions below follow this flow.

| Status            | Meaning                                                                                  |
| ----------------- | ---------------------------------------------------------------------------------------- |
| `UNSHIPPED_ORDER` | A new purchase order is ready for the supplier to fulfil.                                |
| `LABELLED`        | Carrier labels have been generated for the order.                                        |
| `PENDING_RFP`     | Labels were generated without a Ready For Pickup (RFP) date, so the order must be manifested later. |
| `MANIFESTED`      | The carrier has been told the order is staged and ready for collection (shipment confirmed). |
| `CANCELLED`       | The purchase order has been cancelled.                                                   |

**Typical fulfilment flow:** New order → **Get Order** → **Get Warehouse Locations** → **Generate Label** (with an RFP date) → order is manifested.
If you generate the label without an RFP date, the order moves to `PENDING_RFP`. Call **Manifest Order** once the cartons are staged.

---

## Triggers and Actions

Every application has a pre-defined set of triggers and actions that allow users to perform application specific activities within the platform. Here is a list of all the actions and triggers available:

### Triggers

All triggers poll for purchase orders whose order-ready date falls between the **Order Ready Date From** value you set (`YYYY-MM-DD HH:mm:ss`) and the current time. Each trigger emits one event per purchase order number. Pick a **Warehouse Location** to limit results to one ship-from location.

- New orders created - Trigger when new unshipped purchase orders (`UNSHIPPED_ORDER`) are available.
- Shipment is confirmed - Trigger when purchase orders are manifested (`MANIFESTED`) and the shipment is confirmed.
- Orders cancelled - Trigger when purchase orders are cancelled (`CANCELLED`).

:::note
Triggers return purchase order numbers only. To get line items, addresses and carrier details, add a **Get Order** action after the trigger.
:::

### Actions

> Order Actions

- Get Order - Return the full current state of a single purchase order. This includes line items, consignment cartons, addresses, carrier, and label/manifest resource links.
- List Orders - Return the purchase order numbers whose order-ready date falls in a date range (`YYYY-MM-DD`). **Order Ready Date From** and **Order Ready Date To** are required. You can also filter by order status, purchase order (partial match), SKU, and warehouse location.
- List Orders (Today) - Return the purchase orders whose order-ready date is today. appse ai sets the date range to the current date for you. Order status (default `UNSHIPPED_ORDER`), purchase order, SKU, and location filters are optional.
- Manifest Order - Tell carriers that an order is staged and ready for collection. Use this only for orders in `PENDING_RFP` status, meaning orders that were labelled without an RFP date.

> Label Actions

- Generate Label - Generate carrier labels for a purchase order's cartons. Returns the label PDF URL, assigned carrier, tracking number, and a label ID for each carton.
  - **Purchase Order** (required) - for example `TW123456`.
  - **Location ID** (required) - the warehouse location that the carrier picks up from. Get it from **Get Warehouse Locations**.
  - **RFP Date** (optional, `YYYY-MM-DD`) - the date the order is picked, packed, labelled and staged for collection. If you leave it empty, the order moves to `PENDING_RFP` and you must call **Manifest Order** later. Temple & Webster Supplier Operations must enable this option for your account.
  - **Consignment** (required) - one entry per carton. Each entry has a container type (always `Carton(s)`), weight in **kg**, width, depth and height in **cm**, and an optional description you can use to match each carton to its returned label ID.

> Warehouse Actions

- Get Warehouse Locations - List your valid ship-from warehouse locations. Enter a **Location ID** to return one location, or leave it empty to return all of them.

---

## Need Help?

If you’re unsure about any field or face connection issues, reach out to our support team at [hello@appse.ai](mailto:hello@appse.ai)
