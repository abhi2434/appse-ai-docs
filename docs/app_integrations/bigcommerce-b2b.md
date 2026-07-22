---
title: "BigCommerce B2B"
slug: /app-integrations/bigcommerceb2b
description: Step-by-step guide to set up BigCommerce B2B credentials and automate wholesale workflows in appse ai.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

BigCommerce is a powerful e-commerce solution which also offers a dedicated B2B Edition with advanced features tailored for wholesale and business-to-business operations, enabling companies to manage complex pricing structures, customer groups, company accounts, and bulk ordering efficiently. appse ai lets you seamlessly connect with your BigCommerce B2B account to automate key processes such as order management, company management, quote synchronization, and invoice updates—helping streamline operations and enhance efficiency through intelligent, automated workflows.

---

## Setup Credential

Follow the steps below to quickly set up your credential.

### Required Fields

The following fields are required to authenticate your BigCommerce account:

| Field      | Description                                  |
| ---------- | -------------------------------------------- |
| Store Hash | Unique identifier for your BigCommerce store |
| API Token  | Token used to authenticate API requests      |

### Step-by-Step Guide

#### 1. Find Your Store Hash

- Log in to your BigCommerce admin dashboard.
- In your browser's address bar, you will see a URL like:  
   `https://store-abc123.mybigcommerce.com/manage/dashboard`

<img src="/img/credentials/bigcommerce-b2b/bigcommerce-cred-store-hash.png" alt="BigCommerce B2B store hash screen" width="700"/>

- The value after `store-` is your **Store Hash**.  
   Example: `abc123`

#### 2. Generate Your Access Token

- Navigate to **Settings** → **Store-level API accounts** → Click **Create API Account**.

<img src="/img/credentials/bigcommerce-b2b/bigcommerce-cred-access-token-1.png" alt="BigCommerce B2B store-level API accounts screen" width="700"/>

<img src="/img/credentials/bigcommerce-b2b/bigcommerce-cred-access-token-2.png" alt="BigCommerce B2B create API account screen" width="700"/>

- Enter a **Name** and select the required **OAuth scopes**.

Here is a recommended table for the required OAuth scopes:

| OAuth Scope                                  | Access    |
| -------------------------------------------- | --------- |
| Content                                      | None      |
| Checkout Content                             | None      |
| Customers                                    | modify    |
| Customers login                              | None      |
| Information & settings                       | None      |
| Marketing                                    | None      |
| Orders                                       | modify    |
| Order transactions                           | modify    |
| Create payments                              | create    |
| Get Payment methods                          | read-only |
| Stored Payment Instruments                   | None      |
| Products                                     | modify    |
| Themes                                       | None      |
| Carts                                        | None      |
| Checkouts                                    | None      |
| Sites & routes                               | None      |
| Channel settings                             | None      |
| Channel listings                             | None      |
| Storefront API tokens                        | None      |
| Storefront API customer impersonation tokens | None      |
| Store Locations                              | modify    |
| Store Inventory                              | modify    |
| Fulfillment Methods                          | modify    |
| Order Fulfillment                            | modify    |
| Metafield Ownership                          | None      |
| Metafields Access                            | full      |
| B2B Edition                                  | modify    |

:::info
Make sure the B2B Edition scope is checked. It is mandatory for accessing B2B features of BigCommerce.
:::

<img src="/img/credentials/bigcommerce-b2b/scope.png" alt="BigCommerce B2B API scope selection screen" width="700"/>

- Click **Save** to generate the token.

<img src="/img/credentials/bigcommerce-b2b/bigcommerce-cred-access-token-3.png" alt="BigCommerce B2B save API account screen" width="700"/>

- Copy and securely store the **Access Token** — it will not be shown again.

<img src="/img/credentials/bigcommerce-b2b/bigcommerce-cred-access-token-4.png" alt="BigCommerce B2B access token screen" width="700"/>

You will now have your **Access Token** for use within the appse.ai platform.

### Test Your Credential

Once both **Store Hash** and **API Token** are entered into the credential form, use the **Save** button to store your configurations.

