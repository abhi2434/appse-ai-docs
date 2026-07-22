---
title: "Magento 2"
slug: /app-integrations/magento2/
description: Step-by-step guide to set up Magento 2 credentials and automate e-commerce workflows in appse ai.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Magento 2 is a robust, open-source e-commerce platform that offers flexible shopping cart systems and control over the look, content, and functionality of your online store. With appse ai, you can seamlessly connect your Magento 2 store to automate orders, products, and customer data management, enhancing operational efficiency.

## Setup Credentials

To setup your Magento 2 credential, you can choose between two authentication methods:

1.  **Integration Token**: Uses an Access Token generated via Magento Integrations (Recommended).
2.  **Session Authentication**: Uses your Magento Admin username and password.

<img src="/img/credentials/magento2/magento-auth-selection.png" alt="Magento Authentication Selection" width="700"/>

### Method 1: Integration Token

Select **Integration Token** in the authentication type selection screen.

#### Required Fields

| Field           | Description                                                      |
| --------------- | ---------------------------------------------------------------- |
| Connection name | A name to help you identify this connection.                     |
| Store Domain    | The domain of your Magento store (e.g., `test.templatebar.com`). |
| Access Token    | The API access token generated from Magento Admin.               |

<img src="/img/credentials/magento2/magento-credential-modal.png" alt="Magento Integration Token Fields" width="700"/>

#### Step-by-Step Guide

**1. Prerequisite: Configure OAuth Settings**

Before creating an integration, you must enable standalone Bearer tokens.

- Log in to Magento Admin.
- Navigate to **Stores > Settings > Configuration > Services > OAuth**.
- Expand **Consumer Settings**.
- Set **Allow OAuth Access Tokens to be used as standalone Bearer tokens** to **Yes**.
- Click **Save Config**.

<img src="/img/credentials/magento2/magento-oauth-config.png" alt="Magento OAuth Configuration" width="700"/>

**2. Create an Integration**

- Navigate to **System > Extensions > Integrations** and click **Add New Integration**.

<img src="/img/credentials/magento2/magento-integrations-grid.png" alt="Magento Integrations Grid" width="700"/>

**3. Configure Integration Details**

- Enter a **Name** (e.g., `appseai`) and your **Password** in "Basic Settings".

<img src="/img/credentials/magento2/magento-new-integration.png" alt="Magento New Integration Form" width="700"/>

**4. Set API Permissions**

- Switch to the **API** tab, set **Resource Access** to **All**, and click **Save**.

<img src="/img/credentials/magento2/magento-api-permissions.png" alt="Magento API Permissions" width="700"/>

**5. Get Access Token**

- Click **Activate** on the new integration, then **Allow**.
- Copy the **Access Token**.

<img src="/img/credentials/magento2/magento-access-token.png" alt="Magento Access Tokens" width="700"/>

**6. Connect to appse ai**

- In appse ai, enter your **Store Domain** and paste the **Access Token**.
- Click **Save**.

---

### Method 2: Session Authentication

Select **Session Authentication** in the authentication type selection screen.

#### Required Fields

| Field           | Description                                                      |
| --------------- | ---------------------------------------------------------------- |
| Connection name | A name to help you identify this connection.                     |
| Store Domain    | The domain of your Magento store (e.g., `test.templatebar.com`). |
| Admin Username  | Your Magento Admin panel username.                               |
| Admin Password  | Your Magento Admin panel password.                               |

<img src="/img/credentials/magento2/magento-session-auth-modal.png" alt="Magento Session Authentication Fields" width="700"/>

#### Step-by-Step Guide

1.  **Select Authentication**: Choose **Session Authentication** when adding a credential.
2.  **Enter Details**:
    - **Store Domain**: Enter your store's base domain (e.g., `magento.example.com`).
    - **Admin Username**: Enter the username you use to log in to the Magento Admin.
    - **Admin Password**: Enter your admin password.
    - _Note: Ensure the user has API access permissions._
3.  **Connect**: Click **Save** to verify and connect.

---

## Triggers and Actions

Every application has a pre-defined set of triggers and actions that allow users to perform application specific activities within the platform. Here is a list of all the actions and triggers available.

<Tabs>

<TabItem value="triggers" label="Triggers" default>

### Triggers

#### New Customers Created

New Customers Created trigger is used to fetch newly created customer records from Magento2 based on a specified time and limit.

##### Select Credentials and Action Events

<img src="/img/credentials/magento2/newcustomercreated-C.jpg" alt="Credential Config and Action selection" width="700" />

Click on **Continue** button.

---

##### Configuration

| Field | Description |
|------|-------------|
| Fetch Data Since | Specify the date and time to fetch newly created customer records. (e.g., `01/06/2024 10:37`) |
| Limit | Define the number of records to retrieve in a single execution. (e.g., `1` or `10`) |

:::note
Fetch Data Since is mandatory. Limit can be adjusted based on how many records you want to retrieve.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/magento2/newcustomercreated-Config.png" alt="Magento2 New Customers Created - Example Configuration" width="700" />

---

##### Result


