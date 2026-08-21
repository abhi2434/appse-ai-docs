---
title: "Sage X3"
slug: /app-integrations/sage-x3
description: Step-by-step guide to set up Sage X3 credentials and automate ERP workflows in appse ai.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import EnableImagePreview from '@site/src/components/EnableImagePreview';

<EnableImagePreview />

Sage X3 is a comprehensive enterprise resource planning (ERP) solution designed for mid-market businesses. With appse ai, you can seamlessly connect to your Sage X3 instance, automate item, inventory, and price list synchronization, and create customers and sales orders — all without writing SOAP or XML, enhancing efficiency across your supply chain and customer management workflows.

---

## Setup Credential

Follow the steps below to quickly set up your credential.

### Required Fields

You'll need to provide:

| Field                    | Description                                                                 |
| ------------------------ | --------------------------------------------------------------------------- |
| Connection Name          | A name to identify the connection                                          |
| SOAP Endpoint URL        | The Syracuse SOAP web services endpoint for your Sage X3 instance         |
| Username                 | Your Sage X3 login username                                                |
| Password                 | Your Sage X3 login password                                                |
| Web Service Pool Alias   | The pool alias configured in your X3 instance                             |
| Language Code            | The language code used for returned messages from X3                       |

---

### Step-by-Step Guide

##### 1. Add Connection Name

- Enter a user-friendly name to identify this connection (e.g., `Sage X3 Production`, `X3 Finance`).
- This is only for reference within the appse ai platform.

---

##### 2. Locate Your SOAP Endpoint URL

- Log in to your **Sage X3** instance.
- Navigate to the **Administration** section.
- The SOAP endpoint URL follows this pattern:
  
  ```
  https://your-x3-host/soap-generic/syracuse/collaboration/syracuse/CAdxWebServiceXmlCC
  ```

- Replace `your-x3-host` with your actual Sage X3 host address.

> **Example**: `https://x3-prod.company.com/soap-generic/syracuse/collaboration/syracuse/CAdxWebServiceXmlCC`

---

##### 3. Enter Your Sage X3 Credentials

- Provide your **Username** and **Password** for your Sage X3 login.
- These credentials must have appropriate permissions to access the web services.

---

##### 4. Identify Your Web Service Pool Alias

- In your **Sage X3** instance, navigate to **Administration** → **Administration** → **Web services** → **Classic SOAP pools configuration**.

  <!-- <img src="/img/credentials/sage-x3/sage-x3-pool-alias-navigation.jpg" alt="appse ai Sage X3 - Classic SOAP Pools Configuration" width="700" /> -->

- Locate the **Pool Alias** you want to use for this integration (e.g., `APPSE`).
- Copy and enter this value in the credential form.

> **Example**: `APPSE`

> **Note**: The pool alias remains the same for all actions and triggers. A pool serves any published web service on its endpoint, so it represents connection state rather than per-operation configuration. Use a separate credential for a different X3 folder or pool.

---

##### 5. Specify the Language Code

- Enter the **Language Code** used by your Sage X3 instance for returned messages (e.g., `ENG` for English, `FRA` for French).
- This ensures error and confirmation messages are returned in your preferred language.

> **Example**: `ENG`

---

##### 6. Save and Authorize

- Once you've filled in all the required fields, click **"Save"** to verify your setup.

  <img src="/img/credentials/sage-x3/sage-x3-cred-save-authorize.jpg" alt="appse ai Sage X3 Credential - Save and Authorize" width="700" />

- If successful, your credential will show a "✓" icon. Now you can use this application for your integrations.
- If it fails, you will be displayed a "!" icon with an error message. Common issues include:
  - **"rejected the credentials (HTTP 401)"** — Wrong username/password or insufficient permissions for the pool
  - **"Record does not exist"** or other X3 text — Wrong pool alias
  - **"not a valid URL"** — Endpoint URL is malformed or missing the `CAdxWebServiceXmlCC` path
  - **Connection error** — Host is unreachable from appse ai

---

## Triggers and Actions

Every application has a pre-defined set of triggers and actions that allow users to perform application-specific activities within the platform. Here is a list of all triggers and actions available.

<Tabs>
  <TabItem value="triggers" label="Triggers">

### Triggers

#### Items Created or Updated

