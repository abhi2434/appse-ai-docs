---
title: "Zoho POS"
description: Step-by-step guide to set up Zoho POS credentials and automate retail workflows in appse ai.
slug: /app-integrations/zoho-pos/
---

Zoho POS is a cloud-based Point of Sale solution designed to manage in-store and multi-channel retail operations. It enables businesses to process transactions, manage contacts, track inventory, handle purchase and sales orders, and oversee warehouse operations from a centralized platform. Integrating Zoho POS into appse ai allows you to automate your retail workflows, synchronize POS data with your broader business systems, and eliminate manual data entry across your operations.

---

## Setup Credential

:::note

Before you create a credential for Zoho POS using appse ai, ensure you have an active Zoho POS account and have registered an application in the Zoho Developer Console to obtain your OAuth 2.0 credentials.

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

Click **Select a Credential** and choose **Zoho POS** from the application list.

<img src="/img/credentials/zohopos/click-select-credential-zohoPos.png" alt="appse ai Zoho POS Select Credential" width="700"/>


This opens the Zoho POS credential form. Add your **Connection Name**.

<img src="/img/credentials/zohopos/enter-connection-name-zohoPos.png" alt="appse ai Zoho POS Connection Name" width="700"/>

Select the correct **Base URL** (US, IN).

<img src="/img/credentials/zohopos/select-base-url-appseai.png" alt="appse ai Zoho POS select data center" width="700"/>

#### 2. Sign In to the Zoho Developer Console

