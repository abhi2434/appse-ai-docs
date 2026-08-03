---
title: "BigCommerce"
slug: /app-integrations/bigcommerce/
description: Step-by-step guide to set up BigCommerce credentials and automate e-commerce workflows in appse ai.
unlisted: true
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import ConnectAccountButton from '@site/src/components/ConnectAccountButton';

BigCommerce is a leading e-commerce platform that helps businesses create and manage online stores. appse ai enables you to connect with your BigCommerce account, automate order processing, inventory management, and other e-commerce operations, allowing for smoother and more efficient business management through automated workflows.

---

:::note
BigCommerce Marketplace installations use OAuth 2.0 authentication only. Install and connect the app directly through the OAuth flow. Only the Store Hash is required to identify and connect your BigCommerce store.
:::

<ConnectAccountButton
  appName="BigCommerce"
  authorizeUrl="https://workflow.insync.top/credentials?appCode=bigcommerce&credentialTypeCode=bigcommerce_oauth2_public"
/>

Click **Connect your BigCommerce Account** above to open the Public App authorization page and start the OAuth connection. If you are not signed in to appse ai, you will be prompted to log in or register first.

### Required Fields

The following fields are required to authenticate your BigCommerce account:

| Field        | Description                                      |
|----|----|
| Store Hash   | Unique identifier for your BigCommerce store     |

### Find Your Store Hash

- Log in to your BigCommerce admin dashboard.  
- In your browser's address bar, you will see a URL like:  
   `https://store-abc123.mybigcommerce.com/manage/dashboard`

<img src="/img/credentials/big-commerce/public/bigcommerce-cred-store-hash.png" alt="appse ai BigCommerce Store Hash" width="700"/>

- The value after `store-` is your **Store Hash**.  
   Example: `abc123`

### Add Credential in appse ai

- Enter your BigCommerce Store Hash.
- Click Save & Authorize.

<img src="/img/credentials/big-commerce/public/click_save_authorize.png" alt="Save and Authorize screen" width="700"/>

- You will be redirected to the BigCommerce log in page. Enter your BigCommerce store registered Email Address and Password, then click Log in.

<img src="/img/credentials/big-commerce/public/enter_email_password.png" alt="BigCommerce email and password login screen" width="700"/>

- Complete any required verification steps (e.g., Verification Code) and click Verify.

<img src="/img/credentials/big-commerce/public/enter_verification_code.png" alt="BigCommerce verification code screen" width="700"/>

- Select the BigCommerce account you want to connect and click Continue.

<img src="/img/credentials/big-commerce/public/choose_account.png" alt="BigCommerce account selection screen" width="700"/>

- Review the requested permissions and click Confirm to complete the authorization process.

<img src="/img/credentials/big-commerce/public/confirm_install.png" alt="BigCommerce app install confirmation screen" width="700"/>

- Once connected, you will be automatically redirected back to appse ai platform and the BigCommerce credential will be saved.

---

## Triggers and Actions

Every application has a predefined set of triggers and actions that allow users to perform application-specific activities within the platform. Here is a list of all the actions and triggers available:

<Tabs>
  <TabItem value="triggers" label="Triggers">

### Triggers

#### New Customer Created

New Customer Created trigger is activated whenever a new customer record is created in BigCommerce. It helps capture newly added customers for automation and workflow processing.

##### Select Credentials and Trigger Events

<img src="/img/credentials/big-commerce/C-NWCUSTMRCRTD1.jpg" alt="BigCommerce New Customer Created trigger — Select Credentials and Trigger Events" width="700" />

Click on **Continue** button

----

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Fetch Data Since | Specify the date and time to start fetching newly created customers. (e.g., "01/04/2025 09:15") |
| Limit | Define the maximum number of records to retrieve. (e.g., "1") |

:::note
The trigger returns newly created customer records based on the provided time range and limit. Ensure the correct timestamp is configured to avoid missing records.
:::

Click on **Continue**, then **Run** node

---

##### Example Configuration

<img src="/img/credentials/big-commerce/AC-CRTNWCUSTMR2.jpg" alt="BigCommerce New Customer Created trigger — Example Configuration" width="700" />

---

##### Result

```json
[
  {
    "id": 680,
    "authentication": {
      "force_password_reset": false
    },
    "company": "Great Buys",
    "customer_group_id": 297,
    "email": "shaun.pollock@yopmail.com",
    "first_name": "Shaun",
    "last_name": "Pollock",
    "notes": "",
    "phone": "1234567890",
    "registration_ip_address": "",
    "tax_exempt_category": "",
    "date_created": "2026-04-06T08:31:12Z",
    "date_modified": "2026-04-06T08:31:12Z",
    "accepts_product_review_abandoned_cart_emails": false,
    "origin_channel_id": 1,
    "channel_ids": [
      1
    ]
  }
]
```
----

#### Customers Update

Customers Update trigger is activated whenever an existing customer record is updated in BigCommerce. It helps capture customer modifications for automation and workflow processing.

##### Select Credentials and Trigger Events

<img src="/img/credentials/big-commerce/C-CUSTMRUPDT3.jpg" alt="BigCommerce Customers Update trigger — Select Credentials and Trigger Events" width="700" />

Click on **Continue** button

----

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Fetch Data Since | Specify the date and time to start fetching updated customers. (e.g., "01/04/2025 09:15") |
| Limit | Define the maximum number of records to retrieve. (e.g., "10") |

:::note
The trigger returns updated customer records based on the provided time range and limit. Ensure the correct timestamp is configured to avoid missing records.
:::

Click on **Continue**, then **Run** node

---

##### Example Configuration

:::note
The configuration fields are the same for all triggers — refer to the screenshot above.
:::

---

##### Result

```json
[
  {
    "id": 680,
    "authentication": {
      "force_password_reset": false
    },
    "company": "Great Buys",
    "customer_group_id": 297,
    "email": "shaun.pollock@yopmail.com",
    "first_name": "Shaun",
    "last_name": "Pollock",
    "notes": "",
    "phone": "1234567890",
    "registration_ip_address": "",
    "tax_exempt_category": "",
    "date_created": "2026-04-06T08:31:12Z",
    "date_modified": "2026-04-06T08:31:12Z",
    "accepts_product_review_abandoned_cart_emails": false,
    "origin_channel_id": 1,
    "channel_ids": [
      1
    ]
  }
]
```

----

#### Products Updated

Products Updated trigger is activated whenever an existing product record is updated in BigCommerce. It helps capture product modifications for automation and workflow processing.

##### Select Credentials and Trigger Events

<img src="/img/credentials/big-commerce/C-PRDTUPDT4.jpg" alt="BigCommerce Products Updated trigger — Select Credentials and Trigger Events" width="700" />

Click on **Continue** button

----

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Fetch Data Since | Specify the date and time to start fetching updated products. (e.g., "01/04/2025 09:15") |
| Limit | Define the maximum number of records to retrieve. (e.g., "10") |

:::note
The trigger returns updated product records based on the provided time range and limit. Ensure the correct timestamp is configured to avoid missing records.
:::

Click on **Continue**, then **Run** node

---

##### Example Configuration

:::note
The configuration fields are the same for all triggers — refer to the screenshot above.
:::

---

##### Result