The **Items Created or Updated** trigger polls for item master records created or changed since a specified watermark in your Sage X3 instance, using the `YGETITM` web service.

##### Select Credentials and Action Events

<img src="/img/credentials/sage-x3/sage-x3-trigger-items-select-credential.jpg" alt="appse ai Sage X3 Items Created or Updated - Select Credentials and Action Events" width="700" />

Once you've configured your Sage X3 credential, select it from the dropdown and click **Continue**.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Fetch Data Since (YUPDDATIMDEB) | Specify the date and time to begin fetching item records. (e.g., "2026-01-15 09:00") Set this carefully before activating — changing it later does not affect an already running workflow. |
| Limit (YNBR) | Define the maximum number of records to retrieve per run. (e.g., "100") X3 has no cursor pagination; if more records share one update timestamp than the limit allows, the watermark cannot advance. Set this comfortably above the number of items your system updates within the same second. |
| Item Category (TCLCOD) | Optional. Leave blank to retrieve items from all categories, or specify a category code to filter results (e.g., `NANO`). |

:::note
**Fetch Data Since** and **Limit** are mandatory. **Item Category** is optional and can be adjusted based on your requirements.
:::

Click on **Continue**, then **Run** node.

---

##### How It Works

The connector sends both window bounds in Sage's required ISO 8601 format:
- **Watermark start** (`YUPDDATIMDEB`) — the date/time from your previous run
- **Window end** (`YUPDDATIMFIN`) — the current time

Each run, the watermark advances to the newest `UPDDATTIM` in the batch, ensuring nothing is re-delivered and nothing is skipped.

---

##### Output Schema

Each workflow item contains flat named fields from the Sage X3 item master record:

- `ITMREF` — Item reference/number
- `TCLCOD` — Item category code
- `ITMDES1` — Item description (line 1)
- `STU` — Stock unit
- `UPDDATTIM` — Last update timestamp
- `BASPRI` — Base price
- Additional X3 item fields as configured

Numeric X3 fields arrive as numbers, not strings.

##### Example Configuration

<img src="/img/credentials/sage-x3/sage-x3-trigger-items-config.jpg" alt="Sage X3 Items Created or Updated - Example Configuration" width="700" />

Click on **Continue**, then **Run** node.

---

##### Result

```json
[
  {
    "ITMREF": "SKU001",
    "TCLCOD": "FINISHED_GOODS",
    "ITMDES1": "Laptop Computer Model X1",
    "STU": "PCS",
    "UPDDATTIM": "2026-08-20T10:30:00Z",
    "BASPRI": 1200.00,
    "ITMSTA": "2",
    "CTCNUM": "CAT001",
    "ITMTYP": "1",
    "UOM": "PCS",
    "ITMWEI": 2.5,
    "ITMVOL": 0.08
  },
  {
    "ITMREF": "SKU002",
    "TCLCOD": "FINISHED_GOODS",
    "ITMDES1": "Keyboard Mechanical RGB",
    "STU": "PCS",
    "UPDDATTIM": "2026-08-20T11:15:00Z",
    "BASPRI": 85.00,
    "ITMSTA": "2",
    "CTCNUM": "CAT001",
    "ITMTYP": "1",
    "UOM": "PCS",
    "ITMWEI": 0.8,
    "ITMVOL": 0.05
  }
]
```

---

#### Inventory Updated

The **Inventory Updated** trigger polls for stock records created or changed since a specified watermark in your Sage X3 instance, using the `YGETSTO` web service.

##### Select Credentials and Action Events

<img src="/img/credentials/sage-x3/sage-x3-trigger-inventory-select-credential.jpg" alt="appse ai Sage X3 Inventory Updated - Select Credentials and Action Events" width="700" />

Once you've configured your Sage X3 credential, select it from the dropdown and click **Continue**.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Fetch Data Since | Specify the date and time to begin fetching stock records. Set this carefully before activating — changing it later does not affect an already running workflow. |
| Limit | Define the maximum number of stock records to retrieve per run. (default: `100`) X3 has no cursor pagination, so set this comfortably above the number of stock lines your system updates within the same second. |
| Stock Site (YSTOFCY) | Optional. Sage X3 site code, for example `NA011`. Leave blank for every site. |
| Product (YITMREF) | Optional. Restrict to a single product reference. Leave blank for every product. |
| Item Category (YTCLCOD) | Optional. Sage X3 item category code. Leave blank for every category. |
| Warehouse (YWRH) | Optional. Sage X3 warehouse code. Leave blank for every warehouse. |

