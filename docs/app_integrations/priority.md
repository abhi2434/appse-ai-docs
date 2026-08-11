---
title: "Priority ERP"
slug: /app-integrations/priority
description: Step-by-step guide to set up Priority ERP credentials and automate business workflows in appse ai.
---

Priority is a cloud-based enterprise resource planning (ERP) solution that helps organizations manage customers, sales orders, inventory, pricing, invoicing, and shipping from a single system. With appse ai, you can connect your Priority ERP environment over its OData REST API, automate business processes, and keep records in sync across your workflows.

---

## Setup Credential

Follow the steps below to quickly set up your credential.

### Required Fields

You'll need to provide:

| Field | Description |
| ----- | ----------- |
| Connection Name | A name to identify the connection |
| Service Root URL | The Priority REST API service root for your company |
| Username | Your Priority Personal Access Token (PAT) |
| Password | Fixed value `PAT` — pre-filled and read-only |
| Application ID | The Priority application license identifier, sent in the `X-App-Id` header |
| Application Key | The Priority application license key, sent in the `X-App-Key` header |

---

### Step-by-Step Guide

#### 1. Add Connection Name

- Enter a user-friendly name to identify this connection (e.g., `Priority Production`).
- This is only for reference within our platform.

---

#### 2. Enter the Service Root URL

- Copy the Priority REST API service root for the company you want to connect to.
- Paste it into the **Service Root URL** field.

> **Example**: `https://demo.priority-software.com/odata/Priority/tabula.ini/demo`

:::note
If you are unsure of your service root, ask your Priority administrator for the OData endpoint of the target company. Opening the URL in a browser should return the list of available Priority forms.
:::

---

#### 3. Enter Your PAT Token as the Username

- Log in to Priority and generate a **Personal Access Token (PAT)** for the integration user.
- Paste the token into the **Username** field.
- The **Password** field is pre-filled with the fixed value `PAT` and cannot be edited.

> **Example**: `pat_7a8b9c0d1e2f3g4h5i6j7k8l`

---

#### 4. Enter the Application ID

- Request the Priority application license identifier from your Priority administrator.
- Paste it into the **Application ID** field. This value is sent in the `X-App-Id` request header.

> **Example**: `APP012`

---

#### 5. Enter the Application Key

- Request the matching application license key from your Priority administrator.
- Paste it into the **Application Key** field. This value is sent in the `X-App-Key` request header.

> **Example**: `key_xyz123abc456def789ghi`

---

### Save Your Credential

Once you've filled in the necessary fields, click **"Save"** to store and verify your setup.

<img src="/img/credentials/priority/priority-cred-save.jpg" alt="appse ai Priority Save credential form" width="700" />

- If successful, your credential will show a "✓" icon. Now you can use this application for your integrations.
- If it fails, you will be displayed a "!" icon. In that case, please recheck your Service Root URL, PAT token, Application ID, and Application Key or contact support.

<img src="/img/credentials/priority/priority-cred-saved.jpg" alt="appse ai Priority Saved credential" width="700" />

---

## Actions

Here is a list of the available actions for Priority:

### Customer Actions

#### Create Customer

Create Customer action is used to create a new customer, company, or contact record in Priority ERP.

-----------------------------

##### Select Credentials and Action Events

<img src="/img/credentials/priority/c-ac-crtcustmr2.jpg" alt="appse ai Priority Create Customer action selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Customer Number | The unique customer number (`CUSTNAME`) for the new record. Example: `CUST001` |
| Customer Name | The customer's display name (`CUSTDES`), max 48 characters. Example: `ABC Manufacturing Inc` |
| Email | Customer's email address. Example: `accounts@abc-manufacturing.example` |
| VAT Number | Customer's VAT registration number. Example: `GB123456789` |

:::note
`Customer Number` and `Customer Name` are mandatory fields. Any other Priority `CUSTOMERS` field required by your instance can be supplied as an additional field.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/priority/ac-crtcustmr3.jpg" alt="appse ai Priority Create Customer example configuration" width="700" />

-----------------------------

##### Result