```json
[
  {
    "id": 77,
    "name": "Story Book",
    "type": "physical",
    "sku": "Item99022",
    "description": "qjepqoi",
    "weight": 1.2,
    "width": 2.1,
    "depth": 3,
    "height": 1.1,
    "price": 40.99,
    "cost_price": 25,
    "retail_price": 55,
    "sale_price": 39.99,
    "map_price": 0,
    "tax_class_id": 0,
    "product_tax_code": "",
    "calculated_price": 39.99,
    "categories": [],
    "brand_id": 0,
    "option_set_id": 14,
    "option_set_display": "right",
    "inventory_level": 100,
    "inventory_warning_level": 0,
    "inventory_tracking": "product",
    "reviews_rating_sum": 0,
    "reviews_count": 0,
    "total_sold": 9,
    "fixed_cost_shipping_price": 0,
    "is_free_shipping": false,
    "is_visible": true,
    "is_featured": false,
    "related_products": [
      -1
    ],
    "warranty": "",
    "bin_picking_number": "",
    "layout_file": "product.html",
    "upc": "",
    "mpn": "",
    "gtin": "",
    "date_last_imported": null,
    "search_keywords": "",
    "availability": "available",
    "availability_description": "",
    "gift_wrapping_options_type": "any",
    "gift_wrapping_options_list": [],
    "sort_order": 0,
    "condition": "New",
    "is_condition_shown": false,
    "order_quantity_minimum": 0,
    "order_quantity_maximum": 0,
    "page_title": "",
    "meta_keywords": [],
    "meta_description": "",
    "date_created": "2015-07-03T17:57:10+00:00",
    "date_modified": "2026-02-10T10:40:08+00:00",
    "view_count": 64,
    "preorder_release_date": null,
    "preorder_message": "0",
    "is_preorder_only": false,
    "is_price_hidden": false,
    "price_hidden_label": "0",
    "custom_url": {
      "url": "/fog-linen-chambray-towel-beige-stripe/",
      "is_customized": false
    },
    "base_variant_id": null,
    "open_graph_type": "product",
    "open_graph_title": "",
    "open_graph_description": "",
    "open_graph_use_meta_description": true,
    "open_graph_use_product_name": true,
    "open_graph_use_image": true
  }
]
```

----

#### New Orders Created

New Orders Created trigger is activated whenever a new order is created in BigCommerce. It helps capture newly created orders for automation and workflow processing.

##### Select Credentials and Trigger Events

<img src="/img/credentials/big-commerce/C-NWORDCRTD5.jpg" alt="BigCommerce New Orders Created trigger — Select Credentials and Trigger Events" width="700" />

Click on **Continue** button

----

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Fetch Data Since | Specify the date and time to start fetching newly created orders. (e.g., "01/04/2025 09:15") |
| Limit | Define the maximum number of records to retrieve. (e.g., "10") |

:::note
The trigger returns newly created order records based on the provided time range and limit. Ensure the correct timestamp is configured to avoid missing records.
:::

Click on **Continue**, then **Run** node

---

##### Example Configuration

:::note
The configuration fields are the same for all triggers — refer to the screenshot above.
:::

---

##### Result

```json
[
  {
    "id": 463,
    "customer_id": 505,
    "date_created": "Wed, 02 Apr 2025 11:13:11 +0000",
    "is_tax_inclusive_pricing": false,
    "date_modified": "Wed, 02 Apr 2025 11:13:17 +0000",
    "date_shipped": "Wed, 02 Apr 2025 11:13:17 +0000",
    "status_id": 10,
    "status": "Completed",
    "subtotal_ex_tax": "300.0000",
    "subtotal_inc_tax": "316.5000",
    "subtotal_tax": "16.5000",
    "base_shipping_cost": "0.0000",
    "shipping_cost_ex_tax": "0.0000",
    "shipping_cost_inc_tax": "0.0000",
    "shipping_cost_tax": "0.0000",
    "shipping_cost_tax_class_id": 4,
    "base_handling_cost": "0.0000",
    "handling_cost_ex_tax": "0.0000",
    "handling_cost_inc_tax": "0.0000",
    "handling_cost_tax": "0.0000",
    "handling_cost_tax_class_id": 4,
    "base_wrapping_cost": "0.0000",
    "wrapping_cost_ex_tax": "0.0000",
    "wrapping_cost_inc_tax": "0.0000",
    "wrapping_cost_tax": "0.0000",
    "wrapping_cost_tax_class_id": 4,
    "total_ex_tax": "300.0000",
    "total_inc_tax": "316.5000",
    "total_tax": "16.5000",
    "items_total": 2,
    "items_shipped": 0,
    "payment_method": "Cash on Delivery",
    "payment_provider_id": null,
    "payment_status": "pending",
    "refunded_amount": "0.0000",
    "order_is_digital": false,
    "store_credit_amount": "0.0000",
    "gift_certificate_amount": "0.0000",
    "ip_address": "122.160.37.202",
    "ip_address_v6": "",
    "geoip_country": "India",
    "geoip_country_iso2": "IN",
    "currency_id": 1,
    "currency_code": "USD",
    "currency_exchange_rate": "1.0000000000",
    "default_currency_id": 1,
    "default_currency_code": "USD",
    "staff_notes": "",
    "customer_message": "",
    "discount_amount": "0.0000",
    "coupon_discount": "0.0000",
    "shipping_address_count": 1,
    "is_deleted": false,
    "ebay_order_id": "0",
    "cart_id": "515a508d-af5f-4ed5-a094-715f5268bc6e",
    "billing_address": {
      "first_name": "Nilanjana",
      "last_name": "Roy",
      "company": "ABECF1234A",
      "street_1": "DLF Galleria New Town",
      "street_2": "NewTown Action Area 1A",
      "city": "Kolkata",
      "state": "West Bengal",
      "zip": "741222",
      "country": "India",
      "country_iso2": "IN",
      "phone": "07439250893",
      "email": "amarendra.raj@yopmail.com",
      "form_fields": []
    },
    "fees": {
      "url": "https://api.bigcommerce.com/stores/{STORE_HASH}/v2/orders/463/fees",
      "resource": "/orders/463/fees"
    },
    "is_email_opt_in": false,
    "credit_card_type": null,
    "order_source": "manual",
    "channel_id": 1,
    "external_source": null,
    "consignments": {
      "url": "https://api.bigcommerce.com/stores/{STORE_HASH}/v2/orders/463/consignments",
      "resource": "/orders/463/consignments"
    },
    "products": {
      "url": "https://api.bigcommerce.com/stores/{STORE_HASH}/v2/orders/463/products",
      "resource": "/orders/463/products"
    },
    "shipping_addresses": {
      "url": "https://api.bigcommerce.com/stores/{STORE_HASH}/v2/orders/463/shipping_addresses",
      "resource": "/orders/463/shipping_addresses"
    },
    "coupons": {
      "url": "https://api.bigcommerce.com/stores/{STORE_HASH}/v2/orders/463/coupons",
      "resource": "/orders/463/coupons"
    },
    "external_id": null,
    "external_merchant_id": null,
    "tax_provider_id": "BasicTaxProvider",
    "customer_locale": "en",
    "external_order_id": "",
    "store_default_currency_code": "USD",
    "store_default_to_transactional_exchange_rate": "1.0000000000",
    "custom_status": "Completed"
  }
]
```

----

  </TabItem>
  <TabItem value="actions" label="Actions">

### Actions

### Customer Actions

#### Create a New Customer

Create a New Customer action is used to create a customer record in BigCommerce with contact details, company information, tax settings, and address details.

##### Select Credentials and Action Events

<img src="/img/credentials/big-commerce/C-CRTNWCTSMR11.jpg" alt="BigCommerce Create a New Customer action — Select Credentials and Action Event" width="700" />