:::note
**Fetch Data Since** and **Limit** are mandatory. **Stock Site**, **Product**, **Item Category**, and **Warehouse** are optional filters.
:::

Click on **Continue**, then **Run** node.

---

##### How It Works

The connector sends both window bounds in Sage's required ISO 8601 format (`YUPDDATIMDEB` / `YUPDDATIMFIN`), the same watermark pattern used by the item trigger. Each run, the watermark advances to the newest `UPDDATTIM` in the batch.

---

##### Output Schema

Fields returned depend on your Sage X3 stock configuration, but commonly include:

- `ITMREF` — Item reference/number
- `STOFCY` — Stock site
- `WRH` — Warehouse
- `LOT` — Lot number
- `QTYSTU` — Quantity in stock unit
- `STU` — Stock unit
- `TCLCOD` — Item category code
- `UPDDATTIM` — Last update timestamp

##### Example Configuration

<img src="/img/credentials/sage-x3/sage-x3-trigger-inventory-config.jpg" alt="Sage X3 Inventory Updated - Example Configuration" width="700" />

Click on **Continue**, then **Run** node.

---

##### Result

```json
[
  {
    "ITMREF": "SKU001",
    "STOFCY": "NA011",
    "WRH": "WH01",
    "LOT": "LOT2026001",
    "QTYSTU": 250,
    "STU": "PCS",
    "TCLCOD": "FINISHED_GOODS",
    "UPDDATTIM": "2026-08-20T09:15:00Z"
  }
]
```

---

#### Product Volume, Customer & Discount Price Updated

Polls for sales price list records created or changed since a specified watermark, using the `YGETSPL` web service. Supports **Product Volume Price** (`T11`), **Product Customer Price** (`T20`), and **Product Customers Discount Price** (`T21`).

##### Select Credentials and Action Events

<img src="/img/credentials/sage-x3/sage-x3-trigger-pricelist-select-credential.jpg" alt="appse ai Sage X3 Price List Updated - Select Credentials and Action Events" width="700" />

Once you've configured your Sage X3 credential, select it from the dropdown and click **Continue**.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Fetch Data Since (YUPDDATIMDEB) | Specify the date and time to begin fetching price list records. Set this carefully before activating — changing it later does not affect an already running workflow. |
| Limit (YNBR) | Define the maximum number of records to retrieve per run. (default: `10`) X3 has no cursor pagination — set this comfortably above the number of price list lines your system updates within the same second. |
| Price List Type (YPLI) | Select the type of price list to retrieve: **Product Volume Price** (`T11`), **Product Customer Price** (`T20`, default), or **Product Customers Discount Price** (`T21`). |

:::note
All three fields are mandatory. **Price List Type** determines which criteria and price fields are returned — refer to your Sage X3 price list configuration for what each type represents.
:::

Click on **Continue**, then **Run** node.

---

##### How It Works

The connector sends both window bounds in Sage's required ISO 8601 format (`YUPDDATIMDEB` / `YUPDDATIMFIN`), the same watermark pattern used by the other triggers, filtered by the selected **Price List Type** (`YPLI`).

---

##### Output Schema

Fields returned depend on the selected **Price List Type**, but commonly include:

- `YPLI` — Price list type
- `ITMREF` — Item reference (criterion, when applicable)
- `PRI` — Price
- `CUR` — Currency
- `EACDAT` — Effective date
- `UPDDATTIM` — Last update timestamp

##### Example Configuration

<img src="/img/credentials/sage-x3/sage-x3-trigger-pricelist-config.jpg" alt="Sage X3 Price List Updated - Example Configuration" width="700" />

Click on **Continue**, then **Run** node.

---

##### Result

```json
[
  {
    "YPLI": "T20",
    "BPCPRI": "BPC-000009",
    "ITMREF": "SKU001",
    "PRI": 1150.00,
    "CUR": "USD",
    "EACDAT": "2026-08-01",
    "UPDDATTIM": "2026-08-20T08:00:00Z"
  }
]
```

