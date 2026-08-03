---
title: Microsoft Dynamics 365 Sales
description: Step-by-step guide to set up Microsoft Dynamics 365 Sales credentials for appse ai integration
slug: /app-integrations/microsoft-dynamics-365-sales/
---

**Microsoft Dynamics 365 Sales** is a customer relationship management (CRM) platform from Microsoft that helps organizations manage leads, opportunities, accounts, contacts, quotes, orders, and customer interactions efficiently. It enables sales teams to automate workflows, improve customer engagement, and drive revenue growth using intelligent sales insights.

This guide walks you through the process of adding **Microsoft Dynamics 365 Sales credentials** within appse ai, enabling secure integration to fetch and post data in your Dynamics 365 Sales environment.

---

## Key Features

- **Dataverse Web API Support**: Uses Microsoft Dataverse OData Web API for secure and reliable communication.
- **Secure OAuth 2.0 Authentication**: Enables token-based authentication without sharing passwords.
- **Workflow Automation**: Integrate Dynamics 365 Sales with ERPs, marketing tools, support systems, and other business applications through appse ai.

---

## Setup Credential

### Required Fields

| Field | Description |
|---|---|
| **Connection Name** | A name to identify this connection |
| **Environment URL** | Your Dynamics 365 Sales environment URL |

---

## Step-by-Step Guide

### Step 1. Create a Microsoft Dynamics 365 Sales Credential

To get started with Microsoft Dynamics 365 Sales, you need to set credentials for it. 

1. Go to the **Credentials** page of appse ai.
2. Click on **Add credentials**.

<img src="/img/credentials/dynamics-365-sales/click-add-credentials.png" alt="Create a new credential" width="700"/>

3. Search for **Microsoft Dynamics 365 Sales**.
4. Select **Microsoft Dynamics 365 Sales** from the list.

<img src="/img/credentials/dynamics-365-sales/select-app.png" alt="Search for Microsoft Dynamics 365 Sales" width="700" height="550"/>

:::note
This opens the credential configuration window.
:::

<img src="/img/credentials/dynamics-365-sales/provide-credential.png" alt="Enter credential details to add credential" width="700" height="550"/>

---

### Step 2. Get Your Dynamics 365 Sales Environment URL

Before connecting, you need to retrieve your Dynamics 365 Sales Environment URL.

1. Go to **https://admin.powerplatform.microsoft.com**
2. Login with your **Microsoft work or school account**
3. Click **Manage** from the left menu
4. Go to **Environments**
5. Select your **Dynamics 365 environment**
6. Under the **Details** section, click **Environment URL**
7. **Copy this URL** — you will need it in the next step.

<img src="/img/credentials/dynamics-365-sales/environment-url.png" alt="Copy Environment URL from Power Platform Admin Center" width="700"/>

:::note
The Environment URL format is typically:
`https://orgXXXXX.crm.dynamics.com`
:::

---

### Step 3. Authorize the App & Connect

1. Paste the copied **Environment URL** in the field labeled:
   **Environment URL**
2. Click the **Save & Authorize** button

<img src="/img/credentials/dynamics-365-sales/authorize-credential.png" alt="Click Save and Authorize" width="700" height="550"/>

:::note
This will open a pop-up window displaying a list of your Microsoft accounts, from which you can select the account you want to use.

If the required account is not already added, click **Use another account**. This will redirect you to the Microsoft sign-in page to authenticate using a different account.
:::

3. Enter your Microsoft work or school email and click **Next** to continue.

<img src="/img/credentials/dynamics-365-sales/microsoft-sales-sign-in-email.png" alt="Microsoft sign in page" width="700"/>

4. Enter your password and click **Sign In** to continue.

<img src="/img/credentials/dynamics-365-sales/microsoft-sign-in.png" alt="Enter password" width="700"/>

:::note
After entering your Microsoft credentials successfully, Microsoft may prompt you with the option:
**"Stay signed in?"**
:::

5. Choose either:
- **Yes** → to remain signed in on the device
- **No** → to continue without staying signed in

<img src="/img/credentials/dynamics-365-sales/microsoft-stayed-sign-in.png" alt="Stay signed in prompt" width="700"/>

:::note
Once authorization is successful, your session will be established and an **access token** will be securely generated and stored.
:::

<img src="/img/credentials/dynamics-365-sales/successful-validation.png" alt="Credential Validation" width="700"/>

---

## Triggers and Actions

The following tables outline the available triggers and actions for Microsoft Dynamics 365 Sales.

---

### Triggers

| Trigger Name | Description |
|---|---|
| **New account created** | Activates when a new account record is created in Dynamics 365 Sales. |
| **Account updated** | Activates when an existing account record is modified. |
| **New activity created** | Activates when a new activity record is created. |
| **Activity updated** | Activates when an existing activity record is modified. |
| **New contact created** | Activates when a new contact record is created. |
| **Contact updated** | Activates when an existing contact record is modified. |
| **New invoice created** | Activates when a new invoice record is created. |
| **New lead created** | Activates when a new lead record is created. |
| **New opportunity created** | Activates when a new opportunity record is created. |
| **Opportunity updated** | Activates when an existing opportunity record is modified. |
| **New order created** | Activates when a new sales order record is created. |
| **New price list created** | Activates when a new price list record is created. |
| **Price list updated** | Activates when an existing price list record is modified. |
| **New product created** | Activates when a new product record is created. |
| **Product updated** | Activates when an existing product record is modified. |
| **New quote created** | Activates when a new quote record is created. |
| **Quote updated** | Activates when an existing quote record is modified. |
| **New task created** | Activates when a new task record is created. |
| **Task updated** | Activates when an existing task record is modified. |

---

### Actions

| Action Name | Category | Description |
|---|---|---|
| **Create Account** | Account | Creates a new account record in Dynamics 365 Sales. |
| **Update Account** | Account | Updates an existing account record. |
| **Create Contact** | Contact | Creates a new contact record. |
| **Update Contact** | Contact | Updates an existing contact record. |
| **Create opportunity** | Opportunity | Creates a new opportunity record. |
| **Update opportunity** | Opportunity | Updates an existing opportunity record. |
| **Create opportunity product** | Opportunity Product | Adds a product to an opportunity. |
| **Update opportunity product** | Opportunity Product | Updates an existing opportunity product record. |
| **Create Invoice** | Invoice | Creates a new invoice record. |
| **Update Invoice** | Invoice | Updates an existing invoice record. |
| **Create Invoice Detail** | Invoice Detail | Creates a line item for an invoice. |
| **Update Invoice Detail** | Invoice Detail | Updates an existing invoice line item. |
| **Create Price List** | Price List | Creates a new price list record. |
| **Update Price List** | Price List | Updates an existing price list record. |
| **Create product** | Product | Creates a new product record. |
| **Update product** | Product | Updates an existing product record. |
| **Create Product Price Level** | Product Price Level | Creates a new product price level record. |
| **Update Product Price Level** | Product Price Level | Updates an existing product price level record. |
| **Create Annotation (Note)** | Annotation | Creates a note associated with a Dynamics 365 record. |
| **Create task** | Task | Creates a new task record. |
| **Update task** | Task | Updates an existing task record. |
| **Search Records** | Generic | Searches records from supported Dynamics 365 Sales entities using filters and criteria. |
| **Get Record By ID** | Generic | Retrieves a Dynamics 365 Sales record using its unique identifier. |

---

## Support

Need help? Contact our support team at [support@appse.ai](mailto:support@appse.ai)