Click on **Continue** button

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Email | Enter the customer email address. (e.g., "charlie.alisa@yopmail.com") |
| Optional Fields | Additional customer fields that can be configured. |
| First Name | Customer's first name. (e.g., "Charlie") |
| Last Name | Customer's last name. (e.g., "Alisa") |
| Company | Company name. (e.g., "Info Tech") |
| Phone | Customer phone number. (e.g., "8987656787") |
| Notes | Additional notes about the customer. (e.g., "Business to Customers") |
| Tax Exempt Category | Tax exemption category. (e.g., "wholesale") |
| Addresses | Additional address fields that can be configured. |
| First Name | Recipient first name. (e.g., "Mehatha") |
| Last Name | Recipient last name. (e.g., "Ben") |
| Company | Company name for address. (e.g., "Info Tech") |
| Address Line 1 | Primary street address. (e.g., "Trench Colony") |
| Address Line 2 | Secondary address line. (e.g., "Near Sarvi Resort") |
| City | City name. (e.g., "Hyderabad") |
| State or Province | State/Province name. (e.g., "Telangana") |
| Postal Code | ZIP/Postal code. (e.g., "500038") |
| Country Code | Country code. (e.g., "IN") |
| Phone | Address contact number. (e.g., "9898712123") |
| Address Type | Type of address. (e.g., "RESIDENTIAL") |

:::note
Email is mandatory. Other fields are optional and can be configured based on business requirements.
:::

Click on **Continue**, then **Run** node

----

##### Example Configuration

<img src="/img/credentials/big-commerce/AC-CRTNWCSTMR12.jpg" alt="BigCommerce Create a New Customer action — Example Configuration screenshot 1" width="700" />
<img src="/img/credentials/big-commerce/AC-CRTNWCSTMR13.jpg" alt="BigCommerce Create a New Customer action — Example Configuration screenshot 2" width="700" />
<img src="/img/credentials/big-commerce/AC-CRTNWCSTMR14.jpg" alt="BigCommerce Create a New Customer action — Example Configuration screenshot 3" width="700" />

---

##### Result

```json
[
  {
    "id": 681,
    "address_count": 1,
    "addresses": [
      {
        "id": 367,
        "address1": "Trench Colony",
        "address2": "Near Sarvi Resort",
        "address_type": "residential",
        "city": "Hyderabad",
        "company": "Info Tech",
        "country": "India",
        "country_code": "IN",
        "customer_id": 681,
        "first_name": "Mehatha",
        "last_name": "Ben",
        "phone": "9898712123",
        "postal_code": "500038",
        "state_or_province": "Telangana",
        "form_fields": []
      }
    ],
    "authentication": {
      "force_password_reset": false
    },
    "company": "Info Tech",
    "customer_group_id": 0,
    "email": "charlie.alisa@yopmail.com",
    "first_name": "Charlie",
    "last_name": "Alisa",
    "notes": "Business to Customers ",
    "phone": "8987656787",
    "registration_ip_address": "",
    "tax_exempt_category": "wholesale",
    "date_created": "2026-04-28T09:55:57Z",
    "date_modified": "2026-04-28T09:55:57Z",
    "accepts_product_review_abandoned_cart_emails": false,
    "store_credit_amounts": [
      {
        "amount": 0
      }
    ],
    "origin_channel_id": 1,
    "channel_ids": null
  }
]
```

------

#### Update an Existing Customer

Update an Existing Customer action is used to modify an existing customer record in BigCommerce with updated contact details, company information, and tax settings.

##### Select Credentials and Action Events
<img src="/img/credentials/big-commerce/C-UPDTCUSTMR15.jpg" alt="BigCommerce Update an Existing Customer action — Select Credentials and Action Event" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Customer ID | Enter the unique customer identifier. (e.g., "681") |
| Email | Enter the customer email address. (e.g., "charlie.alisa@yopmail.com") |
| Optional Fields | Additional customer details that can be updated. |
| First Name | Customer's first name. (e.g., "CharlieBen") |
| Last Name | Customer's last name. (e.g., "AlisaBen") |
| Company | Company name. (e.g., "Info Tech") |
| Phone | Customer phone number. (e.g., "9876543456") |
| Notes | Additional notes about the customer. (e.g., "B2C - Customers only") |
| Tax Exempt Category | Tax exemption category. (e.g., "Retailer") |

:::note
Customer ID and Email are mandatory. Other fields are optional and can be configured based on business requirements.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration
<img src="/img/credentials/big-commerce/AC-UPDTCUSTMR16.jpg" alt="BigCommerce Update an Existing Customer action — Example Configuration screenshot 1" width="700" />
<img src="/img/credentials/big-commerce/AC-UPDTCUSTMR17.jpg" alt="BigCommerce Update an Existing Customer action — Example Configuration screenshot 2" width="700" />

---

##### Result

```json
[
  {
    "data": [
      {
        "id": 681,
        "authentication": {
          "force_password_reset": false
        },
        "company": "Info Tech",
        "customer_group_id": 0,
        "email": "charlie.alisa@yopmail.com",
        "first_name": "CharlieBen",
        "last_name": "AlisaBen",
        "notes": "B2C - Customers only",
        "phone": "9876543456",
        "registration_ip_address": "",
        "tax_exempt_category": "Retailer",
        "date_created": "2026-04-28T09:55:57Z",
        "date_modified": "2026-04-28T10:50:49Z",
        "accepts_product_review_abandoned_cart_emails": false,
        "store_credit_amounts": [
          {
            "amount": 0
          }
        ],
        "origin_channel_id": 1,
        "channel_ids": null
      }
    ],
    "meta": {}
  }
]
```

----

#### Get Customer Addresses by Customer ID

Get Customer Addresses by Customer ID action is used to retrieve all saved addresses associated with an existing customer in BigCommerce.

##### Select Credentials and Action Events
<img src="/img/credentials/big-commerce/C-GTCUSTMRADDRSbyCUSTMRID18.jpg" alt="BigCommerce Get Customer Addresses by Customer ID action — Select Credentials and Action Event" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Customer ID | Enter the unique customer identifier. (e.g., "681") |

:::note
Customer ID is mandatory. The action returns all addresses linked to the specified customer.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration
<img src="/img/credentials/big-commerce/AC-GTCUSTMRADDRSbyCUSTMRID19.jpg" alt="BigCommerce Get Customer Addresses by Customer ID action — Example Configuration" width="700" />

---

##### Result

```json
[
  {
    "id": 367,
    "address1": "Trench Colony",
    "address2": "Near Sarvi Resort",
    "address_type": "residential",
    "city": "Hyderabad",
    "company": "Info Tech",
    "country": "India",
    "country_code": "IN",
    "customer_id": 681,
    "first_name": "Mehatha",
    "last_name": "Ben",
    "phone": "9898712123",
    "postal_code": "500038",
    "state_or_province": "Telangana"
  }
]
```

----

#### Get Customers by Email

Get Customers by Email action is used to retrieve customer details in BigCommerce using the customer's email address.

##### Select Credentials and Action Events
<img src="/img/credentials/big-commerce/C-GTCUSTMRbyEML20.jpg" alt="BigCommerce Get Customers by Email action — Select Credentials and Action Event" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Email | Enter the customer email address. (e.g., "charlie.alisa@yopmail.com") |

:::note
Email is mandatory. The action returns matching customer records for the specified email address.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration
<img src="/img/credentials/big-commerce/AC-GTCUSTMRbyEML21.jpg" alt="BigCommerce Get Customers by Email action — Example Configuration" width="700" />

---

##### Result