```json
{
  "@odata.context": "https://demo.priority-software.com/odata/Priority/tabula.ini/demo/$metadata#CUSTOMERS/$entity",
  "@odata.etag": "W/\"MjAyNi0wOC0xMVQxMDoxNTozMFo=\"",
  "CUSTNAME": "CUST001",
  "CUSTDES": "ABC Manufacturing Inc",
  "EMAIL": "accounts@abc-manufacturing.example",
  "VATNUM": "GB123456789",
  "ADDRESS": "42 Industrial Park Road",
  "STATE": "TX",
  "ZIP": "75001",
  "COUNTRYNAME": "United States",
  "PHONE": "+1-214-555-0142",
  "CODE": "USD",
  "CUSTSTATUSDES": "Active",
  "CREATEDDATE": "2026-08-11T10:15:30+00:00",
  "UDATE": "2026-08-11T10:15:30+00:00"
}
```
-----------------------------

#### Update Customer

Update Customer action is used to update an existing customer record in Priority ERP by customer number. Only the fields provided are changed.

-----------------------------

##### Select Credentials and Action Events

<img src="/img/credentials/priority/c-ac-updcustmr1.jpg" alt="appse ai Priority Update Customer action selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Customer Number | The unique customer number (`CUSTNAME`) identifying the record to update. Example: `CUST001` |
| Email | Customer's email address. Example: `billing@abc-manufacturing.example` |
| VAT Number | Customer's VAT registration number. Example: `GB987654321` |
| Custom Field 19 (SPEC19) | General-purpose custom field, commonly used to sync back a web/e-commerce ID or flag. Example: `WEB-88421` |
| Custom Field 20 (SPEC20) | General-purpose custom field, commonly used to sync back a web/e-commerce ID or flag. Example: `SYNCED` |

:::note
`Customer Number` is a mandatory field. All other fields are optional and can be configured based on business requirements.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/priority/ac-updcustmr2.jpg" alt="appse ai Priority Update Customer example configuration" width="700" />

-----------------------------

##### Result

```json
{
  "@odata.context": "https://demo.priority-software.com/odata/Priority/tabula.ini/demo/$metadata#CUSTOMERS/$entity",
  "@odata.etag": "W/\"MjAyNi0wOC0xMVQxMTo0MjowOVo=\"",
  "CUSTNAME": "CUST001",
  "CUSTDES": "ABC Manufacturing Inc",
  "EMAIL": "billing@abc-manufacturing.example",
  "VATNUM": "GB987654321",
  "SPEC19": "WEB-88421",
  "SPEC20": "SYNCED",
  "CUSTSTATUSDES": "Active",
  "UDATE": "2026-08-11T11:42:09+00:00"
}
```
-----------------------------

#### Get Customer

Get Customer action is used to retrieve a single customer record from Priority ERP by its customer number.

-----------------------------

##### Select Credentials and Action Events

<img src="/img/credentials/priority/ac-gtcustmr1.jpg" alt="appse ai Priority Get Customer action selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Customer Number | The unique customer number (`CUSTNAME`) identifying the customer record in Priority. Example: `CUST001` |
| Expand Subform | Comma-separated subform names to include inline. Example: `CUSTDESTS_SUBFORM` |

:::note
`Customer Number` is a mandatory field. Valid **Expand Subform** values are: `CUSTPERSONNEL_SUBFORM` (contacts), `CUSTDESTS_SUBFORM` (delivery addresses), `CUSTFAMILYDISC_SUBFORM` (family discounts), `CUSTPARTDISC_SUBFORM` (part discounts), and `CUSTPLIST_SUBFORM` (price list assignments).
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/priority/ac-gtcustomer2.jpg" alt="appse ai Priority Get Customer example configuration" width="700" />

-----------------------------

##### Result

```json
{
  "@odata.context": "https://demo.priority-software.com/odata/Priority/tabula.ini/demo/$metadata#CUSTOMERS/$entity",
  "@odata.etag": "W/\"MjAyNi0wOC0xMVQxMTo0MjowOVo=\"",
  "CUSTNAME": "CUST001",
  "CUSTDES": "ABC Manufacturing Inc",
  "EMAIL": "billing@abc-manufacturing.example",
  "VATNUM": "GB987654321",
  "ADDRESS": "42 Industrial Park Road",
  "STATE": "TX",
  "ZIP": "75001",
  "COUNTRYNAME": "United States",
  "PHONE": "+1-214-555-0142",
  "CODE": "USD",
  "CUSTSTATUSDES": "Active",
  "CUSTDESTS_SUBFORM": [
    {
      "CODE": "SHP1",
      "CODEDES": "Dallas Distribution Center",
      "ADDRESS": "980 Logistics Way",
      "MAINFLAG": "Y"
    }
  ]
}
```
-----------------------------

