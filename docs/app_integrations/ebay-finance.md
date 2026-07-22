---
title: "eBay Finance"
slug: /app-integrations/ebay-finance/
description: Step-by-step guide to set up eBay Finance credentials and automate financial workflows in appse ai.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

eBay Finance gives sellers programmatic access to their financial data on eBay, including payouts, transactions, and funds summaries. Integrating eBay Finance with appse ai allows you to automate financial reporting, monitor payout activity, and track seller earnings — directly within your AI-powered workflows.

---

## Setup Credential

:::note

Before you create a credential for eBay Finance using appse ai, ensure you have an [eBay Developer Account](https://developer.ebay.com/) and have created a Production application to obtain your API keys.

:::

### Required Fields

You'll be asked to fill in the following details:

| Field | Description |
|---|---|
| **Connection Name** | A label to identify this credential within appse ai. |
| **App ID (Client ID)** | The Client ID from your eBay Developer Portal Production keyset. |
| **Cert ID (Client Secret)** | The Client Secret from your eBay Developer Portal Production keyset. |
| **RuName (Redirect URL Name)** | The RuName (eBay Redirect URL Name) associated with the redirect URL entry registered in the eBay Developer Portal for appse ai. |
| **Base API URL** | Select your environment: Production — `https://apiz.ebay.com/` or Sandbox — `https://apiz.sandbox.ebay.com/` |
| **Authorization URL** | Select your environment: Production — `https://auth.ebay.com/oauth2/authorize` or Sandbox — `https://auth.sandbox.ebay.com/oauth2/authorize` |
| **Token URL** | Select your environment: Production — `https://api.ebay.com/identity/v1/oauth2/token` or Sandbox — `https://api.sandbox.ebay.com/identity/v1/oauth2/token` |
| **API Access Scope** | Pre-filled with the required eBay Finances API scopes. |

### Step-by-Step Guide

#### 1. Open the Credential Form

Click **Select a Credential** and choose **eBay Finance** from the application list.

<img src="/img/credentials/ebay-finance/select-app.png" alt="appse ai eBay Finance Select Credential" width="700"/>

This opens the eBay Finance credential form. Enter your **Connection Name**.

---

#### 2. Get Your App ID and Cert ID

Navigate to the [eBay Developer Portal — Application Keys](https://developer.ebay.com/my/keys).

<img src="/img/credentials/ebay-finance/application-keys.png" alt="eBay Developer Portal Application Keys" width="700"/>

Under the **Production** keyset:

- Copy the **App ID (Client ID)** and paste it into the **App ID (Client ID)** field in appse ai.
- Copy the **Cert ID (Client Secret)** and paste it into the **Cert ID (Client Secret)** field in appse ai.

:::note
Use the **Production** keyset, not the Sandbox keyset, unless you are testing against the eBay Sandbox environment.
:::

On the same page, locate the **User Tokens** link next to your Client ID and click it to proceed to the next step.

---

#### 3. Get Your RuName (Redirect URL Name)

You should now be on the **User Tokens** page. If not, navigate directly to [eBay Developer Portal — User Tokens](https://developer.ebay.com/my/auth).

<img src="/img/credentials/ebay-finance/user-tokens-ru-name.png" alt="eBay Developer Portal User Tokens RuName" width="700"/>

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

#### 4. Select Environment URLs

Select the appropriate URL for each field based on your target environment:

| Field | Production | Sandbox |
|---|---|---|
| **Base API URL** | `https://apiz.ebay.com/` | `https://apiz.sandbox.ebay.com/` |
| **Authorization URL** | `https://auth.ebay.com/oauth2/authorize` | `https://auth.sandbox.ebay.com/oauth2/authorize` |
| **Token URL** | `https://api.ebay.com/identity/v1/oauth2/token` | `https://api.sandbox.ebay.com/identity/v1/oauth2/token` |

:::note
Select **Production** URLs when connecting to your live eBay seller account. Use **Sandbox** URLs only for testing with eBay's Sandbox environment.
:::

---

#### 5. Authorize and Save

Once all fields are filled in, click **Save and Authorize** in appse ai.

<img src="/img/credentials/ebay-finance/credential-form.png" alt="appse ai eBay Finance Save and Authorize" width="700"/>

You will be redirected to eBay's OAuth authorization page. Log in with your eBay seller account and grant the requested permissions. Once authorized, you will be redirected back to appse ai.

<img src="/img/credentials/ebay-finance/save-credentials.png" alt="appse ai eBay Finance Credential Saved" width="700"/>

If successful, your eBay Finance credential will display a **✓** icon. You can now use eBay Finance in your workflows.

If it fails, a **!** icon will appear — recheck your App ID, Cert ID, and RuName, or contact support.

:::caution
Keep your Cert ID (Client Secret) secure. Do not share it publicly. Anyone with access to your credentials can interact with your eBay seller account.
:::

---

## Triggers and Actions

Every application has a pre-defined set of triggers and actions. Here is the current eBay Finance trigger and action set available in appse ai.

<Tabs>

<TabItem value="triggers" label="Triggers" default>

### Trigger Events

#### New Payout Created

Triggers when a new payout is issued to the seller in eBay. Use this to automate financial notifications, reconciliation workflows, and payout tracking.

##### Select Credentials and Trigger Event

Click on **Continue**.

##### Configuration Fields

| Field | Description |
|---|---|
| **Fetch data since** | Set the start date and time for fetching new payouts. It is recommended to set this cautiously before activating the workflow. **Note:** eBay only allows retrieving payouts from the last **5 years**. Dates older than that will result in an API error. |
| **Limit** | Maximum number of payout records to retrieve per run. Default is 10. |

Click on **Continue**, then **Run** the node.

</TabItem>

<TabItem value="actions" label="Actions">

### Payout Actions

#### Get Payouts

Retrieves a list of payouts for the seller from the eBay Finances API, with optional filtering by status and date range.

##### Select Credentials and Action Event

Click on **Continue**.

##### Configuration Fields

| Field | Description |
|---|---|
| **Filter** *(optional)* | Filter expression to narrow payout results. Examples: `payoutStatus:{SUCCEEDED}` for succeeded payouts only; `payoutDate:[2026-01-01T00:00:00.000Z..2026-01-31T23:59:59.999Z]` for a date range. **Note:** eBay only allows filtering payouts from the last **5 years**. |
| **Limit** *(optional)* | Maximum number of payout records to return per request. Maximum is 200. Default is 20. |
| **Offset** *(optional)* | Number of records to skip before returning results. Use with Limit for pagination. Default is 0. |

Click on **Continue**, then **Run** the node.

---

### Finance Actions

#### Get Seller Funds Summary

Retrieves a summary of the seller's available funds, funds on hold, and total balance from the eBay Finances API. No additional configuration is required.

##### Select Credentials and Action Event

Click on **Continue**, then **Run** the node.

---

#### Get Transactions

Retrieves a list of financial transactions for the seller from the eBay Finances API, with optional filtering by type, status, date range, order, or buyer.

##### Select Credentials and Action Event

Click on **Continue**.

##### Configuration Fields

| Field | Description |
|---|---|
| **Filter** *(optional)* | Filter expression to narrow transaction results. Examples: `transactionType:{SALE}` for sales only; `transactionStatus:{PAYOUT}` for paid out transactions; `transactionDate:[2026-01-01T00:00:00.000Z..2026-01-31T23:59:59.999Z]` for a date range; `orderId:{12-12345-67890}` for a specific order; `buyerUsername:{buyer123}` for a specific buyer. **Note:** If no filter is set, transactions from the last **90 days** are returned by default. The maximum date range when filtering by `transactionDate` is **36 months**. |
| **Limit** *(optional)* | Maximum number of transaction records to return per request. Maximum is 1000. Default is 20. |
| **Offset** *(optional)* | Number of records to skip before returning results. Use with Limit for pagination. Default is 0. |

Click on **Continue**, then **Run** the node.

</TabItem>

</Tabs>

---

## Support

Need help? Contact our support team at [support@appse.ai](mailto:support@appse.ai)