<img src="/img/credentials/bigcommerce-b2b/save-cred.png" alt="BigCommerce B2B save credentials screen" width="700"/>

- If successful, your BigCommerce B2B integration will be ready to use.
- If unsuccessful, try the following solutions:
  - Ensure your Store Hash and token are correct and that the scopes are properly set.
  - Ensure that your API token has the required scope for the Customers endpoint. Missing or insufficient permissions may result in authentication or data access errors. Refer to the OAuth scope recommendation table above.

---

## Triggers and Actions

Every application has a pre-defined set of triggers and actions that allow users to perform application specific activities within the platform. Here is a list of all the actions and triggers available.

<Tabs>
  <TabItem value="triggers" label="Triggers">

### Triggers

#### New Companies Created

New Companies Created trigger is used to fetch newly created company records from BigCommerce B2B based on a specified time and limit.

##### Select Credentials and Action Events

<img src="/img/credentials/bigcommerce-b2b/C-NWCUSTMRCRTD1.jpg" alt="New Companies Created" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Fetch Data Since | Specify the date and time to fetch new company records. (e.g., "01/04/2024 05:58") |
| Limit | Define the number of records to retrieve. (e.g., "10" or "1") |

:::note
Fetch Data Since is mandatory. Limit can be adjusted based on how many records you want to retrieve.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/bigcommerce-b2b/AC-NWCUSTMRCRTD2.jpg" alt="New Companies Created Example" width="700" />

---

##### Result

```json
[
  {
    "companyId": 12477968,
    "companyName": "Great Buys",
    "bcGroupName": "Great Buys",
    "companyStatus": 1,
    "catalogId": null,
    "catalogName": null,
    "companyEmail": "admin@example.com",
    "companyPhone": "1234567890",
    "addressLine1": "512 Bluebonnet Lane",
    "addressLine2": "Building 2",
    "city": "Austin",
    "state": "Alabama",
    "country": "United States",
    "zipCode": "78726",
    "createdAt": 1775463807,
    "updatedAt": 1775733017,
    "uuid": "",
    "priceListAssign": [],
    "bcGroupId": 297,
    "parentCompany": {
      "id": null,
      "name": ""
    }
  }
]
```
---

#### New Users Created

New Users Created trigger is used to fetch newly created user records from BigCommerce B2B based on a specified time and limit.

##### Select Credentials and Action Events

<img src="/img/credentials/bigcommerce-b2b/C-NWUSRSCRTD3.jpg" alt="New Users Created" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Fetch Data Since | Specify the date and time to fetch new user records. (e.g., "01/04/2024 05:58") |
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
    "id": 8230776,
    "createdAt": 1722320861,
    "updatedAt": 1722320866,
    "firstName": "AEC TEST",
    "lastName": "AEC Last Name",
    "email": "aec.admin@aec.com",
    "phoneNumber": "",
    "role": 0,
    "customerId": 142,
    "companyId": 6077549,
    "uuid": "",
    "channelList": [
      {
        "channelId": 1,
        "channelName": "aec",
        "iconUrl": "https://s3.amazonaws.com/bc-channel-platform/channel-icons/bigcommerce.svg"
      }
    ],
    "companyRoleId": 12793,
    "companyRoleName": "Admin"
  }
]
```
---

#### New Quotes Created

New Quotes Created trigger is used to fetch newly created quote records from BigCommerce B2B based on a specified time and limit.

##### Select Credentials and Action Events

<img src="/img/credentials/bigcommerce-b2b/C-NWQOTSCRTD5.jpg" alt="New Quotes Created" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Fetch Data Since | Specify the date and time to fetch new quote records. (e.g., "01/04/2024 05:58") |
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
    "quoteId": 303871,
    "quoteNumber": "QN000001",
    "referenceNumber": "",
    "quoteTitle": "",
    "createdBy": "systems@appseconnect.com",
    "company": "AEC Company",
    "salesRep": "",
    "salesRepEmail": "systems@appseconnect.com",
    "createdAt": 1722340210,
    "updatedAt": 1722340210,
    "expiredAt": 1724993999,
    "subtotal": 449.46,
    "status": 5,
    "currency": {
      "token": "$",
      "location": "left",
      "currencyCode": "USD",
      "decimalToken": ".",
      "decimalPlaces": 2,
      "thousandsToken": ",",
      "currencyExchangeRate": "1.0000000000"
    },
    "bcOrderId": "",
    "orderId": "",
    "extraFields": [],
    "channelId": 1,
    "channelName": "aec"
  }
]
```
---

