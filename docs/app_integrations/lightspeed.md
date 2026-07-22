---
title: "Lightspeed (X-Series)"
description: Step-by-step guide to set up Lightspeed X-Series credentials and automate retail, POS, and inventory workflows in appse ai.
slug: /app-integrations/lightspeed/
---

Lightspeed X-Series (formerly Vend) is a cloud-based POS and retail management platform for managing products, customers, sales, and inventory across physical and online stores. With appse ai, you can connect your Lightspeed account to automate retail workflows, synchronize sales and product data with your broader business systems, and eliminate manual data entry across your operations.

---

## Set Up Credential

:::info

Before you create a credential for Lightspeed X-Series using appse ai, ensure you have a Lightspeed Developer Account and have created an application to obtain your OAuth 2.0 Client ID and Client Secret.

:::

### Required Fields

You'll be asked to fill in the following details:

| Field                | Description                                                                                                    |
| -------------------- | -------------------------------------------------------------------------------------------------------------- |
| Connection Name      | A name to help you identify this connection                                                                    |
| Client ID            | Your OAuth 2.0 Client ID from the Lightspeed Developer Portal                                                  |
| Client Secret        | Your OAuth 2.0 Client Secret from the Lightspeed Developer Portal                                              |
| Store Domain Prefix  | The subdomain of your Lightspeed store URL (e.g., `mystore` from `mystore.retail.lightspeed.app`)              |

### Step-by-Step Guide

#### 1. Create a Developer Account

Sign up for a Lightspeed Developer account at [https://developers.retail.lightspeed.app/register](https://developers.retail.lightspeed.app/register).

<img src="/img/credentials/lightspeed/create-account-lightspeed.png" alt="appse ai Lightspeed Developer Registration" width="700"/>

:::note

Developer credentials are separate from your Lightspeed Retail store account.

:::

#### 2. Sign In to the Developer Portal

Sign in to the [Lightspeed Developer Portal](https://developers.retail.lightspeed.app).

<img src="/img/credentials/lightspeed/lightspeed-login.png" alt="appse ai Lightspeed Developer Portal Sign In" width="700"/>

#### 3. Navigate to Applications

Go to the **Applications** section in your developer dashboard at [https://developers.retail.lightspeed.app/applications](https://developers.retail.lightspeed.app/applications).

<img src="/img/credentials/lightspeed/click-add-application-lightspeed.png" alt="appse ai Lightspeed Create Application" width="700"/>

#### 4. Create a New Application

Click **Create Application** and provide a name for your app.

<img src="/img/credentials/lightspeed/create-new-cred-appseai-lightspeed.png" alt="appse ai Lightspeed Create a New Application" width="700"/>

#### 5. Add the Redirect URL

Add the **Redirect URL** from the appse ai credential form to the application settings in the Lightspeed Developer Portal.

<img src="/img/credentials/lightspeed/add-redirect-url-lightspeed.png" alt="appse ai Lightspeed Redirect URL" width="700"/>

:::note

The redirect URI must exactly match what is registered in your developer dashboard.

:::

#### 6. Configure Scopes

Ensure the following scopes are added to your application:

`products:read` `products:write` `customers:read` `customers:write` `sales:read` `sales:write` `inventory:read` `inventory:write` `registers:read` `outlets:read` `suppliers:read` `suppliers:write` `payment_types:read` `retailers:read` `products:read:price_books`

<img src="/img/credentials/lightspeed/scopes-lightspeed.png" alt="appse ai Lightspeed Scopes" width="700"/>

:::note

These scopes are added by default when setting up the credential in appse ai. You can adjust them based on your integration needs.

:::

#### 7. Copy Client ID and Client Secret

After creating the application, copy the **Client ID** and **Client Secret** from the application settings page.

<img src="/img/credentials/lightspeed/client-id-client-secret-lightspeed.png" alt="appse ai Lightspeed Client ID and Client Secret" width="700"/>

#### 8. Copy Store Domain Prefix

In the appse ai credential form, copy your **Store Domain Prefix** — the subdomain part of your Lightspeed store URL.

For example, if your store URL is `mystore.retail.lightspeed.app`, enter `mystore`.

<img src="/img/credentials/lightspeed/copy-domain-lightspeed.png" alt="appse ai Lightspeed Copy Store Domain" width="700"/>

#### 9. Paste Credentials in appse ai

Open the Credentials page in appse ai. Paste the **Client ID** and **Client Secret** into the respective fields.

<img src="/img/credentials/lightspeed/enter-domain-appseai-lightspeed.png" alt="appse ai Lightspeed Store Domain Prefix" width="700"/>

#### 10. Save & Authorize

Click **Save & Authorize** to initiate the OAuth 2.0 connection.

<img src="/img/credentials/lightspeed/click-save-authorize-lightspeed.png" alt="appse ai Lightspeed Save and Authorize" width="700"/>

#### 11. Authorize Access

You will be redirected to the Lightspeed authorization page. Sign in with your **Lightspeed Retail store account** (not your developer account) and authorize the application.

<img src="/img/credentials/lightspeed/authorize-access-lightspeed.png" alt="appse ai Lightspeed Authorize Access" width="700"/>

:::warning

Unapproved apps can connect to a maximum of 30 stores. Submit your app for approval in the Developer Portal for production use.

:::

---

## Triggers

Here is the list of available triggers for Lightspeed X-Series:

| Trigger                           | Description                                                       |
| --------------------------------- | ----------------------------------------------------------------- |
| **New Product Created**           | Triggers when a new product is created in the store.              |
| **Product Updated**               | Triggers when an existing product is updated.                     |
| **New Customer Created**          | Triggers when a new customer is added.                            |
| **Customer Updated**              | Triggers when a customer record is updated.                       |
| **New Sale Created**              | Triggers when a new sale is processed.                            |
| **New Quote Created**             | Triggers when a new quote is created.                             |
| **Price Book Created or Updated** | Triggers when a price book is created or updated.                 |

---

## Actions

Here is the list of available actions for Lightspeed X-Series:

### Products

| Action             | Description                               |
| ------------------ | ----------------------------------------- |
| **List Products**  | Retrieve a paginated list of products.    |
| **Get Product**    | Retrieve a single product by ID.          |
| **Create Product** | Create a new product record.              |

### Customers

| Action              | Description                               |
| ------------------- | ----------------------------------------- |
| **List Customers**  | Retrieve a paginated list of customers.   |
| **Get Customer**    | Retrieve a single customer by ID.         |
| **Create Customer** | Create a new customer record.             |

---

## Support

Need help? Contact our support team at [hello@appse.ai](mailto:hello@appse.ai)