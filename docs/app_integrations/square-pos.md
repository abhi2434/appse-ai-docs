---
title: "Square POS"
description: Step-by-step guide to set up Square POS credentials and automate sales, payments, and catalog workflows in appse ai
slug: /app-integrations/square-pos/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Square POS is a point-of-sale platform that helps businesses manage in-person sales, payments, catalog items, customers, and store operations. With appse ai, you can connect your Square account to automate workflows that use Square business data and keep your sales, customer, and operational processes connected across systems.

---

## Setup Credential

Follow the steps below to set up your Square POS credential in appse ai.

### Required Fields

You'll be asked to fill in the following details:

| Field             | Description                                                                                         |
| ----------------- | --------------------------------------------------------------------------------------------------- |
| Connection Name   | A name to help you identify this connection inside appse ai platform.                                                        |
| Authorization URL | Select the Square OAuth authorization URL for your environment, either Production or Sandbox.        |
| Token URL         | Select the token URL that matches the selected Authorization URL environment.                        |
| Base API URL      | Select the Square API base URL that matches the selected OAuth environment.                          |
| Application ID    | The Application ID from your Square Developer Dashboard app.                                         |
| Application Secret | The Application Secret from your Square Developer Dashboard app.                                    |
| OAuth Scopes      | Space-separated Square permissions. Use the scopes required by your workflows configured for the app. See the [Square OAuth Permissions Reference](https://developer.squareup.com/docs/oauth-api/square-permissions) for the full list of available scopes and what each one allows. |
| Callback URL      | The appse ai OAuth redirect URL that must be added to your Square app OAuth configuration.                 |

:::info

Use **Production** for live Square accounts and **Sandbox** for test data. The Authorization URL, Token URL, and Base API URL must all use the same environment.

:::

### Square Environment URLs

Use the matching set of URLs for the environment you want to connect.

| Environment | Authorization URL                                      | Token URL                                      | Base API URL                       |
| ----------- | ------------------------------------------------------ | ---------------------------------------------- | ---------------------------------- |
| Production  | `https://connect.squareup.com/oauth2/authorize`        | `https://connect.squareup.com/oauth2/token`    | `https://connect.squareup.com`     |
| Sandbox     | `https://connect.squareupsandbox.com/oauth2/authorize` | `https://connect.squareupsandbox.com/oauth2/token` | `https://connect.squareupsandbox.com` |

## Step-by-Step Guide

### 1. Open the Square Developer Dashboard

Log in to the [Square Developer Dashboard](https://developer.squareup.com/apps) with the Square account you want to connect.

### 2. Create or Open an Application

Pick the path that matches your Square Developer account: use an application you already have, or create a new one for appse ai.

For a live connection, use the application's **Production** credentials. For testing, switch to the **Sandbox** environment and use the sandbox credentials.

<Tabs>
<TabItem value="open" label="Open existing application">

Use this path when you already have a Square application configured and only need to connect it to appse ai.

1. Navigate to the [Square Developer Dashboard](https://developer.squareup.com/apps) → **Applications** page.

<img src="/img/credentials/square-pos/SP01.png" alt="Applications page" width="700"/>

2. Click on the open button for the respective application.

<img src="/img/credentials/square-pos/SP02.png" alt="Open existing application" width="700"/>

You will use this application’s OAuth settings and credentials in the following steps.

</TabItem>
<TabItem value="new" label="Create new application">

Use this path when you need a new Square application for appse ai.

1. Navigate to the [Square Developer Dashboard](https://developer.squareup.com/apps) → **Applications** page

<img src="/img/credentials/square-pos/SP01.png" alt="Applications page" width="700"/>

2. Start creating an application by clicking on the Plus (+) icon displayed.

<img src="/img/credentials/square-pos/SP06.png" alt="Add new app" width="700"/>

3. Enter an **Application name** you will recognize later.

<img src="/img/credentials/square-pos/SP07.png" alt="Enter app name" width="700"/>

4. Complete next steps - `What will you build first?`, `Find your audience` then finish creating the application.

<img src="/img/credentials/square-pos/SP08.png" alt="Choose product use case" width="700"/>

<img src="/img/credentials/square-pos/SP09.png" alt="Choose audience" width="700"/>

After the application is created, continue with **Configure OAuth** below.

</TabItem>
</Tabs>

### 3. Configure OAuth

In your Square application, go to the **OAuth** section and configure the redirect URL.

<img src="/img/credentials/square-pos/SP03.png" alt="Navigate to Oauth" width="700"/>

<img src="/img/credentials/square-pos/SP04.png" alt="Configure redirect URL" width="700"/>

Add the callback URL displayed in the appse ai configure credential form. For example:

```text
https://embedded-ui.appse.ai/oauth-callback.html
```

<img src="/img/credentials/square-pos/SP05.png" alt="Redirect URL popup" width="700"/>

This URL must match the **Callback URL** shown in the appse ai Square POS credential form.

### 4. Copy Application Credentials

From the Square application's OAuth settings, copy the following values:

- **Application ID**
- **Application Secret**

<img src="/img/credentials/square-pos/SPOS10.png" alt="Application credentials" width="700"/>

Keep the Application Secret secure and do not share it publicly.

### 5. Add the Credential in appse ai

In appse ai, open the Square POS credential form and enter the required details:

1. Add a **Connection Name**.
2. Select the **Authorization URL** for Production or Sandbox.
3. Select the matching **Token URL**.
4. Select the matching **Base API URL**.
5. Paste the **Application ID**.
6. Paste the **Application Secret**.
7. Review or update the **OAuth Scopes**.
8. Confirm the **Callback URL** matches the URL configured in Square.

- Click **Save & Authorize**. appse ai will redirect you to the Square sign-in page.
- Sign in with your Square credentials, review the permission request, and click **Allow** to approve access.
- After approval, you will be redirected back to appse ai. Confirm that the Square credential is validated successfully and ready to use.

---

## Triggers

Here is the list of available triggers for Square POS:

| Trigger                 | Description                                                                 |
| ----------------------- | ----------------------------------------------------------------------------- |
| **New orders created**  | Fetches a new order created in Square so downstream workflows can react to new sales. |
| **Order returned**      | Fetches records when return activity is recorded for Square orders (for example refunds or returns), so you can update inventory or finance systems. |
| **Orders updated**      | Fetches records when an existing Square orders change, so connected systems stay in sync. |

---

## Actions

Here is the list of available actions for Square POS:

| Action                       | Description                                                                 |
| ---------------------------- | ----------------------------------------------------------------------------- |
| **Add customer to a group** | Adds an existing Square customer to a customer group for segmentation, campaigns, or reporting. |
| **Batch change inventory**   | Updates inventory quantities or states for multiple catalog objects or locations in one batch. |
| **Create customer**          | Creates a new customer record in Square with the details you provide (for example name, email, phone, address). |
| **Get payment refund**       | Retrieves a single payment refund by its Square refund identifier, including refund details. |
| **List payment refunds**     | Returns a list of payment refunds for the connected merchant, with optional filters for reporting or reconciliation. |
| **List payments**           | Returns a list of payments processed through Square, useful for syncing transactions or auditing. |
| **Search orders**           | Searches Square orders using defined criteria to find orders for fulfillment or support. |
| **Get order by ID**         | Retrieves a specific Square order by its unique order ID. |
| **Get customer by ID**      | Retrieves a specific Square customer by their unique customer ID. If no ID is provided, Square returns up to 100 customer profiles instead of a single record. |
| **Update customer**          | Updates an existing Square customer’s profile.           |
| **Upsert catalog object**    | Creates a new catalog object or updates an existing one in Square (items, variations). |

Ensure your Square OAuth scopes include the permissions required for each action or trigger you use. If a workflow fails with an authorization error, add the corresponding scope in the Square Developer Dashboard and in the **OAuth Scopes** field on your appse ai credential.

---

## Support

Need help? Contact the support team at [hello@appse.ai](mailto:hello@appse.ai)