### Customer Address Actions

#### Create Customer Address

Create Customer Address action is used to create a new address/site (delivery address) record for an existing customer in Priority ERP.

-----------------------------

##### Select Credentials and Action Events

<img src="/img/credentials/priority/c-ac-crtcustaddr1.jpg" alt="appse ai Priority Create Customer Address action selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Customer Number | The unique customer number (`CUSTNAME`) of the parent customer this address belongs to. Example: `CUST001` |
| Address Code | The unique site/address code (`CODE`) for the new address record, up to 4 characters. Example: `SHP1` |
| Address Description | The address/site's display description (`CODEDES`), max 48 characters. Example: `Dallas Distribution Center` |
| Street Address | The street address line (`ADDRESS`), max 80 characters. Example: `980 Logistics Way` |
| Main Address | Marks this address as the customer's main/default address (`MAINFLAG`). Example: `true` |

:::note
`Customer Number`, `Address Code`, and `Address Description` are mandatory fields. **Address Code** is not auto-generated — you must assign it yourself and it must be unique within the customer. This is separate from Priority's internal auto-numeric `DESTCODE` id, which is read-only and cannot be set. Add `ADDRESS2`, `ADDRESS3`, `STATE`, `ZIP`, or `COUNTRYNAME` as additional fields if your instance needs a fuller address.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/priority/ac-crtcustaddr2.jpg" alt="appse ai Priority Create Customer Address example configuration" width="700" />

-----------------------------

##### Result

```json
{
  "@odata.context": "https://demo.priority-software.com/odata/Priority/tabula.ini/demo/$metadata#CUSTOMERS('CUST001')/CUSTDESTS_SUBFORM/$entity",
  "@odata.etag": "W/\"MjAyNi0wOC0xMVQxMjowNTo0NFo=\"",
  "CUSTNAME": "CUST001",
  "DESTCODE": 1041,
  "CODE": "SHP1",
  "CODEDES": "Dallas Distribution Center",
  "ADDRESS": "980 Logistics Way",
  "STATE": "TX",
  "ZIP": "75001",
  "COUNTRYNAME": "United States",
  "MAINFLAG": "Y"
}
```
-----------------------------

#### Update Customer Address

Update Customer Address action is used to update an existing address/site (delivery address) record for a customer in Priority ERP. Only the fields provided are changed.

-----------------------------

##### Select Credentials and Action Events

<img src="/img/credentials/priority/c-ac-updcustaddr1.jpg" alt="appse ai Priority Update Customer Address action selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Customer Number | The unique customer number (`CUSTNAME`) of the parent customer this address belongs to. Example: `CUST001` |
| Address Code | The unique site/address code (`CODE`) identifying the address record to update. Example: `SHP1` |
| Address Description | The address/site's display description (`CODEDES`). Example: `Dallas DC - North Dock` |
| Street Address | The street address line (`ADDRESS`). Example: `980 Logistics Way, Dock B` |
| Main Address | Marks this address as the customer's main/default address (`MAINFLAG`). Example: `true` |

:::note
`Customer Number` and `Address Code` are mandatory fields. The address code must match an existing address on this customer. All other fields are optional and can be configured based on business requirements.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/priority/ac-updcustaddr2.jpg" alt="appse ai Priority Update Customer Address example configuration" width="700" />

-----------------------------

##### Result

```json
{
  "@odata.context": "https://demo.priority-software.com/odata/Priority/tabula.ini/demo/$metadata#CUSTOMERS('CUST001')/CUSTDESTS_SUBFORM/$entity",
  "@odata.etag": "W/\"MjAyNi0wOC0xMVQxMjozMTowMlo=\"",
  "CUSTNAME": "CUST001",
  "DESTCODE": 1041,
  "CODE": "SHP1",
  "CODEDES": "Dallas DC - North Dock",
  "ADDRESS": "980 Logistics Way, Dock B",
  "MAINFLAG": "Y"
}
```
-----------------------------

### Sales Order Actions

#### Create Order

Create Order action is used to create a new sales order in Priority ERP.

-----------------------------

##### Select Credentials and Action Events

