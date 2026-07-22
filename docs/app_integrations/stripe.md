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

Here is the list of available triggers for Stripe:

| Trigger                        | Description                                                    |
| ------------------------------ | -------------------------------------------------------------- |
| **New Customer Created**       | Triggers when a new customer is created in Stripe.             |
| **New Refund Created**         | Triggers when a refund is issued for a charge.                 |
| **New Payment Intent Created** | Triggers when a new payment intent is created.                 |
| **New Invoice Created**        | Triggers when a new invoice is generated.                      |
| **New Charge Created**         | Triggers when a new charge is created.                         |
| **New Dispute Created**        | Triggers when a dispute is opened on a charge.                 |


## Actions

Here is the list of available actions for Stripe:

| Action              | Description                                                              |
| ------------------- | ------------------------------------------------------------------------ |
| **Get Record by ID** | Retrieve any Stripe record (customer, charge, invoice, payment intent, refund, or dispute) by its ID. |

---

## Support

Need help? Contact our support team at [support@appse.ai](mailto:support@appse.ai)