```json
[
  {
    "id": 681,
    "authentication": {
      "force_password_reset": false
    },
    "company": "Info Tech",
    "customer_group_id": 0,
    "email": "charlie.alisa@yopmail.com",
    "first_name": "CharlieBen",
    "last_name": "AlisaBen",
    "notes": "B2C - Customers only",
    "phone": "9876543456",
    "registration_ip_address": "",
    "tax_exempt_category": "Retailer",
    "date_created": "2026-04-28T09:55:57Z",
    "date_modified": "2026-04-28T10:50:49Z",
    "accepts_product_review_abandoned_cart_emails": false,
    "origin_channel_id": 1,
    "channel_ids": null
  }
]
```

---

### Customer Addresses Actions

#### Get Customer Addresses

Get Customer Addresses action is used to retrieve all saved addresses associated with an existing customer in BigCommerce.

##### Select Credentials and Action Events
<img src="/img/credentials/big-commerce/C-GTCUSTMRADDRSbyCUSTMRID18.jpg" alt="BigCommerce Get Customer Addresses action — Select Credentials and Action Event" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Customer ID | Enter the unique customer identifier. (e.g., "681") |

:::note
Customer ID is mandatory. The action returns all addresses linked to the specified customer.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration
<img src="/img/credentials/big-commerce/AC-GTCUSTMRADDRSES23.jpg" alt="BigCommerce Get Customer Addresses action — Example Configuration" width="700" />

---

##### Result

```json
[
  {
    "data": [
      {
        "id": 367,
        "address1": "Trench Colony",
        "address2": "Near Sarvi Resort",
        "address_type": "residential",
        "city": "Hyderabad",
        "company": "Info Tech",
        "country": "India",
        "country_code": "IN",
        "customer_id": 681,
        "first_name": "Mehatha",
        "last_name": "Ben",
        "phone": "9898712123",
        "postal_code": "500038",
        "state_or_province": "Telangana"
      }
    ],
    "meta": {
      "pagination": {
        "total": 1,
        "count": 1,
        "per_page": 50,
        "current_page": 1,
        "total_pages": 1
      }
    }
  }
]
```

------

#### Update Customer Addresses

Update Customer Addresses action is used to modify an existing customer address in BigCommerce with updated contact and location details.

##### Select Credentials and Action Events
<img src="/img/credentials/big-commerce/C-UPDTADRES24.jpg" alt="BigCommerce Update Customer Addresses action — Select Credentials and Action Event" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Address ID (Identifier) | Enter the unique address identifier. (e.g., "367") |
| Optional Fields | Additional address details that can be updated. |
| First Name | Recipient's first name. (e.g., "MehathaBenarji") |
| Last Name | Recipient's last name. (e.g., "BenRaji") |
| Address Line 1 | Primary street address. (e.g., "Medi Colony") |
| Address Line 2 | Secondary address line. (e.g., "Near French Cafe") |
| City | City name. (e.g., "Hyderabad") |
| State / Province | State or province name. (e.g., "Telangana") |
| Postal Code | ZIP / Postal code. (e.g., "500039") |
| Country Code | Country code. (e.g., "IN") |
| Phone | Contact phone number. (e.g., "9898712111") |

:::note
Address ID is mandatory. Only the provided optional fields will be updated.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration
<img src="/img/credentials/big-commerce/AC-UPDTADRES25.jpg" alt="BigCommerce Update Customer Addresses action — Example Configuration screenshot 1" width="700" />
<img src="/img/credentials/big-commerce/AC-UPDTADRES26.jpg" alt="BigCommerce Update Customer Addresses action — Example Configuration screenshot 2" width="700" />

---

##### Result

```json
[
  {
    "data": [
      {
        "id": 367,
        "address1": "Medi Colony",
        "address2": "Near French Cafe",
        "address_type": "residential",
        "city": "Hyderabad",
        "company": "Info Tech",
        "country": "India",
        "country_code": "IN",
        "customer_id": 681,
        "first_name": "MehathaBenarji",
        "last_name": "BenRaji",
        "phone": "9898712111",
        "postal_code": "500039",
        "state_or_province": "Telangana"
      }
    ],
    "meta": {}
  }
]
```
---
### Product Actions

#### Create a New Product

Create a New Product action is used to create a new product in BigCommerce with pricing, dimensions, inventory, and visibility settings.

##### Select Credentials and Action Events
<img src="/img/credentials/big-commerce/C-CRTPRDT27.jpg" alt="BigCommerce Create a New Product action — Select Credentials and Action Event" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Product Name | Enter the product name. (e.g., "Nayasa-FuelUp") |
| Product Type | Specify the product type. (e.g., "physical") |
| Price | Enter the selling price of the product. (e.g., "250") |
| Weight | Enter the product weight. (e.g., "1.5") |
| Optional Fields | Additional product details that can be configured. |
| SKU | Stock keeping unit code. (e.g., "NAYASA001") |
| Description | Product description. (e.g., "Nayasa-FuelUp Water bottle") |
| Width | Product width. (e.g., "10.0") |
| Height | Product height. (e.g., "5.0") |
| Depth | Product depth. (e.g., "2.0") |
| Inventory Tracking | Inventory tracking method. (e.g., "Track at Product level") |
| Inventory Level | Available stock quantity. (e.g., "100") |
| Is Visible | Product visibility status. (e.g., "True") |
| Is Featured | Featured product status. (e.g., "True") |
| Sale Price | Product sale price. (e.g., "260") |
| Cost Price | Product cost price. (e.g., "200") |
| Retail Price | Product retail price. (e.g., "210") |

:::note
Product Name, Product Type, Price, and Weight are mandatory. Other fields are optional and can be configured based on business requirements.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration
<img src="/img/credentials/big-commerce/AC-CRTPRDT28.jpg" alt="BigCommerce Create a New Product action — Example Configuration screenshot 1" width="700" />
<img src="/img/credentials/big-commerce/AC-CRTPRDT29.jpg" alt="BigCommerce Create a New Product action — Example Configuration screenshot 2" width="700" />

---

##### Result

```json
[
  {
    "id": 785,
    "name": "Nayasa-FuelUp",
    "type": "physical",
    "sku": "NAYASA001",
    "description": "Nayasa-FuelUp Water bottle",
    "weight": 1.5,
    "width": 10,
    "depth": 2,
    "height": 5,
    "price": 250,
    "cost_price": 200,
    "retail_price": 210,
    "sale_price": 260,
    "map_price": 0,
    "tax_class_id": 0,
    "product_tax_code": "",
    "calculated_price": 260,
    "categories": [],
    "brand_id": 0,
    "option_set_id": null,
    "option_set_display": "right",
    "inventory_level": 100,
    "inventory_warning_level": 0,
    "inventory_tracking": "product",
    "reviews_rating_sum": 0,
    "reviews_count": 0,
    "total_sold": 0,
    "fixed_cost_shipping_price": 0,
    "is_free_shipping": false,
    "is_visible": true,
    "is_featured": true,
    "related_products": [
      -1
    ],
    "warranty": "",
    "bin_picking_number": "",
    "layout_file": "",
    "upc": "",
    "mpn": "",
    "gtin": "",
    "date_last_imported": null,
    "search_keywords": "",
    "availability": "available",
    "availability_description": "",
    "gift_wrapping_options_type": "any",
    "gift_wrapping_options_list": [],
    "sort_order": 0,
    "condition": "New",
    "is_condition_shown": false,
    "order_quantity_minimum": 0,
    "order_quantity_maximum": 0,
    "page_title": "",
    "meta_keywords": [],
    "meta_description": "",
    "date_created": "2026-04-28T12:30:16+00:00",
    "date_modified": "2026-04-28T12:30:16+00:00",
    "view_count": 0,
    "preorder_release_date": null,
    "preorder_message": "",
    "is_preorder_only": false,
    "is_price_hidden": false,
    "price_hidden_label": "",
    "custom_url": {
      "url": "/nayasa-fuelup/",
      "is_customized": false
    },
    "base_variant_id": 902,
    "open_graph_type": "product",
    "open_graph_title": "",
    "open_graph_description": "",
    "open_graph_use_meta_description": true,
    "open_graph_use_product_name": true,
    "open_graph_use_image": true,
    "channels": [],
    "variants": [
      {
        "id": 902,
        "product_id": 785,
        "sku": "NAYASA001",
        "sku_id": null,
        "price": 250,
        "calculated_price": 260,
        "sale_price": 260,
        "retail_price": 210,
        "map_price": 0,
        "weight": 1.5,
        "width": 10,
        "height": 5,
        "depth": 2,
        "is_free_shipping": false,
        "fixed_cost_shipping_price": 0,
        "calculated_weight": 1.5,
        "purchasing_disabled": false,
        "purchasing_disabled_message": "",
        "image_url": "",
        "cost_price": 200,
        "upc": "",
        "mpn": "",
        "gtin": "",
        "inventory_level": 100,
        "inventory_warning_level": 0,
        "bin_picking_number": "",
        "option_values": []
      }
    ],
    "images": [],
    "primary_image": null,
    "videos": [],
    "custom_fields": [],
    "bulk_pricing_rules": [],
    "reviews": [],
    "options": [],
    "modifiers": [],
    "parent_relations": []
  }
]
```