---

  </TabItem>
  <TabItem value="actions" label="Actions">

### Actions

#### Create Customer

The **Create Customer** action creates a new customer (business partner) record in your Sage X3 instance with one or more addresses, using the `YAPPSEBPC` web service.

##### Select Credentials and Action Events

<img src="/img/credentials/sage-x3/sage-x3-action-create-customer-select-credential.jpg" alt="appse ai Sage X3 Create Customer - Select Credentials and Action Events" width="700" />

Select your configured Sage X3 credential from the dropdown and click **Continue**.

---

##### Configuration Fields

Each field label carries its Sage X3 field code in brackets, allowing you to match the form to the X3 `<PARAM>` XML you already know:

**Customer (BPC0_1) — Group**

| Field | X3 Code | Required | Notes |
|-------|---------|----------|-------|
| Customer Category | `BCGCOD` | ✅ | Must already exist in X3 (e.g., `ECOM`, `RETAIL`). An unknown category is rejected. |
| Status | `BPCSTA` | — | X3 convention: `2` = active, `1` = inactive. Defaults to active if not specified. |
| Customer Code | `BPCNUM` | — | **Leave blank** to let X3 auto-assign the next customer code. |

**Business Partner (BPRC_1) — Group**

| Field | X3 Code | Required | Notes |
|-------|---------|----------|-------|
| Company Name (Line 1) | `LST BPRNAM` | ✅ | Primary company name. Part of a two-line field. |
| Company Name (Line 2) | `LST BPRNAM` | — | Secondary company name line. Leave blank rather than omitting if not used. |
| Company Registration Number | `CRN` | — | Mandatory in some X3 configurations. |

**Addresses (BPAC_1) — Repeatable Table**

| Field | X3 Code | Required | Notes |
|-------|---------|----------|-------|
| Address Code | `CODADR` | ✅ | Short identifier (e.g., `AD1`, `BILLING`). |
| Address Description | `BPADES` | — | Human-readable description of the address. |
| Address Line 1 | `ADDLIG1` | — | First address line. |
| Address Line 2 | `ADDLIG2` | — | Second address line. |
| Address Line 3 | `ADDLIG3` | — | Third address line. |
| City | `CTY` | — | City name. |
| Postal Code | `POSCOD` | — | ZIP or postal code. |
| State | `SAT` | — | State or province code. |
| Country Code | `BPACRY` | ✅ | ISO country code as configured in X3 (e.g., `US`, `GB`, `IN`). |
| Country Name | `CRYNAM` | — | Full country name. |
| Telephone | `TEL1` | — | Primary phone number. |
| Email | `WEB1` | — | Email address. |
| Website | `FCYWEB` | — | Website URL. |
| Default Address | `BPAADDFLG` | — | `2` = yes, `1` = no. The first entry in the address table is the default if not specified. |

:::note
**Customer Category**, **Company Name (Line 1)**, **Country Code**, and **Address Code** are mandatory. All other fields are optional. Empty optional fields are not sent to X3 — a blank field is omitted from the `<PARAM>` document rather than sent as an empty element.

**Important:** This action cannot *clear* a field to empty. Only include fields you want to set or update.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/sage-x3/sage-x3-action-create-customer-config-1.jpg" alt="Sage X3 Create Customer - Customer Details" width="700" />

<img src="/img/credentials/sage-x3/sage-x3-action-create-customer-config-2.jpg" alt="Sage X3 Create Customer - Address Details" width="700" />

---

##### Output

```json
[
  {
    "GRP BPC0_1": {
      "BPCNUM": "BPC-000009",
      "BCGCOD": "ECOM",
      "BPCSTA": "2"
    },
    "GRP BPRC_1": {
      "BPRNAM": [
        "Acme Corporation",
        "Manufacturing Division"
      ],
      "CRN": "US123456789"
    },
    "TAB BPAC_1": [
      {
        "CODADR": "AD1",
        "BPADES": "Main Office",
        "ADDLIG1": "123 Business Park Road",
        "ADDLIG2": "Suite 500",
        "CTY": "New York",
        "POSCOD": "10001",
        "SAT": "NY",
        "BPACRY": "US",
        "CRYNAM": "United States",
        "TEL1": "+1-212-555-0100",
        "WEB1": "contact@acme.com",
        "FCYWEB": "https://www.acme.com",
        "BPAADDFLG": "2"
      }
    ],
    "messages": [
      {
        "message": "Customer created BPC-000009"
      }
    ]
  }
]
```

