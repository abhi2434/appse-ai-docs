---
title: "QuickBooks"
description: Step-by-step guide to set up QuickBooks credentials and automate financial workflows in appse ai.
slug: /app-integrations/quickbooks/
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

**QuickBooks Online** is a cloud accounting platform for small and medium-sized businesses, designed to simplify accounting, invoicing, payroll, and financial reporting. It provides real-time visibility into cash flow, expenses, and profitability — all from a single dashboard. With **appse ai**, you can connect QuickBooks Online to your existing business tools and automate end-to-end financial workflows.

---

## Key Features

- **Invoice & Payment Automation** — Automatically create, update, and track invoices and incoming payments without manual intervention.
- **Customer & Vendor Management** — Sync customer and vendor records across your business tools to keep data consistent and up to date.
- **Purchase & Sales Order Management** — Trigger workflows when new purchase or sales orders are created, and automate order processing end to end.
- **Expense & Bill Tracking** — Capture and categorize expenses and bills automatically as they come in.
- **Real-Time Data Sync** — Keep financial data in sync across your CRM, ERP, and other connected platforms in real time.
- **Accounts Payable & Receivable** — Automate payment reminders, due date tracking, and reconciliation workflows.
- **Financial Reporting** — Aggregate and route financial data to reporting tools for up-to-date visibility into business performance.

---

## Setup Credential

To get started with QuickBooks Online integration, you need to set up credentials.

Log in to **appse ai** and navigate to **Credentials** → **Add credentials**. Search for **QuickBooks** and select it to open the credential form. You can also do this while creating a workflow by clicking **Create a new credential**.

<img src="/img/credentials/quickbooks/new-credential.png" alt="QuickBooks credential form in appse ai" width="700"/>

<br/>

### Required Fields

| Field           | Description                                                                     |
| --------------- | ------------------------------------------------------------------------------- |
| Connection Name | A name to identify this QuickBooks connection                                   |
| Realm ID        | The unique QuickBooks company ID used to connect your QuickBooks Online company |
| Client ID       | The OAuth client ID from Intuit Developer                                       |
| Client Secret   | The OAuth client secret from Intuit Developer                                   |

Follow the steps below to quickly set up your QuickBooks credential.

### Step 1. Sign in to Intuit Developer