Go to the [Zoho Developer Console](https://api-console.zoho.com) and sign in with your Zoho account credentials.

#### 3. Register a New Application

1. Click **Add Client**.

<img src="/img/credentials/zohopos/add-client-zoho-pos.png" alt="appse ai Zoho POS Add Client" width="700"/>

2. Select **Server-based Application** as the client type and fill in the required application details.

<img src="/img/credentials/zohopos/create-server-based-app-zohopos.png" alt="appse ai Zoho POS serverbased app create" width="700"/>

3. Upon creation, your **Client ID** and **Client Secret** will be displayed on the application details page. Copy both values.

<img src="/img/credentials/zohopos/click-client-secret.png" alt="appse ai Zoho POS Client Details" width="700"/>

<img src="/img/credentials/zohopos/copy-client-id-client-secret-zohopos.png" alt="appse ai Zoho POS Client Credentials" width="700"/>

#### 4. Paste Your Credentials in appse ai

Return to the appse ai credential form. Fill in all the required fields — **Client ID**, **Client Secret** then click **Save** to store and validate your credential.

<img src="/img/credentials/zohopos/paste-secret-zohopos.png" alt="appse ai Zoho POS Save Credential" width="700"/>


:::caution

Keep your credentials secure. Do not share your Client Secret publicly. If you believe your credentials have been compromised, revoke access from the Zoho Developer Console immediately and generate new tokens.

:::

---

## Triggers

Triggers let your appse ai workflows start automatically in response to events in Zoho POS. Here is a list of the available triggers for Zoho POS:

### New Record Triggers

| Trigger | Description |
| ------- | ----------- |
| **New Bill Created** | Triggers when a new bill is created in Zoho POS. |
| **New Credit Note Created** | Triggers when a new credit note is created in Zoho POS. |
| **New Customer Created** | Triggers when a new customer (contact) is created in Zoho POS. |
| **New Invoice Created** | Triggers when a new invoice is created in Zoho POS. |
| **New Item Adjustment Created** | Triggers when a new inventory item adjustment is created in Zoho POS. |
| **New Item Created** | Triggers when a new item (product or service) is created in Zoho POS. |
| **New Purchase Order Created** | Triggers when a new purchase order is created in Zoho POS. |
| **New Sales Order Created** | Triggers when a new sales order is created in Zoho POS. |

### Record Update Triggers

| Trigger | Description |
| ------- | ----------- |
| **Bill Update** | Triggers when an existing bill is updated in Zoho POS. |
| **Credit Note Update** | Triggers when an existing credit note is updated in Zoho POS. |
| **Customer Update** | Triggers when an existing customer (contact) is updated in Zoho POS. |
| **Invoice Update** | Triggers when an existing invoice is updated in Zoho POS. |
| **Item Adjustment Update** | Triggers when an existing inventory item adjustment is updated in Zoho POS. |
| **Item Update** | Triggers when an existing item (product or service) is updated in Zoho POS. |
| **Purchase Order Update** | Triggers when an existing purchase order is updated in Zoho POS. |
| **On Sales Order Update** | Triggers when an existing sales order is updated in Zoho POS. |

---

## Actions

Here is a list of the available actions for Zoho POS:



#### Bills

| Action | Description |
| ------ | ----------- |
| **Create Bill** | Creates a new bill in Zoho POS against a vendor. Requires vendor details, line item information, and the billing date to generate the bill record. |
| **Update Bill** | Updates the details of an existing bill record. Requires the **Bill ID** of the record to be modified along with the fields that are to be updated. |



#### Contacts

| Action | Description |
| ------ | ----------- |
| **Create Contact** | Creates a new contact record in Zoho POS. Requires essential contact information such as the contact name, contact type, and associated billing or shipping address details. |
| **Create Contact Person** | Creates a new contact person and associates them with an existing contact record. Requires the **Contact ID** of the parent contact along with the contact person's details such as name, email address, and phone number. |
| **List Contacts** | Retrieves a list of all contact records available in your Zoho POS organisation. Supports optional filters such as contact type and search keywords to refine the results. |
| **Update Contact** | Updates the details of an existing contact record. Requires the **Contact ID** of the record to be modified along with the fields that are to be updated. |
| **Update Contact Person** | Updates the details of an existing contact person associated with a contact. Requires both the **Contact ID** and the **Contact Person ID**, along with the fields that are to be updated. |



#### Invoices

| Action | Description |
| ------ | ----------- |
| **Create New Invoice** | Creates a new sales invoice in Zoho POS. Requires customer details, line item information, and the invoice date. Additional fields such as payment terms and custom fields may also be specified. |
| **Update Invoice** | Updates the details of an existing invoice record. Requires the **Invoice ID** of the record to be modified along with the fields that are to be updated. |



#### Item Adjustments

| Action | Description |
| ------ | ----------- |
| **Create Item Adjustment** | Creates a new inventory item adjustment in Zoho POS to record changes in stock quantity or value. Requires the adjustment type, reason, date, and the line items along with the quantity or value to be adjusted. |



#### Items

| Action | Description |
| ------ | ----------- |
| **Create Item** | Creates a new item (product or service) in the Zoho POS item catalogue. Requires the item name, item type, rate, and applicable tax information. |
| **List Items** | Retrieves a list of all item records available in your Zoho POS organisation. Supports optional filters such as item type, search keywords, and category to refine the results. |
| **Update Item** | Updates the details of an existing item record. Requires the **Item ID** of the record to be modified along with the fields that are to be updated. |



#### Packages

| Action | Description |
| ------ | ----------- |
| **Create Package** | Creates a new package associated with a sales order. Requires the **Sales Order ID** and the line items to be included in the package, along with the relevant shipment details. |



#### Pricebooks

| Action | Description |
| ------ | ----------- |
| **Create Pricebook** | Creates a new pricebook in Zoho POS to define custom pricing for items. Requires the pricebook name, currency, and the pricing rules to be applied. |



#### Purchase Orders

| Action | Description |
| ------ | ----------- |
| **Create Purchase Order** | Creates a new purchase order in Zoho POS to be issued to a vendor. Requires vendor details, line item information, and the expected delivery date. |
| **Update Purchase Order** | Updates the details of an existing purchase order. Requires the **Purchase Order ID** of the record to be modified along with the fields that are to be updated. |



#### Sales Orders

| Action | Description |
| ------ | ----------- |
| **Create Sales Order** | Creates a new sales order in Zoho POS. Requires customer details, line item information, and the order date. The sales order serves as the foundation for subsequent invoicing, packaging, and shipment workflows. |
| **Update Sales Order** | Updates the details of an existing sales order. Requires the **Sales Order ID** of the record to be modified along with the fields that are to be updated. |



#### Shipment Orders

| Action | Description |
| ------ | ----------- |
| **Create Shipment Order** | Creates a new shipment order associated with an existing package or sales order. Requires the relevant **Package ID** or **Sales Order ID**, along with carrier and tracking details. |



#### Transfer Orders

| Action | Description |
| ------ | ----------- |
| **Create Transfer Order** | Creates a new transfer order to move stock between locations or warehouses within your Zoho POS organisation. Requires the source location, destination location, and the line items to be transferred. |



#### Warehouses

| Action | Description |
| ------ | ----------- |
| **Create Warehouse** | Creates a new warehouse record within your Zoho POS organisation. Requires the warehouse name, address, and the responsible contact details. |
| **List Warehouses** | Retrieves a list of all warehouse records available in your Zoho POS organisation. |


#### Organisation

| Action | Description |
| ------ | ----------- |
| **Get Organisation by ID** | Retrieves the details of a specific Zoho POS organisation. Requires the **Organisation ID** and returns information such as the organisation name, currency, time zone, and fiscal year settings. |



#### Search

| Action | Description |
| ------ | ----------- |
| **Search Records** | A generic search action that enables you to query and retrieve records across multiple modules within Zoho POS, including Contacts, Items, Invoices, Sales Orders, Purchase Orders, and more. Requires the selection of a **Module** and a **Search Criteria** to filter and return the relevant records. This action serves as a unified alternative to individual listing actions across all supported modules. |

## Support

Need help? Contact our support team at [support@appse.ai](mailto:support@appse.ai)