---

#### Create Sales Order

The **Create Sales Order** action creates a sales order in your Sage X3 instance, using the `YAPPSESOH` web service.

##### Select Credentials and Action Events

<img src="/img/credentials/sage-x3/sage-x3-action-create-sales-order-select-credential.jpg" alt="appse ai Sage X3 Create Sales Order - Select Credentials and Action Events" width="700" />

Select your configured Sage X3 credential from the dropdown and click **Continue**.

---

##### Configuration Fields

**Order Header (SOH0_1) — Group**

| Field | X3 Code | Required | Notes |
|-------|---------|----------|-------|
| Sales Site | `SALFCY` | ✅ | Sage X3 sales site code, for example `NA011`. |
| Order Number | `SOHNUM` | — | Leave blank to let Sage X3 assign the next order number. |
| Order Date | `ORDDAT` | ✅ | Sage X3 compact date, `YYYYMMDD` (e.g., `20260717`). |
| Ordering Customer | `BPCORD` | ✅ | Sage X3 customer code, for example `BPC-000001`. |
| Customer Order Reference | `CUSORDREF` | — | Your reference for the order, for example the source system order number. |
| Currency | `CUR` | ✅ | Currency code as configured in Sage X3, for example `USD`. |

**Tax (SOH1_4) — Group**

| Field | X3 Code | Required | Notes |
|-------|---------|----------|-------|
| Tax Rule | `VACBPR` | — | Business partner tax rule, for example `NTX`. |

**Stock Site (SOH2_1) — Group**

| Field | X3 Code | Required | Notes |
|-------|---------|----------|-------|
| Storage Site | `STOFCY` | — | Site the order ships from, for example `NA011`. |

**Delivery (SOH2_2) — Group**

| Field | X3 Code | Required | Notes |
|-------|---------|----------|-------|
| Requested Delivery Date | `DEMDLVDAT` | — | Sage X3 compact date, `YYYYMMDD`. |
| Lead Time (days) | `DAYLTI` | — | Delivery lead time in days. Defaults to `0`. |
| Shipment Date | `SHIDAT` | — | Sage X3 compact date, `YYYYMMDD`. |

**Payment (SOH3_3) — Group**

| Field | X3 Code | Required | Notes |
|-------|---------|----------|-------|
| Payment Term | `PTE` | — | Payment term code as configured in Sage X3, for example `CH30NET`. |

**Order Lines (SOH4_1) — Repeatable Table**

| Field | X3 Code | Required | Notes |
|-------|---------|----------|-------|
| Product | `ITMREF` | ✅ | Sage X3 product reference, for example `VHC-6837`. |
| Description | `ITMDES` | — | |
| Description Line 1 | `ITMDES1` | — | |
| Sales Unit | `SAU` | — | Sales unit of measure, for example `EA`. |
| Quantity | `QTY` | ✅ | |
| Gross Price | `GROPRI` | — | Unit gross price. Leave blank to let Sage X3 apply its own price list. |

:::note
**Sales Site**, **Order Date**, **Ordering Customer**, **Currency**, **Product**, and **Quantity** are mandatory. Sage X3 dates use the compact `YYYYMMDD` format — when mapping an upstream ISO date, strip the dashes from the date-only portion first.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/sage-x3/sage-x3-action-create-sales-order-config.jpg" alt="Sage X3 Create Sales Order - Example Configuration" width="700" />

---

##### Output

```json
[
  {
    "SOH0_1": {
      "SALFCY": "NA011",
      "SOHNUM": "SOH-002345",
      "ORDDAT": "20260820",
      "BPCORD": "BPC-000009",
      "CUSORDREF": "PO-88213",
      "CUR": "USD"
    },
    "SOH4_1": [
      {
        "ITMREF": "SKU001",
        "SAU": "PCS",
        "QTY": 10,
        "GROPRI": 1200.00
      }
    ],
    "messages": [
      {
        "message": "Sales order created SOH-002345"
      }
    ]
  }
]
```

---

#### Get Product Price

The **Get Product Price** action looks up product prices from a Sage X3 price list, using the `YGETSPL` web service.

