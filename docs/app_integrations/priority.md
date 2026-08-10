---
title: "Priority ERP REST"
slug: /app-integrations/priority
description: Step-by-step guide to set up Priority ERP REST API credentials and automate business workflows in appse ai.
---

Priority is a comprehensive cloud-based ERP solution designed to manage sales, inventory, accounting, and supply chain operations efficiently. With appse ai, you can easily connect your Priority ERP account, automate business processes, and integrate data seamlessly across your workflows, enhancing efficiency and accuracy in your operations.

---

## Setup Credential

Follow the steps below to quickly set up your credential.

### Required Fields

You'll need to provide:

| Field | Description |
| --------------- | ------------------------------------------------------------ |
| Connection Name | A name to identify the connection |
| Server Host | The address of your Priority server |
| Configuration File Name | The tabula.ini configuration file name for your Priority environment |
| Company | The name of your company database in Priority |
| Username | The Priority Personal Access Token (PAT) |
| Application ID | The Priority application license identifier |
| Application Key | The Priority application license key |

---

### Step-by-Step Guide

#### 1. Add Connection Name

- Enter a user-friendly name to identify this connection (e.g., `Priority Production`, `Priority ERP Main`).
- This is only for reference within our platform.

---

#### 2. Retrieve Server Configuration Details

Contact your Priority system administrator to obtain the following details:

- **Server Host**: The address of your Priority server (e.g., `p.priority-connect.online`)
- **Configuration File Name**: The tabula.ini file name for your environment (e.g., `tabzw01s.ini`)
- **Company Database Name**: The name of your company database in Priority (e.g., `a270819`)

---

#### 3. Generate Priority PAT Token

Priority uses Personal Access Tokens (PAT) for secure API authentication:

- Log in to your Priority system with administrator credentials.
- Navigate to the **Integration** or **API Settings** section (exact location varies by Priority version).
- Generate a new **Personal Access Token (PAT)** and copy it.
- You will use this token as the **Username** in the credential form.

> **Example PAT**: `p_1a2b3c4d5e6f7g8h9i0j`

:::note
The **Password** field is fixed to `PAT` for all Priority connections and should not be changed.
:::

---

#### 4. Retrieve Application Credentials

Your Priority administrator will provide:

- **Application ID**: Your Priority application license identifier (e.g., `APP006`)
- **Application Key**: Your Priority application license key

These are used as custom headers in API requests for authentication.

---

#### 5. Save Your Credential

Once you've filled in all required fields, click **"Save and Authorize"** to store and verify your setup.

<img src="/img/credentials/priority/save-cred.png" alt="appse ai Priority Save and Authorize credential form" width="700"/>

- If successful, your credential will show a "✓" icon. Now you can use this application for your integrations.
- If it fails, verify all connection details match your Priority server configuration or contact support.

---

## Actions

Here is a list of the available actions for Priority ERP REST:

### Customer Actions

#### Get Customer

Get Customer action is used to retrieve a single customer record from Priority ERP by its customer number.

-----------------------------

##### Select Credentials and Action Events

Select your Priority REST credential, choose the **Get Customer** action event, then click on **Continue** button.

<img src="/img/credentials/priority/ac-gtcustmr1.jpg" alt="Priority Get Customer action example configuration" width="700" />

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Customer Number | Specify the unique customer number (CUSTNAME) identifying the customer in Priority. (e.g., `"1234"`) |

:::note
`Customer Number` is a mandatory field.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/priority/ac-gtcustomer2.jpg" alt="Priority Get Customer action example configuration" width="700" />

-----------------------------

##### Result

```json
[
  {
    "CUSTNAME": "1234",
    "CNAME": "Acme Corporation",
    "ADDRESS": "123 Main Street",
    "CITY": "New York",
    "STATE": "NY",
    "ZIP": "10001",
    "PHONE": "555-0123",
    "EMAIL": "contact@acme.com",
    "COUNTRY": "USA",
    "CREATEDDATE": "2026-01-15",
    "UPDATEDATE": "2026-08-10"
  }
]
```

------------------------------

#### Create Customer

Create Customer action is used to create a new customer, company, or contact record in Priority ERP.

-----------------------------

##### Select Credentials and Action Events

<img src="/img/credentials/priority/C-AC-CRTCUSTMR2.jpg" alt="Priority Create Customer action selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Customer Number | The unique customer number (CUSTNAME) for the new record. (e.g., `"1235"`) |
| Customer Name | The customer's business name. (e.g., `"Tech Solutions Inc"`) |
| Email | Customer email address. (e.g., `"info@techsol.com"`) |
| Phone | Customer contact phone number. (e.g., `"555-0456"`) |
| Address | Primary address line. (e.g., `"456 Oak Avenue"`) |
| City | City name. (e.g., `"Boston"`) |
| State | State or province code. (e.g., `"MA"`) |
| ZIP | Postal / ZIP code. (e.g., `"02101"`) |
| Country | Country code. (e.g., `"USA"`) |