<img src="/img/credentials/priority/c-ac-crtordr1.jpg" alt="appse ai Priority Create Order action selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Customer Number | The customer this order is placed for. Must match an existing Priority customer number (`CUSTNAME`). Example: `CUST001` |
| Reference | External reference number for the order, for example a customer PO number. Example: `PO-2026-4417` |

:::note
`Customer Number` is a mandatory field. Any other Priority `ORDERS` field required by your instance can be supplied as an additional field.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/priority/ac-crtordr2.jpg" alt="appse ai Priority Create Order example configuration" width="700" />

-----------------------------

##### Result

```json
{
  "@odata.context": "https://demo.priority-software.com/odata/Priority/tabula.ini/demo/$metadata#ORDERS/$entity",
  "@odata.etag": "W/\"MjAyNi0wOC0xMVQxMzoxMDoyN1o=\"",
  "ORDNAME": "SO26000431",
  "CUSTNAME": "CUST001",
  "CDES": "ABC Manufacturing Inc",
  "REFERENCE": "PO-2026-4417",
  "CURDATE": "2026-08-11T13:10:27+00:00",
  "ORDSTATUSDES": "New Order",
  "CODE": "USD",
  "QPRICE": 0,
  "TOTPRICE": 0
}
```
-----------------------------

#### Update Order

Update Order action is used to update an existing sales order in Priority ERP by order name — commonly used for status/flag updates and web-ID sync-back.

-----------------------------

##### Select Credentials and Action Events

<img src="/img/credentials/priority/c-ac-updordr1.jpg" alt="appse ai Priority Update Order action selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Order Name | The unique order name (`ORDNAME`) identifying the record to update. Example: `SO26000431` |
| Web Shop ID | Web/e-commerce order ID to sync back onto the Priority order. Example: `WEB-ORD-99215` |

:::note
`Order Name` is a mandatory field. `Web Shop ID` (`SRK_WEBSHOPID`) is observed in production integrations but may not exist on every Priority instance — verify it against your schema before use.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/priority/ac-updordr2.jpg" alt="appse ai Priority Update Order example configuration" width="700" />

-----------------------------

##### Result

```json
{
  "@odata.context": "https://demo.priority-software.com/odata/Priority/tabula.ini/demo/$metadata#ORDERS/$entity",
  "@odata.etag": "W/\"MjAyNi0wOC0xMVQxMzoyODo1MVo=\"",
  "ORDNAME": "SO26000431",
  "CUSTNAME": "CUST001",
  "CDES": "ABC Manufacturing Inc",
  "REFERENCE": "PO-2026-4417",
  "SRK_WEBSHOPID": "WEB-ORD-99215",
  "ORDSTATUSDES": "New Order",
  "UDATE": "2026-08-11T13:28:51+00:00"
}
```
-----------------------------

#### Get Order

Get Order action is used to retrieve a single sales order record from Priority ERP by order name.

-----------------------------

##### Select Credentials and Action Events

<img src="/img/credentials/priority/c-ac-gtordr1.jpg" alt="appse ai Priority Get Order action selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Order Name | The unique order name (`ORDNAME`) identifying the order record in Priority. Example: `SO26000431` |
| Expand Subform | Comma-separated subform names to include inline. Example: `ORDERITEMS_SUBFORM` |

:::note
`Order Name` is a mandatory field. Valid **Expand Subform** values are: `ORDERITEMS_SUBFORM` (order lines), `SHIPTO2_SUBFORM` (ship-to address), and `ORDERSCONT_SUBFORM` (order continuation/additional details).
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/priority/ac-gtordr2.jpg" alt="appse ai Priority Get Order example configuration" width="700" />

-----------------------------

##### Result

```json
{
  "@odata.context": "https://demo.priority-software.com/odata/Priority/tabula.ini/demo/$metadata#ORDERS/$entity",
  "@odata.etag": "W/\"MjAyNi0wOC0xMVQxMzoyODo1MVo=\"",
  "ORDNAME": "SO26000431",
  "CUSTNAME": "CUST001",
  "CDES": "ABC Manufacturing Inc",
  "REFERENCE": "PO-2026-4417",
  "CURDATE": "2026-08-11T13:10:27+00:00",
  "ORDSTATUSDES": "New Order",
  "CODE": "USD",
  "TOTPRICE": 4250,
  "ORDERITEMS_SUBFORM": [
    {
      "LINE": 1,
      "PARTNAME": "SKU-100",
      "PDES": "Industrial Pump Model XZ",
      "TQUANT": 5,
      "PRICE": 850,
      "QPRICE": 4250
    }
  ]
}
```
-----------------------------