##### Select Credentials and Action Events

<img src="/img/credentials/sage-x3/sage-x3-action-get-product-price-select-credential.jpg" alt="appse ai Sage X3 Get Product Price - Select Credentials and Action Events" width="700" />

Select your configured Sage X3 credential from the dropdown and click **Continue**.

---

##### Configuration Fields

| Field | X3 Code | Required | Notes |
|-------|---------|----------|-------|
| Price List Code | `YPLI` | ✅ | Sage X3 price list code, for example `T10` (default). |
| Price List Date | `YPLIDAT` | ✅ | Sage X3 compact date, `YYYYMMDD`. The date the price is effective on. |
| Criterion 1 | `YPLICRI1` | ✅ | First price list criterion — usually the product reference, for example `ITM00006`. Which field this maps to depends on how the price list is set up in Sage X3. |
| Limit | `YNBR` | — | Maximum rows to return. Defaults to `5`. Leave blank for the price list default. |

:::note
**Price List Code**, **Price List Date**, and **Criterion 1** are mandatory.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/sage-x3/sage-x3-action-get-product-price-config.jpg" alt="Sage X3 Get Product Price - Example Configuration" width="700" />

---

##### Output

```json
[
  {
    "YPLI": "T10",
    "YPLICRI1": "SKU001",
    "PRI": 1150.00,
    "CUR": "USD",
    "YPLIDAT": "20260820"
  }
]
```

---

  </TabItem>
</Tabs>

## Error Handling

A failed Sage X3 call can originate from four different layers, each with its own error message pattern:

| Layer | Indicator | Message Format |
|-------|-----------|-----------------|
| **Network / CDN** | Error codes 522-527 | *"Could not reach Sage X3… (CDN error 522)"* — a hosting or connectivity problem, not a data problem. |
| **Syracuse Gateway** | JSON `$diagnoses`, HTTP 500 | Sage's own message (e.g., *"Header 'soapAction' is missing."*) |
| **SOAP Layer** | `soapenv:Fault` | The `faultstring` from the SOAP fault. |
| **X3 Application** | HTTP 200 with `status=0` | All X3 messages in order: root cause, affected field, and further findings. |

:::important
**X3 returns HTTP 200 for business rejections.** A failed create displays all of X3's messages, not just the first. This is critical for debugging: the HTTP status alone cannot distinguish success from failure.
:::

### Common Error Scenarios

**If you see a CDN error (520–527):**
- The request did not reach Sage X3.
- Check that your host is up and reachable—the same call will fail from Postman or any REST client.
- **Nuance:** Code **522** means the connection never opened (nothing was written); code **524** means Sage accepted the connection but did not answer in time (a create *may* have been applied—check Sage X3 before retrying).

**If you see "rejected the credentials (HTTP 401)":**
- Wrong username or password.
- The user is not authorized for the specified pool.

**If you see "Record does not exist" or other X3 text:**
- The **pool alias is wrong.** X3 answers HTTP 200 here, making this easy to miss.

**If you see "not a valid URL":**
- The endpoint URL is malformed or missing the `CAdxWebServiceXmlCC` path.

---

## Known Limitations

- **No cursor pagination.** `YGETITM`, `YGETSTO`, and `YGETSPL` offer a row limit only. If more records share one `UPDDATTIM` than the limit allows, the watermark cannot advance past them. Set **Limit** comfortably above the number of records your system updates within the same second.
- **Supported operations only.** This connector currently reads items, inventory, and price lists, creates customers and sales orders, and looks up product prices. Other X3 objects and update/delete operations are not yet implemented.
- **Published X3 programs.** `YGETITM`, `YGETSTO`, `YGETSPL`, `YAPPSEBPC`, and `YAPPSESOH` must exist on your tenant. If your instance uses different names, contact support to update the operation URLs.

---

## References

- [Sage X3 SOAP Web Services Documentation](https://online-help.sagex3.com/erp/12/en-us/Content/V7DEV/api-guide_soap-web-services.html)
- [Classic SOAP Pools Configuration](https://online-help.sagex3.com/erp/12/en-us/Content/V7DEV/administration-reference_soapClassicPool.html)
- Technical specification: `arise-specs/handbook/engineering/specs/sagex3-connector/`