#### New B2B Orders Created

New B2B Orders Created trigger is used to fetch newly created B2B order records from BigCommerce B2B based on a specified time and limit.

##### Select Credentials and Action Events

<img src="/img/credentials/bigcommerce-b2b/C-NWB2BORDSCRTD6.jpg" alt="New B2B Orders Created" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Fetch Data Since | Specify the date and time to fetch new B2B order records. (e.g., "01/04/2024 05:58") |
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
    "id": 19653206,
    "bcOrderId": "400",
    "totalIncTax": 2115,
    "poNumber": null,
    "status": "Awaiting Payment",
    "customStatus": "Awaiting Payment",
    "cartId": null,
    "items": 10,
    "usdIncTax": 2115,
    "companyId": 7512336,
    "currencyCode": "USD",
    "money": {
      "currencyLocation": "left",
      "currencyToken": "$",
      "decimalToken": ".",
      "decimalPlaces": 2,
      "thousandsToken": ","
    },
    "statusCode": 7,
    "isArchived": false,
    "channelId": 1,
    "channelName": "aec",
    "createdAt": 1738317769,
    "updatedAt": 1752047976
  }
]
```
---

  </TabItem>
  <TabItem value="actions" label="Actions">

## Actions

### Company Actions

#### Create Company

Create Company action is used to create a new company in BigCommerce B2B with admin details and address information.

##### Select Credentials and Action Events

<img src="/img/credentials/bigcommerce-b2b/C-CRTNWCMPNY7.jpg" alt="Create Company" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Company Name | Enter the company name. (e.g., "VentoBen") |
| Company Phone | Enter the company contact number. (e.g., "9878987654") |
| Company Email | Enter the company email address. (e.g., "ventoben.co@yopmail.com") |
| Admin First Name | Enter the admin's first name. (e.g., "Gloryben") |
| Admin Last Name | Enter the admin's last name. (e.g., "Peterson") |
| Admin Email | Enter the admin email address. (e.g., "gloryben.peterson@yopmail.com") |
| Address Line 1 | Enter the primary address. (e.g., "Maxwell Road") |
| City | Enter the city name. (e.g., "Hyderabad") |
| Zip Code | Enter the postal code. (e.g., "500038") |
| State | Enter the state code. (e.g., "TS") |
| Country | Enter the country code. (e.g., "IN") |
| Optional Fields | Additional company details that can be configured. |
| Admin Phone Number | Admin contact number. (e.g., "7890987890") |
| Address Line 2 | Secondary address line. (e.g., "Near Walks Valley") |

:::note
All mandatory fields must be provided to successfully create a company. Optional fields can be added as needed.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/bigcommerce-b2b/AC-CRTNWCMPNY8.jpg" alt="Create Company example configuration 1" width="700" />
<img src="/img/credentials/bigcommerce-b2b/AC-CRTNWCMPNY9.jpg" alt="Create Company example configuration 2" width="700" />

---

##### Result

```json
[
  {
    "code": 200,
    "data": {
      "companyId": 12711142,
      "customerId": 692,
      "customerGroupId": 304
    },
    "meta": {
      "message": "SUCCESS"
    }
  }
]
```
---

#### Update Company

Update Company action is used to modify an existing company’s details in BigCommerce B2B including company information and address details.

##### Select Credentials and Action Events

<img src="/img/credentials/bigcommerce-b2b/C-UPDTCMPNY10.jpg" alt="Update Company" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Company Id | Enter the unique company identifier. (e.g., "12711142") |
| State | Enter the state code. (e.g., "TS") |
| Country | Enter the country code. (e.g., "IN") |
| Optional Fields | Additional company details that can be updated. |
| Company Name | Company name. (e.g., "Ventoben Co") |
| Company Phone | Company contact number. (e.g., "7654323456") |
| Company Email | Company email address. (e.g., "gloryben.peterson@yopmail.com") |
| Address Line 1 | Primary address. (e.g., "Wave Rock Street") |
| Address Line 2 | Secondary address. (e.g., "Near Chipotle School") |
| City | City name. (e.g., "Hyderabad") |
| Zip Code | Postal code. (e.g., "500039") |

:::note
Company Id, State, and Country are mandatory. Only the provided optional fields will be updated.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/bigcommerce-b2b/AC-UPDTCMPNY11.jpg" alt="Update Company example configuration 1" width="700" />
<img src="/img/credentials/bigcommerce-b2b/AC-UPDTCMPNY12.jpg" alt="Update Company example configuration 2" width="700" />

---

##### Result

```json
[
  {
    "code": 200,
    "data": {
      "companyId": 12711142
    },
    "meta": {
      "message": "SUCCESS"
    }
  }
]
```
---

#### Get Company by ID

Get Company by ID action is used to retrieve company details in BigCommerce B2B using the unique company identifier.

##### Select Credentials and Action Events

<img src="/img/credentials/bigcommerce-b2b/C-GTCMPNYbyID13.jpg" alt="Get Company by ID" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Company Id | Enter the unique company identifier. (e.g., "12711142") |

:::note
Company Id is mandatory. The action returns company details for the specified company.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/bigcommerce-b2b/AC-GTCMPNYbyID14.jpg" alt="Get Company by ID example configuration" width="700" />

---

##### Result

```json
[
  {
    "code": 200,
    "data": {
      "companyId": 12711142,
      "companyName": "Ventoben Co",
      "bcGroupName": "Ventoben Co",
      "companyStatus": 1,
      "catalogId": null,
      "catalogName": null,
      "companyEmail": "gloryben.peterson@yopmail.com",
      "companyPhone": "7654323456",
      "addressLine1": "Wave Rock Street",
      "addressLine2": "Near Chipotle School",
      "city": "Hyderabad",
      "state": "TS",
      "country": "India",
      "zipCode": "500039",
      "createdAt": 1779702441,
      "updatedAt": 1779702866,
      "uuid": "",
      "priceListAssign": [],
      "bcGroupId": 304,
      "extraFields": [],
      "parentCompany": {
        "id": null,
        "name": ""
      }
    },
    "meta": {
      "message": "SUCCESS"
    }
  }
]
```
---

### User Actions

#### Create User

Create User action is used to create a new user associated with a company in BigCommerce B2B with role and contact details.

##### Select Credentials and Action Events

<img src="/img/credentials/bigcommerce-b2b/C-CRTUSR15.jpg" alt="Create User" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| First Name | Enter the user's first name. (e.g., "Nicke") |
| Last Name | Enter the user's last name. (e.g., "Genwell") |
| Company Id | Enter the associated company identifier. (e.g., "12711142") |
| Email | Enter the user email address. (e.g., "nicke.genwell@yopmail.com") |
| Role | Assign the user role. (e.g., "Admin") |
| Optional Fields | Additional user details that can be configured. |
| Phone | Contact number of the user. (e.g., "8767801400") |

:::note
First Name, Last Name, Company Id, Email, and Role are mandatory. Optional fields can be added as required.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/bigcommerce-b2b/AC-CRTUSR16.jpg" alt="Create User example configuration" width="700" />

---

##### Result

```json
[
  {
    "code": 200,
    "data": {
      "userId": 18382574,
      "bcId": 693
    },
    "meta": {
      "message": "Success"
    }
  }
]
```
---

#### Update User

Update User action is used to modify an existing user’s details in BigCommerce B2B such as name, contact information, and role.

##### Select Credentials and Action Events

<img src="/img/credentials/bigcommerce-b2b/C-UPDTUSR17.jpg" alt="Update User" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| User Id (Identifier) | Enter the unique user identifier. (e.g., "18382574") |
| Optional Fields | Additional user details that can be updated. |
| First Name | User's first name. (e.g., "Nickee") |
| Last Name | User's last name. (e.g., "Genwellden") |
| Email | User email address. (e.g., "nicke.genwell@yopmail.com") |
| Phone | User contact number. (e.g., "7656789098") |
| Role | Assign or update user role. (e.g., "Manager") |

:::note
User Id is mandatory. Only the provided optional fields will be updated. Role can be set as Manager, Buyer, or Admin based on requirements.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/bigcommerce-b2b/AC-UPDTUSR18.jpg" alt="Update User example configuration" width="700" />

---

##### Result

```json
[
  {
    "code": 200,
    "data": {
      "id": 18382574,
      "createdAt": 1779703390,
      "updatedAt": 1779703656,
      "firstName": "Nickee",
      "lastName": "Genwellden",
      "email": "nicke.genwell@yopmail.com",
      "phoneNumber": "",
      "role": 2,
      "customerId": 693,
      "companyId": 12711142,
      "uuid": "",
      "extraFields": [],
      "channelList": [
        {
          "channelId": 754,
          "channelName": "aec",
          "bcChannelId": 1,
          "iconUrl": "https://s3.amazonaws.com/bc-channel-platform/channel-icons/bigcommerce.svg"
        }
      ],
      "companyRoleId": 12795,
      "companyRoleName": "Junior Buyer"
    },
    "meta": {
      "message": "Success"
    }
  }
]
```
---

#### Get User by Email

Get User by Email action is used to retrieve user details in BigCommerce B2B using the user's email address.

##### Select Credentials and Action Events

<img src="/img/credentials/bigcommerce-b2b/C-GTUSRbyEML19.jpg" alt="Get User by Email" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Email | Enter the user email address. (e.g., "nicke.genwell@yopmail.com") |

:::note
Email is mandatory. The action returns matching user details for the specified email.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/bigcommerce-b2b/AC-GTUSRbyEML20.jpg" alt="Get User by Email example configuration" width="700" />

---

##### Result

```json
[
  {
    "id": 18382574,
    "createdAt": 1779703390,
    "updatedAt": 1779703656,
    "firstName": "Nickee",
    "lastName": "Genwellden",
    "email": "nicke.genwell@yopmail.com",
    "phoneNumber": "",
    "role": 2,
    "customerId": 693,
    "companyId": 12711142,
    "uuid": "",
    "channelList": [
      {
        "channelId": 1,
        "channelName": "aec",
        "iconUrl": "https://s3.amazonaws.com/bc-channel-platform/channel-icons/bigcommerce.svg"
      }
    ],
    "companyRoleId": 12795,
    "companyRoleName": "Junior Buyer"
  }
]
```
---

#### Get User by ID

Get User by ID action is used to retrieve user details in BigCommerce B2B using the unique user identifier.

##### Select Credentials and Action Events

<img src="/img/credentials/bigcommerce-b2b/C-GTUSRbyUSRID21.jpg" alt="Get User by ID" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| User Id | Enter the unique user identifier. (e.g., "18382574") |

:::note
User Id is mandatory. The action returns user details for the specified user.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/bigcommerce-b2b/AC-GTUSRbyUSRID22.jpg" alt="Get User by ID example configuration" width="700" />

---

##### Result

```json
[
  {
    "code": 200,
    "data": {
      "id": 18382574,
      "createdAt": 1779703390,
      "updatedAt": 1779703656,
      "firstName": "Nickee",
      "lastName": "Genwellden",
      "email": "nicke.genwell@yopmail.com",
      "phoneNumber": "",
      "role": 2,
      "customerId": 693,
      "companyId": 12711142,
      "uuid": "",
      "extraFields": [],
      "channelList": [
        {
          "channelId": 1,
          "channelName": "aec",
          "iconUrl": "https://s3.amazonaws.com/bc-channel-platform/channel-icons/bigcommerce.svg"
        }
      ],
      "companyRoleId": 12795,
      "companyRoleName": "Junior Buyer"
    },
    "meta": {
      "message": "Success"
    }
  }
]
```
---

#### Get Company Users

Get Company Users action is used to retrieve all users associated with a specific company in BigCommerce B2B.

##### Select Credentials and Action Events

<img src="/img/credentials/bigcommerce-b2b/C-GTCMPNYUSR23.jpg" alt="Get Company Users" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Company Id | Enter the unique company identifier. (e.g., "12711142") |
| Optional Fields | Additional parameters to filter results. |
| Limit | Define the number of records to retrieve. (e.g., "2") |

:::note
Company Id is mandatory. Limit can be used to restrict the number of users returned.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/bigcommerce-b2b/AC-GTCMPNYUSR24.jpg" alt="Get Company Users example configuration" width="700" />

---

##### Result

```json
[
  {
    "id": 18382087,
    "createdAt": 1779702441,
    "updatedAt": 1779702466,
    "firstName": "Gloryben",
    "lastName": "Peterson",
    "email": "gloryben.peterson@yopmail.com",
    "phoneNumber": "7890987890",
    "role": 0,
    "customerId": 692,
    "companyId": 12711142,
    "uuid": "",
    "channelList": [
      {
        "channelId": 1,
        "channelName": "aec",
        "iconUrl": "https://s3.amazonaws.com/bc-channel-platform/channel-icons/bigcommerce.svg"
      }
    ],
    "companyRoleId": 12793,
    "companyRoleName": "Admin"
  },
  {
    "id": 18382574,
    "createdAt": 1779703390,
    "updatedAt": 1779703656,
    "firstName": "Nickee",
    "lastName": "Genwellden",
    "email": "nicke.genwell@yopmail.com",
    "phoneNumber": "",
    "role": 2,
    "customerId": 693,
    "companyId": 12711142,
    "uuid": "",
    "channelList": [
      {
        "channelId": 1,
        "channelName": "aec",
        "iconUrl": "https://s3.amazonaws.com/bc-channel-platform/channel-icons/bigcommerce.svg"
      }
    ],
    "companyRoleId": 12795,
    "companyRoleName": "Junior Buyer"
  }
]
```
---

### Company Address Action

#### Get Company Addresses

Get Company Addresses action is used to retrieve all addresses associated with a specific company in BigCommerce B2B.

##### Select Credentials and Action Events

<img src="/img/credentials/bigcommerce-b2b/C-GTCMPNYADDRSbyCMPNYID30.jpg" alt="Get Company Addresses" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Company Id | Enter the unique company identifier. (e.g., "12623321") |
| Optional Fields | Additional parameters to filter results. |
| Limit | Define the number of records to retrieve. (e.g., "50" or "1") |

:::note
Company Id is mandatory. Limit can be used to control the number of address records returned.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/bigcommerce-b2b/AC-GTCMPNYADDRSbyCMPNYID31.jpg" alt="Get Company Addresses example configuration" width="700" />

---

##### Result

```json
[
  {
    "addressId": 35205391,
    "firstName": "Martin",
    "lastName": "Josh",
    "phoneNumber": "07890981310",
    "zipCode": "500081",
    "addressLine1": "Cafe Niloufer Hitech City Penmaktha",
    "addressLine2": "TLR LUXURY RESIDENCY",
    "city": "Serilingampalle (M), Hyderabad",
    "stateName": "Telangana",
    "countryName": "India",
    "stateCode": "TS",
    "countryCode": "IN",
    "companyId": "12623321",
    "isBilling": true,
    "isShipping": true,
    "isDefaultBilling": false,
    "isDefaultShipping": false,
    "label": "",
    "externalId": null
  }
]
```
---


#### Update Company Address

Update Company Address action is used to modify an existing company address in BigCommerce B2B with updated contact and location details.

##### Select Credentials and Action Events

<img src="/img/credentials/bigcommerce-b2b/C-UPDTCMPNYADRS32.jpg" alt="Update Company Address" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Address Id | Enter the unique address identifier. (e.g., "35205391") |
| Optional Fields | Additional address details that can be updated. |
| Company Id | Enter the associated company identifier. (e.g., "12623321") |
| Address Line 1 | Primary address line. (e.g., "Necklace Road") |
| Address Line 2 | Secondary address line. (e.g., "Near Park Line") |
| City | City name. (e.g., "Hyderabad") |
| First Name | Contact person's first name. (e.g., "Nancy") |
| Last Name | Contact person's last name. (e.g., "Nan") |
| Zip Code | Postal code. (e.g., "515405") |
| Country Name | Country name. (e.g., "India") |
| Country Code | Country code. (e.g., "IN") |
| State Code | State code. (e.g., "AP") |
| State Name | State name. (e.g., "Andhra Pradesh") |
| Phone Number | Contact number. (e.g., "8987876766") |

:::note
Address Id is mandatory. Only the provided optional fields will be updated.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/bigcommerce-b2b/AC-UPDTCMPNYADRS33.jpg" alt="Update Company Address example configuration 1" width="700" />
<img src="/img/credentials/bigcommerce-b2b/AC-UPDTCMPNYADRS34.jpg" alt="Update Company Address example configuration 2" width="700" />

---

##### Result

```json
[
  {
    "code": 200,
    "data": {
      "addressId": 35205391
    },
    "meta": {
      "message": "Success"
    }
  }
]
```
---

### Order Action

#### Get Orders by BC Order Id

Get Orders by BC Order Id action is used to retrieve order details in BigCommerce B2B using the BigCommerce order identifier.

##### Select Credentials and Action Events

<img src="/img/credentials/bigcommerce-b2b/C-GTORDRbyBCODRID35.jpg" alt="Get Orders by BC Order Id" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| BC Order Id | Enter the BigCommerce order identifier. (e.g., "503") |

:::note
BC Order Id is mandatory. The action returns order details mapped with the specified BigCommerce order.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/bigcommerce-b2b/AC-GTORDRbyBCODRID36.jpg" alt="Get Orders by BC Order Id example configuration" width="700" />

---

##### Result

```json
[
  {
    "id": 29544152,
    "bcOrderId": "503",
    "totalIncTax": 1007.25,
    "poNumber": null,
    "status": "Awaiting Payment",
    "customStatus": "Awaiting Payment",
    "cartId": null,
    "items": 1,
    "usdIncTax": 1007.25,
    "companyId": 8565402,
    "currencyCode": "USD",
    "money": {
      "currencyLocation": "left",
      "currencyToken": "$",
      "decimalToken": ".",
      "decimalPlaces": 2,
      "thousandsToken": ","
    },
    "statusCode": 7,
    "isArchived": false,
    "channelId": 1,
    "channelName": "aec",
    "isInvoiceOrder": 0,
    "invoiceId": null,
    "invoiceNumber": null,
    "invoiceStatus": null,
    "extraInt1": null,
    "extraInt2": null,
    "extraInt3": null,
    "extraInt4": null,
    "extraInt5": null,
    "extraStr1": null,
    "extraStr2": null,
    "extraStr3": null,
    "extraStr4": null,
    "extraStr5": null,
    "extraText": null,
    "extraInfo": {},
    "extraFields": [],
    "createdAt": 1753355083,
    "updatedAt": 1753355098
  }
]
```
---

### Invoice Actions

#### Create Invoice

Create Invoice action is used to generate a new invoice for an existing order in BigCommerce B2B using the specified order ID.

##### Select Credentials and Action Events

<img src="/img/credentials/bigcommerce-b2b/C-CRTINVOICE.jpg" alt="Create Invoice - Select credentials" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Order Id | Specify the unique order ID for which the invoice should be created. (e.g., `29544152`) |

:::note
Order Id is a mandatory field and should contain a valid BigCommerce B2B order identifier.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/bigcommerce-b2b/AC-CRTINVOICE.jpg" alt="Create Invoice - Example configuration" width="700" />

---

##### Result

```json
[
  {
    "code": 200,
    "data": {
      "invoiceNumber": "11430877",
      "invoiceId": 11430877
    },
    "meta": {
      "message": "SUCCESS"
    }
  }
]
```
---

  </TabItem>
</Tabs>

## Support
If you are unsure about any field or face connection issues, reach out to our support team at [hello@appse.ai](mailto:hello@appse.ai)
