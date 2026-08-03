---
title: "Zoho CRM"
description: Step-by-step guide to set up Zoho CRM credentials and automate CRM workflows in appse ai.
slug: /app-integrations/zoho-crm/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ConnectAccountButton from '@site/src/components/ConnectAccountButton';

**Zoho CRM** is a cloud-based software that helps businesses manage customer relationships, track sales, and automate business processes. It enables organizations to efficiently manage leads, contacts, and accounts, automate routine sales activities, and gain visibility into performance through customizable dashboards and analytics. Zoho CRM also integrates with other Zoho apps and third-party tools, helping businesses streamline sales, marketing, and customer support from a single platform.

---

## Setup Credential

Zoho CRM supports two authentication types. On the **Select Authentication** screen, choose the type that matches the data center your Zoho account is registered in — **All Datacenters** or **Canada Datacenter** — then follow the matching tab below.

<img src="/img/credentials/zoho-crm/credential_type_form.png" alt="Zoho CRM Select Authentication screen with All Datacenters and Canada Datacenter options" width="700"/>

<Tabs>
<TabItem value="All Datacenters" label="All Datacenters">

:::note
Apps installed through the Zoho CRM Marketplace use OAuth 2.0 authentication. Marketplace users should install and connect the app directly through the Zoho CRM OAuth flow. Users do not need to manually enter client IDs or client secrets. Users only need to select the Zoho Domain where their CRM account is registered (US, EU, IN, AU, JP, SA, UK, SG) to ensure the correct regional authorization and API endpoints are used.

To find out more information about data centers, refer to Zoho's [Multi-DC documentation](https://www.zoho.com/crm/developer/docs/api/v8/multi-dc.html).
:::

### Required Fields

The following fields are required to authenticate your Zoho CRM account:

| Field           | Description                                 |
| --------------- | ------------------------------------------- |
| Connection Name | A name to help you identify this connection |
| Domain          | Your Zoho account data center region        |

### Add Credential in appse ai

<ConnectAccountButton
    appName="Zoho CRM"
    authorizeUrl="https://workflow.appse.ai/credentials?appCode=zohocrm&credentialTypeCode=zohocrm_oauth2_public"
  />

Click **Connect your Zoho CRM Account** above to open the App authorization page and start the OAuth 2.0 flow connection. If you are not signed in to appse ai, you will be prompted to log in or register first.

- Select Domain from the dropdown.

  <img src="/img/credentials/zoho-crm/public/select_domain.png" alt="Zoho CRM data center selection screen" width="700"/>

- Click Save & Authorize.

  <img src="/img/credentials/zoho-crm/public/click_save_authorize.png" alt="Save and Authorize button screen" width="700"/>

- You will be redirected to the Zoho CRM login page. Enter your Zoho CRM registered Email Address and click Next.

  <img src="/img/credentials/zoho-crm/public/enter_email.png" alt="Zoho CRM email login screen" width="700"/>

- Enter your password and click Sign in.

  <img src="/img/credentials/zoho-crm/public/enter_password.png" alt="Zoho CRM password login screen" width="700"/>

- If prompted, you may skip verification or complete it as needed.

  <img src="/img/credentials/zoho-crm/public/skip_verify.png" alt="Zoho CRM verification skip screen" width="700"/>

- Review the requested permissions, select the 'I allow appseai to access the above data from my Zoho account.' checkbox, and then click Accept to complete the authorization process.

  <img src="/img/credentials/zoho-crm/public/click_allow_accept.png" alt="Zoho CRM app install confirmation screen" width="700"/>

- Once connected, you will be automatically redirected back to appse ai platform and the Zoho CRM credential will be saved.

</TabItem>

<TabItem value="Canada Datacenter" label="Canada Datacenter">

:::note
If your Zoho account is registered in Canada, use the dedicated Zoho CRM Canada credential instead — the Canada authorization and API endpoints are applied automatically, so a Connection Name is the only field you need to provide.

To find out more information about data centers, refer to Zoho's [Multi-DC documentation](https://www.zoho.com/crm/developer/docs/api/v8/multi-dc.html).
:::

### Required Fields

The following fields are required to authenticate your Zoho CRM account:

| Field           | Description                                 |
| --------------- | ------------------------------------------- |
| Connection Name | A name to help you identify this connection |

### Add Credential in appse ai

<ConnectAccountButton
    appName="Zoho CRM"
    authorizeUrl="https://workflow.appse.ai/credentials?appCode=zohocrm&credentialTypeCode=zohocrm_oauth2_public_canada"
  />

Click **Connect your Zoho CRM Account** above to open the App authorization page and start the OAuth 2.0 flow connection. If you are not signed in to appse ai, you will be prompted to log in or register first.

- Enter a Connection Name for this credential. No Domain selection is required.

  <img src="/img/credentials/zoho-crm/canada_datacenter.png" alt="Zoho CRM Canada credential form screen" width="700"/>

