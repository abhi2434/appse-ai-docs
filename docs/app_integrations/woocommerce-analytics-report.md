---
title: "WooCommerce Analytics Report"
slug: /app-integrations/woocommerce-analytics-report/
description: Learn how to set up WooCommerce Analytics Report and use it on appse ai.
---

WooCommerce Analytics Report is the built-in reporting and insights engine for WooCommerce stores. It provides detailed data on orders, revenue, products, customers, coupons, taxes, downloads, and stock levels. Integrating WooCommerce Analytics Report with appse ai lets you automate the retrieval of store performance data, build real-time dashboards, and trigger intelligent workflows based on your e-commerce metrics — all within your AI-powered automation pipelines.

---

## Set Up Credential

:::info

Before creating a credential, ensure you have a WooCommerce store running on WordPress with the WooCommerce plugin (version 3.5 or later) installed and activated. The Analytics API uses the same REST API keys as WooCommerce.

:::

### Required Fields

| Field              | Description                                                                                                                |
| ------------------ | -------------------------------------------------------------------------------------------------------------------------- |
| **Connection Name** | A label to identify this credential within appse ai.                                                                      |
| **Store Address**   | The subdomain of your WooCommerce store (e.g., `yourstore` from `https://yourstore.com`).                                 |
| **Consumer Key**    | API consumer key generated from WooCommerce REST API settings.                                                             |
| **Consumer Secret** | API consumer secret generated from WooCommerce REST API settings.                                                          |

:::note
The Consumer Secret is shown only once after generation. Store it securely before closing the WooCommerce settings page.
:::

---

### Step-by-Step Guide

#### 1. Open the Credential Form

In appse ai, click **WooCommerce Analytics Report** and choose **Create a new Credential** from the application list.

<img src="/img/credentials/woocommerce-analytics-report/create-new-credential-appseai-woocommerce-analytics-report.png" alt="appse ai WooCommerce Analytics Report — create new credential" width="700"/>

This opens the authentication type selection screen. Choose your preferred authentication method.

<img src="/img/credentials/woocommerce-analytics-report/woocommerce_cred_form.png" alt="appse ai WooCommerce Analytics Report — authentication type selection" width="700"/>

Select **API Key Authentication** to authenticate using Consumer Key and Consumer Secret as query parameters (recommended).

<img src="/img/credentials/woocommerce-analytics-report/select-auth-type.png" alt="appse ai WooCommerce Analytics Report — select API Key authentication type" width="700"/>

<img src="/img/credentials/woocommerce-analytics-report/api_key_cred.png" alt="appse ai WooCommerce Analytics Report — API Key credential form" width="700"/>

Alternatively, select **Basic Authentication** to pass the Consumer Key and Consumer Secret as Basic Auth credentials.

<img src="/img/credentials/woocommerce-analytics-report/basic_cred.png" alt="appse ai WooCommerce Analytics Report — Basic Auth credential form" width="700"/>

Enter your **Connection Name** and **Store Address** in the form.


#### 2. Log in to Your WordPress Admin Dashboard

Log in to the WordPress admin dashboard where WooCommerce is installed. If WooCommerce is not yet installed, navigate to the **Plugins** section in the left sidebar, search for **WooCommerce**, and click **Install** and then **Activate**.

<img src="/img/credentials/woocommerce-analytics-report/select-woocommerce-plugin.png" alt="Install and activate WooCommerce plugin from WordPress Plugins" width="700"/>

#### 3. Navigate to WooCommerce REST API Settings

Go to **WooCommerce → Settings** from the left sidebar.

<img src="/img/credentials/woocommerce-analytics-report/settings.png" alt="WooCommerce Settings menu" width="700"/>

Click the **Advanced** tab, then select **REST API**.

<img src="/img/credentials/woocommerce-analytics-report/advanced_settings.png" alt="WooCommerce Advanced Tab" width="700"/>


#### 4. Create a New API Key

On the REST API settings page, click **Add key**.

<img src="/img/credentials/woocommerce-analytics-report/add_key.png" alt="WooCommerce Add Key button" width="700"/>


#### 5. Configure API Key Permissions

Fill in the key details:

- **Description**: Enter a name such as `appse ai Analytics Integration`.
- **User**: Select a WordPress user with **Administrator** privileges.
- **Permissions**: Select **Read/Write** to allow full analytics data access.

<img src="/img/credentials/woocommerce-analytics-report/add-api-key.png" alt="WooCommerce Configure API Key" width="700"/>

Click **Generate API key**.


#### 6. Copy Your Consumer Key and Secret

Once generated, copy both the **Consumer Key** and **Consumer Secret** immediately.

<img src="/img/credentials/woocommerce-analytics-report/client-key-secret.png" alt="WooCommerce Consumer Key and Secret" width="700"/>

:::warning
The Consumer Secret is displayed only once. If you lose it, you must delete and regenerate the API key.
:::

#### 7. Verify Permalink Configuration

WooCommerce REST API endpoints require a non-default permalink structure to resolve correctly.

In WordPress admin, go to **Settings → Permalinks**, select **Post name**, and click **Save Changes** — even if the setting appears unchanged. This refreshes your permalink rules.

<img src="/img/credentials/woocommerce-analytics-report/select-permalink.png" alt="WordPress Permalink Settings" width="700"/>


#### 8. Complete the Connection in appse ai

Return to the appse ai credential form. Enter your **Consumer Key** and **Consumer Secret**, then click **Save** to validate and store the connection.

<img src="/img/credentials/woocommerce-analytics-report/save_authorize.png" alt="appse ai WooCommerce Analytics Report Save Credential" width="700"/>

:::tip
If the connection fails, verify that:
- The WooCommerce REST API is enabled under **WooCommerce → Settings → Advanced → REST API**.
- The WordPress permalink structure is not set to **Plain**.
:::

---

## Actions

Here is the list of available actions for WooCommerce Analytics Report:

| Action                   | Description                                                                                                                                                                         |
| ------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Get Products Report**  | Retrieves performance data for products over a specified period, including items sold, gross revenue, and refund counts per product. Useful for identifying top-performing and underperforming SKUs. |
| **Get Customers Report** | Retrieves customer-level analytics for a specified period, including new versus returning customer counts, average order value, and total spend per customer segment.                |
| **Get Orders Report**    | Retrieves a summary of order statistics for a specified date range, including total orders, order counts by status, and net revenue. Supports filtering by date range and granularity (day, week, month, year). |

---

## Support

Need help? Contact our support team at [hello@appse.ai](mailto:hello@appse.ai)