### Item Actions

#### Get Item

Get Item action is used to retrieve a single item record from Priority ERP (`LOGPART`) by item name.

-----------------------------

##### Select Credentials and Action Events

<img src="/img/credentials/priority/c-ac-gtitm1.jpg" alt="appse ai Priority Get Item action selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Item Name | The unique item name (`PARTNAME`) identifying the item record in Priority. Example: `SKU-100` |
| Expand Subform | Comma-separated subform names to include inline. Example: `LOGCOUNTERS_SUBFORM` |

:::note
`Item Name` is a mandatory field. Valid **Expand Subform** values are: `LOGCOUNTERS_SUBFORM` (warehouse stock counters), `PARTINCUSTPLISTS_SUBFORM` (prices in customer price lists), and `PARTALT_SUBFORM` (alternative/related items).
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/priority/ac-gtitm2.jpg" alt="appse ai Priority Get Item example configuration" width="700" />

-----------------------------

##### Result

```json
{
  "@odata.context": "https://demo.priority-software.com/odata/Priority/tabula.ini/demo/$metadata#LOGPART/$entity",
  "@odata.etag": "W/\"MjAyNi0wOC0xMVQxNDowMjoxOVo=\"",
  "PARTNAME": "SKU-100",
  "PARTDES": "Industrial Pump Model XZ",
  "UNITNAME": "PCS",
  "BARCODE": "8901234567890",
  "FAMILYNAME": "PUMPS",
  "STATDES": "Active",
  "VATFLAG": "Y",
  "LOGCOUNTERS_SUBFORM": [
    {
      "WARHSNAME": "MAIN",
      "BALANCE": 120,
      "RESERVED": 15
    }
  ]
}
```
-----------------------------

#### Update Item

Update Item action is used to update an existing item record in Priority ERP (`LOGPART`) by item name — commonly used to sync back web IDs, SKUs, or flags.

-----------------------------

##### Select Credentials and Action Events

<img src="/img/credentials/priority/c-ac-upditm1.jpg" alt="appse ai Priority Update Item action selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Item Name | The unique item name (`PARTNAME`) identifying the record to update. Example: `SKU-100` |

:::note
`Item Name` is a mandatory field. Add any Priority `LOGPART` field your instance requires — for example `PARTDES`, `BARCODE`, or `STATDES` — as an additional field.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/priority/ac-upditm2.jpg" alt="appse ai Priority Update Item example configuration" width="700" />

-----------------------------

##### Result

```json
{
  "@odata.context": "https://demo.priority-software.com/odata/Priority/tabula.ini/demo/$metadata#LOGPART/$entity",
  "@odata.etag": "W/\"MjAyNi0wOC0xMVQxNDoyMTozOFo=\"",
  "PARTNAME": "SKU-100",
  "PARTDES": "Industrial Pump Model XZ - Rev B",
  "UNITNAME": "PCS",
  "BARCODE": "8901234567890",
  "STATDES": "Active",
  "UDATE": "2026-08-11T14:21:38+00:00"
}
```
-----------------------------

### Price List Actions

#### Get Price List

Get Price List action is used to retrieve a single price list header record from Priority ERP by price list name.

-----------------------------

##### Select Credentials and Action Events

<img src="/img/credentials/priority/c-ac-gtprclst1.jpg" alt="appse ai Priority Get Price List action selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Price List Name | The unique price list name (`PLNAME`) identifying the price list record in Priority. Example: `PL2026Q3` |
| Expand Subform | Subform to include inline. Example: `PARTPRICE2_SUBFORM` |

:::note
`Price List Name` is a mandatory field. The only valid **Expand Subform** value is `PARTPRICE2_SUBFORM` (item prices).
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/priority/ac-gtprclst2.jpg" alt="appse ai Priority Get Price List example configuration" width="700" />

-----------------------------

##### Result

