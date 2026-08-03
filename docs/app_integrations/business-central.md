---
title: "Dynamics 365 Business Central"
slug: /app-integrations/dynamics-365-business-central
description: Step-by-step guide to set up Dynamics 365 Business Central credentials and automate business workflows in appse ai.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import EnableImagePreview from '@site/src/components/EnableImagePreview';

<EnableImagePreview />

Dynamics 365 Business Central is an all-in-one business management solution designed to help organizations streamline their financials, operations, and customer relationships. With appse ai, you can easily connect your Dynamics 365 Business Central account, automate business processes, and integrate data seamlessly across your workflows, enhancing efficiency and accuracy in your operations.

---

## Setup Credential

Follow the steps below to quickly set up your credential.

### Required Fields

You’ll need to provide:

| Field           | Description       |
| --------------- | ----------------- |
| Connection Name | A name to identify the connection |
| Tenant ID       | Your Azure Active Directory tenant ID |
| Company ID      | The ID of the Business Central company you're working with |

---

### Step-by-Step Guide

##### 1. Add Connection Name

- Enter a user-friendly name to identify this connection (e.g., `BC Finance`, `D365 Europe Instance`).
- This is only for reference within our platform.

---

##### 2. Locate Your Tenant ID

- Go to the [Azure Portal](https://portal.azure.com).
  <img src="/img/credentials/business-central/business-central-cred-azure-dashboard.png" alt="appse ai Business Central Azure Dashboard" width="700"/>

- Search for **Microsoft Entra ID** → **Overview**.
  <img src="/img/credentials/business-central/business-central-cred-tenant-id.png" alt="appse ai Business Central Tenant ID" width="700"/>

- Copy the **Tenant ID** from the overview page.

> **Example**: `e3f75f41-xxxx-4a70-9b5c-xxxxxxxxxxxx`

---

##### 3. Find Your Company ID

- Log in to your [Business Central](https://www.microsoft.com/en-in/dynamics-365/products/business-central/sign-in) account.

- Click on the **Search** icon → Search "Companies" → Click on Companies.
  <img src="/img/credentials/business-central/business-central-company-id-1.png" alt="appse ai Business Central Companies Search" width="700"/>

- Select Your Company Name from the list.
  <img src="/img/credentials/business-central/business-central-company-id-2.png" alt="appse ai Business Central Select Company name" width="700"/>

> **Example**: `CRONUS USA, Inc.`

- Press Ctrl+Alt+F1 → A Side Panel titled **Page Inspection** will open → Click on Table Fields → Under **Id (8000, GUID)** field, you will find the **Company ID** → Copy this and paste it in the credential form → Click on Save and Authorize.
  <img src="/img/credentials/business-central/business-central-company-id-3.png" alt="appse ai Business Central Find Company ID" width="700"/>

---

##### 4. Log in to your Business Central Account

- You will be showcased a pop-up that prompts you to login to your Business Central account using your Microsoft account credentials.

<img src="/img/credentials/business-central/business-central-cred-microsoft-login.png" alt="appse ai Business Central Microsoft Login" width="700"/>

- If you followed all the steps correctly, your Business Central credential should be connected to our platform.

---

### Save Your Credential

Once you've filled in the necessary fields, click **"Save"** to store and verify your setup.

- If successful, your credential will show a "✓" icon. Now you can use this application for your integrations.
- If it fails, you will be displayed a "!" icon. In that case, please recheck your Connection Name, Tenant ID, and Company ID or contact support.

---

## Triggers and Actions

Every application has a pre-defined set of triggers and actions that allow users to perform application specific activities within the platform. Here is a list of all the actions and triggers available.

<Tabs>
  <TabItem value="triggers" label="Triggers">

### Triggers

#### New Customers Created

New Customer Created trigger is used to fetch newly created customer records from Business Central based on a specified time and limit.

##### Select Credentials and Action Events

<img src="/img/credentials/business-central/C-NWCSTMRCRTD1.jpg" alt="Business Central New Customer Created - Select Credentials and Action Events" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Fetch Data Since | Specify the date and time to fetch new customer records. (e.g., "01/05/2024 09:32") |
| Limit | Define the number of records to retrieve. (e.g., "10" or "1") |

:::note
Fetch Data Since is mandatory. Limit can be adjusted based on how many records you want to retrieve.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/business-central/AC-NWCSTMRCRTD2.jpg" alt="Business Central New Customer Created - Example Configuration" width="700" />

---

##### Result

```json
[
  {
    "@odata.etag": "W/\"JzIwOzEyMzM5MzI5OTA3ODUyNjg0MjU4MTswMDsn\"",
    "id": "e699e2b8-ced4-f011-8542-6045bde7ef1d",
    "number": "#1303",
    "displayName": "Reyen Behr [B]",
    "type": "Person",
    "addressLine1": "",
    "addressLine2": "",
    "city": "",
    "state": "",
    "country": "IN",
    "postalCode": "",
    "phoneNumber": "",
    "email": "xyz456@gmail.com",
    "website": "",
    "salespersonCode": "",
    "balanceDue": 0,
    "creditLimit": 0,
    "taxLiable": false,
    "taxAreaId": "84e0dcf8-b3d3-ee11-904f-6045bde9c6f5",
    "taxAreaDisplayName": "Domestic customers and vendors",
    "taxRegistrationNumber": "",
    "currencyId": "00000000-0000-0000-0000-000000000000",
    "currencyCode": "USD",
    "paymentTermsId": "c9dbdcf8-b3d3-ee11-904f-6045bde9c6f5",
    "shipmentMethodId": "00000000-0000-0000-0000-000000000000",
    "paymentMethodId": "12e0dcf8-b3d3-ee11-904f-6045bde9c6f5",
    "blocked": "_x0020_",
    "lastModifiedDateTime": "2026-05-05T05:55:35.773Z"
  }
]
```
---

#### Customers Update

Customer Update trigger is used to fetch updated customer records from Business Central based on a specified time and limit.

##### Select Credentials and Action Events

<img src="/img/credentials/business-central/C-CSTMRUPDT3.jpg" alt="Business Central Customer Update - Select Credentials and Action Events" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Fetch Data Since | Specify the date and time to fetch updated customer records. (e.g., "01/05/2024 09:32") |
| Limit | Define the number of records to retrieve. (e.g., "10" or "1") |

:::note
Fetch Data Since is mandatory. Limit can be adjusted based on how many records you want to retrieve.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

:::note
The configuration fields are the same for all triggers - refer to the screenshot above.
:::

---

##### Result

```json
[
  {
    "@odata.etag": "W/\"JzIwOzEyMzM5MzI5OTA3ODUyNjg0MjU4MTswMDsn\"",
    "id": "e699e2b8-ced4-f011-8542-6045bde7ef1d",
    "number": "#1303",
    "displayName": "Reyen Behr [B]",
    "type": "Person",
    "addressLine1": "",
    "addressLine2": "",
    "city": "",
    "state": "",
    "country": "IN",
    "postalCode": "",
    "phoneNumber": "",
    "email": "xyz456@gmail.com",
    "website": "",
    "salespersonCode": "",
    "balanceDue": 0,
    "creditLimit": 0,
    "taxLiable": false,
    "taxAreaId": "84e0dcf8-b3d3-ee11-904f-6045bde9c6f5",
    "taxAreaDisplayName": "Domestic customers and vendors",
    "taxRegistrationNumber": "",
    "currencyId": "00000000-0000-0000-0000-000000000000",
    "currencyCode": "USD",
    "paymentTermsId": "c9dbdcf8-b3d3-ee11-904f-6045bde9c6f5",
    "shipmentMethodId": "00000000-0000-0000-0000-000000000000",
    "paymentMethodId": "12e0dcf8-b3d3-ee11-904f-6045bde9c6f5",
    "blocked": "_x0020_",
    "lastModifiedDateTime": "2026-05-05T05:55:35.773Z"
  }
]
```
---

#### New Contacts Created

New Contacts Created trigger is used to fetch newly created contact records from Business Central based on a specified time and limit.

##### Select Credentials and Action Events

<img src="/img/credentials/business-central/C-NWCNTCTCRTD4.jpg" alt="Business Central New Contacts Created - Select Credentials and Action Events" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Fetch Data Since | Specify the date and time to fetch new contact records. (e.g., "01/05/2024 09:32") |
| Limit | Define the number of records to retrieve. (e.g., "10" or "1") |

:::note
Fetch Data Since is mandatory. Limit can be adjusted based on how many records you want to retrieve.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

:::note
The configuration fields are the same for all triggers - refer to the screenshot above.
:::

---

##### Result

```json
[
  {
    "@odata.etag": "W/\"JzE5Ozc3ODA5MjE1MjA0MzIwNjA0NTkxOzAwOyc=\"",
    "id": "88bbb6a9-16c6-f011-8542-7c1e520ee21f",
    "number": "+917796636577",
    "type": "Person",
    "displayName": "Chase Whitman",
    "jobTitle": "ocSalesOrServicesRevenues",
    "companyNumber": "CT010494",
    "companyName": "Boston Company",
    "contactBusinessRelation": "Customer",
    "addressLine1": "233 N Michigan Ave",
    "addressLine2": "4501 W 47th Street",
    "city": "Chicago",
    "state": "IL",
    "country": "US",
    "postalCode": "60632",
    "phoneNumber": "9876629031",
    "mobilePhoneNumber": "",
    "email": "chase.whitman67@yopmail.com",
    "website": "",
    "searchName": "WHITMAN",
    "privacyBlocked": false,
    "taxRegistrationNumber": "",
    "lastInteractionDate": "0001-01-01",
    "lastModifiedDateTime": "2025-11-25T12:22:02.18Z"
  }
]
```
---

#### Contacts Updated

Contacts Updated trigger is used to fetch updated contact records from Business Central based on a specified time and limit.

##### Select Credentials and Action Events

<img src="/img/credentials/business-central/C-CONTCTUPDT5.jpg" alt="Business Central Contacts Updated - Select Credentials and Action Events" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Fetch Data Since | Specify the date and time to fetch updated contact records. (e.g., "01/05/2024 09:32") |
| Limit | Define the number of records to retrieve. (e.g., "10" or "1") |

:::note
Fetch Data Since is mandatory. Limit can be adjusted based on how many records you want to retrieve.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

:::note
The configuration fields are the same for all triggers - refer to the screenshot above.
:::

---

##### Result

```json
[
  {
    "@odata.etag": "W/\"JzE5Ozc3ODA5MjE1MjA0MzIwNjA0NTkxOzAwOyc=\"",
    "id": "88bbb6a9-16c6-f011-8542-7c1e520ee21f",
    "number": "+917796636577",
    "type": "Person",
    "displayName": "Chase Whitman",
    "jobTitle": "ocSalesOrServicesRevenues",
    "companyNumber": "CT010494",
    "companyName": "Boston Company",
    "contactBusinessRelation": "Customer",
    "addressLine1": "233 N Michigan Ave",
    "addressLine2": "4501 W 47th Street",
    "city": "Chicago",
    "state": "IL",
    "country": "US",
    "postalCode": "60632",
    "phoneNumber": "9876629031",
    "mobilePhoneNumber": "",
    "email": "chase.whitman67@yopmail.com",
    "website": "",
    "searchName": "WHITMAN",
    "privacyBlocked": false,
    "taxRegistrationNumber": "",
    "lastInteractionDate": "0001-01-01",
    "lastModifiedDateTime": "2025-11-25T12:22:02.18Z"
  }
]
```
---

#### New Items Created

New Items Created trigger is used to fetch newly created item records from Business Central based on a specified time and limit.

##### Select Credentials and Action Events

<img src="/img/credentials/business-central/C-NWITMCRTD6.jpg" alt="Business Central New Items Created - Select Credentials and Action Events" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Fetch Data Since | Specify the date and time to fetch new item records. (e.g., "01/05/2024 09:32") |
| Limit | Define the number of records to retrieve. (e.g., "10" or "1") |

:::note
Fetch Data Since is mandatory. Limit can be adjusted based on how many records you want to retrieve.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

:::note
The configuration fields are the same for all triggers - refer to the screenshot above.
:::

---

##### Result

```json
[
  {
    "@odata.etag": "W/\"JzE5Ozg5MjIyMzcwMjQ1MTAxNzUwOTcxOzAwOyc=\"",
    "id": "d290ba0b-a47d-f011-8eef-6045bdadacc5",
    "number": "00000062828283",
    "displayName": "Binocular",
    "displayName2": "",
    "type": "Inventory",
    "itemCategoryId": "00000000-0000-0000-0000-000000000000",
    "itemCategoryCode": "",
    "blocked": false,
    "gtin": "",
    "inventory": 0,
    "unitPrice": 0,
    "priceIncludesTax": false,
    "unitCost": 0,
    "taxGroupId": "00000000-0000-0000-0000-000000000000",
    "taxGroupCode": "",
    "baseUnitOfMeasureId": "62dedcf8-b3d3-ee11-904f-6045bde9c6f5",
    "baseUnitOfMeasureCode": "PCS",
    "generalProductPostingGroupId": "f3dfdcf8-b3d3-ee11-904f-6045bde9c6f5",
    "generalProductPostingGroupCode": "RETAIL",
    "inventoryPostingGroupId": "51dedcf8-b3d3-ee11-904f-6045bde9c6f5",
    "inventoryPostingGroupCode": "RESALE",
    "lastModifiedDateTime": "2026-05-05T08:35:26.613Z"
  }
]
```
---

#### Items Updated

Items Updated trigger is used to fetch updated item records from Business Central based on a specified time and limit.

##### Select Credentials and Action Events

<img src="/img/credentials/business-central/C-ITMSUPDT7.jpg" alt="Business Central Items Updated - Select Credentials and Action Events" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Fetch Data Since | Specify the date and time to fetch updated item records. (e.g., "01/05/2024 09:32") |
| Limit | Define the number of records to retrieve. (e.g., "10" or "1") |

:::note
Fetch Data Since is mandatory. Limit can be adjusted based on how many records you want to retrieve.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

:::note
The configuration fields are the same for all triggers - refer to the screenshot above.
:::

---

##### Result

```json
[
  {
    "@odata.etag": "W/\"JzE5Ozg5MjIyMzcwMjQ1MTAxNzUwOTcxOzAwOyc=\"",
    "id": "d290ba0b-a47d-f011-8eef-6045bdadacc5",
    "number": "00000062828283",
    "displayName": "Binocular",
    "displayName2": "",
    "type": "Inventory",
    "itemCategoryId": "00000000-0000-0000-0000-000000000000",
    "itemCategoryCode": "",
    "blocked": false,
    "gtin": "",
    "inventory": 0,
    "unitPrice": 0,
    "priceIncludesTax": false,
    "unitCost": 0,
    "taxGroupId": "00000000-0000-0000-0000-000000000000",
    "taxGroupCode": "",
    "baseUnitOfMeasureId": "62dedcf8-b3d3-ee11-904f-6045bde9c6f5",
    "baseUnitOfMeasureCode": "PCS",
    "generalProductPostingGroupId": "f3dfdcf8-b3d3-ee11-904f-6045bde9c6f5",
    "generalProductPostingGroupCode": "RETAIL",
    "inventoryPostingGroupId": "51dedcf8-b3d3-ee11-904f-6045bde9c6f5",
    "inventoryPostingGroupCode": "RESALE",
    "lastModifiedDateTime": "2026-05-05T08:35:26.613Z"
  }
]
```
---

#### Opportunities Created

Opportunities Created trigger is used to fetch newly created opportunity records from Business Central based on a specified time and limit.

##### Select Credentials and Action Events

<img src="/img/credentials/business-central/C-OPPRTNTCRTD8.jpg" alt="Business Central Opportunities Created - Select Credentials and Action Events" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Fetch Data Since | Specify the date and time to fetch new opportunity records. (e.g., "01/05/2024 09:32") |
| Limit | Define the number of records to retrieve. (e.g., "10" or "1") |

:::note
Fetch Data Since is mandatory. Limit can be adjusted based on how many records you want to retrieve.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

:::note
The configuration fields are the same for all triggers - refer to the screenshot above.
:::

---

##### Result

```json
[
  {
    "@odata.etag": "W/\"JzIwOzE2MTY5MjI1MzI1MTQ5Njk4NDA5MTswMDsn\"",
    "id": "fd15f560-fba1-ef11-8a6b-7c1e520e354b",
    "number": "1",
    "contactNumber": "CT000007",
    "contactName": "Deerfield Graphics Company Update",
    "contactCompanyName": "Deerfield Graphics Company Update",
    "salespersonCode": "",
    "description": "test",
    "status": "Not_x0020_Started",
    "closed": false,
    "creationDate": "2024-11-14",
    "dateClosed": "0001-01-01",
    "calculatedCurrentValue": 0,
    "chancesOfSuccessPrc": 0,
    "completedPrc": 0,
    "estimatedClosingDate": "0001-01-01",
    "estimatedValue": 0,
    "systemCreatedAt": "2024-11-13T20:10:52.043Z",
    "lastModifiedDateTime": "2024-11-13T20:10:52.077Z"
  }
]
```
---

#### New SalesOrders Created

New SalesOrders Created trigger is used to fetch newly created sales order records from Business Central based on a specified time and limit.

##### Select Credentials and Action Events

<img src="/img/credentials/business-central/C-NWSLSORDRCRTD9.jpg" alt="Business Central New SalesOrders Created - Select Credentials and Action Events" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Fetch Data Since | Specify the date and time to fetch new sales order records. (e.g., "01/05/2024 09:32") |
| Limit | Define the number of records to retrieve. (e.g., "10" or "1") |

:::note
Fetch Data Since is mandatory. Limit can be adjusted based on how many records you want to retrieve.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

:::note
The configuration fields are the same for all triggers - refer to the screenshot above.
:::

---

##### Result

```json
[
  {
    "@odata.etag": "W/\"JzE5OzE5OTM2MzEzMjA1MTc3OTY4ODkxOzAwOyc=\"",
    "id": "ca1e5de2-8a44-f111-a820-6045bdc66ee1",
    "number": "0048802",
    "externalDocumentNumber": "",
    "orderDate": "2026-03-10",
    "postingDate": "2026-03-10",
    "customerId": "717b026b-7a1c-f111-8340-7ced8d26cf05",
    "customerNumber": "CUS002852",
    "customerName": " Grow Thrive",
    "billToName": " Grow Thrive",
    "billToCustomerId": "717b026b-7a1c-f111-8340-7ced8d26cf05",
    "billToCustomerNumber": "CUS002852",
    "shipToName": "CUS002852",
    "shipToContact": "Grow Thrive",
    "sellToAddressLine1": "421 Hobbs Street",
    "sellToAddressLine2": "",
    "sellToCity": "Tampa",
    "sellToCountry": "US",
    "sellToState": "FL",
    "sellToPostCode": "33619-7880",
    "billToAddressLine1": "421 Hobbs Street",
    "billToAddressLine2": "",
    "billToCity": "Tampa",
    "billToCountry": "US",
    "billToState": "FL",
    "billToPostCode": "33619-7880",
    "shipToAddressLine1": "421 Hobbs Street",
    "shipToAddressLine2": "",
    "shipToCity": "Tampa",
    "shipToCountry": "US",
    "shipToState": "FL",
    "shipToPostCode": "33619-7880",
    "shortcutDimension1Code": "",
    "shortcutDimension2Code": "",
    "currencyId": "00000000-0000-0000-0000-000000000000",
    "currencyCode": "USD",
    "pricesIncludeTax": false,
    "paymentTermsId": "c2dbdcf8-b3d3-ee11-904f-6045bde9c6f5",
    "shipmentMethodId": "00000000-0000-0000-0000-000000000000",
    "salesperson": "",
    "partialShipping": true,
    "requestedDeliveryDate": "0001-01-01",
    "discountAmount": 0,
    "discountAppliedBeforeTax": true,
    "totalAmountExcludingTax": 140240,
    "totalTaxAmount": 0,
    "totalAmountIncludingTax": 140240,
    "fullyShipped": false,
    "status": "Draft",
    "lastModifiedDateTime": "2026-05-05T06:50:28.203Z",
    "phoneNumber": "(813) 684-1782",
    "email": "grow45@yopmail.com",
    "salesOrderLines": [
      {
        "@odata.etag": "W/\"JzIwOzE2NjczMTY2NDA2NDg0NDg3MDMxMTswMDsn\"",
        "id": "d41e5de2-8a44-f111-a820-6045bdc66ee1",
        "documentId": "ca1e5de2-8a44-f111-a820-6045bdc66ee1",
        "sequence": 10000,
        "itemId": "9d650f62-a331-f111-bec2-6045bdc674ec",
        "accountId": "00000000-0000-0000-0000-000000000000",
        "lineType": "Item",
        "lineObjectNumber": "1811",
        "description": "Jabra headphone",
        "description2": "",
        "unitOfMeasureId": "62dedcf8-b3d3-ee11-904f-6045bde9c6f5",
        "unitOfMeasureCode": "PCS",
        "quantity": 2,
        "unitPrice": 120,
        "discountAmount": 0,
        "discountPercent": 0,
        "discountAppliedBeforeTax": false,
        "amountExcludingTax": 240,
        "taxCode": "STANDARD",
        "taxPercent": 0,
        "totalTaxAmount": 0,
        "amountIncludingTax": 240,
        "invoiceDiscountAllocation": 0,
        "netAmount": 240,
        "netTaxAmount": 0,
        "netAmountIncludingTax": 240,
        "shipmentDate": "2026-04-30",
        "shippedQuantity": 0,
        "invoicedQuantity": 0,
        "invoiceQuantity": 2,
        "shipQuantity": 2,
        "itemVariantId": "00000000-0000-0000-0000-000000000000",
        "locationId": "00000000-0000-0000-0000-000000000000"
      },
      {
        "@odata.etag": "W/\"JzIwOzE0OTE2NjE3ODEwODczNzg1NzM0MTswMDsn\"",
        "id": "181f5de2-8a44-f111-a820-6045bdc66ee1",
        "documentId": "ca1e5de2-8a44-f111-a820-6045bdc66ee1",
        "sequence": 20000,
        "itemId": "65279004-590d-f111-8405-7ced8d26cf05",
        "accountId": "00000000-0000-0000-0000-000000000000",
        "lineType": "Item",
        "lineObjectNumber": "1781",
        "description": "One Plus 13",
        "description2": "",
        "unitOfMeasureId": "62dedcf8-b3d3-ee11-904f-6045bde9c6f5",
        "unitOfMeasureCode": "PCS",
        "quantity": 2,
        "unitPrice": 70000,
        "discountAmount": 0,
        "discountPercent": 0,
        "discountAppliedBeforeTax": false,
        "amountExcludingTax": 140000,
        "taxCode": "STANDARD",
        "taxPercent": 0,
        "totalTaxAmount": 0,
        "amountIncludingTax": 140000,
        "invoiceDiscountAllocation": 0,
        "netAmount": 140000,
        "netTaxAmount": 0,
        "netAmountIncludingTax": 140000,
        "shipmentDate": "2026-04-30",
        "shippedQuantity": 0,
        "invoicedQuantity": 0,
        "invoiceQuantity": 2,
        "shipQuantity": 2,
        "itemVariantId": "00000000-0000-0000-0000-000000000000",
        "locationId": "00000000-0000-0000-0000-000000000000"
      },
      {
        "@odata.etag": "W/\"JzIwOzE2MjYwMTM5NDk1MDY3OTIyMDc0MTswMDsn\"",
        "id": "3332c5ae-4e48-f111-a820-7ced8d9feb00",
        "documentId": "ca1e5de2-8a44-f111-a820-6045bdc66ee1",
        "sequence": 30000,
        "itemId": "00000000-0000-0000-0000-000000000000",
        "accountId": "dedddcf8-b3d3-ee11-904f-6045bde9c6f5",
        "lineType": "Account",
        "lineObjectNumber": "9510",
        "description": "Corporate Tax",
        "description2": "",
        "unitOfMeasureId": "00000000-0000-0000-0000-000000000000",
        "unitOfMeasureCode": "",
        "quantity": 0,
        "unitPrice": 0,
        "discountAmount": 0,
        "discountPercent": 0,
        "discountAppliedBeforeTax": false,
        "amountExcludingTax": 0,
        "taxCode": "",
        "taxPercent": 0,
        "totalTaxAmount": 0,
        "amountIncludingTax": 0,
        "invoiceDiscountAllocation": 0,
        "netAmount": 0,
        "netTaxAmount": 0,
        "netAmountIncludingTax": 0,
        "shipmentDate": "2026-04-30",
        "shippedQuantity": 0,
        "invoicedQuantity": 0,
        "invoiceQuantity": 0,
        "shipQuantity": 0,
        "itemVariantId": "00000000-0000-0000-0000-000000000000",
        "locationId": "00000000-0000-0000-0000-000000000000"
      }
    ]
  }
]
```
---

#### New Sales Invoices Created

New Sales Invoices Created trigger is used to fetch newly created sales invoice records from Business Central based on a specified time and limit.

##### Select Credentials and Action Events

<img src="/img/credentials/business-central/NWSLSINVCCRTD10.jpg" alt="Business Central New Sales Invoices Created - Select Credentials and Action Events" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Fetch Data Since | Specify the date and time to fetch new sales invoice records. (e.g., "01/05/2024 09:32") |
| Limit | Define the number of records to retrieve. (e.g., "10" or "1") |

:::note
Fetch Data Since is mandatory. Limit can be adjusted based on how many records you want to retrieve.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

:::note
The configuration fields are the same for all triggers - refer to the screenshot above.
:::

---

##### Result

```json
[
  {
    "@odata.etag": "W/\"JzE5OzQzMDQzOTYxMjA4OTAyNDMxOTUxOzAwOyc=\"",
    "id": "748010cf-1265-ef11-a673-6045bde80bc6",
    "number": "103219",
    "externalDocumentNumber": "",
    "invoiceDate": "2024-04-02",
    "postingDate": "2024-04-02",
    "dueDate": "2024-05-02",
    "promisedPayDate": "0001-01-01",
    "customerPurchaseOrderReference": "OPEN",
    "customerId": "e0dddcf8-b3d3-ee11-904f-6045bde9c6f5",
    "customerNumber": "10000",
    "customerName": "The Cannon Group PLC",
    "billToName": "The Cannon Group PLC",
    "billToCustomerId": "e0dddcf8-b3d3-ee11-904f-6045bde9c6f5",
    "billToCustomerNumber": "10000",
    "shipToName": "The Cannon Group PLC",
    "shipToContact": "Robert Townes",
    "sellToAddressLine1": "Station Road, 21",
    "sellToAddressLine2": "",
    "sellToCity": "New Delhi",
    "sellToCountry": "IN",
    "sellToState": "",
    "sellToPostCode": "110002",
    "billToAddressLine1": "Station Road, 21",
    "billToAddressLine2": "",
    "billToCity": "New Delhi",
    "billToCountry": "IN",
    "billToState": "",
    "billToPostCode": "110002",
    "shipToAddressLine1": "Station Road, 21",
    "shipToAddressLine2": "",
    "shipToCity": "New Delhi",
    "shipToCountry": "IN",
    "shipToState": "",
    "shipToPostCode": "110002",
    "currencyId": "00000000-0000-0000-0000-000000000000",
    "shortcutDimension1Code": "",
    "shortcutDimension2Code": "MEDIUM",
    "currencyCode": "USD",
    "orderId": "3ee2d404-b4d3-ee11-904f-6045bde9c6f5",
    "orderNumber": "101001",
    "paymentTermsId": "c2dbdcf8-b3d3-ee11-904f-6045bde9c6f5",
    "shipmentMethodId": "00000000-0000-0000-0000-000000000000",
    "salesperson": "JO",
    "disputeStatusId": "00000000-0000-0000-0000-000000000000",
    "disputeStatus": "",
    "pricesIncludeTax": false,
    "remainingAmount": 944400,
    "discountAmount": 0,
    "discountAppliedBeforeTax": true,
    "totalAmountExcludingTax": 755520,
    "totalTaxAmount": 188880,
    "totalAmountIncludingTax": 944400,
    "status": "Open",
    "lastModifiedDateTime": "2024-08-28T07:55:03.447Z",
    "phoneNumber": "",
    "email": "mr.andy.teal@contoso.com",
    "salesInvoiceLines": [
      {
        "@odata.etag": "W/\"JzE5OzYyNzAxMjg1MjU0NzYzMjY5NTExOzAwOyc=\"",
        "id": "6ef7bd1f-b4d3-ee11-904f-6045bde9c6f5",
        "documentId": "748010cf-1265-ef11-a673-6045bde80bc6",
        "sequence": 10000,
        "itemId": "fcdddcf8-b3d3-ee11-904f-6045bde9c6f5",
        "accountId": "00000000-0000-0000-0000-000000000000",
        "lineType": "Item",
        "lineObjectNumber": "1996-S",
        "description": "ATLANTA Whiteboard, base",
        "description2": "",
        "unitOfMeasureId": "62dedcf8-b3d3-ee11-904f-6045bde9c6f5",
        "unitOfMeasureCode": "PCS",
        "quantity": 12,
        "unitPrice": 62960,
        "discountAmount": 0,
        "discountPercent": 0,
        "discountAppliedBeforeTax": false,
        "amountExcludingTax": 755520,
        "taxCode": "STANDARD",
        "taxPercent": 25,
        "totalTaxAmount": 188880,
        "amountIncludingTax": 944400,
        "invoiceDiscountAllocation": 0,
        "netAmount": 755520,
        "netTaxAmount": 188880,
        "netAmountIncludingTax": 944400,
        "shipmentDate": "2024-04-02",
        "itemVariantId": "00000000-0000-0000-0000-000000000000",
        "locationId": "8bdcdcf8-b3d3-ee11-904f-6045bde9c6f5"
      }
    ]
  }
]
```
---

#### New Sales Shipments Created

New Sales Shipment Created trigger is used to fetch newly created sales shipment records from Business Central based on a specified time and limit.

##### Select Credentials and Action Events

<img src="/img/credentials/business-central/C-NWSLSSHPMNTCRTD11.jpg" alt="Business Central New Sales Shipment Created - Select Credentials and Action Events" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Fetch Data Since | Specify the date and time to fetch new sales shipment records. (e.g., "01/05/2024 09:32") |
| Limit | Define the number of records to retrieve. (e.g., "10" or "1") |

:::note
Fetch Data Since is mandatory. Limit can be adjusted based on how many records you want to retrieve.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

:::note
The configuration fields are the same for all triggers - refer to the screenshot above.
:::

---

##### Result

```json
[
  {
    "@odata.etag": "W/\"JzIwOzEyMDYyNjY2MTU1MTEyNjI4ODcyMTswMDsn\"",
    "id": "7ca10696-2765-ef11-a673-7c1e52326720",
    "number": "102217",
    "externalDocumentNumber": "1131",
    "invoiceDate": "2024-08-27",
    "postingDate": "2024-08-27",
    "dueDate": "2024-08-27",
    "customerPurchaseOrderReference": "",
    "customerId": "86ebeaf9-5664-ef11-a672-6045bde80bc6",
    "customerNumber": "C00080",
    "customerName": "Rakhaeeb Hosh",
    "billToCustomerId": "86ebeaf9-5664-ef11-a672-6045bde80bc6",
    "billToName": "Rakhaeeb Hosh",
    "billToCustomerNumber": "C00080",
    "shipToName": "Rakhaeeb Hosh",
    "shipToContact": "",
    "sellToAddressLine1": "10/7 park avenue",
    "sellToAddressLine2": "10/7 park avenue",
    "sellToCity": "Florida",
    "sellToCountry": "US",
    "sellToState": "",
    "sellToPostCode": "32008",
    "billToAddressLine1": "10/7 park avenue",
    "billToAddressLine2": "10/7 park avenue",
    "billToCity": "Florida",
    "billToCountry": "US",
    "billToState": "FL",
    "billToPostCode": "32008",
    "shipToAddressLine1": "10/7 park avenue",
    "shipToAddressLine2": "10/7 park avenue",
    "shipToCity": "Florida",
    "shipToCountry": "US",
    "shipToState": "FL",
    "shipToPostCode": "32008",
    "currencyCode": "USD",
    "orderNumber": "101005",
    "paymentTermsCode": "",
    "shipmentMethodCode": "",
    "salesperson": "",
    "pricesIncludeTax": false,
    "lastModifiedDateTime": "2024-08-28T10:23:46.64Z",
    "phoneNumber": "",
    "email": "hosh@yopmail.com",
    "customer": {
      "@odata.etag": "W/\"JzE5OzkzMjA3NTMyMTI5Mjk0NjQ1MDYxOzAwOyc=\"",
      "id": "86ebeaf9-5664-ef11-a672-6045bde80bc6",
      "number": "C00080",
      "displayName": "Rakhaeeb Hosh",
      "type": "Company",
      "addressLine1": "10/7 park avenue",
      "addressLine2": "10/7 park avenue",
      "city": "Florida",
      "state": "",
      "country": "US",
      "postalCode": "32008",
      "phoneNumber": "",
      "email": "hosh@yopmail.com",
      "website": "",
      "salespersonCode": "",
      "balanceDue": 9.17,
      "creditLimit": 0,
      "taxLiable": false,
      "taxAreaId": "84e0dcf8-b3d3-ee11-904f-6045bde9c6f5",
      "taxAreaDisplayName": "Domestic customers and vendors",
      "taxRegistrationNumber": "",
      "currencyId": "00000000-0000-0000-0000-000000000000",
      "currencyCode": "USD",
      "paymentTermsId": "00000000-0000-0000-0000-000000000000",
      "shipmentMethodId": "00000000-0000-0000-0000-000000000000",
      "paymentMethodId": "00000000-0000-0000-0000-000000000000",
      "blocked": "_x0020_",
      "lastModifiedDateTime": "2024-10-29T04:57:02.617Z"
    },
    "salesShipmentLines": [
      {
        "@odata.etag": "W/\"JzE5OzExODQ5MjUwMDcwMzMwOTM5MzAxOzAwOyc=\"",
        "id": "92cdfe9b-2765-ef11-a673-7c1e52326720",
        "documentId": "7ca10696-2765-ef11-a673-7c1e52326720",
        "documentNo": "102217",
        "sequence": 10000,
        "lineType": "Item",
        "lineObjectNumber": "GEL101",
        "description": "Pink Cap",
        "description2": "",
        "unitOfMeasureCode": "PCS",
        "unitPrice": 1.11,
        "quantity": 1,
        "discountPercent": 0,
        "taxPercent": 25,
        "shipmentDate": "2024-08-27"
      }
    ]
  }
]
```
---

  </TabItem>
  <TabItem value="actions" label="Actions">


## Actions

### Customer Action

#### Create a New Customer

Create a New Customer action is used to create a new customer record with personal and contact details.

##### Select Credentials and Action Events

<img src="/img/credentials/business-central/C-AC-CRTNWCSTMR1.jpg" alt="Business Central Create a New Customer - Select Credentials and Action Events" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Customer Number | Enter the unique customer number. (e.g., "DEMO-888") |
| Customer Name | Enter the customer name. (e.g., "Denna Josh") |
| Customer Type | Specify the customer type. (e.g., "Person") |
| Optional Fields | Additional customer details that can be configured. |
| Address Line 1 | Primary address line. (e.g., "Volks Colony") |
| Address Line 2 | Secondary address line. (e.g., "Near Cafe Valley Road") |
| City | City name. (e.g., "Hyderabad") |
| State | State code. (e.g., "TS") |
| Country | Country code. (e.g., "IN") |
| Postal Code | ZIP / Postal code. (e.g., "500036") |
| Phone Number | Contact number. (e.g., "7654890789") |
| Email | Customer email address. (e.g., "denna.josh3@yopmail.com") |
| Tax Liable | Specify tax applicability. (e.g., "True") |

:::note
Customer Number, Customer Name, and Customer Type are mandatory. Other fields are optional and can be configured based on requirements.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/business-central/C-AC-CRTNWCSTMR2.jpg" alt="Business Central Create a New Customer - Example Configuration" width="700" />
<img src="/img/credentials/business-central/C-AC-CRTNWCSTMR3.jpg" alt="Business Central Create a New Customer - Example Configuration" width="700" />

---

##### Result

```json
[
  {
    "@odata.context": "https://api.businesscentral.dynamics.com/v2.0/cba9a7a6-9a96-4d39-929f-d285ffa3b5b6/Production/api/v2.0/$metadata#companies(7ace90d9-b3d3-ee11-904f-6045bde9c6f5)/customers/$entity",
    "@odata.etag": "W/\"JzE5OzU5NjUxNjkwNTY5MTY0OTk1NTQxOzAwOyc=\"",
    "id": "a99e63e6-6b48-f111-a820-7ced8d9feb00",
    "number": "DEMO-888",
    "displayName": "Denna Josh",
    "type": "Person",
    "addressLine1": "Volks Colony",
    "addressLine2": "Near Cafe Valley Road",
    "city": "Hyderabad",
    "state": "TS",
    "country": "IN",
    "postalCode": "500036",
    "phoneNumber": "7654890789",
    "email": "denna.josh3@yopmail.com",
    "website": "",
    "salespersonCode": "",
    "balanceDue": 0,
    "creditLimit": 0,
    "taxLiable": true,
    "taxAreaId": "84e0dcf8-b3d3-ee11-904f-6045bde9c6f5",
    "taxAreaDisplayName": "Domestic customers and vendors",
    "taxRegistrationNumber": "",
    "currencyId": "00000000-0000-0000-0000-000000000000",
    "currencyCode": "USD",
    "paymentTermsId": "c9dbdcf8-b3d3-ee11-904f-6045bde9c6f5",
    "shipmentMethodId": "00000000-0000-0000-0000-000000000000",
    "paymentMethodId": "12e0dcf8-b3d3-ee11-904f-6045bde9c6f5",
    "blocked": "_x0020_",
    "lastModifiedDateTime": "2026-05-05T10:19:30.287Z"
  }
]
```
---

#### Update a Customer

Update a Customer action is used to modify an existing customer record with updated personal and contact details.

##### Select Credentials and Action Events

<img src="/img/credentials/business-central/C-AC-UPDTCSTMR4.jpg" alt="Business Central Update a Customer - Select Credentials and Action Events" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Customer Id (Identifier) | Enter the unique customer identifier. (e.g., "a99e63e6-6b48-f111-a820-7ced8d9feb00") |
| Customer Type | Specify the customer type. (e.g., "Company") |
| Optional Fields | Additional customer details that can be updated. |
| Customer Name | Customer name. (e.g., "Frankle") |
| Address Line 1 | Primary address line. (e.g., "Wave Rock Lane") |
| Address Line 2 | Secondary address line. (e.g., "Jubilee Hills") |
| City | City name. (e.g., "Hyderabad") |
| State | State code. (e.g., "TS") |
| Phone Number | Contact number. (e.g., "9098787653") |

:::note
Customer Id and Customer Type are mandatory. Only the provided optional fields will be updated.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/business-central/AC-UPDTCSTMR5.jpg" alt="Business Central Update a Customer - Example Configuration" width="700" />

---

##### Result

```json
[
  {
    "@odata.context": "https://api.businesscentral.dynamics.com/v2.0/cba9a7a6-9a96-4d39-929f-d285ffa3b5b6/Production/api/v2.0/$metadata#companies(7ace90d9-b3d3-ee11-904f-6045bde9c6f5)/customers/$entity",
    "@odata.etag": "W/\"JzE5Ozg5MzgyNTI4Nzc4ODUxNTQwMTkxOzAwOyc=\"",
    "id": "a99e63e6-6b48-f111-a820-7ced8d9feb00",
    "number": "DEMO-888",
    "displayName": "Frankle",
    "type": "Person",
    "addressLine1": "Wave Rock Lane",
    "addressLine2": "Jubilee Hills",
    "city": "Hyderabad",
    "state": "TS",
    "country": "IN",
    "postalCode": "500036",
    "phoneNumber": "9098787653",
    "email": "denna.josh3@yopmail.com",
    "website": "",
    "salespersonCode": "",
    "balanceDue": 0,
    "creditLimit": 0,
    "taxLiable": true,
    "taxAreaId": "84e0dcf8-b3d3-ee11-904f-6045bde9c6f5",
    "taxAreaDisplayName": "Domestic customers and vendors",
    "taxRegistrationNumber": "",
    "currencyId": "00000000-0000-0000-0000-000000000000",
    "currencyCode": "USD",
    "paymentTermsId": "c9dbdcf8-b3d3-ee11-904f-6045bde9c6f5",
    "shipmentMethodId": "00000000-0000-0000-0000-000000000000",
    "paymentMethodId": "12e0dcf8-b3d3-ee11-904f-6045bde9c6f5",
    "blocked": "_x0020_",
    "lastModifiedDateTime": "2026-05-05T11:08:01.993Z"
  }
]
```
---

#### Get Customer by Email

Get Customer by Email action is used to retrieve customer details using the customer's email address.

##### Select Credentials and Action Events

<img src="/img/credentials/business-central/C-AC-GTCSTMRbyEML6.jpg" alt="Business Central Get Customer by Email - Select Credentials and Action Events" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Email | Enter the customer email address. (e.g., "denna.josh3@yopmail.com") |

:::note
Email is mandatory. The action returns matching customer details for the specified email.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/business-central/AC-GTCSTMRbyEML7.jpg" alt="Business Central Get Customer by Email - Example Configuration" width="700" />

---

##### Result

```json
[
  {
    "@odata.etag": "W/\"JzE5Ozg5MzgyNTI4Nzc4ODUxNTQwMTkxOzAwOyc=\"",
    "id": "a99e63e6-6b48-f111-a820-7ced8d9feb00",
    "number": "DEMO-888",
    "displayName": "Frankle",
    "type": "Person",
    "addressLine1": "Wave Rock Lane",
    "addressLine2": "Jubilee Hills",
    "city": "Hyderabad",
    "state": "TS",
    "country": "IN",
    "postalCode": "500036",
    "phoneNumber": "9098787653",
    "email": "denna.josh3@yopmail.com",
    "website": "",
    "salespersonCode": "",
    "balanceDue": 0,
    "creditLimit": 0,
    "taxLiable": true,
    "taxAreaId": "84e0dcf8-b3d3-ee11-904f-6045bde9c6f5",
    "taxAreaDisplayName": "Domestic customers and vendors",
    "taxRegistrationNumber": "",
    "currencyId": "00000000-0000-0000-0000-000000000000",
    "currencyCode": "USD",
    "paymentTermsId": "c9dbdcf8-b3d3-ee11-904f-6045bde9c6f5",
    "shipmentMethodId": "00000000-0000-0000-0000-000000000000",
    "paymentMethodId": "12e0dcf8-b3d3-ee11-904f-6045bde9c6f5",
    "blocked": "_x0020_",
    "lastModifiedDateTime": "2026-05-05T11:08:01.993Z"
  }
]
```
---

### Contact Actions

#### Create a New Contact

Create a New Contact action is used to create a new contact record with personal, company, and communication details.

##### Select Credentials and Action Events

<img src="/img/credentials/business-central/C-AC-NWCMPNYCRTD9.jpg" alt="Business Central Create a New Contact - Select Credentials and Action Events" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Full Name | Enter the full name of the contact. (e.g., "Merrie Josh") |
| Optional Fields | Additional contact details that can be configured. |
| Contact Number | Primary contact number. (e.g., "8767890987") |
| Search Name | Short or searchable name. (e.g., "Merrie") |
| Company Name | Associated company name. (e.g., "Tech Co") |
| Address Line 1 | Primary address line. (e.g., "ICP Awfis 800") |
| Address Line 2 | Secondary address line. (e.g., "Jubilee Hills") |
| City | City name. (e.g., "Hyderabad") |
| State | State code. (e.g., "TS") |
| Country | Country code. (e.g., "IN") |
| Postal Code | ZIP / Postal code. (e.g., "500038") |
| Email | Contact email address. (e.g., "merrie.josh3@yopmail.com") |
| Phone Number | Phone number. (e.g., "7658903456") |
| Mobile Phone Number | Mobile number. (e.g., "8790987890") |
| Job Title | Contact job role. (e.g., "Sales Marketing") |
| Type | Contact type. (e.g., "Person") |

:::note
Full Name is mandatory. Other fields are optional and can be configured based on requirements.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/business-central/AC-NWCMPNYCRTD10.jpg" alt="Business Central Create a New Contact - Example Configuration" width="700" />
<img src="/img/credentials/business-central/AC-NWCMPNYCRTD11.jpg" alt="Business Central Create a New Contact - Example Configuration" width="700" />

---

##### Result

```json
[
  {
    "@odata.context": "https://api.businesscentral.dynamics.com/v2.0/cba9a7a6-9a96-4d39-929f-d285ffa3b5b6/Production/api/v2.0/$metadata#companies(7ace90d9-b3d3-ee11-904f-6045bde9c6f5)/contacts/$entity",
    "@odata.etag": "W/\"JzIwOzExODAyMDgyNzQ5ODc0OTI4MjcwMTswMDsn\"",
    "id": "27423461-7648-f111-a820-7ced8d9feb00",
    "number": "8767890987",
    "type": "Person",
    "displayName": "Merrie Josh",
    "jobTitle": "Sales Marketing",
    "companyNumber": "CT012194",
    "companyName": "AZTECH COMPANY",
    "contactBusinessRelation": "Customer",
    "addressLine1": "ICP Awfis 800",
    "addressLine2": "Jubilee Hills",
    "city": "Hyderabad",
    "state": "",
    "country": "IN",
    "postalCode": "500038",
    "phoneNumber": "7658903456",
    "mobilePhoneNumber": "8790987890",
    "email": "merrie.josh3@yopmail.com",
    "website": "",
    "searchName": "MERRIE",
    "privacyBlocked": false,
    "taxRegistrationNumber": "",
    "lastInteractionDate": "0001-01-01",
    "lastModifiedDateTime": "2026-05-05T11:34:36.21Z"
  }
]
```
---

#### Update a Contact

Update a Contact action is used to modify an existing contact record with updated personal, company, and communication details.

##### Select Credentials and Action Events

<img src="/img/credentials/business-central/C-AC-UPDTCONTCT21.jpg" alt="Business Central Update a Contact - Select Credentials and Action Events" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Contact Id (Identifier) | Enter the unique contact identifier. (e.g., "27423461-7648-f111-a820-7ced8d9feb00") |
| Optional Fields | Additional contact details that can be updated. |
| Full Name | Contact full name. (e.g., "Anne Josh") |
| Search Name | Short or searchable name. (e.g., "Anne") |
| Company Name | Associated company name. (e.g., "AZTECH COMPANY") |
| Address Line 1 | Primary address line. (e.g., "GAP Store") |
| Address Line 2 | Secondary address line. (e.g., "Road No 36, Jubilee") |
| City | City name. (e.g., "Hyderabad") |
| State | State name. (e.g., "Telangana") |
| Postal Code | ZIP / Postal code. (e.g., "500039") |
| Phone Number | Contact number. (e.g., "7898012321") |

:::note
Contact Id is mandatory. Only the provided optional fields will be updated.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/business-central/AC-UPDTCONTCT22.jpg" alt="Business Central Update a Contact - Example Configuration" width="700" />
<img src="/img/credentials/business-central/AC-UPDTCONTCT23.jpg" alt="Business Central Update a Contact - Example Configuration" width="700" />

---

##### Result

```json
[
  {
    "@odata.context": "https://api.businesscentral.dynamics.com/v2.0/cba9a7a6-9a96-4d39-929f-d285ffa3b5b6/Production/api/v2.0/$metadata#companies(7ace90d9-b3d3-ee11-904f-6045bde9c6f5)/contacts/$entity",
    "@odata.etag": "W/\"JzIwOzE3NzQxNzc3NjMyOTMwNzAzODYzMTswMDsn\"",
    "id": "27423461-7648-f111-a820-7ced8d9feb00",
    "number": "8767890987",
    "type": "Person",
    "displayName": "Anne Josh",
    "jobTitle": "Sales Marketing",
    "companyNumber": "CT012194",
    "companyName": "AZTECH COMPANY",
    "contactBusinessRelation": "Customer",
    "addressLine1": "GAP Store",
    "addressLine2": "Road No 36, Jubilee",
    "city": "Hyderabad",
    "state": "Telangana",
    "country": "",
    "postalCode": "500039",
    "phoneNumber": "7898012321",
    "mobilePhoneNumber": "8790987890",
    "email": "merrie.josh3@yopmail.com",
    "website": "",
    "searchName": "ANNE",
    "privacyBlocked": false,
    "taxRegistrationNumber": "",
    "lastInteractionDate": "0001-01-01",
    "lastModifiedDateTime": "2026-05-06T04:56:15.577Z"
  }
]
```
---

#### Get Contacts by Company Number

Get Contacts by Company Number action is used to retrieve contact records associated with a specific company using the company number.

##### Select Credentials and Action Events

<img src="/img/credentials/business-central/C-AC-GTCMPNYbyCMPNYID23.jpg" alt="Business Central Get Contacts by Company Number - Select Credentials and Action Events" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Company Number | Enter the unique company number. (e.g., "CT012194") |

:::note
Company Number is mandatory. The action returns all contacts linked to the specified company.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/business-central/AC-GTCMPNYbyCMPNYID24.jpg" alt="Business Central Get Contacts by Company Number - Example Configuration" width="700" />

---

##### Result

```json
[
  {
    "@odata.etag": "W/\"JzIwOzE3NzQxNzc3NjMyOTMwNzAzODYzMTswMDsn\"",
    "id": "27423461-7648-f111-a820-7ced8d9feb00",
    "number": "8767890987",
    "type": "Person",
    "displayName": "Anne Josh",
    "jobTitle": "Sales Marketing",
    "companyNumber": "CT012194",
    "companyName": "AZTECH COMPANY",
    "contactBusinessRelation": "Customer",
    "addressLine1": "GAP Store",
    "addressLine2": "Road No 36, Jubilee",
    "city": "Hyderabad",
    "state": "Telangana",
    "country": "",
    "postalCode": "500039",
    "phoneNumber": "7898012321",
    "mobilePhoneNumber": "8790987890",
    "email": "merrie.josh3@yopmail.com",
    "website": "",
    "searchName": "ANNE",
    "privacyBlocked": false,
    "taxRegistrationNumber": "",
    "lastInteractionDate": "0001-01-01",
    "lastModifiedDateTime": "2026-05-06T04:56:15.577Z"
  }
]
```
-----

#### Get Contacts by Contact Type

Get Contacts by Contact Type action is used to retrieve contact records based on the specified contact type.

##### Select Credentials and Action Events

<img src="/img/credentials/business-central/C-AC-GTCOMPANYbyCMPNYTYPE25.jpg" alt="Business Central Get Contacts by Contact Type - Select Credentials and Action Events" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Contact Type | Specify the contact type (Company or Person). (e.g., "Company") |
| Optional Fields | Additional parameters to filter results. |
| Limit | Define the number of records to retrieve. (e.g., "1") |

:::note
Contact Type is required to filter contacts. Limit can be used to restrict the number of records returned.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/business-central/AC-GTCOMPANYbyCMPNYTYPE26.jpg" alt="Business Central Get Contacts by Contact Type - Example Configuration" width="700" />

---

##### Result

```json
[
  {
    "@odata.etag": "W/\"JzIwOzEyODQ4MDc4MzEwNTI2ODQ0MzQwMTswMDsn\"",
    "id": "8abbb6a9-16c6-f011-8542-7c1e520ee21f",
    "number": "+918800766672",
    "type": "Company",
    "displayName": "SobhitaAggarwal",
    "jobTitle": "",
    "companyNumber": "+918800766672",
    "companyName": "SobhitaAggarwal",
    "contactBusinessRelation": "None",
    "addressLine1": "Street 1",
    "addressLine2": "",
    "city": "Kolkata",
    "state": "WB",
    "country": "IN",
    "postalCode": "700106",
    "phoneNumber": "+918800766672",
    "mobilePhoneNumber": "",
    "email": "aggrawalsobhita345@yopmail.com",
    "website": "",
    "searchName": "SOBHITAAGGARWAL",
    "privacyBlocked": false,
    "taxRegistrationNumber": "",
    "lastInteractionDate": "0001-01-01",
    "lastModifiedDateTime": "2025-11-20T13:41:50.28Z"
  }
]
```
---

#### Get Company Number by Company Name

Get Company Number by Company Name action is used to retrieve the company number using the company name.

##### Select Credentials and Action Events

<img src="/img/credentials/business-central/C-AC-GTCMPNYNUMbyCMPNYNAM26.jpg" alt="Business Central Get Company Number by Company Name - Select Credentials and Action Events" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Company Name | Enter the company name. (e.g., "AZTECH COMPANY") |

:::note
Company Name is mandatory. The action returns the corresponding company number for the specified company.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/business-central/AC-GTCMPNYbyCMPNYNME27.jpg" alt="Business Central Get Company Number by Company Name - Example Configuration" width="700" />

---

##### Result

```json
[
  {
    "@odata.etag": "W/\"JzE5OzI3Mzk1NjU2NTk4MTU3MTUwNjYxOzAwOyc=\"",
    "id": "78878068-7577-f011-8eef-6045bdadacc5",
    "number": "CT012194",
    "type": "Company",
    "displayName": "AZTECH COMPANY",
    "jobTitle": "",
    "companyNumber": "CT012194",
    "companyName": "AZTECH COMPANY",
    "contactBusinessRelation": "Customer",
    "addressLine1": "",
    "addressLine2": "",
    "city": "NewTown",
    "state": "",
    "country": "",
    "postalCode": "700106",
    "phoneNumber": "+917008088082",
    "mobilePhoneNumber": "",
    "email": "",
    "website": "",
    "searchName": "AZTECH COMPANY",
    "privacyBlocked": false,
    "taxRegistrationNumber": "",
    "lastInteractionDate": "0001-01-01",
    "lastModifiedDateTime": "2025-08-12T12:11:03.21Z"
  }
]
```
---

### Item Actions

#### Create a New Item

Create a New Item action is used to create a new inventory item with pricing, unit, and posting group details.

##### Select Credentials and Action Events

<img src="/img/credentials/business-central/C-AC-CRTNWITM28.jpg" alt="Business Central Create a New Item - Select Credentials and Action Events" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Item Number | Enter the unique item identifier. (e.g., "NAYASA") |
| Display Name | Enter the primary display name of the item. (e.g., "ITSLLTLAPTOP") |
| Item Type | Specify the item type. (e.g., "Inventory") |
| Unit Price | Enter the unit price of the item. (e.g., "25000") |
| Optional Fields | Additional item details that can be configured. |
| Display Name 2 | Secondary display name. (e.g., "LAPTOP") |
| Base Unit Of Measure Code | Unit of measure. (e.g., "PCS") |
| General Product Posting Group Code | Posting group for sales. (e.g., "RETAIL") |
| Inventory Posting Group Code | Inventory classification group. (e.g., "RESALE") |

:::note
Item Number, Display Name, Item Type, and Unit Price are mandatory. Other fields are optional and can be configured based on requirements.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/business-central/AC-CRTNWITM29.jpg" alt="Business Central Create a New Item - Example Configuration" width="700" />
<img src="/img/credentials/business-central/AC-CRTNWITM30.jpg" alt="Business Central Create a New Item - Example Configuration" width="700" />

---

##### Result

```json
[
  {
    "@odata.context": "https://api.businesscentral.dynamics.com/v2.0/cba9a7a6-9a96-4d39-929f-d285ffa3b5b6/Production/api/v2.0/$metadata#companies(7ace90d9-b3d3-ee11-904f-6045bde9c6f5)/items/$entity",
    "@odata.etag": "W/\"JzIwOzEwMDgwMjY5NTM0Njk4MDcxMTA5MTswMDsn\"",
    "id": "8495d7dc-2949-f111-a820-6045bdad25d1",
    "number": "NAYASA",
    "displayName": "ITSLLTLAPTOP",
    "displayName2": "LAPTOP",
    "type": "Inventory",
    "itemCategoryId": "00000000-0000-0000-0000-000000000000",
    "itemCategoryCode": "",
    "blocked": false,
    "gtin": "",
    "inventory": 0,
    "unitPrice": 25000,
    "priceIncludesTax": false,
    "unitCost": 0,
    "taxGroupId": "00000000-0000-0000-0000-000000000000",
    "taxGroupCode": "",
    "baseUnitOfMeasureId": "62dedcf8-b3d3-ee11-904f-6045bde9c6f5",
    "baseUnitOfMeasureCode": "PCS",
    "generalProductPostingGroupId": "f3dfdcf8-b3d3-ee11-904f-6045bde9c6f5",
    "generalProductPostingGroupCode": "RETAIL",
    "inventoryPostingGroupId": "51dedcf8-b3d3-ee11-904f-6045bde9c6f5",
    "inventoryPostingGroupCode": "RESALE",
    "lastModifiedDateTime": "2026-05-06T08:59:26.46Z"
  }
]
```
---

#### Update an Existing Item

Update an Existing Item action is used to modify an existing inventory item with updated details such as name, type, pricing, and tax configuration.

##### Select Credentials and Action Events

<img src="/img/credentials/business-central/C-AC-UPDTITM31.jpg" alt="Business Central Update an Existing Item - Select Credentials and Action Events" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Item Id (Identifier) | Enter the unique item identifier. (e.g., "8495d7dc-2949-f111-a820-6045bdad25d1") |
| Optional Fields | Additional item details that can be updated. |
| Item Number | Unique item number. (e.g., "NAYASAAA") |
| Display Name | Item display name. (e.g., "Fuelup-Water bottle") |
| Item Type | Specify the item type. (e.g., "Inventory") |
| Unit Price | Enter the updated unit price. (e.g., "30000") |
| Price Includes Tax | Specify whether price includes tax. (e.g., "True") |

:::note
Item Id is mandatory. Only the provided optional fields will be updated.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/business-central/AC-UPDTITM32.jpg" alt="Business Central Update an Existing Item - Example Configuration" width="700" />

---

##### Result

```json
[
  {
    "@odata.context": "https://api.businesscentral.dynamics.com/v2.0/cba9a7a6-9a96-4d39-929f-d285ffa3b5b6/Production/api/v2.0/$metadata#companies(7ace90d9-b3d3-ee11-904f-6045bde9c6f5)/items/$entity",
    "@odata.etag": "W/\"JzE5OzY4MzE0NTY1MzU4NjIxNzkwNTUxOzAwOyc=\"",
    "id": "8495d7dc-2949-f111-a820-6045bdad25d1",
    "number": "NAYASAAA",
    "displayName": "Fuelup-Water bottle",
    "displayName2": "LAPTOP",
    "type": "Inventory",
    "itemCategoryId": "00000000-0000-0000-0000-000000000000",
    "itemCategoryCode": "",
    "blocked": false,
    "gtin": "",
    "inventory": 0,
    "unitPrice": 30000,
    "priceIncludesTax": true,
    "unitCost": 0,
    "taxGroupId": "00000000-0000-0000-0000-000000000000",
    "taxGroupCode": "",
    "baseUnitOfMeasureId": "62dedcf8-b3d3-ee11-904f-6045bde9c6f5",
    "baseUnitOfMeasureCode": "PCS",
    "generalProductPostingGroupId": "f3dfdcf8-b3d3-ee11-904f-6045bde9c6f5",
    "generalProductPostingGroupCode": "RETAIL",
    "inventoryPostingGroupId": "51dedcf8-b3d3-ee11-904f-6045bde9c6f5",
    "inventoryPostingGroupCode": "RESALE",
    "lastModifiedDateTime": "2026-05-06T09:08:10.327Z"
  }
]
```
----

### Opportunity Actions

#### Create a New Opportunity

Create a New Opportunity action is used to create a new sales opportunity with contact, description, and salesperson details.

##### Select Credentials and Action Events

<img src="/img/credentials/business-central/C-AC-CRTNWOPP33.jpg" alt="Business Central Create a New Opportunity - Select Credentials and Action Events" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Opportunity Number | Enter the unique opportunity identifier. (e.g., "DemoQuote") |
| Optional Fields | Additional opportunity details that can be configured. |
| Contact Number | Enter the associated contact number. (e.g., "CT012194") |
| Description | Provide details about the opportunity. (e.g., "Demo Purpose Quote") |
| Salesperson Code | Enter the salesperson code. (e.g., "BC") |

:::note
Opportunity Number is required. Other fields are optional and can be configured based on business requirements.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/business-central/AC-CRTNWOPP34.jpg" alt="Business Central Create a New Opportunity - Example Configuration" width="700" />

---

##### Result

```json
[
  {
    "@odata.context": "https://api.businesscentral.dynamics.com/v2.0/cba9a7a6-9a96-4d39-929f-d285ffa3b5b6/Production/api/v2.0/$metadata#companies(7ace90d9-b3d3-ee11-904f-6045bde9c6f5)/opportunities/$entity",
    "@odata.etag": "W/\"JzE5OzE1NDgxMDA2NDY5MTYwOTA3NTYxOzAwOyc=\"",
    "id": "6acf6f7f-2c49-f111-a820-7ced8d9feb00",
    "number": "DEMOQUOTE1",
    "contactNumber": "CT012194",
    "contactName": "AZTECH COMPANY",
    "contactCompanyName": "AZTECH COMPANY",
    "salespersonCode": "BC",
    "description": "Demo Purpose Quote",
    "status": "Not_x0020_Started",
    "closed": false,
    "creationDate": "2026-05-06",
    "dateClosed": "0001-01-01",
    "calculatedCurrentValue": 0,
    "chancesOfSuccessPrc": 0,
    "completedPrc": 0,
    "estimatedClosingDate": "0001-01-01",
    "estimatedValue": 0,
    "systemCreatedAt": "2026-05-06T09:18:15.537Z",
    "lastModifiedDateTime": "2026-05-06T09:18:15.537Z"
  }
]
```
---

### Sales Quote Actions

#### Create a New Sales Quote

Create a New Sales Quote action is used to create a sales quotation for a customer with item details, pricing, and shipping information.

##### Select Credentials and Action Events

<img src="/img/credentials/business-central/C-AC-CRTNWSLSQUTE35.jpg" alt="Business Central Create a New Sales Quote - Select Credentials and Action Events" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Document Date | Enter the document date. (e.g., "2026-05-06") |
| Customer Number | Enter the customer number. (e.g., "DEMO-888") |
| Sales Quote Lines | Add one or more line items for the quote. |
| Line Type | Specify the line type. (e.g., "Item") |
| Line Item No (SKU) | Enter the item number or SKU. (e.g., "NAYASAAA") |
| Unit Price | Enter the price per unit. (e.g., "30000") |
| Quantity | Enter the quantity. (e.g., "10") |
| Optional Fields | Additional quote details that can be configured. |
| Unit of Measure Code | Unit of measure. (e.g., "PCS") |
| Discount Percent | Discount percentage. (e.g., "5") |
| Posting Date | Enter the posting date. (e.g., "2026-05-06") |
| Due Date | Enter the due date. (e.g., "2026-05-16") |
| External Document Number | External reference number. (e.g., "DOC123") |
| Ship To Name | Shipping recipient name. (e.g., "SHIPADD") |
| Ship To Contact | Contact number. (e.g., "8767890987") |
| Ship To Address Line 1 | Primary shipping address. (e.g., "GAP Store") |
| Ship To Address Line 2 | Secondary shipping address. (e.g., "Road No 36, Jubilee") |
| Ship To City | City name. (e.g., "Hyderabad") |
| Ship To Country Code | Country code. (e.g., "IN") |
| Ship To State Code | State code. (e.g., "TS") |
| Ship To Post Code | Postal code. (e.g., "500038") |

:::note
Document Date, Customer Number, Line Type, Line Item No, Unit Price, and Quantity are mandatory. Additional fields can be configured as needed.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/business-central/AC-CRTNWSLSQUTE36.jpg" alt="Business Central Create a New Sales Quote - Example Configuration" width="700" />
<img src="/img/credentials/business-central/AC-CRTNWSLSQUTE37.jpg" alt="Business Central Create a New Sales Quote - Example Configuration" width="700" />
<img src="/img/credentials/business-central/AC-CRTNWSLSQUTE38.jpg" alt="Business Central Create a New Sales Quote - Example Configuration" width="700" />
<img src="/img/credentials/business-central/AC-CRTNWSLSQUTE39.jpg" alt="Business Central Create a New Sales Quote - Example Configuration" width="700" />

---

##### Result

```json
[
  {
    "@odata.context": "https://api.businesscentral.dynamics.com/v2.0/cba9a7a6-9a96-4d39-929f-d285ffa3b5b6/Production/api/v2.0/$metadata#companies(7ace90d9-b3d3-ee11-904f-6045bde9c6f5)/salesQuotes/$entity",
    "@odata.etag": "W/\"JzIwOzE4MTYzOTU2OTAyNzg2NTExMjYzMTswMDsn\"",
    "id": "df1cc837-2e49-f111-a820-6045bdad25d1",
    "number": "1300",
    "externalDocumentNumber": "DOC123",
    "documentDate": "2026-05-06",
    "postingDate": "2026-05-06",
    "dueDate": "2026-05-16",
    "customerId": "a99e63e6-6b48-f111-a820-7ced8d9feb00",
    "customerNumber": "DEMO-888",
    "customerName": "Frankle",
    "billToName": "Frankle",
    "billToCustomerId": "a99e63e6-6b48-f111-a820-7ced8d9feb00",
    "billToCustomerNumber": "DEMO-888",
    "shipToName": "SHIPADD",
    "shipToContact": "8767890987",
    "sellToAddressLine1": "Wave Rock Lane",
    "sellToAddressLine2": "Jubilee Hills",
    "sellToCity": "Hyderabad",
    "sellToCountry": "IN",
    "sellToState": "TS",
    "sellToPostCode": "500036",
    "billToAddressLine1": "Wave Rock Lane",
    "billToAddressLine2": "Jubilee Hills",
    "billToCity": "Hyderabad",
    "billToCountry": "IN",
    "billToState": "TS",
    "billToPostCode": "500036",
    "shipToAddressLine1": "GAP Store",
    "shipToAddressLine2": "Road No 36, Jubilee",
    "shipToCity": "Hyderabad",
    "shipToCountry": "IN",
    "shipToState": "",
    "shipToPostCode": "500038",
    "shortcutDimension1Code": "",
    "shortcutDimension2Code": "",
    "currencyId": "00000000-0000-0000-0000-000000000000",
    "currencyCode": "USD",
    "paymentTermsId": "c9dbdcf8-b3d3-ee11-904f-6045bde9c6f5",
    "shipmentMethodId": "00000000-0000-0000-0000-000000000000",
    "salesperson": "",
    "discountAmount": 0,
    "totalAmountExcludingTax": 285000,
    "totalTaxAmount": 0,
    "totalAmountIncludingTax": 285000,
    "status": "Draft",
    "sentDate": "0001-01-01T00:00:00Z",
    "validUntilDate": "0001-01-01",
    "acceptedDate": "0001-01-01",
    "lastModifiedDateTime": "2026-05-06T09:30:30.08Z",
    "phoneNumber": "9098787653",
    "email": "denna.josh3@yopmail.com"
  }
]
```
---

### Sales Order Actions

#### Create a New Sales Order

Create a New Sales Order action is used to create a sales order for a customer with item details, pricing, discounts, and shipping information.

##### Select Credentials and Action Events

<img src="/img/credentials/business-central/C-AC-CRTNWSLSORD40.jpg" alt="Business Central Create a New Sales Order - Select Credentials and Action Events" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Sales Order Number | Enter the unique sales order number. (e.g., "SLSORDNUM1") |
| Order Date | Enter the order date. (e.g., "2026-05-06") |
| Customer Number | Enter the customer number. (e.g., "DEMO-888") |
| Sales Order Lines | Add one or more line items for the order. |
| Line Item No (SKU) | Enter the item number or SKU. (e.g., "NAYASAAA") |
| Line Type | Specify the line type. (e.g., "Item") |
| Quantity | Enter the quantity. (e.g., "15") |
| Unit Price | Enter the price per unit. (e.g., "30000") |
| Optional Fields | Additional order and line details that can be configured. |
| Description | Provide item/order description. (e.g., "Demo Purpose Order") |
| Unit of Measure Code | Unit of measure. (e.g., "PCS") |
| Discount Amount | Discount value applied. (e.g., "100") |
| Item Id | Internal item identifier. (e.g., "8495d7dc-2949-f111-a820-6045bdad25d1") |
| Unit of Measure ID | Internal UOM identifier. (e.g., "62dedcf8-b3d3-ee11-904f-6045bde9c6f5") |
| External Document Number | External reference number. (e.g., "SLSORD1") |
| Posting Date | Enter the posting date. (e.g., "2026-05-06") |
| Salesperson Code | Salesperson identifier. (e.g., "BC") |
| Requested Delivery Date | Expected delivery date. (e.g., "2026-05-19") |
| Phone Number | Customer contact number. (e.g., "6789098767") |
| Email | Customer email address. (e.g., "denna.josh3@yopmail.com") |
| Ship To Name | Shipping recipient name. (e.g., "SHIPADD") |
| Ship To Contact | Shipping contact number. (e.g., "8767890987") |
| Ship To Address Line 1 | Primary shipping address. (e.g., "GAP Store") |
| Ship To Address Line 2 | Secondary shipping address. (e.g., "Road No 36, Jubilee") |
| Ship To City | City name. (e.g., "Hyderabad") |
| Ship To Country Code | Country code. (e.g., "IN") |
| Ship To State Code | State code. (e.g., "TS") |
| Ship To Post Code | Postal code. (e.g., "500037") |

:::note
Sales Order Number, Order Date, Customer Number, Line Item No, Line Type, Quantity, and Unit Price are mandatory. Other fields are optional and can be configured as needed.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/business-central/AC-CRTNWSLSORD41.jpg" alt="Business Central Create a New Sales Order - Example Configuration" width="700" />
<img src="/img/credentials/business-central/AC-CRTNWSLSORD42.jpg" alt="Business Central Create a New Sales Order - Example Configuration" width="700" />
<img src="/img/credentials/business-central/AC-CRTNWSLSORD43.jpg" alt="Business Central Create a New Sales Order - Example Configuration" width="700" />
<img src="/img/credentials/business-central/AC-CRTNWSLSORD44.jpg" alt="Business Central Create a New Sales Order - Example Configuration" width="700" />
<img src="/img/credentials/business-central/AC-CRTNWSLSORD45.jpg" alt="Business Central Create a New Sales Order - Example Configuration" width="700" />

---

##### Result

```json
[
  {
    "@odata.context": "https://api.businesscentral.dynamics.com/v2.0/cba9a7a6-9a96-4d39-929f-d285ffa3b5b6/Production/api/v2.0/$metadata#companies(7ace90d9-b3d3-ee11-904f-6045bde9c6f5)/salesOrders/$entity",
    "@odata.etag": "W/\"JzIwOzE1NjM4OTMzMjExMDE0MTczMTk3MTswMDsn\"",
    "id": "bebf4f64-3049-f111-a820-7ced8d9feb00",
    "number": "SLSORDNUM1",
    "externalDocumentNumber": "SLSORD1",
    "orderDate": "2026-05-06",
    "postingDate": "2026-05-06",
    "customerId": "a99e63e6-6b48-f111-a820-7ced8d9feb00",
    "customerNumber": "DEMO-888",
    "customerName": "Frankle",
    "billToName": "Frankle",
    "billToCustomerId": "a99e63e6-6b48-f111-a820-7ced8d9feb00",
    "billToCustomerNumber": "DEMO-888",
    "shipToName": "SHIPADD",
    "shipToContact": "8767890987",
    "sellToAddressLine1": "Wave Rock Lane",
    "sellToAddressLine2": "Jubilee Hills",
    "sellToCity": "Hyderabad",
    "sellToCountry": "IN",
    "sellToState": "TS",
    "sellToPostCode": "500036",
    "billToAddressLine1": "Wave Rock Lane",
    "billToAddressLine2": "Jubilee Hills",
    "billToCity": "Hyderabad",
    "billToCountry": "IN",
    "billToState": "TS",
    "billToPostCode": "500036",
    "shipToAddressLine1": "GAP Store",
    "shipToAddressLine2": "Road No 36, Jubilee",
    "shipToCity": "Hyderabad",
    "shipToCountry": "IN",
    "shipToState": "TS",
    "shipToPostCode": "500037",
    "shortcutDimension1Code": "",
    "shortcutDimension2Code": "",
    "currencyId": "00000000-0000-0000-0000-000000000000",
    "currencyCode": "USD",
    "pricesIncludeTax": true,
    "paymentTermsId": "c9dbdcf8-b3d3-ee11-904f-6045bde9c6f5",
    "shipmentMethodId": "00000000-0000-0000-0000-000000000000",
    "salesperson": "BC",
    "partialShipping": true,
    "requestedDeliveryDate": "2026-05-19",
    "discountAmount": 0,
    "discountAppliedBeforeTax": false,
    "totalAmountExcludingTax": 449900,
    "totalTaxAmount": 0,
    "totalAmountIncludingTax": 449900,
    "fullyShipped": true,
    "status": "Draft",
    "lastModifiedDateTime": "2026-05-06T09:46:03.387Z",
    "phoneNumber": "6789098767",
    "email": "denna.josh3@yopmail.com"
  }
]
```
---

### Sales Invoice Actions

#### Create a New Sales Invoice

Create a New Sales Invoice action is used to generate a sales invoice for a customer with item details, pricing, and shipping information.

##### Select Credentials and Action Events

<img src="/img/credentials/business-central/C-AC-CRTSLSINVC46.jpg" alt="Business Central Create a New Sales Invoice - Select Credentials and Action Events" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Customer Number | Enter the customer number. (e.g., "DEMO-888") |
| Optional Fields | Additional invoice details that can be configured. |
| External Document Number | External reference number. (e.g., "SLSORD1") |
| Invoice Date | Enter the invoice date. (e.g., "2026-05-06") |
| Posting Date | Enter the posting date. (e.g., "2026-05-06") |
| Due Date | Enter the due date. (e.g., "2026-05-16") |
| Customer Purchase Order Reference | Customer PO reference. (e.g., "INVC1") |
| Ship To Name | Shipping recipient name. (e.g., "SHIPADD") |
| Ship To Contact | Contact number. (e.g., "8767890987") |
| Ship To Address Line 1 | Primary shipping address. (e.g., "GAP Store") |
| Ship To Address Line 2 | Secondary shipping address. (e.g., "Road No 36, Jubilee") |
| Ship To City | City name. (e.g., "Hyderabad") |
| Ship To Country Code | Country code. (e.g., "IN") |
| Ship To State Code | State code. (e.g., "TS") |
| Ship To Post Code | Postal code. (e.g., "500039") |
| Payment Terms ID (GUID) | Payment terms identifier. (e.g., "c9dbdcf8-b3d3-ee11-904f-6045bde9c6f5") |
| Shipment Method ID (GUID) | Shipment method identifier. (e.g., "00000000-0000-0000-0000-000000000000") |
| Salesperson Code | Salesperson identifier. (e.g., "BC") |
| Phone Number | Customer contact number. (e.g., "6789098767") |
| Email | Customer email address. (e.g., "denna.josh3@yopmail.com") |
| Sales Invoice Lines | Add one or more line items for the invoice. |
| Line Item No (SKU) | Enter the item number or SKU. (e.g., "NAYASAAA") |
| Line Type | Specify the line type. (e.g., "Item") |
| Quantity | Enter the quantity. (e.g., "15") |
| Unit Price | Enter the price per unit. (e.g., "30000") |
| Line Optional Fields | Additional line-level details. |
| Description | Item description. (e.g., "Demo Purpose Invoice") |
| Unit of Measure Code | Unit of measure. (e.g., "PCS") |
| Unit of Measure ID (GUID) | UOM identifier. (e.g., "62dedcf8-b3d3-ee11-904f-6045bde9c6f5") |
| Item ID (GUID) | Internal item identifier. (e.g., "8495d7dc-2949-f111-a820-6045bdad25d1") |

:::note
Customer Number, Line Item No, Line Type, Quantity, and Unit Price are mandatory. Other fields are optional and can be configured based on requirements.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/business-central/AC-CRTSLSINVC47.jpg" alt="Business Central Create a New Sales Invoice - Example Configuration" width="700" />
<img src="/img/credentials/business-central/AC-CRTSLSINVC48.jpg" alt="Business Central Create a New Sales Invoice - Example Configuration" width="700" />
<img src="/img/credentials/business-central/AC-CRTSLSINVC49.jpg" alt="Business Central Create a New Sales Invoice - Example Configuration" width="700" />
<img src="/img/credentials/business-central/AC-CRTSLSINVC50.jpg" alt="Business Central Create a New Sales Invoice - Example Configuration" width="700" />
<img src="/img/credentials/business-central/AC-CRTSLSINVC51.jpg" alt="Business Central Create a New Sales Invoice - Example Configuration" width="700" />

---

##### Result

```json
[
  {
    "@odata.context": "https://api.businesscentral.dynamics.com/v2.0/cba9a7a6-9a96-4d39-929f-d285ffa3b5b6/Production/api/v2.0/$metadata#companies(7ace90d9-b3d3-ee11-904f-6045bde9c6f5)/salesInvoices/$entity",
    "@odata.etag": "W/\"JzIwOzE2MDkzODIwNzUxNDQyNjczMDg1MTswMDsn\"",
    "id": "e7048e16-3349-f111-a820-6045bdad25d1",
    "number": "102580",
    "externalDocumentNumber": "SLSORD1",
    "invoiceDate": "2026-05-06",
    "postingDate": "2026-05-06",
    "dueDate": "2026-05-16",
    "promisedPayDate": "0001-01-01",
    "customerPurchaseOrderReference": "INVC1",
    "customerId": "a99e63e6-6b48-f111-a820-7ced8d9feb00",
    "customerNumber": "DEMO-888",
    "customerName": "Frankle",
    "billToName": "Frankle",
    "billToCustomerId": "a99e63e6-6b48-f111-a820-7ced8d9feb00",
    "billToCustomerNumber": "DEMO-888",
    "shipToName": "SHIPADD",
    "shipToContact": "8767890987",
    "sellToAddressLine1": "Wave Rock Lane",
    "sellToAddressLine2": "Jubilee Hills",
    "sellToCity": "Hyderabad",
    "sellToCountry": "IN",
    "sellToState": "TS",
    "sellToPostCode": "500036",
    "billToAddressLine1": "Wave Rock Lane",
    "billToAddressLine2": "Jubilee Hills",
    "billToCity": "Hyderabad",
    "billToCountry": "IN",
    "billToState": "TS",
    "billToPostCode": "500036",
    "shipToAddressLine1": "GAP Store",
    "shipToAddressLine2": "Road No 36, Jubilee",
    "shipToCity": "Hyderabad",
    "shipToCountry": "IN",
    "shipToState": "TS",
    "shipToPostCode": "500039",
    "currencyId": "00000000-0000-0000-0000-000000000000",
    "shortcutDimension1Code": "",
    "shortcutDimension2Code": "",
    "currencyCode": "USD",
    "orderId": "00000000-0000-0000-0000-000000000000",
    "orderNumber": "",
    "paymentTermsId": "c9dbdcf8-b3d3-ee11-904f-6045bde9c6f5",
    "shipmentMethodId": "00000000-0000-0000-0000-000000000000",
    "salesperson": "BC",
    "disputeStatusId": "00000000-0000-0000-0000-000000000000",
    "disputeStatus": "",
    "pricesIncludeTax": true,
    "remainingAmount": 450000,
    "discountAmount": 0,
    "discountAppliedBeforeTax": false,
    "totalAmountExcludingTax": 450000,
    "totalTaxAmount": 0,
    "totalAmountIncludingTax": 450000,
    "status": "Draft",
    "lastModifiedDateTime": "2026-05-06T10:05:24.083Z",
    "phoneNumber": "6789098767",
    "email": "denna.josh3@yopmail.com"
  }
]
```
----

### Sales InvoiceLine Actions

#### Get Sales Invoice Lines by SalesInvoice ID

Get Sales Invoice Lines by SalesInvoice ID action is used to retrieve line item details associated with a specific sales invoice.

##### Select Credentials and Action Events

<img src="/img/credentials/business-central/C-AC-GTSLSINVCLINbySLSINVID52.jpg" alt="Business Central Get Sales Invoice Lines by SalesInvoice ID - Select Credentials and Action Events" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| SalesInvoice ID | Enter the unique sales invoice identifier. (e.g., "e7048e16-3349-f111-a820-6045bdad25d1") |
| Optional Fields | Additional parameters to filter results. |
| Limit | Define the number of records to retrieve. (e.g., "1") |

:::note
SalesInvoice ID is mandatory. Limit can be used to restrict the number of invoice lines returned.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/business-central/AC-GTSLSINVCLINbySLSINVID53.jpg" alt="Business Central Get Sales Invoice Lines by SalesInvoice ID - Example Configuration" width="700" />

---

##### Result

```json
[
  {
    "@odata.etag": "W/\"JzIwOzE2MTI5Nzc2NDk0OTI0Mzg2MDI2MTswMDsn\"",
    "id": "e9048e16-3349-f111-a820-6045bdad25d1",
    "documentId": "e7048e16-3349-f111-a820-6045bdad25d1",
    "sequence": 10000,
    "itemId": "8495d7dc-2949-f111-a820-6045bdad25d1",
    "accountId": "00000000-0000-0000-0000-000000000000",
    "lineType": "Item",
    "lineObjectNumber": "NAYASAAA",
    "description": "Demo Purpose Invoice",
    "description2": "LAPTOP",
    "unitOfMeasureId": "62dedcf8-b3d3-ee11-904f-6045bde9c6f5",
    "unitOfMeasureCode": "PCS",
    "quantity": 15,
    "unitPrice": 30000,
    "discountAmount": 0,
    "discountPercent": 0,
    "discountAppliedBeforeTax": false,
    "amountExcludingTax": 450000,
    "taxCode": "STANDARD",
    "taxPercent": 0,
    "totalTaxAmount": 0,
    "amountIncludingTax": 450000,
    "invoiceDiscountAllocation": 0,
    "netAmount": 450000,
    "netTaxAmount": 0,
    "netAmountIncludingTax": 450000,
    "shipmentDate": "2026-05-06",
    "itemVariantId": "00000000-0000-0000-0000-000000000000",
    "locationId": "00000000-0000-0000-0000-000000000000"
  }
]
```
---

### Generic Actions

#### Search Records

Search Records action is used to retrieve records from a selected object based on specified filter conditions.

##### Select Credentials and Action Events

<img src="/img/credentials/business-central/C-AC-SRCHRCRDS54.jpg" alt="Business Central Search Records - Select Credentials and Action Events" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Object Name | Select the object from the dropdown. (e.g., "Customers") |
| Filter Value | Enter the filter condition to search records. (e.g., "number eq 'DEMO-888'") |
| Limit of Records | Define the number of records to retrieve. (e.g., "1") |

:::note
Object Name, Filter Value, and Limit of Records are mandatory. Ensure the filter condition follows the correct query format.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/business-central/AC-SRCHRCRDS55.jpg" alt="Business Central Search Records - Example Configuration" width="700" />

---

##### Result

```json
[
  {
    "@odata.etag": "W/\"JzE5Ozg5MzgyNTI4Nzc4ODUxNTQwMTkxOzAwOyc=\"",
    "id": "a99e63e6-6b48-f111-a820-7ced8d9feb00",
    "number": "DEMO-888",
    "displayName": "Frankle",
    "type": "Person",
    "addressLine1": "Wave Rock Lane",
    "addressLine2": "Jubilee Hills",
    "city": "Hyderabad",
    "state": "TS",
    "country": "IN",
    "postalCode": "500036",
    "phoneNumber": "9098787653",
    "email": "denna.josh3@yopmail.com",
    "website": "",
    "salespersonCode": "",
    "balanceDue": 0,
    "creditLimit": 0,
    "taxLiable": true,
    "taxAreaId": "84e0dcf8-b3d3-ee11-904f-6045bde9c6f5",
    "taxAreaDisplayName": "Domestic customers and vendors",
    "taxRegistrationNumber": "",
    "currencyId": "00000000-0000-0000-0000-000000000000",
    "currencyCode": "USD",
    "paymentTermsId": "c9dbdcf8-b3d3-ee11-904f-6045bde9c6f5",
    "shipmentMethodId": "00000000-0000-0000-0000-000000000000",
    "paymentMethodId": "12e0dcf8-b3d3-ee11-904f-6045bde9c6f5",
    "blocked": "_x0020_",
    "lastModifiedDateTime": "2026-05-05T11:08:01.993Z"
  }
]
```
---

  </TabItem>
</Tabs>

## Support

Need help? Contact our support team at [hello@appse.ai](mailto:hello@appse.ai)
