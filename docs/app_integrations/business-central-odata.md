---
title: "Dynamics 365 Business Central oData Rest"
slug: /app-integrations/dynamics365businesscentralodata
description: Step-by-step guide to set up Dynamics 365 Business Central OData REST credentials and automate business workflows in appse ai.
---

Dynamics 365 Business Central is an all-in-one business management solution designed to help organizations streamline their financials, operations, and customer relationships. With appse ai, you can easily connect your Dynamics 365 Business Central account, automate business processes, and integrate data seamlessly across your workflows, enhancing efficiency and accuracy in your operations.

---

## Setup Credential

Follow the steps below to quickly set up your credential.

### Required Fields

You’ll need to provide:

| Field           | Description                                                  |
| --------------- | ------------------------------------------------------------ |
| Connection Name | A name to identify the connection                            |
| Tenant ID       | Your Azure Active Directory tenant ID                        |
| Company Name    | The Name of the Business Central company you're working with |

---

### Step-by-Step Guide

#### 1. Add Connection Name

- Enter a user-friendly name to identify this connection (e.g., `BC Finance`, `D365 Europe Instance`).
- This is only for reference within our platform.

---

#### 2. Locate Your Tenant ID

- Go to the [Azure Portal](https://portal.azure.com).
  <img src="/img/credentials/business-central-odata/business-central-cred-azure-dashboard.png" alt="appse ai Business Central Azure Dashboard" width="700"/>

- Search for **Microsoft Entra ID** → **Overview**.
  <img src="/img/credentials/business-central-odata/business-central-cred-tenant-id.png" alt="appse ai Business Central Tenant ID" width="700"/>

- Copy the **Tenant ID** from the overview page.

> **Example**: `e3f75f41-xxxx-4a70-9b5c-xxxxxxxxxxxx`

---

#### 3. Find Your Company Name

- Log in to your [Business Central](https://www.microsoft.com/en-in/dynamics-365/products/business-central/sign-in) account.

- Click on the **Search** icon → Search "Companies" → Click on Companies.
  <img src="/img/credentials/business-central-odata/business-central-company-id-1.png" alt="appse ai Business Central Companies Search" width="700"/>

- Select Your Company Name from the list.
  <img src="/img/credentials/business-central-odata/business-central-company-id-2.png" alt="appse ai Business Central Select Company name" width="700"/>

> **Example**: `CRONUS IN`

- Copy **Company Name** and paste it in the credential form → Click on Save and Authorize.

<img src="/img/credentials/business-central-odata/save-cred.png" alt="appse ai Business Central Save and Authorize credential form" width="700"/>

---

#### 4. Log in to your Business Central Account

- You will be showcased a pop-up that prompts you to login to your Business Central account using your Microsoft account credentials.

<img src="/img/credentials/business-central-odata/business-central-cred-microsoft-login.png" alt="appse ai Business Central Microsoft Login" width="700"/>

- If you followed all the steps correctly, your Business Central credential should be connected to our platform.

---

### Save Your Credential

Once you've filled in the necessary fields, click **"Save"** to store and verify your setup.

- If successful, your credential will show a "✓" icon. Now you can use this application for your integrations.
- If it fails, you will be displayed a "!" icon. In that case, please recheck your Tenant ID and Company Name or contact support.

---

## Web Services Configuration

To use Dynamics 365 Business Central OData supported REST APIs with appse ai, you must publish the required objects as web services inside Business Central. This allows external systems to securely access your Business Central data through OData endpoints.

Follow the steps below to configure web services:

---

### Step-by-Step: Add Web Services in Business Central

#### 1. Open Web Services Page

- Log in to your Business Central account.
- Click the **Search 🔍 icon**.
- Type **Web Services** and open it.

---

#### 2. Create a New Web Service

- Click **New**.
- Fill in the required fields:

| Field        | Value                   |
| ------------ | ----------------------- |
| Object Type  | Page / Query / Codeunit |
| Object ID    | ID of the object        |
| Service Name | Unique API name         |
| Published    | ✔ Enable                |

---

#### 3. Choose the Correct Object Type

Select based on your use case:

| Object Type | Use Case                             |
| ----------- | ------------------------------------ |
| Page        | Create, Read, Update, Delete records |
| Query       | Read-only data access                |
| Codeunit    | Custom logic or automation           |

:::note
For integrations with **appse ai**, you should publish **Page** objects. Page web services support full CRUD operations, filtering, sorting, and pagination, making them the most flexible and widely supported option for external integrations such as APIs, middleware, and automation platforms.
:::

---

#### 4. Publish the Service

- Check the **Published** checkbox.
- Once enabled, Business Central will automatically generate:

- **OData V4 URL**
- **SOAP URL**

You will use the **OData V4 URL** for integrations.

- Example format: https://api.businesscentral.dynamics.com/v2.0/{tenant}/Production/ODataV4/Company('CRONUSIN')/{ServiceName}

---

### Web Services to Publish

For using appse ai actions, make sure to publish these pages:

| Object Name                 | Service Name             |
| --------------------------- | ------------------------ |
| Customers                   | Customers                |
| Contacts                    | contacts                 |
| Item Card                   | Item                     |
| Sales Order                 | SalesOrder               |
| Posted Sales Shipments      | Shipments                |
| Item Ledger Entries         | Item Ledger Entries      |
| Posted Sales Shipment Lines | postedsalesshipmentlines |
| Posted Sales Shipment       | PostedSalesShipment      |
| Sales Prices                | salesprices              |
| Ship-to Address             | shiptoaddress            |
| Lines                       | SalesLines               |
| Sales Quote                 | SalesQuote               |
| Item Journals               | ItemJournal              |

---

### Best Practice Recommendations

- Use **OData V4** instead of SOAP whenever possible.
- Always use **API pages** if available for production integrations.
- Use descriptive **Service Names** to easily identify endpoints.
- Restrict permissions for integration users for better security.
- Test endpoints using Postman before connecting to appse ai.

---

✔ Once your web services are published and accessible, your Business Central environment is ready for integration with appse ai.

---

## Actions

Here is a list of the available actions for Business Central oData Rest:

### Item Ledger Entry Actions

#### Get Item Ledger Entries by Location Code

Get Item Ledger Entries by Location Code action is used to retrieve item ledger entries based on the specified location code.

-----------------------------

##### Select Credentials and Action Events

<img src="/img/credentials/business-central-odata/C-AC-GTITMLDGERbyLOCTNCOD1.jpg" alt="Business Central Get Item Ledger Entries by Location Code action selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Location Code | Specify the location code to fetch item ledger entries. (e.g., `"BLUE"`) |
| Limit | Specify the maximum number of records to return. (e.g., `"1"`) |

:::note
`Location Code` and `Limit` are mandatory fields.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/business-central-odata/AC-GTITMLDGERbyLOCTNCOD2.jpg" alt="Business Central Get Item Ledger Entries by Location Code example configuration" width="700" />

-----------------------------

##### Result

```json
[
  {
    "@odata.context": "https://api.businesscentral.dynamics.com/v2.0/{Tenant_Id}/Production/ODataV4/$metadata#Company('CRONUS%20IN')/ItemJournal/$entity",
    "@odata.etag": "W/\"JzE5OzkzNDA2NDM3NDg5NTI2ODU0MzAxOzAwOyc=\"",
    "Journal_Template_Name": "ITEM",
    "Journal_Batch_Name": "DEFAULT",
    "Line_No": 10000,
    "CurrentJnlBatchName": "",
    "ItemJnlBatchApprovalStatus": "",
    "Posting_Date": "2026-05-07",
    "Document_Date": "2026-05-07",
    "Entry_Type": "Positive Adjmt.",
    "EntryType": "Positive Adjmt.",
    "Price_Calculation_Method": " ",
    "Document_No": "T00020",
    "External_Document_No": "",
    "Item_No": "1012",
    "Item_Reference_No": "",
    "Variant_Code": "",
    "Description": "Laptop123",
    "Location_Code": "",
    "Bin_Code": "",
    "Sust_Account_No": "",
    "Salespers_Purch_Code": "",
    "Gen_Bus_Posting_Group": "",
    "Gen_Prod_Posting_Group": "RETAIL",
    "Quantity": 1000,
    "Unit_of_Measure_Code": "PCS",
    "Unit_Amount": 35000,
    "Amount": 35000000,
    "Discount_Amount": 0,
    "Indirect_Cost_Percent": 0,
    "Unit_Cost": 35000,
    "Total_CO2e": 0,
    "Applies_to_Entry": 0,
    "Applies_from_Entry": 0,
    "Transaction_Type": "",
    "Transport_Method": "",
    "Country_Region_Code": "",
    "Reason_Code": "",
    "Serial_No": "",
    "Lot_No": "",
    "Package_No": "",
    "Expiration_Date": "0001-01-01",
    "Warranty_Date": "0001-01-01",
    "Shortcut_Dimension_1_Code": "",
    "Shortcut_Dimension_2_Code": "",
    "ShortcutDimCode3": "",
    "ShortcutDimCode4": "",
    "ShortcutDimCode5": "",
    "ShortcutDimCode6": "",
    "ShortcutDimCode7": "",
    "ShortcutDimCode8": "",
    "ItemDescription": "Laptop123"
  }
]
```
------------------------------

### ShipToAddress Actions

#### Get Customer Ship-to-Addresses

Get Customer Ship-to-Addresses action is used to retrieve ship-to address details associated with a specific customer number.

-----------------------------

##### Select Credentials and Action Events

<img src="/img/credentials/business-central-odata/C-AC-GTCUSTMRSHP2ADRS3.jpg" alt="Business Central Get Customer Ship-to-Addresses action selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Customer No | Specify the customer number to fetch ship-to address details. (e.g., `"10000"`) |

:::note
`Customer No` is a mandatory field.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/business-central-odata/AC-GTCUSTMRSHP2ADRS4.jpg" alt="Business Central Get Customer Ship-to-Addresses example configuration" width="700" />

-----------------------------

##### Result

```json
[
  {
    "@odata.etag": "W/\"JzE5OzI3Mjc3NDA4NjQzODI1NDAzODYxOzAwOyc=\"",
    "Customer_No": "10000",
    "Code": "10011",
    "Name": "The Cannon Group PLC",
    "Name_2": "",
    "GLN": "",
    "Address": "Station Road, 21",
    "Address_2": "",
    "City": "New Delhi",
    "County": "",
    "Post_Code": "110002",
    "Country_Region_Code": "IN",
    "ShowMap": "Show on Map",
    "Phone_No": "",
    "Contact": "Mr. Andy Teal",
    "Fax_No": "",
    "E_Mail": "",
    "Home_Page": "",
    "Salesperson_Code": "",
    "Location_Code": "",
    "Shipment_Method_Code": "",
    "Shipping_Agent_Code": "",
    "Shipping_Agent_Service_Code": "",
    "Service_Zone_Code": "",
    "Last_Date_Modified": "2025-04-01",
    "WebId": "",
    "CopyId": "5",
    "State": "",
    "GST_Registration_No": "",
    "ARN_No": "",
    "Consignee": false,
    "Ship_to_GST_Customer_Type": " "
  },
  {
    "@odata.etag": "W/\"JzIwOzEzOTMyMTQwNzc2NjIzMTE2MTU5MTswMDsn\"",
    "Customer_No": "10000",
    "Code": "10011007",
    "Name": "The Cannon Group PLC",
    "Name_2": "",
    "GLN": "",
    "Address": "Station Road, 2002",
    "Address_2": "",
    "City": "New Delhi",
    "County": "",
    "Post_Code": "110002",
    "Country_Region_Code": "IN",
    "ShowMap": "Show on Map",
    "Phone_No": "",
    "Contact": "Mr. Andy Teal",
    "Fax_No": "",
    "E_Mail": "",
    "Home_Page": "",
    "Salesperson_Code": "",
    "Location_Code": "",
    "Shipment_Method_Code": "",
    "Shipping_Agent_Code": "",
    "Shipping_Agent_Service_Code": "",
    "Service_Zone_Code": "",
    "Last_Date_Modified": "2025-06-27",
    "WebId": "",
    "CopyId": "",
    "State": "",
    "GST_Registration_No": "",
    "ARN_No": "",
    "Consignee": false,
    "Ship_to_GST_Customer_Type": " "
  },
  {
    "@odata.etag": "W/\"JzE5OzE4MDY1OTk0ODAxNDU0MzM3ODgxOzAwOyc=\"",
    "Customer_No": "10000",
    "Code": "6024",
    "Name": "The Cannon Group PLC",
    "Name_2": "",
    "GLN": "",
    "Address": "Station Road, 889",
    "Address_2": "",
    "City": "New Delhi",
    "County": "",
    "Post_Code": "110002",
    "Country_Region_Code": "IN",
    "ShowMap": "Show on Map",
    "Phone_No": "",
    "Contact": "Mr. Andy Teal",
    "Fax_No": "",
    "E_Mail": "",
    "Home_Page": "",
    "Salesperson_Code": "",
    "Location_Code": "",
    "Shipment_Method_Code": "",
    "Shipping_Agent_Code": "",
    "Shipping_Agent_Service_Code": "",
    "Service_Zone_Code": "",
    "Last_Date_Modified": "2025-03-19",
    "WebId": "",
    "CopyId": "",
    "State": "",
    "GST_Registration_No": "",
    "ARN_No": "",
    "Consignee": false,
    "Ship_to_GST_Customer_Type": " "
  },
  {
    "@odata.etag": "W/\"JzE5OzE1MjE2MDM1NDczNDM2NDA3NjMxOzAwOyc=\"",
    "Customer_No": "10000",
    "Code": "8822",
    "Name": "The Cannon Group PLC",
    "Name_2": "",
    "GLN": "",
    "Address": "Station Road, 21",
    "Address_2": "",
    "City": "New Delhi",
    "County": "",
    "Post_Code": "110002",
    "Country_Region_Code": "IN",
    "ShowMap": "Show on Map",
    "Phone_No": "",
    "Contact": "Mr. Andy Teal",
    "Fax_No": "",
    "E_Mail": "",
    "Home_Page": "",
    "Salesperson_Code": "",
    "Location_Code": "",
    "Shipment_Method_Code": "",
    "Shipping_Agent_Code": "",
    "Shipping_Agent_Service_Code": "",
    "Service_Zone_Code": "",
    "Last_Date_Modified": "2025-03-19",
    "WebId": "",
    "CopyId": "5",
    "State": "",
    "GST_Registration_No": "",
    "ARN_No": "",
    "Consignee": false,
    "Ship_to_GST_Customer_Type": " "
  },
  {
    "@odata.etag": "W/\"JzE5Ozk2NjAyNTU1MjE1MDk4ODc2MDQxOzAwOyc=\"",
    "Customer_No": "10000",
    "Code": "ABCD",
    "Name": "ABCD Incz",
    "Name_2": "",
    "GLN": "",
    "Address": "New Add",
    "Address_2": "New Add 2",
    "City": "New City 2",
    "County": "",
    "Post_Code": "10008",
    "Country_Region_Code": "US",
    "ShowMap": "Show on Map",
    "Phone_No": "9999999999",
    "Contact": "",
    "Fax_No": "",
    "E_Mail": "",
    "Home_Page": "",
    "Salesperson_Code": "",
    "Location_Code": "",
    "Shipment_Method_Code": "",
    "Shipping_Agent_Code": "",
    "Shipping_Agent_Service_Code": "",
    "Service_Zone_Code": "",
    "Last_Date_Modified": "2026-02-10",
    "WebId": "",
    "CopyId": "",
    "State": "",
    "GST_Registration_No": "",
    "ARN_No": "",
    "Consignee": false,
    "Ship_to_GST_Customer_Type": " "
  },
  {
    "@odata.etag": "W/\"JzE5OzgwNjY4MzM4MzAxNDE3MjY5NjIxOzAwOyc=\"",
    "Customer_No": "10000",
    "Code": "AEC10",
    "Name": "Ship Addreess AEC10",
    "Name_2": "",
    "GLN": "",
    "Address": "",
    "Address_2": "",
    "City": "",
    "County": "",
    "Post_Code": "",
    "Country_Region_Code": "",
    "ShowMap": "Show on Map",
    "Phone_No": "",
    "Contact": "",
    "Fax_No": "",
    "E_Mail": "",
    "Home_Page": "",
    "Salesperson_Code": "",
    "Location_Code": "",
    "Shipment_Method_Code": "",
    "Shipping_Agent_Code": "",
    "Shipping_Agent_Service_Code": "",
    "Service_Zone_Code": "",
    "Last_Date_Modified": "2026-02-24",
    "WebId": "",
    "CopyId": "",
    "State": "",
    "GST_Registration_No": "",
    "ARN_No": "",
    "Consignee": false,
    "Ship_to_GST_Customer_Type": " "
  },
  {
    "@odata.etag": "W/\"JzE5OzM5ODIwNjExMzA3NDA5OTA5OTgxOzAwOyc=\"",
    "Customer_No": "10000",
    "Code": "BEWW2231",
    "Name": "Nemwm-uw2",
    "Name_2": "",
    "GLN": "",
    "Address": "oqueoq",
    "Address_2": "queiq",
    "City": "Kolkata",
    "County": "",
    "Post_Code": "700108",
    "Country_Region_Code": "IN",
    "ShowMap": "Show on Map",
    "Phone_No": "7388909911",
    "Contact": "",
    "Fax_No": "",
    "E_Mail": "",
    "Home_Page": "",
    "Salesperson_Code": "",
    "Location_Code": "",
    "Shipment_Method_Code": "",
    "Shipping_Agent_Code": "",
    "Shipping_Agent_Service_Code": "",
    "Service_Zone_Code": "",
    "Last_Date_Modified": "2026-02-10",
    "WebId": "",
    "CopyId": "",
    "State": "",
    "GST_Registration_No": "",
    "ARN_No": "",
    "Consignee": false,
    "Ship_to_GST_Customer_Type": " "
  },
  {
    "@odata.etag": "W/\"JzIwOzExNjI5NDUyNDA4NDc5MjA0ODkwMTswMDsn\"",
    "Customer_No": "10000",
    "Code": "CHELTENHAM",
    "Name": "The Cannon Group PLC",
    "Name_2": "",
    "GLN": "",
    "Address": "Montpellier House",
    "Address_2": "",
    "City": "Cheltenham",
    "County": "",
    "Post_Code": "GB-GL50 1TY",
    "Country_Region_Code": "GB",
    "ShowMap": "Show on Map",
    "Phone_No": "",
    "Contact": "",
    "Fax_No": "",
    "E_Mail": "",
    "Home_Page": "",
    "Salesperson_Code": "",
    "Location_Code": "",
    "Shipment_Method_Code": "",
    "Shipping_Agent_Code": "",
    "Shipping_Agent_Service_Code": "",
    "Service_Zone_Code": "",
    "Last_Date_Modified": "2025-03-19",
    "WebId": "",
    "CopyId": "2",
    "State": "",
    "GST_Registration_No": "",
    "ARN_No": "",
    "Consignee": false,
    "Ship_to_GST_Customer_Type": " "
  },
  {
    "@odata.etag": "W/\"JzIwOzE1MTA4NzEzNDE4Nzg4ODQ0OTEzMTswMDsn\"",
    "Customer_No": "10000",
    "Code": "LONDON",
    "Name": "The Cannon Group PLC",
    "Name_2": "",
    "GLN": "",
    "Address": "Kingdom Street, 2",
    "Address_2": "",
    "City": "London",
    "County": "",
    "Post_Code": "GB-W2 6BD",
    "Country_Region_Code": "GB",
    "ShowMap": "Show on Map",
    "Phone_No": "",
    "Contact": "",
    "Fax_No": "",
    "E_Mail": "",
    "Home_Page": "",
    "Salesperson_Code": "",
    "Location_Code": "",
    "Shipment_Method_Code": "",
    "Shipping_Agent_Code": "",
    "Shipping_Agent_Service_Code": "",
    "Service_Zone_Code": "",
    "Last_Date_Modified": "2025-03-19",
    "WebId": "",
    "CopyId": "5",
    "State": "",
    "GST_Registration_No": "",
    "ARN_No": "",
    "Consignee": false,
    "Ship_to_GST_Customer_Type": " "
  }
]
```
----------------------------------

#### Create Customer Ship to Address

Create Customer Ship to Address action is used to create a new ship-to address for a specific customer with address and contact details.

-----------------------------

##### Select Credentials and Action Events

<img src="/img/credentials/business-central-odata/C-AC-CRTCUSTMRAdRS5.jpg" alt="Business Central Create Customer Ship to Address action selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Customer No | Specify the customer number. (e.g., `"10000"`) |
| Ship-to Code | Enter the unique ship-to code. (e.g., `"SHIP-201"`) |
| Name | Enter the ship-to address name. (e.g., `"SHIP-Address"`) |
| Address | Primary address line. (e.g., `"Madhura Colony"`) |
| Address 2 | Secondary address line. (e.g., `"D39, Doyen Township"`) |
| City | City name. (e.g., `"Hyderabad"`) |
| Post Code | Postal / ZIP code. (e.g., `"500039"`) |
| Country/Region Code | Specify the country or region code. (e.g., `"IN"`) |
| Phone No | Contact phone number. (e.g., `"9876567898"`) |

:::note
`Customer No`, `Ship-to Code`, and `Name` are mandatory fields. All other fields are optional and can be configured based on business requirements.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/business-central-odata/AC-CRTCUSTMRAdRS6.jpg" alt="Business Central Create Customer Ship to Address example configuration part 1" width="700" />
<img src="/img/credentials/business-central-odata/AC-CRTCUSTMRAdRS7.jpg" alt="Business Central Create Customer Ship to Address example configuration part 2" width="700" />

-----------------------------

##### Result

```json
[
  {
    "@odata.context": "https://api.businesscentral.dynamics.com/v2.0/{Tenant_Id}/Production/ODataV4/$metadata#Company('CRONUS%20IN')/shiptoaddress/$entity",
    "@odata.etag": "W/\"JzIwOzE0OTQ2NjA0MjgzNzQ4MjI4ODk3MTswMDsn\"",
    "Customer_No": "10000",
    "Code": "SHIP-201",
    "Name": "SHIP-Address",
    "Name_2": "",
    "GLN": "",
    "Address": "Madhura Colony",
    "Address_2": "D39, Doyen Township",
    "City": "Hyderabad",
    "County": "",
    "Post_Code": "500039",
    "Country_Region_Code": "IN",
    "ShowMap": "Show on Map",
    "Phone_No": "9876567898",
    "Contact": "",
    "Fax_No": "",
    "E_Mail": "",
    "Home_Page": "",
    "Salesperson_Code": "",
    "Location_Code": "",
    "Shipment_Method_Code": "",
    "Shipping_Agent_Code": "",
    "Shipping_Agent_Service_Code": "",
    "Service_Zone_Code": "",
    "Last_Date_Modified": "2026-05-07",
    "WebId": "",
    "CopyId": "",
    "State": "",
    "GST_Registration_No": "",
    "ARN_No": "",
    "Consignee": false,
    "Ship_to_GST_Customer_Type": " "
  }
]
```
-----------------------------

### Item Journal Transaction

#### Create Item Journal Entry

Create Item Journal Entry action is used to create a new item journal entry with inventory adjustment details.

-----------------------------

##### Select Credentials and Action Events

<img src="/img/credentials/business-central-odata/C-AC-CRTITMJURNLENTRY8.jpg" alt="Business Central Create Item Journal Entry action selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Journal Template Name | Specify the journal template name. (e.g., `"ITEM"`) |
| Journal Batch Name | Specify the journal batch name. (e.g., `"DEFAULT"`) |
| Entry Type | Select the type of journal entry. (e.g., `"Positive Adjustment"`) |
| Item No | Specify the item number. (e.g., `"1012"`) |
| Quantity | Enter the quantity for the journal entry. (e.g., `"1500"`) |

:::note
`Journal Template Name`, `Journal Batch Name`, `Entry Type`, `Item No`, and `Quantity` are mandatory fields. All other fields are optional and can be configured based on business requirements.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/business-central-odata/AC-CRTITMJURNLENTRY9.jpg" alt="Business Central Create Item Journal Entry example configuration" width="700" />

-----------------------------

##### Result

```json
[
  {
    "@odata.context": "https://api.businesscentral.dynamics.com/v2.0/{Tenant_Id}/Production/ODataV4/$metadata#Company('CRONUS%20IN')/ItemJournal/$entity",
    "@odata.etag": "W/\"JzE5OzE0NzYyMjkxOTA4NjA2NTgwMTgxOzAwOyc=\"",
    "Journal_Template_Name": "ITEM",
    "Journal_Batch_Name": "DEFAULT",
    "Line_No": 20000,
    "CurrentJnlBatchName": "",
    "ItemJnlBatchApprovalStatus": "",
    "Posting_Date": "2026-05-07",
    "Document_Date": "2026-05-07",
    "Entry_Type": "Positive Adjmt.",
    "EntryType": "Positive Adjmt.",
    "Price_Calculation_Method": " ",
    "Document_No": "T00020",
    "External_Document_No": "",
    "Item_No": "1012",
    "Item_Reference_No": "",
    "Variant_Code": "",
    "Description": "Laptop123",
    "Location_Code": "",
    "Bin_Code": "",
    "Sust_Account_No": "",
    "Salespers_Purch_Code": "",
    "Gen_Bus_Posting_Group": "",
    "Gen_Prod_Posting_Group": "RETAIL",
    "Quantity": 1500,
    "Unit_of_Measure_Code": "PCS",
    "Unit_Amount": 35000,
    "Amount": 52500000,
    "Discount_Amount": 0,
    "Indirect_Cost_Percent": 0,
    "Unit_Cost": 35000,
    "Total_CO2e": 0,
    "Applies_to_Entry": 0,
    "Applies_from_Entry": 0,
    "Transaction_Type": "",
    "Transport_Method": "",
    "Country_Region_Code": "",
    "Reason_Code": "",
    "Serial_No": "",
    "Lot_No": "",
    "Package_No": "",
    "Expiration_Date": "0001-01-01",
    "Warranty_Date": "0001-01-01",
    "Shortcut_Dimension_1_Code": "",
    "Shortcut_Dimension_2_Code": "",
    "ShortcutDimCode3": "",
    "ShortcutDimCode4": "",
    "ShortcutDimCode5": "",
    "ShortcutDimCode6": "",
    "ShortcutDimCode7": "",
    "ShortcutDimCode8": "",
    "ItemDescription": "Laptop123"
  }
]
```
----------------------

### Customer Actions

#### Update Customer

Update Customer action is used to modify existing customer details including address, contact, and sales information.

-----------------------------

##### Select Credentials and Action Events

<img src="/img/credentials/business-central-odata/C-AC-UPDTCUSTMR10.jpg" alt="Business Central Update Customer action selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Customer No | Specify the customer number to update. (e.g., `"10000"`) |
| Customer Name | Enter the customer name. (e.g., `"Mercy Joe"`) |
| Address | Primary address line. (e.g., `"ICP Awfis"`) |
| Address 2 | Secondary address line. (e.g., `"Road. No.36, Jubille"`) |
| City | City name. (e.g., `"Hyderabad"`) |
| State / County | Specify the state or county code. (e.g., `"TS"`) |
| Postal Code | ZIP / Postal code. (e.g., `"500039"`) |
| Country / Region Code | Specify the country or region code. (e.g., `"IN"`) |
| Phone Number | Customer contact number. (e.g., `"8909876545"`) |
| Email | Customer email address. (e.g., `"mercy.joe3@yopmail.com"`) |
| Salesperson Code | Specify the salesperson code. (e.g., `"BC"`) |
| Blocked | Select the blocked status from available options: `All`, `Invoice`, `Ship`, or `None`. (e.g., `"None"`) |

:::note
`Customer No` is mandatory field. All other fields are optional and can be configured based on business requirements.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/business-central-odata/AC-UPDTCUSTMR11.jpg" alt="Business Central Update Customer example configuration part 1" width="700" />
<img src="/img/credentials/business-central-odata/AC-UPDTCUSTMR12.jpg" alt="Business Central Update Customer example configuration part 2" width="700" />

-----------------------------

##### Result

```json
[
  {
    "@odata.context": "https://api.businesscentral.dynamics.com/v2.0/{Tenant_Id}/Production/ODataV4/$metadata#Company('CRONUS%20IN')/Customers/$entity",
    "@odata.etag": "W/\"JzIwOzExMjg4NDQxODIwMjcyNDYxNjQxMTswMDsn\"",
    "No": "10000",
    "Name": "Mercy Joe",
    "Name_2": "",
    "Search_Name": "MERCY JOE",
    "IC_Partner_Code": "",
    "Balance_LCY": 1431547,
    "BalanceAsVendor": 0,
    "Balance_Due_LCY": 1431547,
    "Credit_Limit_LCY": 0,
    "Blocked": " ",
    "Privacy_Blocked": false,
    "Salesperson_Code": "BC",
    "Responsibility_Center": "",
    "Service_Zone_Code": "",
    "Document_Sending_Profile": "DIRECTFILE",
    "TotalSales2": 246.15,
    "CustSalesLCY_CustProfit_AdjmtCostLCY": 90,
    "AdjCustProfit": 156.15,
    "AdjProfitPct": 63.4,
    "Last_Date_Modified": "2026-05-07",
    "WebId": "",
    "ApplicationId": "2",
    "Disable_Search_by_Name": false,
    "Priority": 0,
    "Statistics_Group": 0,
    "State_Code": "DL",
    "Address": "ICP Awfis",
    "Address_2": "Road. No.36, Jubille",
    "Country_Region_Code": "IN",
    "City": "Hyderabad",
    "County": "TS",
    "Post_Code": "500039",
    "ShowMap": "Show on Map",
    "Phone_No": "8909876545",
    "MobilePhoneNo": "",
    "E_Mail": "mercy.joe3@yopmail.com",
    "Fax_No": "",
    "Home_Page": "",
    "Language_Code": "ENG",
    "Format_Region": "en-GB",
    "Primary_Contact_No": "CT000002",
    "ContactName": "Mr. Andy Teal",
    "Bill_to_Customer_No": "",
    "VAT_Registration_No": "789456278",
    "EORI_Number": "",
    "GLN": "",
    "Use_GLN_in_Electronic_Document": false,
    "Copy_Sell_to_Addr_to_Qte_From": "Company",
    "Tax_Liable": false,
    "Tax_Area_Code": "",
    "Registration_Number": "",
    "Gen_Bus_Posting_Group": "DOMESTIC",
    "VAT_Bus_Posting_Group": "DOMESTIC",
    "Customer_Posting_Group": "DOMESTIC",
    "Allow_Multiple_Posting_Groups": false,
    "Currency_Code": "",
    "Price_Calculation_Method": " ",
    "Customer_Price_Group": "",
    "Customer_Disc_Group": "",
    "Allow_Line_Disc": true,
    "Invoice_Disc_Code": "10000",
    "Prices_Including_VAT": false,
    "E_Document_Service_Participation_Ids": 0,
    "Prepayment_Percent": 0,
    "Application_Method": "Manual",
    "Partner_Type": " ",
    "Intrastat_Partner_Type": " ",
    "Payment_Terms_Code": "1M(8D)",
    "Payment_Method_Code": "",
    "Reminder_Terms_Code": "",
    "Fin_Charge_Terms_Code": "",
    "Cash_Flow_Payment_Terms_Code": "",
    "Print_Statements": false,
    "Last_Statement_No": 0,
    "Block_Payment_Tolerance": false,
    "Preferred_Bank_Account_Code": "",
    "Exclude_from_Pmt_Practices": false,
    "Ship_to_Code": "",
    "Location_Code": "BLUE",
    "Combine_Shipments": false,
    "Combine_Service_Shipments": false,
    "Reserve": "Optional",
    "Shipping_Advice": "Partial",
    "Shipment_Method_Code": "",
    "Shipping_Agent_Code": "",
    "Shipping_Agent_Service_Code": "",
    "Shipping_Time": "",
    "Base_Calendar_Code": "",
    "Customized_Calendar": "No",
    "Assessee_Code": "",
    "P_A_N_No": "ABCDE0123F",
    "P_A_N_Status": " ",
    "P_A_N_Reference_No": "",
    "Aggregate_Turnover": "Less than 10 Crores",
    "Govt_Undertaking": false,
    "GST_customer_Type": "Registered",
    "GST_Registration_Type": "GSTIN",
    "GST_Registration_No": "07ABCDE0123F1Z1",
    "E_Commerce_Operator": false,
    "ARN_No": "",
    "CustomerSince": "2023-01-18",
    "DaysSinceLastSale": 0,
    "DistinctItemsSold": 0,
    "Balance_LCY_2": 1431547,
    "ExpectedCustMoneyOwed": 0,
    "TotalMoneyOwed": 0,
    "CreditLimit": 0,
    "CalcCreditLimitLCYExpendedPct": 0,
    "Balance_Due": 0,
    "Payments_LCY": 362,
    "CustomerMgt_AvgDaysToPay_No": 0,
    "DaysPaidPastDueDate": 0,
    "PaidLateCount": 0,
    "PaidOnTimeCount": 0,
    "PercentPaidLate": 0,
    "OverdueCount": 0,
    "LastPaymentDate": "0001-01-01",
    "LastPaymentAmount": 0,
    "LastPaymentOnTime": false,
    "AmountOnPostedInvoices": 0,
    "AmountOnCrMemo": 0,
    "AmountOnOutstandingInvoices": 0,
    "AmountOnOutstandingCrMemos": 0,
    "Totals": 0,
    "CustInvDiscAmountLCY": 0,
    "InteractionCount": 0,
    "LastInteractionDate": "0001-01-01",
    "LastInteractionType": "",
    "MostFrequentInteractionType": "",
    "Global_Dimension_1_Filter": "",
    "Global_Dimension_2_Filter": "",
    "Currency_Filter": "",
    "Date_Filter": "''..05/07/26"
  }
]
```
--------------------

### Posted Sales Shipment Actions

#### Get Posted Sales Shipment by No.

Get Posted Sales Shipment by No. action is used to retrieve details of a posted sales shipment using the shipment number.

-----------------------------

##### Select Credentials and Action Events

<img src="/img/credentials/business-central-odata/C-AC-GTPSTDSLSSHIPMT13.jpg" alt="Business Central Get Posted Sales Shipment by No action selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Shipment No | Specify the posted sales shipment number. (e.g., `"102001"`) |

:::note
`Shipment No` is mandatory field.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/business-central-odata/AC-GTPSTDSLSSHIPMT14.jpg" alt="Business Central Get Posted Sales Shipment by No example configuration" width="700" />

-----------------------------

##### Result

```json
[
  {
    "@odata.context": "https://api.businesscentral.dynamics.com/v2.0/{Tenant_Id}/Production/ODataV4/$metadata#Company('CRONUS%20IN')/PostedSalesShipment/$entity",
    "@odata.etag": "W/\"JzIwOzE3MTU0NjkzNzk1OTU2ODA1NjQ1MTswMDsn\"",
    "No": "102001",
    "Sell_to_Customer_No": "20000",
    "Sell_to_Customer_Name": "Selangorian Ltd.",
    "Sell_to_Customer_Name_2": "",
    "Sell_to_Address": "Southwark Bridge Rd, 91-95",
    "Sell_to_Address_2": "",
    "Sell_to_City": "Gurugram",
    "Sell_to_County": "",
    "Sell_to_Post_Code": "122002",
    "Sell_to_Country_Region_Code": "IN",
    "Sell_to_Contact_No": "CT000003",
    "SellToPhoneNo": "",
    "SellToMobilePhoneNo": "",
    "SellToEmail": "mr.mark.mcarthur@contoso.com",
    "Sell_to_Contact": "Helen Ray",
    "No_Printed": 0,
    "Posting_Date": "2023-01-17",
    "Document_Date": "2023-01-17",
    "Requested_Delivery_Date": "0001-01-01",
    "Promised_Delivery_Date": "0001-01-01",
    "Quote_No": "",
    "Order_No": "",
    "External_Document_No": "",
    "ShpfyOrderNo": "",
    "Salesperson_Code": "JO",
    "Responsibility_Center": "",
    "GetWorkDescription": "",
    "Ship_to_Code": "",
    "Ship_to_Name": "Selangorian Ltd.",
    "Ship_to_Name_2": "",
    "Ship_to_Address": "Southwark Bridge Rd, 91-95",
    "Ship_to_Address_2": "",
    "Ship_to_City": "Gurugram",
    "Ship_to_County": "",
    "Ship_to_Post_Code": "122002",
    "Ship_to_Country_Region_Code": "IN",
    "Ship_to_Phone_No": "",
    "Ship_to_Contact": "Helen Ray",
    "Location_Code": "BLUE",
    "Outbound_Whse_Handling_Time": "",
    "Shipping_Time": "",
    "Shipment_Method_Code": "",
    "Shipping_Agent_Code": "",
    "Shipping_Agent_Service_Code": "",
    "Package_Tracking_No": "",
    "Shipment_Date": "2024-02-25",
    "Vehicle_No": "",
    "Vehicle_Type": " ",
    "LR_RR_No": "",
    "LR_RR_Date": "0001-01-01",
    "Bill_to_Customer_No": "20000",
    "Bill_to_Name": "Selangorian Ltd.",
    "Bill_to_Name_2": "",
    "Bill_to_Address": "Southwark Bridge Rd, 91-95",
    "Bill_to_Address_2": "",
    "Bill_to_City": "Gurugram",
    "Bill_to_County": "",
    "Bill_to_Post_Code": "122002",
    "Bill_to_Country_Region_Code": "IN",
    "Bill_to_Contact_No": "CT000003",
    "BillToContactPhoneNo": "",
    "BillToContactMobilePhoneNo": "",
    "BillToContactEmail": "mr.mark.mcarthur@contoso.com",
    "Bill_to_Contact": "Helen Ray",
    "Shortcut_Dimension_1_Code": "",
    "Shortcut_Dimension_2_Code": "LARGE",
    "GST_Bill_to_State_Code": "HR",
    "GST_Ship_to_State_Code": "",
    "Location_State_Code": "DL",
    "Invoice_Type": "Taxable",
    "Nature_of_Supply": "B2C",
    "GST_Customer_Type": "Unregistered",
    "GST_Without_Payment_of_Duty": false,
    "Bill_Of_Export_No": "",
    "Bill_Of_Export_Date": "0001-01-01",
    "E_Commerce_Customer": "",
    "E_Comm_Merchant_Id": "",
    "POS_Out_Of_India": false,
    "Date_of_Removal": "2023-01-17",
    "Time_of_Removal": "00:00:00",
    "Mode_of_Transport": ""
  }
]
```
------------------------------

### Item Action

#### Update Item

Update Item action is used to modify existing item details including description, pricing, unit measures, posting groups, and inventory settings.

-----------------------------

##### Select Credentials and Action Events

<img src="/img/credentials/business-central-odata/C-AC-UPDTITEM15.jpg" alt="Business Central Update Item action selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Item No (Identifier) | Specify the item number to update. (e.g., `"1012"`) |
| Description | Enter the item description. (e.g., `"Laptop - ThinkPad"`) |
| Base Unit of Measure | Specify the base unit of measure. (e.g., `"PCS"`) |
| Sales Unit of Measure | Specify the sales unit of measure. (e.g., `"PCS"`) |
| Purchase Unit of Measure | Specify the purchase unit of measure. (e.g., `"PCS"`) |
| Unit Price | Enter the item unit price. (e.g., `"39999"`) |
| Item Category Code | Specify the item category code. (e.g., `"LAPTOP"`) |
| Inventory Posting Group | Specify the inventory posting group. (e.g., `"RESALE"`) |
| Gen. Prod. Posting Group | Specify the general product posting group. (e.g., `"RETAIL"`) |
| VAT Prod. Posting Group | Specify the VAT product posting group. (e.g., `"STANDARD"`) |
| Blocked (True or False) | Set to `True` to block the item from transactions, otherwise `False`. Example: `False` |
| Include Inventory (True or False) | Set to `True` to include the item in inventory calculations. Example: `True` |

:::note
`Item No (Identifier)` is mandatory field. All other fields are optional and can be configured based on business requirements.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/business-central-odata/AC-UPDTITEM16.jpg" alt="Business Central Update Item example configuration part 1" width="700" />
<img src="/img/credentials/business-central-odata/AC-UPDTITEM17.jpg" alt="Business Central Update Item example configuration part 2" width="700" />

-----------------------------

##### Result

```json
[
  {
    "@odata.context": "https://api.businesscentral.dynamics.com/v2.0/{Tenant_Id}/Production/ODataV4/$metadata#Company('CRONUS%20IN')/Item/$entity",
    "@odata.etag": "W/\"JzE5OzQwNTczMzI5NTEzNzU2MTAyMzQxOzAwOyc=\"",
    "No": "1012",
    "Description": "Laptop - ThinkPad",
    "Description_2": "",
    "Blocked": false,
    "Type": "Inventory",
    "Base_Unit_of_Measure": "PCS",
    "Last_Date_Modified": "2026-05-08",
    "GTIN": "",
    "Item_Category_Code": "LAPTOP",
    "Manufacturer_Code": "",
    "Service_Item_Group": "",
    "Automatic_Ext_Texts": false,
    "CopyId": "2",
    "Common_Item_No": "",
    "Purchasing_Code": "",
    "VariantMandatoryDefaultYes": "Default",
    "VariantMandatoryDefaultNo": "Default",
    "Statistics_Group": 0,
    "No_2": "",
    "Alternative_Item_No": "",
    "Shelf_No": "",
    "Created_From_Nonstock_Item": false,
    "Search_Description": "LAPTOP - THINKPAD",
    "Inventory": 26,
    "InventoryNonFoundation": 26,
    "Qty_on_Purch_Order": 0,
    "Qty_on_Prod_Order": 0,
    "Qty_on_Component_Lines": 0,
    "Qty_on_Sales_Order": 20000000011,
    "Qty_on_Service_Order": 0,
    "Qty_on_Job_Order": 0,
    "Qty_on_Assembly_Order": 0,
    "Qty_on_Asm_Component": 0,
    "Qty_on_Blanket_Sales_Order": 0,
    "Qty_on_Blanket_Purch_Order": 0,
    "StockoutWarningDefaultYes": "Default",
    "StockoutWarningDefaultNo": "Default",
    "PreventNegInventoryDefaultYes": "Default",
    "PreventNegInventoryDefaultNo": "Default",
    "Net_Weight": 0,
    "Gross_Weight": 0,
    "Unit_Volume": 5,
    "Over_Receipt_Code": "",
    "Trans_Ord_Receipt_Qty": 0,
    "Trans_Ord_Shipment_Qty": 0,
    "Qty_in_Transit": 0,
    "Costing_Method": "FIFO",
    "Standard_Cost": 0,
    "Unit_Cost": 35000,
    "Indirect_Cost_Percent": 0,
    "Last_Direct_Cost": 35000,
    "Net_Invoiced_Qty": 26,
    "Cost_is_Adjusted": true,
    "Excluded_from_Cost_Adjustment": false,
    "Cost_is_Posted_to_G_L": true,
    "Inventory_Value_Zero": false,
    "SpecialPurchPriceListTxt": "Create New...",
    "SpecialPurchPricesAndDiscountsTxt": "Create New...",
    "Gen_Prod_Posting_Group": "RETAIL",
    "VAT_Prod_Posting_Group": "STANDARD",
    "Tax_Group_Code": "",
    "Inventory_Posting_Group": "RESALE",
    "Default_Deferral_Template_Code": "",
    "GST_Group_Code": "",
    "GST_Credit": " ",
    "HSN_SAC_Code": "",
    "Exempted": false,
    "Price_Exclusive_of_Tax": false,
    "Subcontracting": false,
    "Sub_Comp_Location": "",
    "Tariff_No": "",
    "Country_Region_of_Origin_Code": "",
    "Unit_Price": 39999,
    "CalcUnitPriceExclVAT": 39999,
    "Price_Includes_VAT": false,
    "Price_Profit_Calculation": "Profit=Price-Cost",
    "Profit_Percent": 12.49781,
    "SpecialSalesPriceListTxt": "Create New...",
    "SpecialPricesAndDiscountsTxt": "View Existing Prices and Discounts...",
    "Allow_Invoice_Disc": true,
    "Item_Disc_Group": "",
    "Sales_Unit_of_Measure": "PCS",
    "Service_Commitment_Option": "No Subscription",
    "Sales_Blocked": false,
    "Service_Blocked": false,
    "Application_Wksh_User_ID": "",
    "VAT_Bus_Posting_Gr_Price": "",
    "Replenishment_System": "Purchase",
    "Lead_Time_Calculation": "",
    "Vendor_No": "",
    "Vendor_Item_No": "",
    "Purch_Unit_of_Measure": "PCS",
    "Purchasing_Blocked": false,
    "UsageDataSupplierRefExists": false,
    "Manufacturing_Policy": "Make-to-Stock",
    "Routing_No": "",
    "Production_BOM_No": "",
    "Rounding_Precision": 1,
    "Flushing_Method": "Manual",
    "Overhead_Rate": 0,
    "Scrap_Percent": 0,
    "Lot_Size": 0,
    "Allow_Whse_Overpick": false,
    "Production_Blocked": " ",
    "Assembly_Policy": "Assemble-to-Stock",
    "AssemblyBOM": false,
    "Reordering_Policy": " ",
    "Reserve": "Optional",
    "Order_Tracking_Policy": "None",
    "Stockkeeping_Unit_Exists": false,
    "Dampener_Period": "",
    "Dampener_Quantity": 0,
    "Critical": false,
    "Safety_Lead_Time": "",
    "Safety_Stock_Quantity": 0,
    "Include_Inventory": true,
    "Lot_Accumulation_Period": "",
    "Rescheduling_Period": "",
    "Reorder_Point": 0,
    "Reorder_Quantity": 0,
    "Maximum_Inventory": 0,
    "Overflow_Level": 0,
    "Time_Bucket": "",
    "Minimum_Order_Quantity": 0,
    "Maximum_Order_Quantity": 0,
    "Order_Multiple": 0,
    "Item_Tracking_Code": "",
    "Serial_Nos": "",
    "Lot_Nos": "",
    "Expiration_Calculation": "",
    "Warehouse_Class_Code": "",
    "Special_Equipment_Code": "",
    "Put_away_Template_Code": "",
    "Put_away_Unit_of_Measure_Code": "",
    "Phys_Invt_Counting_Period_Code": "",
    "Last_Phys_Invt_Date": "0001-01-01",
    "Last_Counting_Period_Update": "0001-01-01",
    "Next_Counting_Start_Date": "0001-01-01",
    "Next_Counting_End_Date": "0001-01-01",
    "Identifier_Code": "",
    "Use_Cross_Docking": true,
    "GHG_Credit": false,
    "Carbon_Credit_Per_UOM": 0,
    "Sust_Cert_No": "",
    "Sust_Cert_Name": "",
    "Default_Sust_Account": "",
    "Default_CO2_Emission": 0,
    "Default_CH4_Emission": 0,
    "Default_N2O_Emission": 0,
    "CO2e_per_Unit": 0,
    "Item_of_Concern": false,
    "Recyclability_Percentage": 0,
    "Energy_Efficiency_Rating": "",
    "End_of_Life_Information": "",
    "Source_of_Emission_Data": " ",
    "Emission_Verified": false,
    "CBAM_Compliance": false,
    "EPR_Category": " ",
    "Material_Composition_No": "",
    "Total_EPR_Weight": 0,
    "EPR_Fees_Per_Unit": 0,
    "End_of_Life_Disposal_Req": "",
    "Carbon_Tracking_Method": "Average",
    "Product_Classification_Type": " ",
    "Product_Classification_Code": "",
    "Product_Classification_Name": "",
    "Global_Dimension_1_Filter": "",
    "Global_Dimension_2_Filter": "",
    "Location_Filter": "",
    "Drop_Shipment_Filter": "",
    "Variant_Filter": "",
    "Lot_No_Filter": "",
    "Serial_No_Filter": "",
    "Unit_of_Measure_Filter": "",
    "Package_No_Filter": "",
    "Date_Filter": ""
  }
]
```
-------------------------

### Generic Actions

#### Search Record

Search Record action is used to retrieve records from a specified object using filter criteria and record limits.

-----------------------------

##### Select Credentials and Action Events

<img src="/img/credentials/business-central-odata/C-AC-SRCHRCRDS19.jpg" alt="Business Central Search Record action selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Object Name | Select the Business Central object/entity to search records from using the searchable dropdown. Supported objects include: `Posted Sales Shipment`, `Posted Sales Shipment Lines`, `Sales Prices`, `ShipToAddress`, `Items`, `Customers`, `Sales Quote`, `Sales Lines`, `Item Ledger Entries`, `Contacts`, `Sales Order`, `Shipments`, `Item Journal`, `Item variants`, `Customer ledger Entries`, `Posted Sales Invoice`, `Sales Order Archives Lines`, `Sales Invoice`, `Sales Invoice Lines`, and `Cash Receipt Journals`. |
| Filter Value | Enter the filter condition to retrieve matching records. Example: `No eq '1012'` |
| Limit of records | Define the maximum number of records to fetch. Example: `10` |
| Select fields to fetch | Specify the fields to retrieve from the selected object as comma-separated values. Example: `id,number,displayName` |

:::note
`Object Name`, `Filter Value`, and `Limit of records` are mandatory fields. All other fields are optional and can be configured based on business requirements.
:::

##### Custom Object / Endpoint

The Search Record action also supports searching records from a custom object/endpoint that is not listed in the supported options dropdown.

To search records from a custom object:

1. In the **Object Name** field, switch the field type from **dropdown** to **expression box**.

<img src="/img/credentials/business-central-odata/generic_action_switchField.png" alt="switch field mode" width="700" />

2. Manually type the custom object/endpoint name.

<img src="/img/credentials/business-central-odata/fill_objectName.png" alt="Type custom endpoint name" width="700" />

The other parameters — **Filter Value**, **Limit of records**, and **Select fields to fetch** — work the same as when using a supported object from the dropdown.

Click on **Continue** after required configuration, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/business-central-odata/AC-SRCHRCRDS20.jpg" alt="Business Central Search Record example configuration" width="700" />

-----------------------------

##### Result

```json
[
  {
    "@odata.etag": "W/\"JzE5OzQwNTczMzI5NTEzNzU2MTAyMzQxOzAwOyc=\"",
    "No": "1012",
    "Description": "Laptop - ThinkPad"
  }
]
```
-----------------------------

### SalesOrder Actions

#### Update Sales Order

Update Sales Order action is used to modify an existing sales order with shipment, delivery, payment, location, and customer address details.

-----------------------------

##### Select Credentials and Action Events

<img src="/img/credentials/business-central-odata/C-AC-UPDTSLSORDR21.jpg" alt="Business Central Update Sales Order action selection" width="700" />

Click on **Continue** button.

-----------------------------

##### Configuration

| Field | Description |
|------|-------------|
| Sales Order No | Specify the sales order number to update. (e.g., `"101013"`) |
| Shipment Date | Enter the shipment date. (e.g., `"2026-05-08"`) |
| Requested Delivery Date | Enter the requested delivery date. (e.g., `"2026-05-18"`) |
| Salesperson Code | Specify the salesperson code. (e.g., `"BC"`) |
| Payment Terms Code | Specify the payment terms code. (e.g., `"1M(8D)"`) |
| Location Code | Specify the location code. (e.g., `"BLUE"`) |
| Sell-to Address | Enter the primary sell-to address. (e.g., `"Gap Store"`) |
| Sell-to Address 2 | Enter the secondary sell-to address. (e.g., `"Road No. 36, Jubilee"`) |
| Sell-to City | Specify the sell-to city. (e.g., `"Hyderabad"`) |
| Sell-to State / County | Specify the sell-to state or county. (e.g., `"TS"`) |
| Sell-to Post Code | Enter the sell-to postal code. (e.g., `"500039"`) |
| Sell-to Country / Region Code | Specify the sell-to country or region code. (e.g., `"IN"`) |
| Shortcut Dimension 2 Code | Specify the shortcut dimension 2 code. (e.g., `"SMALL"`) |

:::note
`Sales Order No` is mandatory field. All other fields are optional and can be configured based on business requirements.
:::

Click on **Continue**, then **Run** node.

-----------------------------

##### Example Configuration

<img src="/img/credentials/business-central-odata/AC-UPDTSLSORDR22.jpg" alt="Business Central Update Sales Order example configuration part 1" width="700" />
<img src="/img/credentials/business-central-odata/AC-UPDTSLSORDR23.jpg" alt="Business Central Update Sales Order example configuration part 2" width="700" />

-----------------------------

##### Result

```json
[
  {
    "@odata.context": "https://api.businesscentral.dynamics.com/v2.0/{Tenant_Id}/Production/ODataV4/$metadata#Company('CRONUS%20IN')/SalesOrder/$entity",
    "@odata.etag": "W/\"JzIwOzExNjA3NTUxODMwNDY1MTgzMDA1MTswMDsn\"",
    "Document_Type": "Order",
    "No": "101013",
    "Sell_to_Customer_No": "40000",
    "Sell_to_Customer_Name": "Deerfield Graphics Company",
    "WebIncrementId": "",
    "WebOrderId": "",
    "ApplicationId": "",
    "CustomerNotes": "",
    "Sell_to_Customer_Name_2": "",
    "Quote_No": "",
    "Posting_Description": "Order 101013",
    "Sell_to_Address": "Gap Store",
    "Sell_to_Address_2": "Road No. 36, Jubilee",
    "Sell_to_City": "Hyderabad",
    "Sell_to_County": "TS",
    "Sell_to_Post_Code": "500039",
    "Sell_to_Country_Region_Code": "IN",
    "Sell_to_Contact_No": "CT000007",
    "Sell_to_Phone_No": "",
    "SellToMobilePhoneNo": "",
    "Sell_to_E_Mail": "mr.kevin.wright@contoso.com",
    "Sell_to_Contact": "Ian Deberry",
    "No_of_Archived_Versions": 0,
    "Document_Date": "2024-08-27",
    "Posting_Date": "2024-08-27",
    "VAT_Reporting_Date": "2024-08-27",
    "Order_Date": "2024-08-27",
    "Due_Date": "2024-09-27",
    "Requested_Delivery_Date": "0001-01-01",
    "Promised_Delivery_Date": "0001-01-01",
    "External_Document_No": "1137",
    "Your_Reference": "",
    "ShpfyOrderNo": "",
    "Salesperson_Code": "BC",
    "Campaign_No": "",
    "Opportunity_No": "",
    "Responsibility_Center": "",
    "Charge_Group_Code": "",
    "Assigned_User_ID": "",
    "Job_Queue_Status": " ",
    "Status": "Open",
    "WorkDescription": "",
    "Exclude_GST_in_TCS_Base": false,
    "Currency_Code": "",
    "Company_Bank_Account_Code": "",
    "Prices_Including_VAT": false,
    "VAT_Country_Region_Code": "IN",
    "VAT_Registration_No": "733495789",
    "Gen_Bus_Posting_Group": "DOMESTIC",
    "VAT_Bus_Posting_Group": "DOMESTIC",
    "Customer_Posting_Group": "DOMESTIC",
    "Payment_Terms_Code": "1M(8D)",
    "Payment_Method_Code": "",
    "EU_3_Party_Trade": false,
    "SelectedPayments": "No payment service is made available.",
    "Shortcut_Dimension_1_Code": "",
    "Shortcut_Dimension_2_Code": "SMALL",
    "Payment_Discount_Percent": 2,
    "Pmt_Discount_Date": "2024-09-04",
    "Journal_Templ_Name": "",
    "Direct_Debit_Mandate_ID": "",
    "Applies_to_Doc_Type": " ",
    "Applies_to_Doc_No": "",
    "ShippingOptions": "Default (Sell-to Address)",
    "Ship_to_Code": "",
    "Ship_to_Customer": "",
    "Ship_to_Name": "Deerfield Graphics Company",
    "Ship_to_Name_2": "",
    "Ship_to_Address": "Gap Store",
    "Ship_to_Address_2": "Road No. 36, Jubilee",
    "Ship_to_City": "New Delhi",
    "Ship_to_County": "",
    "Ship_to_Post_Code": "110001",
    "Ship_to_Country_Region_Code": "IN",
    "Ship_to_Phone_No": "",
    "Ship_to_Contact": "Ian Deberry",
    "Shipment_Method_Code": "",
    "Shipping_Agent_Code": "",
    "Shipping_Agent_Service_Code": "",
    "Package_Tracking_No": "",
    "BillToOptions": "Default (Customer)",
    "Bill_to_Name": "Deerfield Graphics Company",
    "Bill_to_Name_2": "",
    "Bill_to_Address": "10 Deerfield Road",
    "Bill_to_Address_2": "",
    "Bill_to_City": "New Delhi",
    "Bill_to_County": "",
    "Bill_to_Post_Code": "110001",
    "Bill_to_Country_Region_Code": "IN",
    "Bill_to_Contact_No": "CT000007",
    "Bill_to_Contact": "Ian Deberry",
    "BillToContactPhoneNo": "",
    "BillToContactMobilePhoneNo": "",
    "BillToContactEmail": "",
    "Location_Code": "BLUE",
    "Shipment_Date": "2026-05-08",
    "Shipping_Advice": "Partial",
    "Outbound_Whse_Handling_Time": "",
    "Shipping_Time": "",
    "Late_Order_Shipping": true,
    "Combine_Shipments": false,
    "Completely_Shipped": false,
    "LR_RR_No": "",
    "LR_RR_Date": "0001-01-01",
    "Transaction_Specification": "",
    "Transaction_Type": "",
    "Transport_Method": "",
    "Exit_Point": "",
    "Area": "",
    "Language_Code": "ENG",
    "Format_Region": "en-GB",
    "Invoice_Type": "Taxable",
    "Bill_Of_Export_No": "",
    "Bill_Of_Export_Date": "0001-01-01",
    "E_Commerce_Customer": "",
    "E_Comm_Merchant_Id": "",
    "Reference_Invoice_No": "",
    "GST_Without_Payment_of_Duty": false,
    "GST_Invoice": false,
    "POS_Out_Of_India": false,
    "GST_Bill_to_State_Code": "DL",
    "GST_Ship_to_State_Code": "",
    "Location_State_Code": "DL",
    "Customer_GST_Reg_No": "",
    "Ship_to_GST_Reg_No": "",
    "Nature_of_Supply": "B2B",
    "GST_Customer_Type": "Registered",
    "Ship_to_GST_Customer_Type": " ",
    "Rate_Change_Applicable": false,
    "Supply_Finish_Date": " ",
    "Payment_Date": " ",
    "Vehicle_No": "",
    "Vehicle_Type": " ",
    "Distance_Km": 0,
    "Trading": false,
    "Date_of_Removal": "2024-08-27",
    "Time_of_Removal": "00:00:00",
    "Mode_of_Transport": "",
    "Post_GST_to_Customer": false,
    "TDS_Certificate_Receivable": false,
    "Prepayment_Percent": 0,
    "Compress_Prepayment": true,
    "Prepmt_Payment_Terms_Code": "1M(8D)",
    "Prepayment_Due_Date": "2024-09-27",
    "Prepmt_Payment_Discount_Percent": 2,
    "Prepmt_Pmt_Discount_Date": "2024-09-04",
    "Date_Filter": "''..05/08/26",
    "Location_Filter": ""
  }
]
```
---

## Support

Need help? Contact our support team at [support@appse.ai](mailto:support@appse.ai)