```json
{
  "@odata.context": "https://demo.priority-software.com/odata/Priority/tabula.ini/demo/$metadata#PRICELIST/$entity",
  "@odata.etag": "W/\"MjAyNi0wOC0xMVQxNDo1MDoxMlo=\"",
  "PLNAME": "PL2026Q3",
  "PLDES": "Standard Wholesale Q3 2026",
  "CODE": "USD",
  "VALIDDATE": "2026-07-01T00:00:00+00:00",
  "EXPIRYDATE": "2026-09-30T00:00:00+00:00",
  "PARTPRICE2_SUBFORM": [
    {
      "PARTNAME": "SKU-100",
      "PDES": "Industrial Pump Model XZ",
      "PRICE": 850,
      "PERCENT": 0
    }
  ]
}
```
-----------------------------

#### Update Price List

Update Price List action is used to update an existing price list header in Priority ERP by price list name — commonly used for web-ID/flag sync-back.

-----------------------------

##### Select Credentials and Action Events

<img src="/img/credentials/priority/c-ac-updprclst1.jpg" alt="appse ai Priority Update Price List action selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Price List Name | The unique price list name (`PLNAME`) identifying the record to update. Example: `PL2026Q3` |

:::note
`Price List Name` is a mandatory field. Add any Priority `PRICELIST` field your instance requires — for example `PLDES` or `EXPIRYDATE` — as an additional field.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/priority/ac-updprclst2.jpg" alt="appse ai Priority Update Price List example configuration" width="700" />

-----------------------------

##### Result

```json
{
  "@odata.context": "https://demo.priority-software.com/odata/Priority/tabula.ini/demo/$metadata#PRICELIST/$entity",
  "@odata.etag": "W/\"MjAyNi0wOC0xMVQxNTowNDo1NVo=\"",
  "PLNAME": "PL2026Q3",
  "PLDES": "Standard Wholesale Q3 2026 - Revised",
  "CODE": "USD",
  "VALIDDATE": "2026-07-01T00:00:00+00:00",
  "EXPIRYDATE": "2026-10-31T00:00:00+00:00",
  "UDATE": "2026-08-11T15:04:55+00:00"
}
```
-----------------------------

### Quotation Actions

#### Create Price Quotation

Create Price Quotation action is used to create a new price quotation in Priority ERP (`CPROF`).

-----------------------------

##### Select Credentials and Action Events

<img src="/img/credentials/priority/c-ac-crtprcquot1.jpg" alt="appse ai Priority Create Price Quotation action selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Customer Number | The customer this quotation is issued to. Must match an existing Priority customer number (`CUSTNAME`). Example: `CUST001` |

:::note
`Customer Number` is a mandatory field. Any other Priority `CPROF` field required by your instance can be supplied as an additional field.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/priority/ac-crtprcquot2.jpg" alt="appse ai Priority Create Price Quotation example configuration" width="700" />

-----------------------------

##### Result

```json
{
  "@odata.context": "https://demo.priority-software.com/odata/Priority/tabula.ini/demo/$metadata#CPROF/$entity",
  "@odata.etag": "W/\"MjAyNi0wOC0xMVQxNTozMDoxN1o=\"",
  "QUOTENAME": "QT26000112",
  "CUSTNAME": "CUST001",
  "CDES": "ABC Manufacturing Inc",
  "CURDATE": "2026-08-11T15:30:17+00:00",
  "STATDES": "Draft",
  "CODE": "USD",
  "QPRICE": 0,
  "TOTPRICE": 0
}
```
-----------------------------

### Invoice Actions

#### Get Customer Invoice

Get Customer Invoice action is used to retrieve a single customer invoice record from Priority ERP (`CINVOICES`) by invoice number.

-----------------------------

##### Select Credentials and Action Events

<img src="/img/credentials/priority/c-ac-gtcustinv1.jpg" alt="appse ai Priority Get Customer Invoice action selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Invoice Number | The unique key identifying the customer invoice record in Priority. Example: `IVNUM='T7672',DEBIT='C',IVTYPE='C'` |
| Expand Subform | Subform to include inline. Example: `CINVOICEITEMS_SUBFORM` |

:::note
`Invoice Number` is a mandatory field. Pass the invoice number, debit, and invoice type values that correspond to the `IVNUM`, `DEBIT`, and `IVTYPE` parameters in the `CINVOICES` query. The only valid **Expand Subform** value is `CINVOICEITEMS_SUBFORM` (invoice lines).
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/priority/ac-gtcustinv2.jpg" alt="appse ai Priority Get Customer Invoice example configuration" width="700" />

-----------------------------