---

#### Update Product

Update Product action is used to modify an existing product in BigCommerce with updated product details, pricing, dimensions, and feature settings.

##### Select Credentials and Action Events
<img src="/img/credentials/big-commerce/C-UPDTPRDT30.jpg" alt="BigCommerce Update Product action — Select Credentials and Action Event" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Product ID | Enter the unique product identifier. (e.g., "785") |
| Optional Fields | Additional product details that can be updated. |
| Product Name | Product name. (e.g., "Nayasa FuelUp Hydration Bottle") |
| SKU | Stock keeping unit code. (e.g., "NAYASA001") |
| Price | Selling price of the product. (e.g., "300") |
| Description | Product description. (e.g., "Stay refreshed throughout the day with the Nayasa FuelUp Hydration Bottle.") |
| Weight | Product weight. (e.g., "2.0") |
| Width | Product width. (e.g., "11.0") |
| Height | Product height. (e.g., "4.0") |
| Depth | Product depth. (e.g., "1.5") |
| Is Featured | Featured product status. (e.g., "True") |
| Sale Price | Product sale price. (e.g., "250") |
| Cost Price | Product cost price. (e.g., "150") |
| Retail Price | Product retail price. (e.g., "200") |

:::note
Product ID is mandatory. Only the provided optional fields will be updated.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration
<img src="/img/credentials/big-commerce/AC-UPDTPRDT31.jpg" alt="BigCommerce Update Product action — Example Configuration screenshot 1" width="700" />
<img src="/img/credentials/big-commerce/AC-UPDTPRDT32.jpg" alt="BigCommerce Update Product action — Example Configuration screenshot 2" width="700" />

---

##### Result

```json
[
  {
    "data": {
      "id": 785,
      "name": "Nayasa FuelUp Hydration Bottle",
      "type": "physical",
      "sku": "NAYASA001",
      "description": "Stay refreshed throughout the day with the Nayasa FuelUp Hydration Bottle.",
      "weight": 2,
      "width": 11,
      "depth": 1.5,
      "height": 4,
      "price": 300,
      "cost_price": 150,
      "retail_price": 200,
      "sale_price": 250,
      "map_price": 0,
      "tax_class_id": 0,
      "product_tax_code": "",
      "calculated_price": 250,
      "categories": [],
      "brand_id": 0,
      "option_set_id": null,
      "option_set_display": "right",
      "inventory_level": 100,
      "inventory_warning_level": 0,
      "inventory_tracking": "product",
      "reviews_rating_sum": 0,
      "reviews_count": 0,
      "total_sold": 0,
      "fixed_cost_shipping_price": 0,
      "is_free_shipping": false,
      "is_visible": true,
      "is_featured": true,
      "related_products": [
        -1
      ],
      "warranty": "",
      "bin_picking_number": "",
      "layout_file": "",
      "upc": "",
      "mpn": "",
      "gtin": "",
      "date_last_imported": null,
      "search_keywords": "",
      "availability": "available",
      "availability_description": "",
      "gift_wrapping_options_type": "any",
      "gift_wrapping_options_list": [],
      "sort_order": 0,
      "condition": "New",
      "is_condition_shown": false,
      "order_quantity_minimum": 0,
      "order_quantity_maximum": 0,
      "page_title": "",
      "meta_keywords": [],
      "meta_description": "",
      "date_created": "2026-04-28T12:30:16+00:00",
      "date_modified": "2026-04-28T12:42:02+00:00",
      "view_count": 0,
      "preorder_release_date": null,
      "preorder_message": "",
      "is_preorder_only": false,
      "is_price_hidden": false,
      "price_hidden_label": "",
      "custom_url": {
        "url": "/nayasa-fuelup/",
        "is_customized": false
      },
      "base_variant_id": 902,
      "open_graph_type": "product",
      "open_graph_title": "",
      "open_graph_description": "",
      "open_graph_use_meta_description": true,
      "open_graph_use_product_name": true,
      "open_graph_use_image": true
    },
    "meta": {}
  }
]
```

---

#### Update Inventory Level

Update Inventory Level action is used to modify the available inventory quantity for an existing product in BigCommerce.

##### Select Credentials and Action Events
<img src="/img/credentials/big-commerce/C-UPDTINVNTRYLVL33.jpg" alt="BigCommerce Update Inventory Level action — Select Credentials and Action Event" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Product ID | Enter the unique product identifier. (e.g., "785") |
| Inventory Level | Enter the updated inventory quantity. (e.g., "500") |

:::note
Product ID and Inventory Level are mandatory. The inventory quantity will be updated for the specified product.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration
<img src="/img/credentials/big-commerce/AC-UPDTINVNTRYLVL34.jpg" alt="BigCommerce Update Inventory Level action — Example Configuration" width="700" />

---

##### Result

```json
[
  {
    "data": {
      "id": 785,
      "name": "Nayasa FuelUp Hydration Bottle",
      "type": "physical",
      "sku": "NAYASA001",
      "description": "Stay refreshed throughout the day with the Nayasa FuelUp Hydration Bottle.",
      "weight": 2,
      "width": 11,
      "depth": 1.5,
      "height": 4,
      "price": 300,
      "cost_price": 150,
      "retail_price": 200,
      "sale_price": 250,
      "map_price": 0,
      "tax_class_id": 0,
      "product_tax_code": "",
      "calculated_price": 250,
      "categories": [],
      "brand_id": 0,
      "option_set_id": null,
      "option_set_display": "right",
      "inventory_level": 500,
      "inventory_warning_level": 0,
      "inventory_tracking": "product",
      "reviews_rating_sum": 0,
      "reviews_count": 0,
      "total_sold": 0,
      "fixed_cost_shipping_price": 0,
      "is_free_shipping": false,
      "is_visible": true,
      "is_featured": true,
      "related_products": [
        -1
      ],
      "warranty": "",
      "bin_picking_number": "",
      "layout_file": "",
      "upc": "",
      "mpn": "",
      "gtin": "",
      "date_last_imported": null,
      "search_keywords": "",
      "availability": "available",
      "availability_description": "",
      "gift_wrapping_options_type": "any",
      "gift_wrapping_options_list": [],
      "sort_order": 0,
      "condition": "New",
      "is_condition_shown": false,
      "order_quantity_minimum": 0,
      "order_quantity_maximum": 0,
      "page_title": "",
      "meta_keywords": [],
      "meta_description": "",
      "date_created": "2026-04-28T12:30:16+00:00",
      "date_modified": "2026-04-28T12:48:38+00:00",
      "view_count": 0,
      "preorder_release_date": null,
      "preorder_message": "",
      "is_preorder_only": false,
      "is_price_hidden": false,
      "price_hidden_label": "",
      "custom_url": {
        "url": "/nayasa-fuelup/",
        "is_customized": false
      },
      "base_variant_id": 902,
      "open_graph_type": "product",
      "open_graph_title": "",
      "open_graph_description": "",
      "open_graph_use_meta_description": true,
      "open_graph_use_product_name": true,
      "open_graph_use_image": true
    },
    "meta": {}
  }
]
```

