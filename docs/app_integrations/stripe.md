---
title: "Stripe"
description: Step-by-step guide to set up Stripe credentials and automate payment, billing, and customer workflows in appse ai.
slug: /app-integrations/stripe/
---

Stripe is a global payments platform for businesses of all sizes, enabling online and in-person payment processing, subscription billing, invoicing, and financial reporting. With appse ai, you can connect your Stripe account to automate payment workflows, synchronize customer and transaction data with your broader business systems, and eliminate manual reconciliation across your operations.

---

## Set Up Credential

:::note

Before you create a credential for Stripe using appse ai, ensure you have a Stripe account and have access to your API keys from the Stripe Dashboard.

:::

### Required Fields

You'll be asked to fill in the following details:

| Field           | Description                                                                                   |
| --------------- | --------------------------------------------------------------------------------------------- |
| Connection Name | A name to help you identify this connection                                                   |
| Secret Key      | Your Stripe Secret API Key (starts with `sk_live_` for production or `sk_test_` for testing) |

### Step-by-Step Guide

#### 1. Sign In to Stripe

Go to [dashboard.stripe.com](https://dashboard.stripe.com/) and sign in to your Stripe account.

<img src="/img/credentials/stripe/stripe-login.png" alt="appse ai Stripe Sign In" width="700"/>

#### 2. Copy Your Secret Key

In the Stripe Dashboard, click on **Developers** in the top navigation bar, then select **API keys** from the left sidebar. Under the **Standard keys** section, locate your **Secret key**, click **Reveal live key**, and copy it.

:::caution

Your Secret Key grants full access to your Stripe account. Never share it publicly or expose it in client-side code. Use `sk_test_` keys during development and switch to `sk_live_` keys before going to production.

:::

#### 3. Create a New Credential in appse ai

Open the Credentials page in appse ai and select **Stripe** from the application list. Enter a **Connection Name** to identify this connection.

<img src="/img/credentials/stripe/stripe-create-new-cread-appseai.png" alt="appse ai Stripe Create New Credential" width="700"/>

#### 4. Paste the Secret Key and Save

Paste the copied **Secret Key** into the **Secret Key** field and click **Save** to store and validate your credential.

<img src="/img/credentials/stripe/paste-secret-stripe.png" alt="appse ai Stripe Paste Secret Key" width="700"/>

---

## Triggers

All Stripe triggers poll for newly created records and fire once per new record found. Every trigger below shares the same two parameters:

| Field | Required | Description |
| ----- | -------- | ----------- |
| Fetch Data Since | Yes | The starting point in time to check for new records. Set this cautiously before activating the workflow — changes made after activation don't affect an already-running execution. |
| Limit | Yes | The maximum number of records fetched per poll, bound by Stripe's API capacity. Defaults to 50. |

Here is the list of available triggers for Stripe:

| Trigger                        | Description                                                |
| ------------------------------ | ----------------------------------------------------------- |
| **New Customer Created**       | Triggers when a new customer is created in Stripe.         |
| **New Charge Created**         | Triggers when a new charge is created in Stripe.           |
| **New Payment Intent Created** | Triggers when a new payment intent is created in Stripe.   |
| **New Invoice Created**        | Triggers when a new invoice is created in Stripe.           |
| **New Refund Created**         | Triggers when a new refund is created in Stripe.           |
| **New Dispute Created**        | Triggers when a new dispute is created in Stripe.           |


## Tools

AI tools expose the same underlying operations as [Actions](#actions) below, but are written for an AI agent to call autonomously within an appse ai agentic workflow — the agent picks the tool and fills its parameters based on conversation context, rather than a workflow builder configuring it upfront.

Here is the list of available tools for Stripe:

| Tool | Description |
| ---- | ----------- |
| **Create Customer** | Registers a new person or business as a Stripe Customer. Use before creating charges, invoices, or subscriptions for them. |
| **Create Invoice Draft** | Starts a new draft invoice for a customer. Use as the first step before adding invoice items and finalizing. |
| **Create Invoice Item** | Adds a line item — a charge, fee, or credit — to a draft invoice, a subscription, or the customer's next invoice. |
| **Finalize Invoice** | Locks a draft invoice by stamping it with a number, once an agent has finished populating it. May trigger automatic collection or send the invoice to the customer. |
| **Search Records** | Finds Stripe records matching a filter (e.g. a customer by email, invoices by status) instead of a single known ID. |
| **Get Record by ID** | Retrieves the full details of a single Stripe record when the agent already has its object ID. |

## Actions

Here is the list of available actions for Stripe:

| Action | Description |
| ------ | ----------- |
| **Create Customer** | Create a new customer object in Stripe to track a person or business for one-off or recurring payments. |
| **Create Invoice Draft** | Create a draft invoice for a customer. Once finalized, the invoice can be collected automatically or sent to the customer for manual payment. |
| **Create Invoice Item** | Add a billable line item to an invoice — attached to a specific draft invoice or subscription, or queued for the customer's next invoice. |
| **Finalize Invoice** | Stamp a draft invoice with a number, locking it from further edits. Depending on the invoice's collection method, this can also trigger automatic payment collection or send the invoice to the customer. |
| **Search Records** | Search Stripe records of a selected object type using Stripe's Search Query Language. See the [Search Records query guide](#search-records-query-guide) below for supported object types, fields, and syntax. |
| **Get Record by ID** | Retrieve any Stripe record — customer, charge, payment intent, payment method, invoice, subscription, product, price, refund, dispute, coupon, promotion code, checkout session, transfer, payout, balance transaction, or event — by its unique ID. |

### Search Records Query Guide

**Search Records** queries Stripe's Search API directly, so it only supports the object types and fields Stripe indexes for search — this is a smaller set than what **Get Record by ID** can retrieve.

**Supported object types**

| Object Type | Value |
| ----------- | ----- |
| Charge | `charges` |
| Customer | `customers` |
| Invoice | `invoices` |
| Payment Intent | `payment_intents` |
| Price | `prices` |
| Product | `products` |
| Subscription | `subscriptions` |

**Searchable fields, by object type**

| Object Type | Fields |
| ----------- | ------ |
| Charge | `amount`, `billing_details.address.postal_code`, `created`, `currency`, `customer`, `disputed`, `metadata`, `payment_method_details.card.last4`/`exp_month`/`exp_year`/`brand`/`fingerprint`, `refunded`, `status` |
| Customer | `created`, `email`, `metadata`, `name`, `phone` |
| Invoice | `created`, `currency`, `customer`, `last_finalization_error_code`, `last_finalization_error_type`, `metadata`, `number`, `receipt_number`, `status`, `subscription`, `total` |
| Payment Intent | `amount`, `created`, `currency`, `customer`, `metadata`, `status` |
| Price | `active`, `currency`, `lookup_key`, `metadata`, `product`, `type` |
| Product | `active`, `description`, `metadata`, `name`, `shippable`, `url` |
| Subscription | `created`, `metadata`, `status`, `canceled_at` |

**Query syntax**

| Operator | Meaning |
| -------- | ------- |
| `:` | Exact match |
| `~` | Substring match — string fields only, minimum 3 characters |
| `>`, `<`, `>=`, `<=` | Numeric or date comparison |
| `AND`, `OR`, `-` | Combine or negate clauses — up to 10 clauses per query. `AND` and `OR` cannot be mixed in the same query. |

**Parameters**

| Field | Required | Description |
| ----- | -------- | ----------- |
| Object Type | Yes | The Stripe resource to search (see table above). |
| Search Query | Yes | The query string, written in Stripe's Search Query Language, using the fields listed above for the selected Object Type. |
| Limit | No | Number of records to return, from 1–100. Defaults to 10. |
| Page | No | Pagination cursor. Pass the `next_page` value from a previous response to continue from where it left off; leave blank to fetch the first page. |

**Example queries**

| Example | Result |
| ------- | ------ |
| `email:'jenny@example.com'` | Customers with an exact email match |
| `status:'active' AND metadata['foo']:'bar'` | Active subscriptions with a matching metadata key |
| `created>1620310503` | Records created after a given Unix timestamp |

:::note

Search results are near-real-time, not immediately consistent — a record created moments ago may take a few seconds to appear in search results.

:::

---

## Support

Need help? Contact our support team at [support@appse.ai](mailto:support@appse.ai)