```json
[
  {
    "id": 1,
    "group_id": 1,
    "default_billing": "1",
    "default_shipping": "1",
    "created_at": "2024-09-13 06:22:40",
    "updated_at": "2026-02-17 10:14:24",
    "created_in": "Default Store View",
    "email": "test8901@yopmail.com",
    "firstname": "halki",
    "lastname": "Barsha",
    "gender": 0,
    "store_id": 1,
    "website_id": 1,
    "addresses": [
      {
        "id": 1,
        "customer_id": 1,
        "region": {
          "region_code": "CO",
          "region": "Colorado",
          "region_id": 13
        },
        "region_id": 13,
        "country_id": "US",
        "street": [
          "abc street",
          "Apt 4B"
        ],
        "telephone": "1234567890",
        "postcode": "787990",
        "city": "Xyz",
        "firstname": "हल्की",
        "lastname": "वर्षा",
        "suffix": "Mr",
        "default_shipping": true,
        "default_billing": true
      },
      {
        "id": 2,
        "customer_id": 1,
        "region": {
          "region_code": "SB",
          "region": "Salzburg",
          "region_id": 98
        },
        "region_id": 98,
        "country_id": "AT",
        "street": [
          "TEST ADDRESS 1"
        ],
        "telephone": "09876543212",
        "postcode": "98762223",
        "city": "ABC",
        "firstname": "हल्की",
        "lastname": "वर्षा"
      },
      {
        "id": 3,
        "customer_id": 1,
        "region": {
          "region_code": "SA",
          "region": "South Australia",
          "region_id": 609
        },
        "region_id": 609,
        "country_id": "AU",
        "street": [
          "TEST ADDRESS 2"
        ],
        "telephone": "1234567890",
        "postcode": "12345678",
        "city": "ABC 2",
        "firstname": "हल्की",
        "lastname": "वर्षा"
      }
    ],
    "disable_auto_group_change": 0,
    "extension_attributes": {
      "is_subscribed": false
    }
  }
]
```

---

#### Customers Updated

Customers Updated trigger is used to fetch updated customer records from Magento2 based on a specified time and limit.

##### Select Credentials and Action Events

<img src="/img/credentials/magento2/customerupdated-C.jpg" alt="Credential Config and Action selection" width="700" />

Click on **Continue** button.

---

##### Configuration

| Field | Description |
|------|-------------|
| Fetch Data Since | Specify the date and time to fetch updated customer records. (e.g., `01/06/2024 10:37`) |
| Limit | Define the number of records to retrieve in a single execution. (e.g., `1` or `10`) |

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
    "id": 1,
    "group_id": 1,
    "default_billing": "1",
    "default_shipping": "1",
    "created_at": "2024-09-13 06:22:40",
    "updated_at": "2026-02-17 10:14:24",
    "created_in": "Default Store View",
    "email": "test8901@yopmail.com",
    "firstname": "halki",
    "lastname": "Barsha",
    "gender": 0,
    "store_id": 1,
    "website_id": 1,
    "addresses": [
      {
        "id": 1,
        "customer_id": 1,
        "region": {
          "region_code": "CO",
          "region": "Colorado",
          "region_id": 13
        },
        "region_id": 13,
        "country_id": "US",
        "street": [
          "abc street",
          "Apt 4B"
        ],
        "telephone": "1234567890",
        "postcode": "787990",
        "city": "Xyz",
        "firstname": "हल्की",
        "lastname": "वर्षा",
        "suffix": "Mr",
        "default_shipping": true,
        "default_billing": true
      },
      {
        "id": 2,
        "customer_id": 1,
        "region": {
          "region_code": "SB",
          "region": "Salzburg",
          "region_id": 98
        },
        "region_id": 98,
        "country_id": "AT",
        "street": [
          "TEST ADDRESS 1"
        ],
        "telephone": "09876543212",
        "postcode": "98762223",
        "city": "ABC",
        "firstname": "हल्की",
        "lastname": "वर्षा"
      },
      {
        "id": 3,
        "customer_id": 1,
        "region": {
          "region_code": "SA",
          "region": "South Australia",
          "region_id": 609
        },
        "region_id": 609,
        "country_id": "AU",
        "street": [
          "TEST ADDRESS 2"
        ],
        "telephone": "1234567890",
        "postcode": "12345678",
        "city": "ABC 2",
        "firstname": "हल्की",
        "lastname": "वर्षा"
      }
    ],
    "disable_auto_group_change": 0,
    "extension_attributes": {
      "is_subscribed": false
    }
  }
]
```

---

#### New Products Created

New Products Created trigger is used to fetch newly created product records from Magento2 based on a specified time and limit.

##### Select Credentials and Action Events

<img src="/img/credentials/magento2/newproductcreated-C.jpg" alt="Credential Config and Action selection" width="700" />

Click on **Continue** button.

---

##### Configuration

| Field | Description |
|------|-------------|
| Fetch Data Since | Specify the date and time to fetch newly created product records. (e.g., `01/06/2024 10:37`) |
| Limit | Define the number of records to retrieve in a single execution. (e.g., `1` or `10`) |

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
    "id": 1,
    "sku": "Hat",
    "name": "Hat",
    "attribute_set_id": 4,
    "price": 34,
    "status": 1,
    "visibility": 4,
    "type_id": "simple",
    "created_at": "2024-09-25 05:22:34",
    "updated_at": "2024-09-25 05:22:34",
    "weight": 12,
    "extension_attributes": {
      "website_ids": [
        1
      ]
    },
    "product_links": [],
    "options": [],
    "media_gallery_entries": [],
    "tier_prices": [],
    "custom_attributes": [
      {
        "attribute_code": "page_layout",
        "value": "product-full-width"
      },
      {
        "attribute_code": "options_container",
        "value": "container2"
      },
      {
        "attribute_code": "url_key",
        "value": "hat"
      },
      {
        "attribute_code": "msrp_display_actual_price_type",
        "value": "0"
      },
      {
        "attribute_code": "gift_message_available",
        "value": "2"
      },
      {
        "attribute_code": "required_options",
        "value": "0"
      },
      {
        "attribute_code": "has_options",
        "value": "0"
      },
      {
        "attribute_code": "meta_title",
        "value": "Hat"
      },
      {
        "attribute_code": "meta_keyword",
        "value": "Hat"
      },
      {
        "attribute_code": "meta_description",
        "value": "Hat "
      },
      {
        "attribute_code": "tax_class_id",
        "value": "2"
      },
      {
        "attribute_code": "category_ids",
        "value": []
      },
      {
        "attribute_code": "country_of_manufacture",
        "value": "AI"
      }
    ]
  }
]
```

---

#### Products Updated

Products Updated trigger is used to fetch updated product records from Magento2 based on a specified time and limit.

##### Select Credentials and Action Events

<img src="/img/credentials/magento2/productsupdated-C.jpg" alt="Credential Config and Action selection" width="700" />

Click on **Continue** button.

---

##### Configuration