:::note
`Customer Number` and `Customer Name` are mandatory fields. All other fields are optional and can be configured based on business requirements.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/priority/AC-CRTCUSTMR3.jpg" alt="Priority Create Customer example configuration" width="700" />

-----------------------------

##### Result

```json
[
  {
    "CUSTNAME": "1235",
    "CNAME": "Tech Solutions Inc",
    "ADDRESS": "456 Oak Avenue",
    "CITY": "Boston",
    "STATE": "MA",
    "ZIP": "02101",
    "COUNTRY": "USA",
    "PHONE": "555-0456",
    "EMAIL": "info@techsol.com",
    "CREATEDDATE": "2026-08-10"
  }
]
```

-----------------------------

#### Update Customer

Update Customer action is used to modify existing customer details including address, contact, and general information.

-----------------------------

##### Select Credentials and Action Events

<img src="/img/credentials/priority/C-AC-UPDTCUSTMR4.jpg" alt="Priority Update Customer action selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Customer Number | Specify the customer number to update. (e.g., `"1234"`) |
| Customer Name | The customer's business name. (e.g., `"Acme Corp"`) |
| Email | Customer email address. (e.g., `"newemail@acme.com"`) |
| Phone | Customer contact phone number. (e.g., `"555-0789"`) |
| Address | Primary address line. (e.g., `"789 Elm Street"`) |
| City | City name. (e.g., `"Los Angeles"`) |
| State | State or province code. (e.g., `"CA"`) |
| ZIP | Postal / ZIP code. (e.g., `"90001"`) |
| Country | Country code. (e.g., `"USA"`) |

:::note
`Customer Number` is a mandatory field. All other fields are optional and can be configured based on business requirements.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/priority/AC-UPDTCUSTMR5.jpg" alt="Priority Update Customer example configuration" width="700" />

-----------------------------

##### Result

```json
[
  {
    "CUSTNAME": "1234",
    "CNAME": "Acme Corp",
    "ADDRESS": "789 Elm Street",
    "CITY": "Los Angeles",
    "STATE": "CA",
    "ZIP": "90001",
    "COUNTRY": "USA",
    "PHONE": "555-0789",
    "EMAIL": "newemail@acme.com",
    "UPDATEDATE": "2026-08-10"
  }
]
```

---

### Order Actions

#### Get Order

Get Order action is used to retrieve a single sales order record from Priority ERP by its order number.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Order Number | Specify the unique sales order number in Priority. (e.g., `"ORD-2024-001"`) |

:::note
`Order Number` is a mandatory field.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Result

```json
[
  {
    "ORDERID": "ORD-2024-001",
    "CUSTNAME": "1234",
    "CNAME": "Acme Corporation",
    "ORDERDATE": "2026-08-01",
    "DUEDATE": "2026-08-15",
    "TOTALAMT": 15000.00,
    "STATUS": "Open",
    "REFERENCE": "PO-12345",
    "CREATEDDATE": "2026-08-01"
  }
]
```

------------------------------

#### Create Order

Create Order action is used to create a new sales order in Priority ERP.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Customer Number | The customer this order is placed for. (e.g., `"1234"`) |
| Reference | Customer reference or PO number. (e.g., `"PO-12346"`) |
| Order Date | The date the order is created. (e.g., `"2026-08-10"`) |
| Due Date | The expected delivery or due date. (e.g., `"2026-08-20"`) |
| Remarks | Additional notes or special instructions for the order. |

:::note
`Customer Number` is a mandatory field. All other fields are optional and can be configured based on business requirements.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Result

```json
[
  {
    "ORDERID": "ORD-2024-002",
    "CUSTNAME": "1234",
    "CNAME": "Acme Corporation",
    "REFERENCE": "PO-12346",
    "ORDERDATE": "2026-08-10",
    "DUEDATE": "2026-08-20",
    "STATUS": "Open",
    "CREATEDDATE": "2026-08-10"
  }
]
```

-----------------------------

#### Update Order

Update Order action is used to modify existing sales order details including dates, status, and references.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Order Number | Specify the order number to update. (e.g., `"ORD-2024-001"`) |
| Due Date | Update the expected delivery or due date. (e.g., `"2026-08-25"`) |
| Reference | Update customer reference or PO number. (e.g., `"PO-12347"`) |
| Remarks | Update order notes or special instructions. |

:::note
`Order Number` is a mandatory field. All other fields are optional and can be configured based on business requirements.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Result