Open the [Intuit Developer portal](https://developer.intuit.com/).

Sign in with your Intuit account.

<img src="/img/credentials/quickbooks/sign-in.png" alt="Intuit Developer sign-in page" width="700"/>

<br/>

If you don't have a registered account, you can create one.

<img src="/img/credentials/quickbooks/create_an_account.png" alt="Intuit Developer create account page" width="700"/>

<br/>

### Step 2. Create a new QuickBooks app

After logging in successfully, you will see the **Intuit Developer** dashboard.

<img src="/img/credentials/quickbooks/workspace.png" alt="Intuit Developer workspace dashboard" width="700"/>

<br/>

1. Select an existing workspace or create a new one to add an app for generating client credentials.

2. Click on the workspace to open it.

3. Click `+` to begin creating a new app, then click **Get Started** to proceed to the next stage.

<img src="/img/credentials/quickbooks/get_started.png" alt="Get Started page for new app creation in Intuit Developer" width="700"/>

<br/>

4. Enter a name for your app and click **Next**.

<img src="/img/credentials/quickbooks/add_app_name.png" alt="Entering app name in Intuit Developer app creation form" width="700"/>

<br/>

5. Add the following QuickBooks scopes for standard accounting access:

- `com.intuit.quickbooks.accounting`
- `com.intuit.quickbooks.payment`

<img src="/img/credentials/quickbooks/add_permissions.png" alt="Selecting QuickBooks API scopes in Intuit Developer" width="700"/>

<br/>

6. After ticking the checkboxes, click **Done** in the top-right corner. This will open a pop-up where you need to click **Confirm** to proceed.

<img src="/img/credentials/quickbooks/confirm_permissions.png" alt="Confirm QuickBooks scopes permissions dialog in Intuit Developer" width="700"/>

<br/>

After confirmation, your credentials will be displayed. Copy and securely store these credentials for use during authorization.

<img src="/img/credentials/quickbooks/client-credentials.png" alt="Client ID and Client Secret displayed in Intuit Developer after app creation" width="700"/>

<br/>

### Step 3. Configure the OAuth Redirect URI

1. Open the QuickBooks credential form in appse ai.
2. Copy the **Callback API URL** value from the credential form.

<img src="/img/credentials/quickbooks/copy-callback-url.png" alt="Copying Callback API URL from appse ai QuickBooks credential form" width="700"/>

<br/>

3. In the Intuit Developer app settings, locate **Redirect URIs** settings.

<img src="/img/credentials/quickbooks/redirect-url.png" alt="Redirect URIs settings in Intuit Developer app settings" width="700"/>

<br/>

4. Click **Redirect URIs**, then click **Add URI**.

<img src="/img/credentials/quickbooks/add-redirect-url.png" alt="Adding a new redirect URI in Intuit Developer" width="700"/>

<br/>

5. Copy and paste the exact Callback URL from the appse ai credential form and click **Save**.

<img src="/img/credentials/quickbooks/save-redirect-url.png" alt="Saving the pasted Callback URL as redirect URI in Intuit Developer" width="700"/>

<br/>

:::note
The redirect URL must match exactly. Any mismatch will prevent OAuth authorization.
:::

### Step 4. Enter credentials

1. Retrieve the credentials from Intuit Developer and return to the appse ai credential form.

2. Choose **Production** or **Sandbox** from the **Environment** dropdown.

<img src="/img/credentials/quickbooks/quickbook_env_dropdown.png" alt="QuickBooks credential form with environment selection in appse ai" width="700"/>

<br/>

3. Enter the Realm ID. Follow the steps below based on your selected environment:

<Tabs>
<TabItem value="sandbox" label="Sandbox" default>

- Click on **My Hub** in your Intuit Developer dashboard.
- Then click on **Sandboxes**.

<img src="/img/credentials/quickbooks/sandboxes.png" alt="Sandbox companies list in Intuit Developer My Hub showing Realm IDs" width="700"/>

<br/>

- You will see the list of created sandbox companies. If no sandbox company is present, you can create one.
- Click **Add** and select the **QuickBooks Online SKU** that fits your needs.
- The Realm ID is displayed next to each sandbox company in the list.

<img src="/img/credentials/quickbooks/realm-id.png" alt="Finding the Realm ID from Sandbox companies in Intuit Developer My Hub" width="700"/>

<br/>

</TabItem>
<TabItem value="production" label="Production">

- Log in to your QuickBooks Online account at [quickbooks.intuit.com](https://quickbooks.intuit.com/).
- After logging in, the Realm ID appears in the browser URL as the `realmId` query parameter — for example: `https://app.qbo.intuit.com/app/homepage?realmId=123456789`.
- Alternatively, click the **Settings** (gear icon) in the top-right corner, go to **Account and Settings** → **Billing & Subscription**, and copy the **Company ID** — that is your Realm ID.

:::note
The Realm ID is unique to each QuickBooks Online company. Make sure you copy it from the correct production company account.
:::

</TabItem>
</Tabs>

4. Paste the copied **Client ID** and **Client Secret** values into the corresponding fields.

<img src="/img/credentials/quickbooks/add-credentials.png" alt="Pasting Client ID and Client Secret into appse ai QuickBooks credential form" width="700"/>

<br/>

### Step 5. Save and authorize

1. Click **Save & Authorize** in appse ai.

<img src="/img/credentials/quickbooks/save-and-authorize.png" alt="Save and Authorize button in appse ai QuickBooks credential form" width="700"/>

<br/>

2. This will open a new page where you need to sign in to the QuickBooks company you want to connect.

<img src="/img/credentials/quickbooks/quickbooks-company-connect.png" alt="QuickBooks company sign-in page during OAuth authorization" width="300"/>

<br/>

3. Upon clicking your account, a new page opens for password verification. Enter your password and click **Continue**.

<img src="/img/credentials/quickbooks/password.png" alt="Password verification page during QuickBooks OAuth authorization" width="300"/>

<br/>

4. Select a company from the company dropdown and click **Next**.

<img src="/img/credentials/quickbooks/click-next.png" alt="Selecting QuickBooks company from dropdown and clicking Next during OAuth authorization" width="300"/>

<br/>

:::warning
Make sure you authorize the correct QuickBooks Online company. If you connect the wrong company, disconnect and reauthorize with the correct account.
:::

:::tip
Upon successful authorization, your credentials will be saved in the appse ai platform.
:::

---

## Triggers

Here is the list of available triggers in QuickBooks:

| Trigger                        | Description                                                                     |
| ------------------------------ | ------------------------------------------------------------------------------- |
| **New Account Created**        | Triggers when a new account is created in QuickBooks Online.                    |
| **Customer Updated**           | Triggers when an existing customer's details are modified in QuickBooks Online. |
| **New Purchase Order Created** | Triggers when a new purchase order is created in QuickBooks Online.             |
| **New Sales Order Created**    | Triggers when a new sales order is created in QuickBooks Online.                |

---

## Actions

Here is the list of available actions in QuickBooks:

| Action                    | Description                                                             |
| ------------------------- | ----------------------------------------------------------------------- |
| **Create Purchase Order** | Creates a new purchase order for a vendor in QuickBooks Online.         |
| **Update Purchase Order** | Updates the details of an existing purchase order in QuickBooks Online. |

---

## Support

If you need assistance, contact the appse ai support team at [hello@appse.ai](mailto:hello@appse.ai).