| Field | Description |
|------|-------------|
| Fetch Data Since | Specify the date and time to fetch updated product records. (e.g., `01/06/2024 10:37`) |
| Limit | Define the number of records to retrieve in a single execution. (e.g., `1` or `10`) |

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
    "id": 1,
    "sku": "Hat",
    "name": "Hat",
    "attribute_set_id": 4,
    "price": 34,
    "status": 1,
    "visibility": 4,
    "type_id": "simple",
    "created_at": "2024-09-25 05:22:34",
    "updated_at": "2024-09-25 05:22:34",
    "weight": 12,
    "extension_attributes": {
      "website_ids": [
        1
      ]
    },
    "product_links": [],
    "options": [],
    "media_gallery_entries": [],
    "tier_prices": [],
    "custom_attributes": [
      {
        "attribute_code": "page_layout",
        "value": "product-full-width"
      },
      {
        "attribute_code": "options_container",
        "value": "container2"
      },
      {
        "attribute_code": "url_key",
        "value": "hat"
      },
      {
        "attribute_code": "msrp_display_actual_price_type",
        "value": "0"
      },
      {
        "attribute_code": "gift_message_available",
        "value": "2"
      },
      {
        "attribute_code": "required_options",
        "value": "0"
      },
      {
        "attribute_code": "has_options",
        "value": "0"
      },
      {
        "attribute_code": "meta_title",
        "value": "Hat"
      },
      {
        "attribute_code": "meta_keyword",
        "value": "Hat"
      },
      {
        "attribute_code": "meta_description",
        "value": "Hat "
      },
      {
        "attribute_code": "tax_class_id",
        "value": "2"
      },
      {
        "attribute_code": "category_ids",
        "value": []
      },
      {
        "attribute_code": "country_of_manufacture",
        "value": "AI"
      }
    ]
  }
]
```

---

#### New Orders Created

New Orders Created trigger is used to fetch newly created order records from Magento2 based on a specified time and limit.

##### Select Credentials and Action Events

<img src="/img/credentials/magento2/neworderscreated-C.jpg" alt="Credential Config and Action selection" width="700" />

Click on **Continue** button.

---

##### Configuration

| Field | Description |
|------|-------------|
| Fetch Data Since | Specify the date and time to fetch newly created order records. (e.g., `01/06/2024 10:37`) |
| Limit | Define the number of records to retrieve in a single execution. (e.g., `1` or `10`) |

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
    "base_currency_code": "USD",
    "base_discount_amount": 0,
    "base_discount_invoiced": 0,
    "base_grand_total": 39,
    "base_discount_tax_compensation_amount": 0,
    "base_discount_tax_compensation_invoiced": 0,
    "base_shipping_amount": 5,
    "base_shipping_discount_amount": 0,
    "base_shipping_discount_tax_compensation_amnt": 0,
    "base_shipping_incl_tax": 5,
    "base_shipping_invoiced": 5,
    "base_shipping_tax_amount": 0,
    "base_subtotal": 34,
    "base_subtotal_incl_tax": 34,
    "base_subtotal_invoiced": 34,
    "base_tax_amount": 0,
    "base_tax_invoiced": 0,
    "base_total_due": 0,
    "base_total_invoiced": 39,
    "base_total_invoiced_cost": 0,
    "base_total_paid": 39,
    "base_to_global_rate": 1,
    "base_to_order_rate": 1,
    "billing_address_id": 2,
    "created_at": "2024-09-25 05:23:40",
    "customer_email": "test8901@yopmail.com",
    "customer_firstname": "हल्की",
    "customer_gender": 0,
    "customer_group_id": 1,
    "customer_id": 1,
    "customer_is_guest": 0,
    "customer_lastname": "वर्षा",
    "customer_note_notify": 0,
    "discount_amount": 0,
    "discount_invoiced": 0,
    "entity_id": 1,
    "global_currency_code": "USD",
    "grand_total": 39,
    "discount_tax_compensation_amount": 0,
    "discount_tax_compensation_invoiced": 0,
    "increment_id": "000000001",
    "is_virtual": 0,
    "order_currency_code": "USD",
    "protect_code": "1ef160111bf84b76fcbb0c3dfd665d2e",
    "quote_id": 1,
    "remote_ip": "115.242.177.34",
    "shipping_amount": 5,
    "shipping_description": "Flat Rate - Fixed",
    "shipping_discount_amount": 0,
    "shipping_discount_tax_compensation_amount": 0,
    "shipping_incl_tax": 5,
    "shipping_invoiced": 5,
    "shipping_tax_amount": 0,
    "state": "complete",
    "status": "complete",
    "store_currency_code": "USD",
    "store_id": 1,
    "store_name": "Main Website\nMain Website Store\nDefault Store View",
    "store_to_base_rate": 0,
    "store_to_order_rate": 0,
    "subtotal": 34,
    "subtotal_incl_tax": 34,
    "subtotal_invoiced": 34,
    "tax_amount": 0,
    "tax_invoiced": 0,
    "total_due": 0,
    "total_invoiced": 39,
    "total_item_count": 1,
    "total_paid": 39,
    "total_qty_ordered": 1,
    "updated_at": "2026-01-18 06:18:39",
    "weight": 12,
    "items": [
      {
        "amount_refunded": 0,
        "base_amount_refunded": 0,
        "base_discount_amount": 0,
        "base_discount_invoiced": 0,
        "base_discount_tax_compensation_amount": 0,
        "base_discount_tax_compensation_invoiced": 0,
        "base_original_price": 34,
        "base_price": 34,
        "base_price_incl_tax": 34,
        "base_row_invoiced": 34,
        "base_row_total": 34,
        "base_row_total_incl_tax": 34,
        "base_tax_amount": 0,
        "base_tax_invoiced": 0,
        "created_at": "2024-09-25 05:23:40",
        "discount_amount": 0,
        "discount_invoiced": 0,
        "discount_percent": 0,
        "free_shipping": 0,
        "discount_tax_compensation_amount": 0,
        "discount_tax_compensation_invoiced": 0,
        "is_qty_decimal": 0,
        "is_virtual": 0,
        "item_id": 1,
        "name": "Hat",
        "no_discount": 0,
        "order_id": 1,
        "original_price": 34,
        "price": 34,
        "price_incl_tax": 34,
        "product_id": 1,
        "product_type": "simple",
        "qty_canceled": 0,
        "qty_invoiced": 1,
        "qty_ordered": 1,
        "qty_refunded": 0,
        "qty_shipped": 1,
        "quote_item_id": 1,
        "row_invoiced": 34,
        "row_total": 34,
        "row_total_incl_tax": 34,
        "row_weight": 12,
        "sku": "Hat",
        "store_id": 1,
        "tax_amount": 0,
        "tax_invoiced": 0,
        "tax_percent": 0,
        "updated_at": "2024-09-25 05:26:07",
        "weee_tax_applied": "[]",
        "weight": 12
      }
    ],
    "billing_address": {
      "address_type": "billing",
      "city": "Xyz",
      "country_id": "US",
      "customer_address_id": 1,
      "email": "test890@yopmail.com",
      "entity_id": 2,
      "firstname": "हल्की",
      "lastname": "वर्षा",
      "parent_id": 1,
      "postcode": "787990",
      "region": "Colorado",
      "region_code": "CO",
      "region_id": 13,
      "street": [
        "abc street"
      ],
      "telephone": "1234567890"
    },
    "payment": {
      "account_status": null,
      "additional_information": [
        "Check / Money order"
      ],
      "amount_ordered": 39,
      "amount_paid": 39,
      "base_amount_ordered": 39,
      "base_amount_paid": 39,
      "base_shipping_amount": 5,
      "base_shipping_captured": 5,
      "cc_exp_year": "0",
      "cc_last4": null,
      "cc_ss_start_month": "0",
      "cc_ss_start_year": "0",
      "entity_id": 1,
      "method": "checkmo",
      "parent_id": 1,
      "shipping_amount": 5,
      "shipping_captured": 5
    },
    "status_histories": [
      {
        "comment": "Order Placed by admin admin using Login as Customer",
        "created_at": "2024-09-25 05:23:40",
        "entity_id": 2,
        "entity_name": "order",
        "is_customer_notified": 0,
        "is_visible_on_front": 0,
        "parent_id": 1,
        "status": "pending"
      },
      {
        "comment": "Order Placed by Store Administrator",
        "created_at": "2024-09-25 05:23:40",
        "entity_id": 1,
        "entity_name": "order",
        "is_customer_notified": 0,
        "is_visible_on_front": 1,
        "parent_id": 1,
        "status": "pending"
      }
    ],
    "extension_attributes": {
      "shipping_assignments": [
        {
          "shipping": {
            "address": {
              "address_type": "shipping",
              "city": "Xyz",
              "country_id": "US",
              "customer_address_id": 1,
              "email": "test890@yopmail.com",
              "entity_id": 1,
              "firstname": "हल्की",
              "lastname": "वर्षा",
              "parent_id": 1,
              "postcode": "787990",
              "region": "Colorado",
              "region_code": "CO",
              "region_id": 13,
              "street": [
                "abc street"
              ],
              "telephone": "1234567890"
            },
            "method": "flatrate_flatrate",
            "total": {
              "base_shipping_amount": 5,
              "base_shipping_discount_amount": 0,
              "base_shipping_discount_tax_compensation_amnt": 0,
              "base_shipping_incl_tax": 5,
              "base_shipping_invoiced": 5,
              "base_shipping_tax_amount": 0,
              "shipping_amount": 5,
              "shipping_discount_amount": 0,
              "shipping_discount_tax_compensation_amount": 0,
              "shipping_incl_tax": 5,
              "shipping_invoiced": 5,
              "shipping_tax_amount": 0
            }
          },
          "items": [
            {
              "amount_refunded": 0,
              "base_amount_refunded": 0,
              "base_discount_amount": 0,
              "base_discount_invoiced": 0,
              "base_discount_tax_compensation_amount": 0,
              "base_discount_tax_compensation_invoiced": 0,
              "base_original_price": 34,
              "base_price": 34,
              "base_price_incl_tax": 34,
              "base_row_invoiced": 34,
              "base_row_total": 34,
              "base_row_total_incl_tax": 34,
              "base_tax_amount": 0,
              "base_tax_invoiced": 0,
              "created_at": "2024-09-25 05:23:40",
              "discount_amount": 0,
              "discount_invoiced": 0,
              "discount_percent": 0,
              "free_shipping": 0,
              "discount_tax_compensation_amount": 0,
              "discount_tax_compensation_invoiced": 0,
              "is_qty_decimal": 0,
              "is_virtual": 0,
              "item_id": 1,
              "name": "Hat",
              "no_discount": 0,
              "order_id": 1,
              "original_price": 34,
              "price": 34,
              "price_incl_tax": 34,
              "product_id": 1,
              "product_type": "simple",
              "qty_canceled": 0,
              "qty_invoiced": 1,
              "qty_ordered": 1,
              "qty_refunded": 0,
              "qty_shipped": 1,
              "quote_item_id": 1,
              "row_invoiced": 34,
              "row_total": 34,
              "row_total_incl_tax": 34,
              "row_weight": 12,
              "sku": "Hat",
              "store_id": 1,
              "tax_amount": 0,
              "tax_invoiced": 0,
              "tax_percent": 0,
              "updated_at": "2024-09-25 05:26:07",
              "weee_tax_applied": "[]",
              "weight": 12
            }
          ]
        }
      ],
      "payment_additional_info": [
        {
          "key": "method_title",
          "value": "Check / Money order"
        }
      ],
      "applied_taxes": [],
      "item_applied_taxes": []
    }
  }
]
```