- Click Save & Authorize.

- You will be redirected to the Zoho CRM login page. Enter your Zoho CRM registered Email Address and click Next.

  <img src="/img/credentials/zoho-crm/canada/enter_email.png" alt="Zoho CRM email login screen" width="700"/>

- Enter your password and click Sign in.

  <img src="/img/credentials/zoho-crm/canada/enter_password.png" alt="Zoho CRM password login screen" width="700"/>

- If prompted, you may skip verification or complete it as needed.

  <img src="/img/credentials/zoho-crm/canada/skip_verify.png" alt="Zoho CRM verification skip screen" width="700"/>

- Review the requested permissions, select the 'I allow appseai to access the above data from my Zoho account.' checkbox, and then click Accept to complete the authorization process.

  <img src="/img/credentials/zoho-crm/canada/click_allow_accept.png" alt="Zoho CRM app install confirmation screen" width="700"/>

- Once connected, you will be automatically redirected back to appse ai platform and the Zoho CRM credential will be saved.

</TabItem>
</Tabs>

---

## Triggers and Actions

Here is a list of the available triggers and actions for Zoho CRM:

<Tabs>
<TabItem value="Triggers" label="Triggers">

- **New Lead Created** — Triggers a workflow whenever a new lead is created in Zoho CRM.
- **Lead Updated** — Triggers a workflow whenever an existing lead is updated in Zoho CRM.
- **New Account Created** — Triggers a workflow whenever a new account is created in Zoho CRM.
- **New Deal Created** — Triggers a workflow whenever a new deal is created in Zoho CRM.
- **New Quote Created** — Triggers a workflow whenever a new quote is created in Zoho CRM.
- **New Sales Order Created** — Triggers a workflow whenever a new sales order is created in Zoho CRM.
- **New Task Created** — Triggers a workflow whenever a new task is created in Zoho CRM.

</TabItem>

<TabItem value="Actions" label="Actions">

### Leads

- **Create Lead** — Create a new lead in Zoho CRM.
- **Update Lead** — Update the details of an existing lead in Zoho CRM.
- **Get Lead by Email** — Retrieve a lead using the lead's email address.
- **Get Lead by First and Last Name** — Retrieve a lead using the lead's first name and last name.
- **Add Lead Note** — Add a note to an existing lead.
- **Get Lead Notes** — Retrieve the notes attached to a lead.
- **Update Lead Note** — Update an existing note attached to a lead.

### Accounts

- **Create Account** — Create a new account in Zoho CRM.
- **Update Account** — Update the details of an existing account in Zoho CRM.
- **Get Account by Name** — Retrieve an account using the account name.

### Contacts

- **Create Contact** — Create a new contact in Zoho CRM.
- **Update Contact** — Update the details of an existing contact in Zoho CRM.
- **Get Contact by First and Last Name** — Retrieve a contact using the contact's first name and last name.
- **Get Contacts by Account ID** — Retrieve all contacts associated with a specific account ID.

### Deals

- **Create Deal** — Create a new deal in Zoho CRM.
- **Update Deal** — Update the details of an existing deal in Zoho CRM.
- **Add Deal Note** — Add a note to an existing deal.
- **Get Deal Notes** — Retrieve the notes attached to a deal.
- **Update Deal Note** — Update an existing note attached to a deal.
- **Get Deal Products by Deal ID** — Retrieve the line-item products associated with a specific deal ID.

### Products

- **Create Product** — Create a new product in Zoho CRM.
- **Update Product** — Update the details of an existing product in Zoho CRM.
- **Get Product by SKU** — Retrieve a product using its SKU (product code).

### Quotes

- **Create Quote** — Create a new quote in Zoho CRM.
- **Update Quote** — Update the details of an existing quote in Zoho CRM.

### Sales Orders

- **Create Sales Order** — Create a new sales order in Zoho CRM.
- **Update Sales Order** — Update the details of an existing sales order in Zoho CRM.
- **Get Sales Order by ID** — Retrieve a sales order using its unique record ID.

### Invoices

- **Create Invoice** — Create a new invoice in Zoho CRM.
- **Update Invoice** — Update the details of an existing invoice in Zoho CRM.

### Tasks

- **Create Task** — Create a new task in Zoho CRM.
- **Update Task** — Update the details of an existing task in Zoho CRM.
- **Get Task by Task ID** — Retrieve a task using its unique record ID.
- **Get Tasks by Lead ID** — Retrieve all tasks associated with a specific lead ID.

### Records and Metadata

- **Get Record by ID** — Retrieve a record from any supported Zoho CRM module using its unique record ID.
- **Search Records by Criteria** — Search records in a Zoho CRM module using custom search criteria.
- **Get Module Fields** — Retrieve the field metadata for a Zoho CRM module, useful for mapping fields in your workflow.

</TabItem>
</Tabs>

---

## Support

Need help? Contact our support team at [support@appse.ai](mailto:support@appse.ai)
