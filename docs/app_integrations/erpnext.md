---
title: "ERPNext"
description: "Step by step guide to configure ERPNext credentials in appse ai to automate sales-cycle workflows"
slug: /app-integrations/erpnext/
---

ERPNext is an open-source ERP built on the Frappe framework for managing accounting, inventory, manufacturing, CRM, and HR in one unified platform. Integrating ERPNext into appse ai enables you to automate the full sales cycle — quotations, sales orders, delivery notes, sales invoices, and incoming payments — directly within your AI-powered workflows.

---

## Set Up Credential

:::info

appse ai connects to ERPNext using **OAuth 2.0**. Before you can authorize the connection, you need to create an **OAuth Client** in your own ERPNext site to obtain a **Client ID** and **Client Secret**. ERPNext does not provide shared OAuth credentials, so every site connection requires its own client.

:::

### Required Fields

| Field | Description |
|---|---|
| **Connection Name** | A label to identify this credential within appse ai. |
| **ERPNext Site URL** | Your ERPNext/Frappe site URL, e.g. `https://mycompany.erpnext.com`. |
| **Client ID** | The Client ID from the OAuth Client you create in ERPNext. |
| **Client Secret** | The Client Secret from the same OAuth Client. |
| **API Access Scope** | Space-separated OAuth scopes granted to the client (defaults to `all openid`). |
| **Callback API URL** | Auto-filled by appse ai. Copy this value and add it as a Redirect URI on your ERPNext OAuth Client — do not edit it. |

### Step-by-Step Guide

#### 1. Start the Credential in appse ai

Open the ERPNext credential form in appse ai and add your **Connection Name** and **ERPNext Site URL**. Copy the auto-filled **Callback API URL** — you'll need it in a moment.

#### 2. Open the Framework Workspace

Log in to your ERPNext site, go to the Desk home page, and click the **Framework** workspace tile.

<img src="/img/credentials/erpnext/Step1.png" alt="appse ai ERPNext Desk home, Framework workspace" width="700"/>

#### 3. Go to Integrations

From the Framework workspace picker, click **Integrations**.

<img src="/img/credentials/erpnext/Step2.png" alt="appse ai ERPNext Framework workspace, Integrations" width="700"/>

#### 4. Add an OAuth Client

In the Integrations sidebar, select **OAuth Client**, then click **+ Add OAuth Client**.

<img src="/img/credentials/erpnext/Step3.png" alt="appse ai ERPNext OAuth Client list" width="700"/>

#### 5. Configure the OAuth Client

Enter an **App Name (Client Name)**, e.g. `appse ai`. Paste the Callback API URL from Step 1 into **Default Redirect URI** (and add it under **Redirect URIs** as well). Set **Scopes** to `all openid`. Click **Save** — ERPNext generates a **Client ID** and **Client Secret** for this app.

<img src="/img/credentials/erpnext/Step4.png" alt="appse ai ERPNext OAuth Client Client ID, Client Secret, Redirect URIs and Scopes" width="700"/>

:::warning
Treat the Client Secret like a password. Do not share it publicly, and regenerate it in ERPNext if you suspect it has been exposed.
:::

#### 6. Enter Credentials in appse ai

Back in the ERPNext credential form in appse ai, paste the **Client ID**, **Client Secret**, and **API Access Scope** copied from ERPNext.

#### 7. Save and Authorize

Click **Save & Authorize**. You'll be redirected to your ERPNext site to log in (if not already) and approve access for the app. Once approved, you'll be redirected back to appse ai and your credential will be validated and saved.

:::tip
If authorization fails, confirm the Callback API URL was added exactly as shown to both **Default Redirect URI** and **Redirect URIs** on the OAuth Client, and that **Scopes** includes `all openid`.
:::

---

## Triggers and Actions

Here is a list of the available triggers and actions for ERPNext:

:::note
Actions create records as **Draft** (`docstatus: 0`) by default unless you set **Document Status** to **Submitted**. Downstream steps that depend on a document being final — delivery, billing, payment reconciliation — require the upstream document to be Submitted first.
:::

### Triggers

- **New Sales Order Created** — Fires when a new sales order is created in ERPNext. Requires **Fetch Data Since** and **Limit**.
- **Sales Order Completed** — Fires when a sales order reaches the **Completed** status, i.e. fully delivered and fully billed. Requires **Fetch Data Since** and **Limit**.
- **New Quotation Created** — Fires when a new quotation is created in ERPNext. Requires **Fetch Data Since** and **Limit**.
- **New Delivery Note Created** — Fires when a new delivery note is created in ERPNext. Requires **Fetch Data Since** and **Limit**.
- **New Sales Invoice Created** — Fires when a new sales invoice is created in ERPNext. Requires **Fetch Data Since** and **Limit**.
- **New Incoming Payment Created** — Fires when a new incoming (customer) Payment Entry is created in ERPNext. Requires **Fetch Data Since** and **Limit**.

### Actions

| Action | Description |
|---|---|
| **Create Quotation** | Creates a new Quotation in ERPNext for a Customer or Lead, with one or more line items. |
| **Create Sales Order** | Creates a new Sales Order in ERPNext for a Customer, with one or more line items. |
| **Create Delivery Note** | Creates a new Delivery Note, optionally against an existing Sales Order line, so stock can move and delivery status stays reconciled. |
| **Create Sales Invoice** | Creates a new Sales Invoice, optionally against an existing Sales Order or Delivery Note line, or with **Update Stock** enabled for direct/POS sales. |
| **Create Incoming Payment** | Creates an incoming Payment Entry for a customer, optionally reconciled against one or more Sales Invoices to close out the sales cycle. |
| **Search Records** | Looks up records from any ERPNext object (DocType) — Customer, Sales Order, Sales Invoice, Item, and more — using Frappe filter syntax, field selection, sorting, and paging. |

---

## Support

Need help? Contact our support team at [support@appse.ai](mailto:support@appse.ai)
