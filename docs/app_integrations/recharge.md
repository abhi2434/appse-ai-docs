---
title: "Recharge"
slug: /app-integrations/recharge/
description: Step-by-step guide to set up Recharge credentials and automate subscription management workflows in appse ai.
---

Recharge is a leading subscription management platform built for Shopify merchants. It enables businesses to offer recurring billing, manage subscriber lifecycles, and automate subscription workflows. Integrating Recharge with appse ai lets you trigger automations on subscription events and perform actions on customer and subscription records — keeping your subscription data in sync across your entire stack.

---

## Set Up Credential

:::note

Before creating a Recharge credential in appse ai, ensure you have a Recharge merchant account and have generated an API token from the Recharge merchant portal.

:::

### Required Fields

You'll be asked to fill in the following details:

| Field           | Description                                              |
| --------------- | -------------------------------------------------------- |
| Connection Name | A name to help you identify this connection              |
| API Key         | Your API token generated from the Recharge merchant portal |

---

### Step-by-Step Guide

#### 1. Open the Credential Form

Click **Select a Credential** and choose **Recharge** from the application list.

<img src="/img/credentials/recharge/select-recharge-credential.png" alt="appse ai Recharge Select Credential" width="700"/>

This opens the Recharge credential form. Add your **Connection Name**.

<img src="/img/credentials/recharge/recharge-connection-name.png" alt="appse ai Recharge Connection Name" width="700"/>

#### 2. Sign In to the Recharge Merchant Portal

Go to the Recharge merchant portal at `merchant.rechargepayments.com` and sign in with your Recharge account.

#### 3. Navigate to API Tokens

From the left sidebar, go to **Tools & apps** and click **API tokens**.

<img src="/img/credentials/recharge/recharge-navigate-api-tokens.png" alt="appse ai Recharge Navigate to API Tokens" width="700"/>

#### 4. Create a New API Token

Click **Create an API token**. Enter a name for the token and select the required permission scopes.

<img src="/img/credentials/recharge/recharge-create-api-token.png" alt="appse ai Recharge Create API Token" width="700"/>

Enable the following scopes to support all appse ai actions and triggers:

`read_customers` `write_customers` `read_subscriptions` `write_subscriptions` `read_orders` `write_orders` `read_products`

Click **Save** to generate the token.

#### 5. Copy Your API Token

Once generated, copy the API token immediately.

<img src="/img/credentials/recharge/recharge-copy-api-token.png" alt="appse ai Recharge Copy API Token" width="700"/>

#### 6. Paste the API Token in appse ai

Return to the appse ai credential form. Paste the copied token into the **API Key** field and click **"Save"** to store and validate your credential.

<img src="/img/credentials/recharge/recharge-paste-api-key-1.png" alt="appse ai Recharge Save Credential" width="700"/>

:::caution

Keep your API token secure. Do not share it publicly. If a token is compromised, revoke it immediately from the Recharge merchant portal and generate a new one.

:::

---

## Triggers and Actions

Here is a list of the available triggers and actions for Recharge:

### Triggers

| Trigger | Description |
| ----------------------------- | ----------------------------------------------------------------- |
| New Customer Created          | Fires whenever a new customer record is created in Recharge.      |
| Customer Updated              | Fires whenever an existing customer's details are modified in Recharge. |
| New Subscription Created      | Fires whenever a new subscription is created for a customer in Recharge. |
| Subscription Updated          | Fires whenever an existing subscription is modified (e.g., plan change, quantity update, next charge date). |
| Order Updated                 | Fires whenever an existing Recharge order is updated.             |

---

### Actions

#### Customer Actions

| Action              | Description                                                               |
| ------------------- | ------------------------------------------------------------------------- |
| Get Customer by ID  | Retrieve a Recharge customer record using their unique customer ID.       |

#### Metafields Actions

| Action                            | Description                                                                 |
| --------------------------------- | --------------------------------------------------------------------------- |
| Get Metafields for a Subscription | Retrieve all metafields associated with a specific subscription.            |
| Update Metafield                  | Update the value of an existing metafield on a Recharge resource.           |
| Create Metafield                  | Create a new metafield and attach it to a Recharge resource.                |

#### Subscription Actions

| Action                  | Description                                                                                      |
| ----------------------- | ------------------------------------------------------------------------------------------------ |
| Get Subscription by ID  | Retrieve the full details of a specific subscription using its unique ID.                        |
| Update Subscription     | Modify subscription details such as quantity, next charge date, or shipping address.             |

---

## Support

Need help? Contact our support team at [support@appse.ai](mailto:support@appse.ai)
