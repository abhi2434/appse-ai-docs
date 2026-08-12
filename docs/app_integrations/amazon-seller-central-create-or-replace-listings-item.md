---
title: "Create or Replace Listings Item — Amazon Seller Central"
slug: /app-integrations/amazon-seller-central-create-or-replace-listings-item/
unlisted: true
---

[← Back to Amazon Seller Central](/app-integrations/amazon-seller-central/)

This page explains the **Create or Replace Listings Item** action in detail — the fields it expects, how it maps to Amazon's Selling Partner API, and what a request and response look like.

---

## What this action does

**Create or Replace Listings Item** calls Amazon's **Listings Items API (v2021-08-01)**, using the `PUT` operation:

```
PUT /listings/2021-08-01/items/{sellerId}/{sku}
```

It creates a **new** listing for a SKU, or if the SKU already exists, **fully replaces** it. This is a complete overwrite — every required attribute for the product type must be included in the request, even ones that aren't changing. Amazon does not merge your submission with the existing listing.

:::tip Only changing one thing?
If you only need to update price or inventory, use the lighter-weight **Update Item Price** or **Update Item Inventory** actions instead — they use `PATCH` and only touch the field you specify, so you don't have to resend the full attribute set.
:::

---

## Before you begin

Amazon validates every submitted attribute against the schema for the product's **Product Type** (e.g., `SHOES`, `LUGGAGE`, `PRODUCT`). Two actions help you prepare:

1. **Search Product Types** — find the correct Product Type name for your category.
2. **Get Product Type Definition** — retrieves the JSON schema listing every required and optional attribute for that Product Type, in the target marketplace.

Build your **Attributes** payload against that schema before calling this action — missing a required attribute is the most common cause of a failed submission.

---

## Input fields

| Field | Sent as | Required | Description |
|---|---|---|---|
| **Seller ID** | path | Yes | Your Amazon Selling Partner ID (e.g., `AXXXXXXXXXXXXX`), found in Seller Central → Account Info. |
| **SKU** | path | Yes | The seller SKU to create or replace. Special characters must be URL-encoded. |
| **Marketplace** | query | Yes | The Amazon marketplace the listing belongs to (e.g., `ATVPDKIKX0DER` for amazon.com). |
| **Included Data** | query | No | Comma-separated data sets to return in the response — `issues`, `attributes`, `summaries`, `offers`, `fulfillmentAvailability`. Defaults to `issues`, which surfaces validation errors. |
| **Mode** | query | No | Leave blank to apply changes live, or set to `VALIDATION_PREVIEW` to dry-run the submission — Amazon validates it and reports issues without actually changing the listing. |
| **Issues Locale** | query | No | BCP-47 locale for issue messages (e.g., `en_US`, `de_DE`). Defaults to the marketplace's primary locale. |
| **Product Type** | body | Yes | The Amazon product type name for this SKU (e.g., `PRODUCT`). Must match a valid type in the target marketplace. |
| **Requirements** | body | Yes | Which attribute set Amazon validates: `LISTING` (default, validates everything), `LISTING_PRODUCT_ONLY` (identity attributes only), or `LISTING_OFFER_ONLY` (offer/price attributes only). |
| **Attributes (JSON)** | body | Yes | The full attribute object for the product type. Must satisfy every attribute the schema marks as required — this is a complete replace, not a partial update. |

---

## Sample request

```json
PUT /listings/2021-08-01/items/A1B2C3D4E5F6G7/MY-SKU-001?marketplaceIds=ATVPDKIKX0DER&includedData=issues

{
  "productType": "PRODUCT",
  "requirements": "LISTING",
  "attributes": {
    "item_name": [
      { "value": "Stainless Steel Water Bottle, 750ml", "marketplace_id": "ATVPDKIKX0DER" }
    ],
    "brand": [
      { "value": "AcmeHydro", "marketplace_id": "ATVPDKIKX0DER" }
    ],
    "manufacturer": [
      { "value": "AcmeHydro", "marketplace_id": "ATVPDKIKX0DER" }
    ],
    "purchasable_offer": [
      {
        "marketplace_id": "ATVPDKIKX0DER",
        "currency": "USD",
        "our_price": [
          { "schedule": [{ "value_with_tax": 19.99 }] }
        ]
      }
    ],
    "fulfillment_availability": [
      { "fulfillment_channel_code": "DEFAULT", "quantity": 100 }
    ]
  }
}
```

:::note
Attribute names and structure (e.g., `item_name`, `purchasable_offer`) come directly from the Product Type schema returned by **Get Product Type Definition** — they vary by category. The example above is illustrative, not universal.
:::

---

## Sample response

**Success (`202 Accepted`)** — Amazon accepts the submission for processing:

```json
{
  "sku": "MY-SKU-001",
  "status": "ACCEPTED",
  "submissionId": "5375920392",
  "identifiers": [
    {
      "marketplaceId": "ATVPDKIKX0DER",
      "asin": "B0EXAMPLE1"
    }
  ]
}
```

**Validation issues (`200 OK` with `status: INVALID`)** — Amazon rejects the submission and lists why:

```json
{
  "sku": "MY-SKU-001",
  "status": "INVALID",
  "submissionId": "5375920393",
  "issues": [
    {
      "code": "90220",
      "message": "'bullet_point' is required but not supplied.",
      "severity": "ERROR",
      "attributeNames": ["bullet_point"]
    }
  ]
}
```

Because the default **Included Data** is `issues`, validation problems are always visible in the response — no separate lookup is needed.

---

## Troubleshooting

| Symptom | Likely cause |
|---|---|
| `status: INVALID` with missing-attribute issues | A required attribute for the Product Type wasn't included. Re-check the schema from **Get Product Type Definition**. |
| `400 Bad Request` on the call itself | **Product Type** name doesn't exist in the target marketplace, or **Marketplace** doesn't match your seller account's registered marketplaces. |
| `403 Forbidden` | Your SP-API authorization doesn't have Listings access, or the seller account isn't registered to sell in the category. |
| Listing appears unchanged after a successful call | Amazon queues the submission — allow a short delay, then confirm with **Get Listings Item**. |

**Tip:** Set **Mode** to `VALIDATION_PREVIEW` first to test a payload without pushing it live, especially for a new Product Type you haven't submitted before.

---

## Related actions

- **Search Product Types** — find the Product Type name for your category.
- **Get Product Type Definition** — retrieve the required attribute schema.
- **Update Item Price** / **Update Item Inventory** — lighter-weight partial updates for existing listings.
- **Get Listings Item** — confirm the listing after submission.

---

[← Back to Amazon Seller Central](/app-integrations/amazon-seller-central/)