-------

### Product Action

#### Get Product by SKU

Get Product by SKU action is used to retrieve product details in BigCommerce using the product SKU (Stock Keeping Unit).

##### Select Credentials and Action Events
<img src="/img/credentials/big-commerce/C-GTPRDTbySKU35.jpg" alt="BigCommerce Get Product by SKU action — Select Credentials and Action Event" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| SKU | Enter the product SKU code. (e.g., "NAYASA001") |

:::note
SKU is mandatory. The action returns matching product details for the specified SKU.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration
<img src="/img/credentials/big-commerce/AC-GTPRDTbySKU36.jpg" alt="BigCommerce Get Product by SKU action — Example Configuration" width="700" />

---

##### Result

```json
[
  {
    "id": 785,
    "name": "Nayasa FuelUp Hydration Bottle",
    "type": "physical",
    "sku": "NAYASA001",
    "description": "Stay refreshed throughout the day with the Nayasa FuelUp Hydration Bottle.",
    "weight": 2,
    "width": 11,
    "depth": 1.5,
    "height": 4,
    "price": 300,
    "cost_price": 150,
    "retail_price": 200,
    "sale_price": 250,
    "map_price": 0,
    "tax_class_id": 0,
    "product_tax_code": "",
    "calculated_price": 250,
    "categories": [],
    "brand_id": 0,
    "option_set_id": null,
    "option_set_display": "right",
    "inventory_level": 500,
    "inventory_warning_level": 0,
    "inventory_tracking": "product",
    "reviews_rating_sum": 0,
    "reviews_count": 0,
    "total_sold": 0,
    "fixed_cost_shipping_price": 0,
    "is_free_shipping": false,
    "is_visible": true,
    "is_featured": true,
    "related_products": [
      -1
    ],
    "warranty": "",
    "bin_picking_number": "",
    "layout_file": "",
    "upc": "",
    "mpn": "",
    "gtin": "",
    "date_last_imported": null,
    "search_keywords": "",
    "availability": "available",
    "availability_description": "",
    "gift_wrapping_options_type": "any",
    "gift_wrapping_options_list": [],
    "sort_order": 0,
    "condition": "New",
    "is_condition_shown": false,
    "order_quantity_minimum": 0,
    "order_quantity_maximum": 0,
    "page_title": "",
    "meta_keywords": [],
    "meta_description": "",
    "date_created": "2026-04-28T12:30:16+00:00",
    "date_modified": "2026-04-28T12:48:38+00:00",
    "view_count": 0,
    "preorder_release_date": null,
    "preorder_message": "",
    "is_preorder_only": false,
    "is_price_hidden": false,
    "price_hidden_label": "",
    "custom_url": {
      "url": "/nayasa-fuelup/",
      "is_customized": false
    },
    "base_variant_id": 902,
    "open_graph_type": "product",
    "open_graph_title": "",
    "open_graph_description": "",
    "open_graph_use_meta_description": true,
    "open_graph_use_product_name": true,
    "open_graph_use_image": true
  }
]
```

----

### Orders Action

#### Get Order by ID

Get Order by ID action is used to retrieve order details in BigCommerce using the unique order identifier.

##### Select Credentials and Action Events
<img src="/img/credentials/big-commerce/C-GTORDbyORDRID37.jpg" alt="BigCommerce Get Order by ID action — Select Credentials and Action Event" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Order ID | Enter the unique order identifier. (e.g., "519") |

:::note
Order ID is mandatory. The action returns order details for the specified order.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration
<img src="/img/credentials/big-commerce/AC-GTORDbyORDRID38.jpg" alt="BigCommerce Get Order by ID action — Example Configuration" width="700" />

---

##### Result

```json
[
  {
    "id": 519,
    "customer_id": 681,
    "date_created": "Tue, 28 Apr 2026 13:06:44 +0000",
    "is_tax_inclusive_pricing": true,
    "date_modified": "Tue, 28 Apr 2026 13:06:44 +0000",
    "date_shipped": "",
    "status_id": 7,
    "status": "Awaiting Payment",
    "subtotal_ex_tax": "2369.6667",
    "subtotal_inc_tax": "2500.0000",
    "subtotal_tax": "125.1200",
    "base_shipping_cost": "0.0000",
    "shipping_cost_ex_tax": "0.0000",
    "shipping_cost_inc_tax": "0.0000",
    "shipping_cost_tax": "0.0000",
    "shipping_cost_tax_class_id": 4,
    "base_handling_cost": "0.0000",
    "handling_cost_ex_tax": "0.0000",
    "handling_cost_inc_tax": "0.0000",
    "handling_cost_tax": "0.0000",
    "handling_cost_tax_class_id": 4,
    "base_wrapping_cost": "0.0000",
    "wrapping_cost_ex_tax": "0.0000",
    "wrapping_cost_inc_tax": "0.0000",
    "wrapping_cost_tax": "0.0000",
    "wrapping_cost_tax_class_id": 4,
    "total_ex_tax": "2274.8800",
    "total_inc_tax": "2400.0000",
    "total_tax": "125.1200",
    "items_total": 10,
    "items_shipped": 0,
    "payment_method": "Cash on Delivery",
    "payment_provider_id": null,
    "payment_status": "pending",
    "refunded_amount": "0.0000",
    "order_is_digital": false,
    "store_credit_amount": "0.0000",
    "gift_certificate_amount": "0.0000",
    "ip_address": "152.52.46.70",
    "ip_address_v6": "",
    "geoip_country": "India",
    "geoip_country_iso2": "IN",
    "currency_id": 1,
    "currency_code": "USD",
    "currency_exchange_rate": "1.0000000000",
    "default_currency_id": 1,
    "default_currency_code": "USD",
    "staff_notes": "",
    "customer_message": "",
    "discount_amount": "100.0000",
    "coupon_discount": "0.0000",
    "shipping_address_count": 1,
    "is_deleted": false,
    "ebay_order_id": "0",
    "cart_id": "1c626c0c-987f-4b84-9c62-93d2a207f35f",
    "billing_address": {
      "first_name": "MehathaBenarji",
      "last_name": "BenRaji",
      "company": "Info Tech",
      "street_1": "Medi Colony",
      "street_2": "Near French Cafe",
      "city": "Hyderabad",
      "state": "Telangana",
      "zip": "500039",
      "country": "India",
      "country_iso2": "IN",
      "phone": "9898712111",
      "email": "charlie.alisa@yopmail.com",
      "form_fields": []
    },
    "fees": {
      "url": "https://api.bigcommerce.com/stores/cy2kzz9y6w/v2/orders/519/fees",
      "resource": "/orders/519/fees"
    },
    "is_email_opt_in": false,
    "credit_card_type": null,
    "order_source": "manual",
    "channel_id": 1,
    "external_source": null,
    "consignments": {
      "url": "https://api.bigcommerce.com/stores/cy2kzz9y6w/v2/orders/519/consignments",
      "resource": "/orders/519/consignments"
    },
    "products": {
      "url": "https://api.bigcommerce.com/stores/cy2kzz9y6w/v2/orders/519/products",
      "resource": "/orders/519/products"
    },
    "shipping_addresses": {
      "url": "https://api.bigcommerce.com/stores/cy2kzz9y6w/v2/orders/519/shipping_addresses",
      "resource": "/orders/519/shipping_addresses"
    },
    "coupons": {
      "url": "https://api.bigcommerce.com/stores/cy2kzz9y6w/v2/orders/519/coupons",
      "resource": "/orders/519/coupons"
    },
    "external_id": null,
    "external_merchant_id": null,
    "tax_provider_id": "BasicTaxProvider",
    "customer_locale": "en",
    "external_order_id": "",
    "store_default_currency_code": "USD",
    "store_default_to_transactional_exchange_rate": "1.0000000000",
    "custom_status": "Awaiting Payment"
  }
]
```