##### Result

```json
{
  "@odata.context": "https://demo.priority-software.com/odata/Priority/tabula.ini/demo/$metadata#CINVOICES/$entity",
  "@odata.etag": "W/\"MjAyNi0wOC0xMVQxNTo0ODozM1o=\"",
  "IVNUM": "T7672",
  "DEBIT": "C",
  "IVTYPE": "C",
  "CUSTNAME": "CUST001",
  "CDES": "ABC Manufacturing Inc",
  "IVDATE": "2026-08-05T00:00:00+00:00",
  "CODE": "USD",
  "QPRICE": 4250,
  "VAT": 765,
  "TOTPRICE": 5015,
  "CINVOICEITEMS_SUBFORM": [
    {
      "LINE": 1,
      "PARTNAME": "SKU-100",
      "PDES": "Industrial Pump Model XZ",
      "TQUANT": 5,
      "PRICE": 850,
      "QPRICE": 4250
    }
  ]
}
```
-----------------------------

### Shipping Actions

#### Get Shipping Document

Get Shipping Document action is used to retrieve a single shipping (delivery) document record from Priority ERP (`DOCUMENTS_D`).

-----------------------------

##### Select Credentials and Action Events

<img src="/img/credentials/priority/c-ac-gtshpdoc1.jpg" alt="appse ai Priority Get Shipping Document action selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Document Number | The unique key identifying the shipping document record in Priority. Example: `DOCNO='SH26001378',TYPE='D'` |
| Expand Subform | Subform to include inline. Example: `TRANSORDER_D_SUBFORM` |

:::note
`Document Number` is a mandatory field. Pass the document number and type values that correspond to the `DOCNO` and `TYPE` parameters in the `DOCUMENTS_D` query. The only valid **Expand Subform** value is `TRANSORDER_D_SUBFORM` (shipping document lines).
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/priority/ac-gtshpdoc2.jpg" alt="appse ai Priority Get Shipping Document example configuration" width="700" />

-----------------------------

##### Result

```json
{
  "@odata.context": "https://demo.priority-software.com/odata/Priority/tabula.ini/demo/$metadata#DOCUMENTS_D/$entity",
  "@odata.etag": "W/\"MjAyNi0wOC0xMVQxNjowMjoyOVo=\"",
  "DOCNO": "SH26001378",
  "TYPE": "D",
  "CUSTNAME": "CUST001",
  "CDES": "ABC Manufacturing Inc",
  "CURDATE": "2026-08-08T00:00:00+00:00",
  "STATDES": "Shipped",
  "ADDRESS": "980 Logistics Way",
  "TRANSORDER_D_SUBFORM": [
    {
      "LINE": 1,
      "PARTNAME": "SKU-100",
      "PDES": "Industrial Pump Model XZ",
      "TQUANT": 5,
      "ORDNAME": "SO26000431"
    }
  ]
}
```
-----------------------------

### Generic Actions

#### Search Records

Search Records action is used to retrieve a list of records from a specified Priority form (table) using OData filters, field selection, and record limits.

-----------------------------

##### Select Credentials and Action Events

<img src="/img/credentials/priority/c-ac-srchrcrds1.jpg" alt="appse ai Priority Search Records action selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Object Name | Select the Priority form (table) to search using the searchable dropdown. Supported objects include: `Customers`, `Items`, `Sales Orders`, `Price Lists`, `Customer Invoices`, `Shipping Documents`, `Bill of Materials`, `Currency Exchange Rates`, and `Price Quotations`. |
| Filter Value | OData filter expression using field names from the selected object. Example: `CUSTNAME eq 'CUST001'` |
| Limit of records | Maximum number of records to return. Example: `25` |
| Select fields to fetch | Comma-separated field names from the selected object. Example: `CUSTNAME,CUSTDES` |
| Expand Subform | Comma-separated related subform name(s) to include inline, if the selected object supports them. Example: `CUSTPERSONNEL_SUBFORM` |

:::note
`Object Name` is a mandatory field. The selected object determines which field names are valid for the filter, select, and expand options. Leave `Select fields to fetch` blank to return all fields.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/priority/ac-srchrcrds2.jpg" alt="appse ai Priority Search Records example configuration" width="700" />

-----------------------------

##### Result