---

#### New Abandoned Checkout Created

New Abandoned Checkout Created trigger is used to fetch newly created abandoned checkout records from Magento2 based on a specified time and limit.

##### Select Credentials and Action Events

<img src="/img/credentials/magento2/newabandonedcheckout-C.jpg" alt="Credential Config and Action selection" width="700" />

Click on **Continue** button.

---

##### Configuration

| Field | Description |
|------|-------------|
| Fetch Data Since | Specify the date and time to fetch newly created abandoned checkout records. (e.g., `01/06/2024 10:37`) |
| Limit | Define the number of records to retrieve in a single execution. (e.g., `1` or `10`) |

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
    "id": 387,
    "items": [
      {
        "qty": 1,
        "sku": "MTL-NUT-4582",
        "name": "Stainless Steel Lock Nut M10",
        "price": 739.02,
        "item_id": 219,
        "quote_id": "387",
        "product_type": "simple"
      },
      {
        "qty": 1,
        "sku": "TV1234",
        "name": "This a TV Product in English",
        "price": 739.02,
        "item_id": 220,
        "quote_id": "387",
        "product_type": "simple"
      },
      {
        "qty": 1,
        "sku": "ITEM-000007",
        "name": "Premium Steel Bolt",
        "price": 739.02,
        "item_id": 221,
        "quote_id": "387",
        "product_type": "simple"
      }
    ],
    "currency": {
      "base_currency_code": "USD",
      "base_to_quote_rate": 1,
      "store_to_base_rate": 0,
      "base_to_global_rate": 1,
      "quote_currency_code": "USD",
      "store_currency_code": "USD",
      "store_to_quote_rate": 0,
      "global_currency_code": "USD"
    },
    "customer": {
      "id": 3677,
      "email": "nilanjana.r@appseconnect.com",
      "group_id": 1,
      "lastname": "Roy",
      "store_id": 1,
      "addresses": [
        {
          "id": 357,
          "city": "Kolkata",
          "region": {
            "region": "West Bengal",
            "region_id": 604,
            "region_code": "WB"
          },
          "street": [
            "DLF Galleria New Town",
            "NewTown Action Area 1A"
          ],
          "company": "AEC Company",
          "lastname": "Roy",
          "postcode": "700156",
          "firstname": "Nilanjana",
          "region_id": 604,
          "telephone": "08877665656",
          "country_id": "IN",
          "customer_id": 3677,
          "default_billing": true,
          "default_shipping": true
        }
      ],
      "firstname": "Nilanjana",
      "created_at": "2026-04-28 10:21:44",
      "created_in": "Default Store View",
      "updated_at": "2026-04-28 11:36:10",
      "website_id": 1,
      "default_billing": "357",
      "default_shipping": "357",
      "extension_attributes": {
        "is_subscribed": false
      },
      "disable_auto_group_change": 0
    },
    "store_id": 1,
    "is_active": true,
    "items_qty": 3,
    "created_at": "2026-04-28 11:36:26",
    "is_virtual": false,
    "updated_at": "2026-04-28 11:49:55",
    "items_count": 3,
    "orig_order_id": 0,
    "billing_address": {
      "id": 775,
      "city": null,
      "email": "nilanjana.r@appseconnect.com",
      "region": null,
      "street": [
        ""
      ],
      "lastname": null,
      "postcode": null,
      "firstname": null,
      "region_id": null,
      "telephone": null,
      "country_id": null,
      "customer_id": 3677,
      "region_code": null,
      "same_as_billing": 0,
      "save_in_address_book": 0
    },
    "customer_is_guest": false,
    "customer_note_notify": true,
    "extension_attributes": {
      "shipping_assignments": [
        {
          "items": [
            {
              "qty": 1,
              "sku": "MTL-NUT-4582",
              "name": "Stainless Steel Lock Nut M10",
              "price": 739.02,
              "item_id": 219,
              "quote_id": "387",
              "product_type": "simple"
            },
            {
              "qty": 1,
              "sku": "TV1234",
              "name": "This a TV Product in English",
              "price": 739.02,
              "item_id": 220,
              "quote_id": "387",
              "product_type": "simple"
            },
            {
              "qty": 1,
              "sku": "ITEM-000007",
              "name": "Premium Steel Bolt",
              "price": 739.02,
              "item_id": 221,
              "quote_id": "387",
              "product_type": "simple"
            }
          ],
          "shipping": {
            "method": null,
            "address": {
              "id": 776,
              "city": null,
              "email": "nilanjana.r@appseconnect.com",
              "region": null,
              "street": [
                ""
              ],
              "lastname": null,
              "postcode": null,
              "firstname": null,
              "region_id": null,
              "telephone": null,
              "country_id": null,
              "customer_id": 3677,
              "region_code": null,
              "same_as_billing": 1,
              "save_in_address_book": 0
            }
          }
        }
      ]
    },
    "customer_tax_class_id": 3
  }
]
```

</TabItem>

<TabItem value="actions" label="Actions">

---

### Customers Actions

#### Create a Customer

Create a Customer action is used to create a new customer record in Magento2 with customer details and address information.

##### Select Credentials and Action Events

<img src="/img/credentials/magento2/createcustomer-C.jpg" alt="Credential Config and Action selection" width="700" />

Click on **Continue** button.

---

##### Configuration

| Field | Description |
|------|-------------|
| Email | Specify the customer email address. (e.g., `demon.mavin@yopmail.com`) |
| First Name | Enter the first name of the customer. (e.g., `Mavin`) |
| Last Name | Enter the last name of the customer. (e.g., `Demon`) |
| Addresses | Configure one or more customer addresses. |
| Street | Specify the street address for the customer. (e.g., `Valley Cafe Road`) |
| Default Shipping | Enable this option to set the address as the default shipping address. |
| Default Billing | Enable this option to set the address as the default billing address. |
| City | Specify the city name for the address. (e.g., `Hyderabad`) |
| Postcode | Enter the postal or ZIP code for the address. (e.g., `500038`) |
| Telephone | Specify the customer contact number. (e.g., `9876543456`) |

:::note
Email, First Name, Last Name, and Street fields are mandatory. Multiple addresses can be added if required.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/magento2/createcustomer-Config1.jpg" alt="Magento2 Create a Customer - Example Configuration" width="700" />
<img src="/img/credentials/magento2/createcustomer-Config2.jpg" alt="Magento2 Create a Customer - Example Configuration" width="700" />
<img src="/img/credentials/magento2/createcustomer-Config3.jpg" alt="Magento2 Create a Customer - Example Configuration" width="700" />

---

##### Result


```json
[
  {
    "id": 3740,
    "group_id": 1,
    "created_at": "2026-06-04 13:14:26",
    "updated_at": "2026-06-04 13:14:26",
    "created_in": "Default Store View",
    "email": "demon.mavin@yopmail.com",
    "firstname": "Mavin",
    "lastname": "Demon",
    "store_id": 1,
    "website_id": 1,
    "addresses": [],
    "disable_auto_group_change": 0,
    "extension_attributes": {
      "is_subscribed": false
    }
  }
]
```

---

#### Update a Customer

Update a Customer action is used to update existing customer details in Magento2 using the specified customer ID.

##### Select Credentials and Action Events

<img src="/img/credentials/magento2/updatecustomer-C.jpg" alt="Credential Config and Action selection" width="700" />

Click on **Continue** button.

---

##### Configuration

| Field | Description |
|------|-------------|
| Customer Id | Specify the unique customer ID that needs to be updated. (e.g., `3740`) |
| First Name | Enter the updated first name of the customer. (e.g., `Kevin`) |
| Last Name | Enter the updated last name of the customer. (e.g., `Kantura`) |
| Email | Specify the updated customer email address. (e.g., `demon1.mavin@yopmail.com`) |
| Website ID | Specify the Magento2 website ID associated with the customer. (e.g., `1`) |

:::note
Customer Id is mandatory. Other customer details can be updated based on the requirement.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/magento2/updatecustomer-Config.jpg" alt="Magento2 Update a Customer - Example Configuration" width="700" />

---

##### Result


```json
[
  {
    "id": 3740,
    "group_id": 1,
    "created_at": "2026-06-04 13:14:26",
    "updated_at": "2026-06-05 05:15:07",
    "created_in": "Default Store View",
    "email": "demon1.mavin@yopmail.com",
    "firstname": "Kevin",
    "lastname": "Kantura",
    "store_id": 1,
    "website_id": 1,
    "addresses": [],
    "disable_auto_group_change": 0,
    "extension_attributes": {
      "is_subscribed": false
    }
  }
]
```

---

#### Get Customer by Email Address

Get Customer by Email Address action is used to retrieve customer details from Magento2 using the specified email address.

##### Select Credentials and Action Events

<img src="/img/credentials/magento2/getcustomerbyemailaddress-C.jpg" alt="Credential Config and Action selection" width="700" />

Click on **Continue** button.

---

##### Configuration

| Field | Description |
|------|-------------|
| Email Address | Specify the customer email address to retrieve customer details. (e.g., `demon1.mavin@yopmail.com`) |

:::note
Email Address is mandatory and should contain a valid customer email available in Magento2.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/magento2/getcustomerbyemailaddress-Config.jpg" alt="Magento2 Get Customer by Email Address - Example Configuration" width="700" />

---

##### Result


```json
[
  {
    "items": [
      {
        "id": 3740,
        "group_id": 1,
        "created_at": "2026-06-04 13:14:26",
        "updated_at": "2026-06-05 05:15:07",
        "created_in": "Default Store View",
        "email": "demon1.mavin@yopmail.com",
        "firstname": "Kevin",
        "lastname": "Kantura",
        "store_id": 1,
        "website_id": 1,
        "addresses": [],
        "disable_auto_group_change": 0,
        "extension_attributes": {
          "is_subscribed": false
        }
      }
    ],
    "search_criteria": {
      "filter_groups": [
        {
          "filters": [
            {
              "field": "email",
              "value": "demon1.mavin@yopmail.com",
              "condition_type": "eq"
            }
          ]
        }
      ]
    },
    "total_count": 1
  }
]
```

---

### Customer Address Actions

#### Get Customer Billing Addresses

Get Customer Billing Addresses action is used to retrieve billing address details associated with a specific customer in Magento2.

##### Select Credentials and Action Events

<img src="/img/credentials/magento2/getcustomerbillingaddresses-C.jpg" alt="Credential Config and Action selection" width="700" />

Click on **Continue** button.

---

##### Configuration

| Field | Description |
|------|-------------|
| Customer Id (Identifier) | Specify the unique customer ID to retrieve billing address details. (e.g., `3740`) |

:::note
Customer Id (Identifier) is mandatory and should contain a valid Magento2 customer ID.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/magento2/getcustomerbillingaddresses-Config1.jpg" alt="Magento2 Get Customer Billing Addresses - Example Configuration" width="700" />

---

##### Result


```json
[
  {
    "id": 362,
    "customer_id": 3740,
    "region": {
      "region_code": "TG",
      "region": "Telangana",
      "region_id": 600
    },
    "region_id": 600,
    "country_id": "IN",
    "street": [
      "Voxvalley street, lgitech building"
    ],
    "telephone": "9087654522",
    "postcode": "500038",
    "city": "Hyderabad",
    "firstname": "Amrin",
    "lastname": "Kantura",
    "default_shipping": true,
    "default_billing": true
  }
]
```

---

#### Get Customer Shipping Addresses

Get Customer Shipping Addresses action is used to retrieve shipping address details associated with a specific customer in Magento2.

##### Select Credentials and Action Events

<img src="/img/credentials/magento2/getcustomershippingaddresess-C.jpg" alt="Credential Config and Action selection" width="700" />

Click on **Continue** button.

---

##### Configuration

| Field | Description |
|------|-------------|
| Customer Id (Identifier) | Specify the unique customer ID to retrieve shipping address details. (e.g., `3740`) |

:::note
Customer Id (Identifier) is mandatory and should contain a valid Magento2 customer ID.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/magento2/getcustomershippingaddresess-Config1.jpg" alt="Magento2 Get Customer Shipping Addresses - Example Configuration" width="700" />

---

##### Result


```json
[
  {
    "id": 362,
    "customer_id": 3740,
    "region": {
      "region_code": "TG",
      "region": "Telangana",
      "region_id": 600
    },
    "region_id": 600,
    "country_id": "IN",
    "street": [
      "Voxvalley street, lgitech building"
    ],
    "telephone": "9087654522",
    "postcode": "500038",
    "city": "Hyderabad",
    "firstname": "Amrin",
    "lastname": "Kantura",
    "default_shipping": true,
    "default_billing": true
  }
]
```

---

### Products Actions

#### Create a Product

Create a Product action is used to create a new product in Magento2 with product details such as SKU, product name, price, status, and product type.

##### Select Credentials and Action Events

<img src="/img/credentials/magento2/createaproduct.jpg" alt="Credential Config and Action selection" width="700" />

Click on **Continue** button.

---

##### Configuration

| Field | Description |
|------|-------------|
| SKU | Specify the unique SKU (Stock Keeping Unit) for the product. (e.g., `LENOVO-V1`) |
| Product Name | Enter the name of the product. (e.g., `Venovo-HP Elite book`) |
| Attribute Set ID | Specify the Magento2 attribute set ID associated with the product. (e.g., `4`) |
| Price | Define the product price. (e.g., `80000`) |
| Status | Select the product status. (e.g., `Enabled`) |
| Product Type | Specify the type of product to create. (e.g., `Simple`) |

:::note
SKU, Product Name, Attribute Set ID, and Price are mandatory fields. Status and Product Type can be configured based on product requirements.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/magento2/createaproduct-Config1.jpg" alt="Magento2 Create a Product - Example Configuration" width="700" />

---

##### Result


```json
[
  {
    "id": 167,
    "sku": "LENOVO-V1",
    "name": "Venovo-HP Elite book",
    "attribute_set_id": 4,
    "price": 80000,
    "status": 1,
    "visibility": 4,
    "type_id": "simple",
    "created_at": "2026-06-05 06:03:53",
    "updated_at": "2026-06-05 06:03:53",
    "extension_attributes": {
      "website_ids": [
        1
      ],
      "stock_item": {
        "item_id": 167,
        "product_id": 167,
        "stock_id": 1,
        "qty": null,
        "is_in_stock": false,
        "is_qty_decimal": false,
        "show_default_notification_message": false,
        "use_config_min_qty": true,
        "min_qty": 0,
        "use_config_min_sale_qty": 1,
        "min_sale_qty": 1,
        "use_config_max_sale_qty": true,
        "max_sale_qty": 10000,
        "use_config_backorders": true,
        "backorders": 0,
        "use_config_notify_stock_qty": true,
        "notify_stock_qty": 1,
        "use_config_qty_increments": true,
        "qty_increments": 0,
        "use_config_enable_qty_inc": true,
        "enable_qty_increments": false,
        "use_config_manage_stock": true,
        "manage_stock": true,
        "low_stock_date": null,
        "is_decimal_divided": false,
        "stock_status_changed_auto": 0
      }
    },
    "options": [],
    "media_gallery_entries": [],
    "custom_attributes": [
      {
        "attribute_code": "options_container",
        "value": "container2"
      },
      {
        "attribute_code": "url_key",
        "value": "venovo-hp-elite-book"
      },
      {
        "attribute_code": "msrp_display_actual_price_type",
        "value": "0"
      },
      {
        "attribute_code": "required_options",
        "value": "0"
      },
      {
        "attribute_code": "has_options",
        "value": "0"
      },
      {
        "attribute_code": "tax_class_id",
        "value": "2"
      },
      {
        "attribute_code": "category_ids",
        "value": []
      }
    ]
  }
]
```

---

#### Update a Product

Update a Product action is used to modify existing product details in Magento2 using the specified product SKU.

##### Select Credentials and Action Events

<img src="/img/credentials/magento2/updateaproduct-C.jpg" alt="Credential Config and Action selection" width="700" />

Click on **Continue** button.

---

##### Configuration

| Field | Description |
|------|-------------|
| SKU | Specify the unique SKU (Stock Keeping Unit) of the product to update. (e.g., `LENOVO-V1`) |
| Product Name | Enter the updated product name. (e.g., `HP-Elite Book`) |
| Attribute Set ID | Specify the Magento2 attribute set ID associated with the product. (e.g., `4`) |
| Price | Define the updated product price. (e.g., `99999`) |
| Visibility | Specify the product visibility setting. (e.g., `Catalog+Search`) |

:::note
SKU is mandatory. Other product fields are optional and can be updated based on the requirement.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/magento2/updateaproduct-Config1.jpg" alt="Magento2 Update a Product - Example Configuration" width="700" />

---

##### Result


```json
[
  {
    "id": 167,
    "sku": "LENOVO-V1",
    "name": "HP-Elite Book",
    "attribute_set_id": 4,
    "price": 99999,
    "status": 1,
    "visibility": 4,
    "type_id": "simple",
    "created_at": "2026-06-05 06:03:53",
    "updated_at": "2026-06-05 07:14:10",
    "extension_attributes": {
      "website_ids": [
        1
      ],
      "stock_item": {
        "item_id": 167,
        "product_id": 167,
        "stock_id": 1,
        "qty": null,
        "is_in_stock": false,
        "is_qty_decimal": false,
        "show_default_notification_message": false,
        "use_config_min_qty": true,
        "min_qty": 0,
        "use_config_min_sale_qty": 1,
        "min_sale_qty": 1,
        "use_config_max_sale_qty": true,
        "max_sale_qty": 10000,
        "use_config_backorders": true,
        "backorders": 0,
        "use_config_notify_stock_qty": true,
        "notify_stock_qty": 1,
        "use_config_qty_increments": true,
        "qty_increments": 0,
        "use_config_enable_qty_inc": true,
        "enable_qty_increments": false,
        "use_config_manage_stock": true,
        "manage_stock": true,
        "low_stock_date": "2026-06-05 07:14:10",
        "is_decimal_divided": false,
        "stock_status_changed_auto": 1
      }
    },
    "product_links": [],
    "options": [],
    "media_gallery_entries": [],
    "tier_prices": [],
    "custom_attributes": [
      {
        "attribute_code": "options_container",
        "value": "container2"
      },
      {
        "attribute_code": "url_key",
        "value": "venovo-hp-elite-book"
      },
      {
        "attribute_code": "msrp_display_actual_price_type",
        "value": "0"
      },
      {
        "attribute_code": "required_options",
        "value": "0"
      },
      {
        "attribute_code": "has_options",
        "value": "0"
      },
      {
        "attribute_code": "tax_class_id",
        "value": "2"
      },
      {
        "attribute_code": "category_ids",
        "value": []
      }
    ]
  }
]
```

---

#### Get Product by SKU

Get Product by SKU action is used to retrieve product details from Magento2 using the specified product SKU.

##### Select Credentials and Action Events

<img src="/img/credentials/magento2/getproductbysku-C.jpg" alt="Credential Config and Action selection" width="700" />

Click on **Continue** button.

---

##### Configuration

| Field | Description |
|------|-------------|
| SKU | Specify the unique SKU (Stock Keeping Unit) of the product to retrieve details. (e.g., `LENOVO-V1`) |

:::note
SKU is mandatory and should contain a valid Magento2 product SKU.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/magento2/getproductbysku-config1.jpg" alt="Magento2 Get Product by SKU - Example Configuration" width="700" />

---

##### Result


```json
[
  {
    "id": 167,
    "sku": "LENOVO-V1",
    "name": "HP-Elite Book",
    "attribute_set_id": 4,
    "price": 99999,
    "status": 1,
    "visibility": 4,
    "type_id": "simple",
    "created_at": "2026-06-05 06:03:53",
    "updated_at": "2026-06-05 07:14:10",
    "extension_attributes": {
      "website_ids": [
        1
      ],
      "stock_item": {
        "item_id": 167,
        "product_id": 167,
        "stock_id": 1,
        "qty": null,
        "is_in_stock": false,
        "is_qty_decimal": false,
        "show_default_notification_message": false,
        "use_config_min_qty": true,
        "min_qty": 0,
        "use_config_min_sale_qty": 1,
        "min_sale_qty": 1,
        "use_config_max_sale_qty": true,
        "max_sale_qty": 10000,
        "use_config_backorders": true,
        "backorders": 0,
        "use_config_notify_stock_qty": true,
        "notify_stock_qty": 1,
        "use_config_qty_increments": true,
        "qty_increments": 0,
        "use_config_enable_qty_inc": true,
        "enable_qty_increments": false,
        "use_config_manage_stock": true,
        "manage_stock": true,
        "low_stock_date": "2026-06-05 07:14:10",
        "is_decimal_divided": false,
        "stock_status_changed_auto": 1
      }
    },
    "product_links": [],
    "options": [],
    "media_gallery_entries": [],
    "tier_prices": [],
    "custom_attributes": [
      {
        "attribute_code": "options_container",
        "value": "container2"
      },
      {
        "attribute_code": "url_key",
        "value": "venovo-hp-elite-book"
      },
      {
        "attribute_code": "msrp_display_actual_price_type",
        "value": "0"
      },
      {
        "attribute_code": "required_options",
        "value": "0"
      },
      {
        "attribute_code": "has_options",
        "value": "0"
      },
      {
        "attribute_code": "tax_class_id",
        "value": "2"
      },
      {
        "attribute_code": "category_ids",
        "value": []
      }
    ]
  }
]
```

---

### Invoice Actions

#### Create Invoice

Create Invoice action is used to generate a new invoice for an existing order in Magento2 using the specified order ID and invoice item details.

##### Select Credentials and Action Events

<img src="/img/credentials/magento2/createinvoice-C.jpg" alt="Credential Config and Action selection" width="700" />

Click on **Continue** button.

---

##### Configuration

| Field | Description |
|------|-------------|
| Order Id | Specify the unique order ID for which the invoice should be created. (e.g., `12`) |
| Invoice Items | Configure one or more invoice items associated with the order. |
| Order Item Id | Specify the unique order item ID to include in the invoice. (e.g., `17`) |
| Quantity | Define the quantity of items to invoice. (e.g., `1`) |

:::note
Order Id, Order Item Id, and Quantity are mandatory fields. Multiple invoice items can be added if required.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/magento2/createinvoice-Config1.jpg" alt="Magento2 Create Invoice - Example Configuration" width="700" />

---

##### Result


```json
[
  {
    "value": "\"2\""
  }
]
```

---

### Shipment Actions

#### Create Shipment

Create Shipment action is used to create a shipment for an existing order in Magento2 with shipment item and tracking details.

##### Select Credentials and Action Events

<img src="/img/credentials/magento2/createshipment-C.jpg" alt="Credential Config and Action selection" width="700" />

Click on **Continue** button.

---

##### Configuration

| Field | Description |
|------|-------------|
| Order Id | Specify the unique order ID for which the shipment should be created. (e.g., `12`) |
| Shipment Items | Configure one or more shipment items associated with the order. |
| Order Item Id | Specify the unique order item ID to include in the shipment. (e.g., `17`) |
| Quantity | Define the quantity of items to ship. (e.g., `1`) |
| Tracking Details | Configure shipment tracking information. |
| Carrier Code | Specify the shipping carrier name or code. (e.g., `Federal Express`) |
| Tracking Number | Enter the shipment tracking number. (e.g., `TRACK-1234`) |

:::note
Order Id is mandatory. Shipment Items and Tracking Details can be added based on shipment requirements.
:::

Click on **Continue**, then **Run** node.

---

##### Example Configuration

<img src="/img/credentials/magento2/createshipment-Config1.jpg" alt="Magento2 Create Shipment - Example Configuration" width="700" />

---

##### Result


```json
[
  {
    "value": "\"5\""
  }
]
```
</TabItem>
</Tabs>

---
## Support
If you’re unsure about any field or face connection issues, reach out to our support team at [support@appse.ai](mailto:support@appse.ai)
