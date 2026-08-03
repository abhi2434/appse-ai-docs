---
title: "PayPal"
description: Step-by-step guide to set up PayPal credentials and automate payment workflows in appse ai.
slug: /app-integrations/paypal/
---

PayPal is a leading global digital payments platform that enables businesses and individuals to send, receive, and manage payments online. It supports a wide range of payment operations including one-time payments, recurring subscriptions, invoicing, payouts, and refunds. Integrating PayPal into appse ai allows you to automate your payment workflows, synchronize transaction data with your broader business systems, and eliminate manual processing across your financial operations.

---

## Set Up Credential

:::note

Before you create a credential for PayPal using appse ai, ensure you have an active PayPal Business account and have registered an application in the PayPal Developer Dashboard to obtain your OAuth 2.0 credentials.

:::

### Required Fields

You'll be asked to fill in the following details:

| Field           | Description                                                                 |
| --------------- | --------------------------------------------------------------------------- |
| Connection Name | A name to help you identify this connection                                 |
| Client ID       | Your OAuth 2.0 Client ID from the PayPal Developer Dashboard               |
| Client Secret   | Your OAuth 2.0 Client Secret from the PayPal Developer Dashboard           |
| Mode            | The environment to connect to — **Sandbox** (testing) or **Live** (production) |

### Step-by-Step Guide

#### 1. Open the Credential Form

Click **Select a Credential** and choose **PayPal** from the application list.

<img src="/img/credentials/paypal/click-select-credential-paypal.png" alt="appse ai PayPal Select Credential" width="700"/>

This opens the PayPal credential form. Add your **Connection Name**.
Select the correct **Mode** — **Sandbox** for testing or **Production** for production use.

<img src="/img/credentials/paypal/select-mode-paypal.png" alt="appse ai PayPal Select Mode" width="700"/>

#### 2. Sign In to the PayPal Developer Dashboard

Go to the [PayPal Developer Dashboard](https://developer.paypal.com/dashboard/) and sign in with your PayPal Business account credentials.

#### 3. Register a New Application

1. Navigate to **Apps & Credentials** from the top menu.

<img src="/img/credentials/paypal/apps-and-credentials-paypal.png" alt="appse ai PayPal Apps and Credentials" width="700"/>

2. Click **Create App** under the appropriate environment tab (**Sandbox** or **Live**).

<img src="/img/credentials/paypal/create-app-paypal.png" alt="appse ai PayPal Create App" width="700"/>

3. Enter an **App Name** and select **Merchant** as the app type, then click **Create App**.

<img src="/img/credentials/paypal/enter-app-name-paypal.png" alt="appse ai PayPal App Name" width="700"/>

4. Upon creation, your **Client ID** and **Client Secret** will be displayed on the application details page. Copy both values.

<img src="/img/credentials/paypal/copy-client-id-paypal.png" alt="appse ai PayPal Client ID" width="700"/>


#### 4. Paste Your Credentials in appse ai

Return to the appse ai credential form. Fill in all the required fields — **Client ID**, **Client Secret** — then click **Save** to store and validate your credential.

<img src="/img/credentials/paypal/paste-credentials-paypal.png" alt="appse ai PayPal Save Credential" width="700"/>

:::caution

Keep your credentials secure. Do not share your Client Secret publicly. If you believe your credentials have been compromised, revoke access from the PayPal Developer Dashboard immediately and generate new credentials.

:::

---

## Triggers

| Trigger | Description |
| ------- | ----------- |
| **New Transaction Created** | Triggers when a new transaction is created in your PayPal account. Returns transaction details such as transaction ID, amount, currency, status, and payer information. |

---

## Actions

Here is a list of the available actions for PayPal:

#### Generic

| Action | Description |
| ------ | ----------- |
| **Get Record by ID** | Retrieves the details of any PayPal record by its unique ID. Requires the **Record ID** and the resource type to return the full record details. |

#### Transactions

| Action | Description |
| ------ | ----------- |
| **Search Transactions** | Searches for transactions in your PayPal account based on filter criteria such as date range, transaction status, and amount. Returns a list of matching transaction records. |



## Support

Need help? Contact our support team at [support@appse.ai](mailto:support@appse.ai)