```json
[
  {
    "ORDERID": "ORD-2024-001",
    "CUSTNAME": "1234",
    "REFERENCE": "PO-12347",
    "DUEDATE": "2026-08-25",
    "UPDATEDATE": "2026-08-10"
  }
]
```

---

### Item Actions

#### Get Item

Get Item action is used to retrieve a single item record from Priority ERP by its item number.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Item Number | Specify the unique item number in Priority. (e.g., `"ITEM-001"`) |

:::note
`Item Number` is a mandatory field.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Result

```json
[
  {
    "ITEMID": "ITEM-001",
    "ITEMNAME": "Widget Pro",
    "DESCRIPTION": "Professional Grade Widget",
    "UNITPRICE": 99.99,
    "QUANTITY": 500,
    "CATEGORY": "Electronics",
    "CREATEDDATE": "2025-06-15"
  }
]
```

------------------------------

#### Update Item

Update Item action is used to modify existing item details including description, pricing, and inventory information.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Item Number | Specify the item number to update. (e.g., `"ITEM-001"`) |
| Item Name | The item's display name. (e.g., `"Widget Pro Plus"`) |
| Description | Item description. (e.g., `"Professional Grade Widget with Enhanced Features"`) |
| Unit Price | Item unit price. (e.g., `"109.99"`) |
| Quantity | Available quantity in inventory. (e.g., `"450"`) |
| Category | Item category code. (e.g., `"Electronics"`) |

:::note
`Item Number` is a mandatory field. All other fields are optional and can be configured based on business requirements.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Result

```json
[
  {
    "ITEMID": "ITEM-001",
    "ITEMNAME": "Widget Pro Plus",
    "DESCRIPTION": "Professional Grade Widget with Enhanced Features",
    "UNITPRICE": 109.99,
    "QUANTITY": 450,
    "CATEGORY": "Electronics",
    "UPDATEDATE": "2026-08-10"
  }
]
```

---

### Price List Actions

#### Get Price List

Get Price List action is used to retrieve price list records from Priority ERP.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Price List ID | Specify the unique price list identifier. (e.g., `"PL-001"`) |

:::note
`Price List ID` is a mandatory field.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Result

```json
[
  {
    "PRICELISTID": "PL-001",
    "PRICELISTNAME": "Standard Pricing",
    "CREATEDDATE": "2025-01-10",
    "EFFECTIVE_DATE": "2026-01-01"
  }
]
```

------------------------------

#### Update Price List

Update Price List action is used to modify existing price list details and pricing information.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Price List ID | Specify the price list to update. (e.g., `"PL-001"`) |
| Price List Name | Update the price list name. (e.g., `"Premium Pricing"`) |
| Effective Date | Set the effective date for the price list. (e.g., `"2026-09-01"`) |

:::note
`Price List ID` is a mandatory field. All other fields are optional and can be configured based on business requirements.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Result

```json
[
  {
    "PRICELISTID": "PL-001",
    "PRICELISTNAME": "Premium Pricing",
    "EFFECTIVE_DATE": "2026-09-01",
    "UPDATEDATE": "2026-08-10"
  }
]
```

---

### Quotation Actions

#### Create Price Quotation

Create Price Quotation action is used to create a new price quotation in Priority ERP.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Customer Number | The customer this quotation is issued to. (e.g., `"1234"`) |
| Quotation Date | The date the quotation is created. (e.g., `"2026-08-10"`) |
| Valid Until | The quotation expiry date. (e.g., `"2026-09-10"`) |
| Reference | Customer reference or RFQ number. (e.g., `"RFQ-001"`) |

:::note
`Customer Number` is a mandatory field. All other fields are optional and can be configured based on business requirements.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Result

```json
[
  {
    "QUOTATIONID": "QUOT-2024-001",
    "CUSTNAME": "1234",
    "QUOTATIONDATE": "2026-08-10",
    "VALIDUNTIL": "2026-09-10",
    "REFERENCE": "RFQ-001",
    "STATUS": "Active",
    "CREATEDDATE": "2026-08-10"
  }
]
```

---

### Invoice Actions

#### Get Customer Invoice

Get Customer Invoice action is used to retrieve a single customer invoice record from Priority ERP by invoice number.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Invoice Number | The unique key identifying the customer invoice record in Priority. (e.g., `"INV-2024-001"`) |

:::note
`Invoice Number` is a mandatory field.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Result

```json
[
  {
    "INVNUM": "INV-2024-001",
    "CUSTNAME": "1234",
    "CNAME": "Acme Corporation",
    "INVOICEDATE": "2026-08-05",
    "DUEDATE": "2026-09-05",
    "TOTALAMT": 5000.00,
    "PAIDAMT": 2500.00,
    "BALANCEDUE": 2500.00,
    "STATUS": "Partial",
    "CREATEDDATE": "2026-08-05"
  }
]
```

