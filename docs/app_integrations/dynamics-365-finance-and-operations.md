---
title: "Dynamics 365 Finance and Operations"
description: "Step-by-step guide to set up Dynamics 365 Finance and Operations credentials for appse ai integration"
slug: /app-integrations/d365fo/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Microsoft Dynamics 365 Finance and Operations helps organizations manage finance, supply chain, and core business processes in one integrated system. It provides real-time visibility, stronger control, and scalable operations across business functions. This guide explains how to configure credentials in appse ai using the available authentication options.

## Setup Credential

Follow the steps below to set up your Dynamics 365 Finance and Operations credential. The integration supports two authentication modes — **Production / Sandbox** and **OneBox (Developer VM)**.

## Select Authentication

When adding a Dynamics 365 Finance and Operations credential, first choose one of the available authentication types:

- **Production / Sandbox** — for hosted D365 F&O environments on `.operations.dynamics.com`
- **OneBox (Developer VM)** — for local or custom OneBox developer environments

<img src="/img/credentials/dynamics-365-finance-and-operations/credentialchoice.png" alt="Select Authentication screen showing Production / Sandbox and OneBox (Developer VM) options" width="700"/>

## Configure Credentials

Select your authentication mode below to see the fields required to configure that mode.

<Tabs>
<TabItem value="prod" label="Production / Sandbox" default>

#### Required Fields

Fill in the following details to configure a **Production / Sandbox** credential:

