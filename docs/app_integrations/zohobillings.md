---
title: "Zoho Billing"
description: Step-by-step guide to set up Zoho Billing credentials and automate subscription and recurring billing workflows in appse ai.
slug: /app-integrations/zoho-billing/
---

Zoho Billing is a cloud-based subscription management and recurring billing solution designed to manage the complete billing lifecycle for product and subscription-based businesses. It enables businesses to manage customers, create subscriptions and recurring invoices, handle one-time and usage-based billing, process credit notes, and track payments from a centralized platform. Integrating Zoho Billing into appse ai allows you to automate your billing workflows, synchronize subscription and invoice data with your broader business systems, and eliminate manual data entry across your operations.

---

## Setup Credential

:::note

Before you create a credential for Zoho Billing using appse ai, ensure you have an active Zoho Billing account and have registered an application in the Zoho Developer Console to obtain your OAuth 2.0 credentials.

:::

### Required Fields

You'll be asked to fill in the following details:

| Field              | Description                                                                  |
| ------------------ | ---------------------------------------------------------------------------- |
| Connection Name    | A name to help you identify this connection                                  |
| Client ID          | Your OAuth 2.0 Client ID from the Zoho Developer Console                    |
| Client Secret      | Your OAuth 2.0 Client Secret from the Zoho Developer Console                |
| Data Center        | The Zoho data center region for your account (e.g., US, IN)                  |


### Step-by-Step Guide

#### 1. Open the Credential Form

Click **Select a Credential** and choose **Zoho Billing** from the application list.

<img src="/img/credentials/zohobillings/click-select-credential-zohoBillings.png" alt="appse ai Zoho Billing Select Credential" width="700"/>


This opens the Zoho Billing credential form. Add your **Connection Name** and Select the correct **Domain Name**..

<img src="/img/credentials/zohobillings/enter-connection-name-zohoBillings.png" alt="appse ai Zoho Billing Connection Name" width="700"/>

#### 2. Sign In to the Zoho Developer Console

Go to the [Zoho Developer Console](https://api-console.zoho.com) and sign in with your Zoho account credentials.

#### 3. Register a New Application

1. Click **Add Client**.

<img src="/img/credentials/zohobillings/add-client-zoho-billings.png" alt="appse ai Zoho Billing Add Client" width="700"/>

2. Select **Server-based Application** as the client type and fill in the required application details.

<img src="/img/credentials/zohobillings/create-server-based-app-zohobillings.png" alt="appse ai Zoho Billing serverbased app create" width="700"/>

3. Upon creation, your **Client ID** and **Client Secret** will be displayed on the application details page. Copy both values.

<img src="/img/credentials/zohobillings/click-client-secret.png" alt="appse ai Zoho Billing Client Details" width="700"/>

<img src="/img/credentials/zohobillings/copy-client-id-client-secret-zohobillings.png" alt="appse ai Zoho Billing Client Credentials" width="700"/>

#### 4. Paste Your Credentials in appse ai

Return to the appse ai credential form. Fill in all the required fields — **Client ID**, **Client Secret** then click **Save** to store and validate your credential.

<img src="/img/credentials/zohobillings/paste-secret-zohobillings.png" alt="appse ai Zoho Billing Save Credential" width="700"/>


:::caution

Keep your credentials secure. Do not share your Client Secret publicly. If you believe your credentials have been compromised, revoke access from the Zoho Developer Console immediately and generate new tokens.

:::

---

## Actions

Here is a list of the available actions for Zoho Billing:

| Action | Description |
| ------ | ----------- |
| **Get Record by ID** | Retrieves the details of a specific record in Zoho Billing. Requires the **Record ID** of the record to be fetched and returns its complete details. |
| **Get Subscriptions** | Retrieves a list of all subscription records available in your Zoho Billing organisation. Supports optional filters to refine the results. |
| **Get Invoices** | Retrieves a list of all invoices available in your Zoho Billing organisation. Supports optional filters based on invoice status. |

## Support

Need help? Contact our support team at [support@appse.ai](mailto:support@appse.ai)