```json
[
  {
    "@odata.etag": "W/\"MjAyNi0wOC0xMVQxMTo0MjowOVo=\"",
    "CUSTNAME": "CUST001",
    "CUSTDES": "ABC Manufacturing Inc"
  },
  {
    "@odata.etag": "W/\"MjAyNi0wOC0xMFQwOTozMDoxNVo=\"",
    "CUSTNAME": "CUST002",
    "CUSTDES": "XYZ Enterprises Ltd"
  }
]
```
-----------------------------

### System Actions

#### Get Priority Version

Get Priority Version action is used to check the version of the connected Priority ERP system. It is useful for confirming that the connection is working.

-----------------------------

##### Select Credentials and Action Events

<img src="/img/credentials/priority/c-ac-gtprtyver1.jpg" alt="appse ai Priority Get Priority Version action selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

This action does not require any configuration fields.

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/priority/ac-gtprtyver2.jpg" alt="appse ai Priority Get Priority Version example configuration" width="700" />

-----------------------------

##### Result

```json
{
  "@odata.context": "https://demo.priority-software.com/odata/Priority/tabula.ini/demo/$metadata#Edm.String",
  "value": "23.1.0.15"
}
```
-----------------------------

## Triggers

Here is a list of the available triggers for Priority:

### Customer Triggers

#### New Customer Created

New Customer Created trigger fires when a new customer record is created in Priority ERP. It polls the `CUSTOMERS` form on an incremental checkpoint.

-----------------------------

##### Select Credentials and Trigger Events

<img src="/img/credentials/priority/c-tr-nwcustmr1.jpg" alt="appse ai Priority New Customer Created trigger selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Fetch data since | Fetch customers created after this date/time. Used as an incremental sync checkpoint. Example: `2026-08-01T00:00:00Z` |
| Page Size | Number of customer records to fetch per polling cycle. Example: `25` |

:::note
`Fetch data since` and `Page Size` are mandatory fields. Set the checkpoint cautiously before activating the workflow — changes made after activation won't affect records already polled. This trigger polls on the record creation date audit field; verify that field exists on your `CUSTOMERS` form before relying on it.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/priority/tr-nwcustmr2.jpg" alt="appse ai Priority New Customer Created trigger example configuration" width="700" />

-----------------------------

##### Result

```json
[
  {
    "@odata.etag": "W/\"MjAyNi0wOC0xMVQxMDoxNTozMFo=\"",
    "CUSTNAME": "CUST001",
    "CUSTDES": "ABC Manufacturing Inc",
    "EMAIL": "accounts@abc-manufacturing.example",
    "VATNUM": "GB123456789",
    "CODE": "USD",
    "CUSTSTATUSDES": "Active",
    "CREATEDDATE": "2026-08-11T10:15:30+00:00"
  }
]
```
-----------------------------

### Sales Order Triggers

#### New Order Created

New Order Created trigger fires when a new sales order is created in Priority ERP. It polls the `ORDERS` form on an incremental checkpoint.

-----------------------------

##### Select Credentials and Trigger Events

<img src="/img/credentials/priority/c-tr-nwordr1.jpg" alt="appse ai Priority New Order Created trigger selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Fetch data since | Fetch orders created after this date/time. Used as an incremental sync checkpoint. Example: `2026-08-01T00:00:00Z` |
| Page Size | Number of order records to fetch per polling cycle. Example: `25` |

:::note
`Fetch data since` and `Page Size` are mandatory fields. Set the checkpoint cautiously before activating the workflow — changes made after activation won't affect records already polled. This trigger polls on `CURDATE` (record creation date); verify that field exists on your `ORDERS` form before relying on it.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/priority/tr-nwordr2.jpg" alt="appse ai Priority New Order Created trigger example configuration" width="700" />

-----------------------------

##### Result

```json
[
  {
    "@odata.etag": "W/\"MjAyNi0wOC0xMVQxMzoxMDoyN1o=\"",
    "ORDNAME": "SO26000431",
    "CUSTNAME": "CUST001",
    "CDES": "ABC Manufacturing Inc",
    "REFERENCE": "PO-2026-4417",
    "CURDATE": "2026-08-11T13:10:27+00:00",
    "ORDSTATUSDES": "New Order",
    "CODE": "USD",
    "TOTPRICE": 4250
  }
]
```
-----------------------------

## Support

Need help? Contact our support team at [support@appse.ai](mailto:support@appse.ai)