---

#### Update Order

Update Order action is used to modify an existing order in BigCommerce with updated status, customer, payment, and message details.

##### Select Credentials and Action Events
<img src="/img/credentials/big-commerce/C-UPDTORD39.jpg" alt="BigCommerce Update Order action — Select Credentials and Action Event" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Order ID | Enter the unique order identifier. (e.g., "519") |
| Optional Fields | Additional order details that can be updated. |
| Order Status | Update the order status. (e.g., "Shipped") |
| Customer ID | Enter the customer identifier linked to the order. (e.g., "681") |
| Payment Method | Update the payment method. (e.g., "Cash on Delivery") |
| Payment Provider ID | Enter the payment provider reference ID. (e.g., "TEST11") |
| Customer Message | Message related to the order update. (e.g., "Order has been shipped.") |

:::note
Order ID is mandatory. Only the provided optional fields will be updated.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration
<img src="/img/credentials/big-commerce/AC-UPDTORD40.jpg" alt="BigCommerce Update Order action — Example Configuration" width="700" />

---

##### Result

```json
[
  {
    "id": 519,
    "customer_id": 681,
    "date_created": "Tue, 28 Apr 2026 13:06:44 +0000",
    "is_tax_inclusive_pricing": true,
    "date_modified": "Tue, 28 Apr 2026 13:18:40 +0000",
    "date_shipped": "Tue, 28 Apr 2026 13:18:40 +0000",
    "status_id": 2,
    "status": "Shipped",
    "subtotal_ex_tax": "2369.6667",
    "subtotal_inc_tax": "2500.0000",
    "subtotal_tax": "125.1200",
    "base_shipping_cost": "0.0000",
    "shipping_cost_ex_tax": "0.0000",
    "shipping_cost_inc_tax": "0.0000",
    "shipping_cost_tax": "0.0000",
    "shipping_cost_tax_class_id": 4,
    "base_handling_cost": "0.0000",
    "handling_cost_ex_tax": "0.0000",
    "handling_cost_inc_tax": "0.0000",
    "handling_cost_tax": "0.0000",
    "handling_cost_tax_class_id": 4,
    "base_wrapping_cost": "0.0000",
    "wrapping_cost_ex_tax": "0.0000",
    "wrapping_cost_inc_tax": "0.0000",
    "wrapping_cost_tax": "0.0000",
    "wrapping_cost_tax_class_id": 4,
    "total_ex_tax": "2274.8800",
    "total_inc_tax": "2400.0000",
    "total_tax": "125.1200",
    "items_total": 10,
    "items_shipped": 0,
    "payment_method": "Cash on Delivery",
    "payment_provider_id": "TEST11",
    "payment_status": "pending",
    "refunded_amount": "0.0000",
    "order_is_digital": false,
    "store_credit_amount": "0.0000",
    "gift_certificate_amount": "0.0000",
    "ip_address": "152.52.46.70",
    "ip_address_v6": "",
    "geoip_country": "India",
    "geoip_country_iso2": "IN",
    "currency_id": 1,
    "currency_code": "USD",
    "currency_exchange_rate": "1.0000000000",
    "default_currency_id": 1,
    "default_currency_code": "USD",
    "staff_notes": "",
    "customer_message": "Order has been shipped.",
    "discount_amount": "100.0000",
    "coupon_discount": "0.0000",
    "shipping_address_count": 1,
    "is_deleted": false,
    "ebay_order_id": "0",
    "cart_id": "1c626c0c-987f-4b84-9c62-93d2a207f35f",
    "billing_address": {
      "first_name": "MehathaBenarji",
      "last_name": "BenRaji",
      "company": "Info Tech",
      "street_1": "Medi Colony",
      "street_2": "Near French Cafe",
      "city": "Hyderabad",
      "state": "Telangana",
      "zip": "500039",
      "country": "India",
      "country_iso2": "IN",
      "phone": "9898712111",
      "email": "charlie.alisa@yopmail.com",
      "form_fields": []
    },
    "fees": {
      "url": "https://api.bigcommerce.com/stores/cy2kzz9y6w/v2/orders/519/fees",
      "resource": "/orders/519/fees"
    },
    "is_email_opt_in": false,
    "credit_card_type": null,
    "order_source": "manual",
    "channel_id": 1,
    "external_source": null,
    "consignments": {
      "url": "https://api.bigcommerce.com/stores/cy2kzz9y6w/v2/orders/519/consignments",
      "resource": "/orders/519/consignments"
    },
    "products": {
      "url": "https://api.bigcommerce.com/stores/cy2kzz9y6w/v2/orders/519/products",
      "resource": "/orders/519/products"
    },
    "shipping_addresses": {
      "url": "https://api.bigcommerce.com/stores/cy2kzz9y6w/v2/orders/519/shipping_addresses",
      "resource": "/orders/519/shipping_addresses"
    },
    "coupons": {
      "url": "https://api.bigcommerce.com/stores/cy2kzz9y6w/v2/orders/519/coupons",
      "resource": "/orders/519/coupons"
    },
    "external_id": null,
    "external_merchant_id": null,
    "tax_provider_id": "BasicTaxProvider",
    "customer_locale": "en",
    "external_order_id": "",
    "store_default_currency_code": "USD",
    "store_default_to_transactional_exchange_rate": "1.0000000000",
    "custom_status": "Shipped"
  }
]
```

---

#### Get Order Products

Get Order Products action is used to retrieve all products associated with a specific order in BigCommerce.

##### Select Credentials and Action Events
<img src="/img/credentials/big-commerce/C-GTORDRPRDTbyORDRId41.jpg" alt="BigCommerce Get Order Products action — Select Credentials and Action Event" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Order ID | Enter the unique order identifier. (e.g., "519") |

:::note
Order ID is mandatory. The action returns all products linked to the specified order.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration
<img src="/img/credentials/big-commerce/AC-GTORDRPRDTbyORDRId42.jpg" alt="BigCommerce Get Order Products action — Example Configuration" width="700" />

---

##### Result