------------------------------

### Shipment Actions

#### Get Shipping Document

Get Shipping Document action is used to retrieve shipping document records from Priority ERP.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Shipment Number | The unique shipment document number. (e.g., `"SHIP-2024-001"`) |

:::note
`Shipment Number` is a mandatory field.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Result

```json
[
  {
    "SHIPMENTID": "SHIP-2024-001",
    "CUSTNAME": "1234",
    "CNAME": "Acme Corporation",
    "SHIPMENTDATE": "2026-08-07",
    "EXPECTEDDELIVERY": "2026-08-15",
    "TRACKINGNO": "TRACK-2024-001",
    "STATUS": "In Transit",
    "CREATEDDATE": "2026-08-07"
  }
]
```

------------------------------

### Generic Actions

#### Get Filtered Records

Get Filtered Records action is used to retrieve records from Priority ERP using advanced filter criteria and pagination.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Object Name | Select the Priority entity/table to retrieve records from. (e.g., `"CUSTOMERS"`, `"ORDERS"`, `"ITEMS"`) |
| Filter Expression | Enter the OData filter condition to retrieve matching records. Example: `CUSTNAME eq '1234'` |
| Limit | Define the maximum number of records to fetch. Example: `10` |
| Select Fields | Specify the fields to retrieve as comma-separated values. Example: `CUSTNAME,CNAME,EMAIL` |

:::note
`Object Name` and `Limit` are mandatory fields. All other fields are optional and can be configured based on business requirements.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/priority/AC-GETFILTERED1.jpg" alt="Priority Get Filtered Records example configuration" width="700" />

-----------------------------

##### Result

```json
[
  {
    "CUSTNAME": "1234",
    "CNAME": "Acme Corporation",
    "EMAIL": "contact@acme.com"
  },
  {
    "CUSTNAME": "1235",
    "CNAME": "Tech Solutions Inc",
    "EMAIL": "info@techsol.com"
  }
]
```

-----------------------------

#### Get Priority Version

Get Priority Version action is used to retrieve the version information of your Priority ERP system.

-----------------------------

##### Configuration

This action requires no additional configuration parameters.

Click on **Continue**, then **Run** node.

-----------------------------

##### Result

```json
[
  {
    "VERSION": "24.0.2024.08",
    "RELEASEDATE": "2024-08-01",
    "BUILDNUMBER": "12345"
  }
]
```

---

## Triggers

Here is a list of the available triggers for Priority ERP REST:

### New Customer Trigger

#### New Customer Created

New Customer Created trigger is used to automatically capture and respond to when a new customer record is created in Priority ERP. This trigger polls the CUSTOMERS table at regular intervals to detect new customer additions.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Fetch data since | Fetch customers created after this date/time. Used as an incremental sync checkpoint. (e.g., `"2026-08-01T00:00:00Z"`) |
| Page Size | Number of customer records to fetch per polling cycle. (e.g., `"25"`) |

:::note
`Fetch data since` and `Page Size` are mandatory fields.
:::

:::caution
This trigger polls on the CREATEDDATE field — verify this field exists on your CUSTOMERS form in Priority before relying on this trigger. The checkpoint is set cautiously before activation; changes made after activation won't affect records already polled.
:::

Click on **Continue** to activate the trigger.

-----------------------------

##### Example Use Case

Set up a workflow that:
1. Listens for new customers being created in Priority
2. Automatically sends a welcome email
3. Creates a corresponding account in your CRM system
4. Initiates a setup checklist

---

### New Order Trigger

#### New Order Created

New Order Created trigger is used to automatically capture and respond to when a new sales order is created in Priority ERP. This trigger polls the ORDERS table at regular intervals to detect new order submissions.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Fetch data since | Fetch orders created after this date/time. Used as an incremental sync checkpoint. (e.g., `"2026-08-01T00:00:00Z"`) |
| Page Size | Number of order records to fetch per polling cycle. (e.g., `"25"`) |

:::note
`Fetch data since` and `Page Size` are mandatory fields.
:::

:::caution
This trigger polls on the CURDATE field — verify this field exists on your ORDERS form in Priority before relying on this trigger. The checkpoint is set cautiously before activation; changes made after activation won't affect records already polled.
:::

Click on **Continue** to activate the trigger.

-----------------------------

##### Example Use Case

Set up a workflow that:
1. Listens for new orders being created in Priority
2. Automatically sends an order confirmation to the customer
3. Notifies the warehouse for fulfillment
4. Updates inventory levels in real-time
5. Initiates shipping label generation

---

## Support

Need help? Contact our support team at [support@appse.ai](mailto:support@appse.ai)