| Field | Description |
| --- | --- |
| **Connection Name** | A name to identify this Dynamics 365 Finance and Operations connection in appse ai. |
| **Environment Name** | If your D365FO login URL is, for example: `https://testenv.operations.dynamics.com/data`, enter `testenv` in this field. The prefix `https://` and suffix `.operations.dynamics.com` are automatically applied by appse ai. |
| **Tenant ID** | Your Microsoft Entra ID tenant ID. Copy it from the [Azure Portal](https://portal.azure.com) → Microsoft Entra ID → Overview → Tenant ID. |

<img src="/img/credentials/dynamics-365-finance-and-operations/credential.png" alt="Production / Sandbox credential form with Connection Name, Environment Name, and Tenant ID fields" width="700"/>

:::note
The base URL and API access scope are automatically generated using the environment name you provide.
:::

Click **Save & Authorize** to complete the setup.

- ✓ **Success:** The credential is saved and automatically verified by appse ai.  
- ! **Failure:** Verify that the environment name matches your Production or Sandbox URL and try again.

</TabItem>

<TabItem value="onebox" label="OneBox (Developer VM)">

#### Required Fields

Fill in the following details to configure a **OneBox (Developer VM)** credential:

| Field | Description |
| --- | --- |
| **Connection Name** | A name to identify this Dynamics 365 Finance and Operations connection in appse ai. |
| **Tenant ID** | Your Microsoft Entra ID tenant ID. Copy it from the [Azure Portal](https://portal.azure.com) → Microsoft Entra ID → Overview → Tenant ID. |
| **Base URL** | The full base URL of your D365FO OneBox environment (for example, `https://usnconeboxax1aos.cloud.onebox.dynamics.com`). This can differ if you are not using the default Microsoft-hosted OneBox environment — in that case, use your proxy URL to connect. |

<img src="/img/credentials/dynamics-365-finance-and-operations/credential-onebox.png" alt="OneBox (Developer VM) credential form with Connection Name, Tenant ID, and Base URL fields" width="500"/>

Click **Save & Authorize** to complete the setup.

- ✓ **Success:** The credential is saved and automatically verified by appse ai.  
- ! **Failure:** Verify that the Base URL and Tenant ID are correct and try again.

</TabItem>
</Tabs>

## Triggers

The Dynamics 365 Finance and Operations integration currently supports the following triggers. Use these triggers to start workflows when data changes occur in D365 F&O.

| Trigger | Description |
| --- | --- |
| **New contacts created** | Fetches data records when new contacts are created in D365 F&O. |
| **New customers created** | Fetches data records when new customer accounts are created in D365 F&O. |
| **New Orders created** | Fetches data records when new sales orders are created in D365 F&O. |
| **New packing slip created** | Fetches data records when new packing slips are created in D365 F&O. |
| **New products created** | Fetches data records when new products are created in D365 F&O. |
| **New Sales Invoice Created** | Fetches data records when new sales invoices are created in D365 F&O. |
| **Sales invoices created by date range** | Fetches sales invoice records created within a specified date range in D365 F&O. |

## Actions

The Dynamics 365 Finance and Operations integration currently supports the following actions. Use these actions in workflows to create, update, query, and retrieve D365 F&O records.

| Action | Description |
| --- | --- |
| **Create a new customer** | Creates a new customer account in Dynamics 365 Finance and Operations. |
| **Create a new product** | Creates a new product record in the D365 F&O product catalog. |
| **Create contact** | Creates a new contact record associated with a customer or other party in D365 F&O. |
| **Create customer address** | Adds a new address to an existing customer account in D365 F&O. |
| **Create draft purchase order** | Creates a new draft purchase order document in D365 F&O. |
| **Create exchange rate** | Creates a new exchange rate entry for currency conversion in D365 F&O. |
| **Create Ledger Journal Header** | Creates a new general ledger journal header in D365 F&O. |
| **Create Ledger Journal Lines** | Adds journal lines to a ledger journal in D365 F&O. |
| **Create Sales Order Header v3** | Creates a new sales order header using the Sales Order Header v3 API in D365 F&O. |
| **Create Sales Order Lines** | Adds line items to an existing sales order in D365 F&O. |
| **Get all sites** | Retrieves all site records from D365 F&O for use in inventory and warehouse workflows. |
| **Get contact by contact person ID** | Retrieves a contact record by its contact person ID in D365 F&O. |
| **Get customer by account** | Retrieves a customer record by customer account number in D365 F&O. |
| **Get customer credit limit** | Retrieves the credit limit details for a customer in D365 F&O. |
| **Get customer groups** | Retrieves the list of customer groups configured in D365 F&O. |
| **Get customer payment journal headers** | Retrieves customer payment journal header records from D365 F&O. |
| **Get dimension attributes** | Retrieves financial dimension attributes configured in D365 F&O. |
| **Get exchange rate** | Retrieves exchange rate details for a specified currency pair in D365 F&O. |
| **Get item sales tax groups** | Retrieves item sales tax group records from D365 F&O. |
| **Get overdue customer invoices** | Retrieves customer invoices that are past their due date in D365 F&O. |
| **Get packing slip lines** | Retrieves packing slip line details from D365 F&O. |
| **Get payment methods** | Retrieves the list of payment methods configured in D365 F&O. |
| **Get payment terms** | Retrieves the list of payment terms configured in D365 F&O. |
| **Get Posted Sales Invoice by Invoice Number** | Retrieves a posted sales invoice by its invoice number in D365 F&O. |
| **Get product by Product Number** | Retrieves a product record by product number in D365 F&O. |
| **Get product categories** | Retrieves product category records from the D365 F&O product catalog. |
| **Get Product Dimensions** | Retrieves product dimension configuration records from D365 F&O. |
| **Get product receipt headers** | Retrieves product receipt header records from D365 F&O. |
| **Get product variants** | Retrieves product variant records from D365 F&O. |
| **Get purchase orders by status** | Retrieves purchase orders filtered by status in D365 F&O. |
| **Get released product by item number** | Retrieves a released product record by item number in D365 F&O. |
| **Get released products** | Retrieves all released product records from D365 F&O. |
| **Get return order headers** | Retrieves return order header records from D365 F&O. |
| **Get return reason codes** | Retrieves return reason codes configured in D365 F&O. |
| **Get sales discount trade agreements** | Retrieves sales discount trade agreement records from D365 F&O. |
| **Get sales quotations by quotation status** | Retrieves sales quotations filtered by quotation status in D365 F&O. |
| **Get sales tax groups** | Retrieves sales tax group records from D365 F&O. |
| **Get sales trade agreements** | Retrieves sales trade agreement records from D365 F&O. |
| **Get SalesHeader Info by Customer Reference** | Retrieves sales order header information by customer reference in D365 F&O. |
| **Get vendor invoice headers** | Retrieves vendor invoice header records from D365 F&O. |
| **Get vendor transactions** | Retrieves vendor transaction records from D365 F&O. |
| **Get vendors** | Retrieves vendor records from D365 F&O. |
| **Get warehouse by site ID** | Retrieves warehouse details for a specified site ID in D365 F&O. |
| **Update a customer** | Updates an existing customer account record in D365 F&O. |
| **Update exchange rate** | Updates an existing exchange rate entry in D365 F&O. |

## Troubleshooting

- **Credential verification fails (Production / Sandbox):**  
  Ensure the environment name entered matches the subdomain of your Dynamics 365 Finance and Operations URL (for example, `testenv` for `https://testenv.operations.dynamics.com`).

- **Credential verification fails (OneBox):**  
  Ensure the full Base URL is correct and reachable. If you are not using the default Microsoft-hosted OneBox environment, use your proxy URL instead.

- **Tenant ID errors:**  
  Confirm the Tenant ID is copied from the [Azure Portal](https://portal.azure.com) → Microsoft Entra ID → Overview → Tenant ID.

## Frequently Asked Questions

**Do I need to enter the full Dynamics 365 Finance and Operations URL?**  
It depends on the authentication mode. For **Production / Sandbox**, only the environment name is required — appse ai automatically constructs the full base URL. For **OneBox (Developer VM)**, enter the complete Base URL of your environment.

**Do I need to configure OAuth details manually?**  
No. OAuth 2.0 authorization is handled internally by appse ai for both authentication modes.

## Support

Need help? Contact the support team at [support@appse.ai](mailto:support@appse.ai)