```json
[
  {
    "items": [
      {
        "id": 537,
        "order_id": 519,
        "product_id": 785,
        "variant_id": 902,
        "order_pickup_method_id": 0,
        "order_address_id": 420,
        "name": "Nayasa FuelUp Hydration Bottle",
        "name_customer": "Nayasa FuelUp Hydration Bottle",
        "name_merchant": "Nayasa FuelUp Hydration Bottle",
        "sku": "NAYASA001",
        "upc": "",
        "type": "physical",
        "base_price": "250.0000",
        "price_ex_tax": "236.9667",
        "price_inc_tax": "250.0000",
        "price_tax": "13.0333",
        "base_total": "2500.0000",
        "total_ex_tax": "2369.6667",
        "total_inc_tax": "2500.0000",
        "total_tax": "125.1200",
        "weight": "2.0000",
        "width": "11.0000",
        "height": "4.0000",
        "depth": "1.5000",
        "quantity": 10,
        "base_cost_price": "150.0000",
        "cost_price_inc_tax": "150.0000",
        "cost_price_ex_tax": "150.0000",
        "cost_price_tax": "0.0000",
        "is_refunded": false,
        "quantity_refunded": 0,
        "refund_amount": "0.0000",
        "return_id": 0,
        "wrapping_id": 0,
        "wrapping_name": "",
        "base_wrapping_cost": "0.0000",
        "wrapping_cost_ex_tax": "0.0000",
        "wrapping_cost_inc_tax": "0.0000",
        "wrapping_cost_tax": "0.0000",
        "wrapping_message": "",
        "quantity_shipped": 0,
        "event_name": null,
        "event_date": null,
        "fixed_shipping_cost": "0.0000",
        "ebay_item_id": "",
        "ebay_transaction_id": "",
        "option_set_id": null,
        "parent_order_product_id": null,
        "is_bundled_product": false,
        "bin_picking_number": "",
        "external_id": null,
        "fulfillment_source": "",
        "brand": "",
        "gift_certificate_id": null,
        "applied_discounts": [
          {
            "id": "manual-discount",
            "amount": "100.0000",
            "name": "Manual Discount",
            "code": null,
            "target": "order"
          }
        ],
        "product_options": [],
        "configurable_fields": [],
        "discounted_total_inc_tax": "2400.0000"
      }
    ]
  }
]
```

----

#### Get Order Shipping Addresses

Get Order Shipping Addresses action is used to retrieve shipping address details associated with a specific order in BigCommerce.

##### Select Credentials and Action Events
<img src="/img/credentials/big-commerce/C-GTADDRSbyORDRID43.jpg" alt="BigCommerce Get Order Shipping Addresses action — Select Credentials and Action Event" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Order ID | Enter the unique order identifier. (e.g., "519") |

:::note
Order ID is mandatory. The action returns shipping address details for the specified order.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration
<img src="/img/credentials/big-commerce/AC-GTADDRSbyORDRID44.jpg" alt="BigCommerce Get Order Shipping Addresses action — Example Configuration" width="700" />

---

##### Result

```json
[
  {
    "items": [
      {
        "id": 420,
        "order_id": 519,
        "first_name": "MehathaBenarji",
        "last_name": "BenRaji",
        "company": "Info Tech",
        "street_1": "Medi Colony",
        "street_2": "Near French Cafe",
        "city": "Hyderabad",
        "zip": "500039",
        "country": "India",
        "country_iso2": "IN",
        "state": "Telangana",
        "email": "charlie.alisa@yopmail.com",
        "phone": "9898712111",
        "items_total": 10,
        "items_shipped": 0,
        "shipping_method": "None",
        "base_cost": "0.0000",
        "cost_ex_tax": "0.0000",
        "cost_inc_tax": "0.0000",
        "cost_tax": "0.0000",
        "cost_tax_class_id": 4,
        "base_handling_cost": "0.0000",
        "handling_cost_ex_tax": "0.0000",
        "handling_cost_inc_tax": "0.0000",
        "handling_cost_tax": "0.0000",
        "handling_cost_tax_class_id": 4,
        "shipping_zone_id": 3,
        "shipping_zone_name": "IBigCom",
        "shipping_quotes": {
          "url": "https://api.bigcommerce.com/stores/cy2kzz9y6w/v2/orders/519/shipping_addresses/420/shipping_quotes",
          "resource": "/orders/519/shipping_addresses/420/shipping_quotes"
        },
        "form_fields": []
      }
    ]
  }
]
```

-------


#### Create Order Fulfillment

Create Order Fulfillment action is used to create a fulfillment for an existing order in BigCommerce with item quantities, tracking, shipping, and delivery details.

##### Select Credentials and Action Events
<img src="/img/credentials/big-commerce/C-CRTORDFUFLMNT45.jpg" alt="BigCommerce Create Order Fulfillment action — Select Credentials and Action Event" width="700" />

Click on **Continue** button.

---

##### Configuration Fields

| Field | Description |
|-------|-------------|
| Order ID | Enter the unique order identifier. (e.g., "519") |
| Order Address ID | Enter the order shipping address identifier. (e.g., "420") |
| Items | Add one or more order items for fulfillment. |
| Order Product ID | Enter the unique order product identifier. (e.g., "537") |
| Quantity | Enter the quantity to fulfill. (e.g., "10") |
| Tracking Number | Enter the shipment tracking number. (e.g., "Nayasatrack-ABC") |
| Optional Fields | Additional fulfillment details that can be configured. |
| Shipping Provider | Enter the shipping carrier name. (e.g., "USPS") |
| Custom Tracking Link | Enter the custom tracking URL. (e.g., "https://nayasatracklinm.shop") |
| Shipping Method | Enter the shipping method. (e.g., "Cash on Delivery") |
| Merchant Shipping Cost | Enter the shipping cost charged by merchant. (e.g., "300") |
| Comments | Additional notes for the fulfillment. (e.g., "Fulfilment-Order") |

:::note
Order ID, Order Address ID, Items, Tracking Number, Order Product ID, and Quantity are mandatory. Additional items can be added as needed.
:::
Click on **Continue**, then **Run** node.

---

##### Example Configuration
<img src="/img/credentials/big-commerce/AC-CRTORDFUFLMNT46.jpg" alt="BigCommerce Create Order Fulfillment action — Example Configuration screenshot 1" width="700" />
<img src="/img/credentials/big-commerce/AC-CRTORDFUFLMNT47.jpg" alt="BigCommerce Create Order Fulfillment action — Example Configuration screenshot 2" width="700" />

---

##### Result

```json
[
  {
    "id": 79,
    "order_id": 519,
    "customer_id": 681,
    "order_address_id": 420,
    "date_created": "Wed, 29 Apr 2026 04:52:25 +0000",
    "tracking_number": "Nayasatrack-ABC",
    "merchant_shipping_cost": "300.0000",
    "shipping_method": "Cash on Delivery",
    "comments": "Fulfilment-Order",
    "shipping_provider": "usps",
    "tracking_carrier": "",
    "tracking_link": "https://nayasatracklinm.shop",
    "billing_address": {
      "first_name": "MehathaBenarji",
      "last_name": "BenRaji",
      "company": "Info Tech",
      "street_1": "Medi Colony",
      "street_2": "Near French Cafe",
      "city": "Hyderabad",
      "state": "Telangana",
      "zip": "500039",
      "country": "India",
      "country_iso2": "IN",
      "phone": "9898712111",
      "email": "charlie.alisa@yopmail.com"
    },
    "shipping_address": {
      "first_name": "MehathaBenarji",
      "last_name": "BenRaji",
      "company": "Info Tech",
      "street_1": "Medi Colony",
      "street_2": "Near French Cafe",
      "city": "Hyderabad",
      "state": "Telangana",
      "zip": "500039",
      "country": "India",
      "country_iso2": "IN",
      "phone": "9898712111",
      "email": "charlie.alisa@yopmail.com"
    },
    "items": [
      {
        "order_product_id": 537,
        "product_id": 785,
        "quantity": 10
      }
    ],
    "generated_tracking_link": "",
    "shipping_provider_display_name": "USPS"
  }
]
```

---

</TabItem>
</Tabs>

## Support
If you are unsure about any field or face connection issues, reach out to our support team at [support@appse.ai](mailto:support@appse.ai)
