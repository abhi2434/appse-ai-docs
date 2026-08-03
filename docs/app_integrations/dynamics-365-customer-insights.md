---
title: Microsoft Dynamics 365 Customer Insights - Journeys
description: Step-by-step guide to set up Microsoft Dynamics 365 Customer Insights - Journeys credentials for appse ai integration
slug: /app-integrations/microsoft-dynamics-365-ci-journeys/
---


**Microsoft Dynamics 365 Customer Insights - Journeys** is a powerful marketing automation platform from Microsoft that helps organizations orchestrate real-time, personalized customer journeys across all touchpoints. It enables businesses to manage contacts, leads, segments, email campaigns, and customer interactions within the Microsoft ecosystem.

This guide walks you through the process of adding **Microsoft Dynamics 365 Customer Insights - Journeys credentials** within appse ai, enabling secure integration to fetch and post data in your Dynamics 365 CI Journeys environment.

---

## Key Features

- **Contact & Lead Management**: Read, create, update, and manage contacts and leads in your Dynamics 365 environment.
- **Customer Journey Access**: Access real-time journey data, segments, and marketing interactions.
- **Dataverse Web API Support**: Uses Microsoft Dataverse OData Web API for reliable and secure communication.
- **Multi-Tenant Support**: Allows customers from any Microsoft tenant to connect their own Dynamics 365 environment.
- **Secure OAuth 2.0 Authentication**: Ensures token-based authentication without sharing passwords.
- **Workflow Automation**: Integrate Dynamics 365 CI Journeys seamlessly with CRMs, ERPs, and other business applications through appse ai.

---

## Setup Credential

### Required Fields

| Field | Description |
|---|---|
| **Connection Name** | A name to identify this connection |
| **Environment URL** | Your Dynamics 365 CI Journeys environment URL |

### Step-by-Step Guide

To get started with Microsoft Dynamics 365 Customer Insights - Journeys, you need to set credentials for it. Go to the credential page of appse ai.

Click on **Add credentials**, search for Microsoft Dynamics 365 Customer Insights - Journeys.

<img src="/img/credentials/dynamics-365-customer-insights/add-credentials-365-customer-journey.png" alt="Create a new credential" width="700"/>

Select it to create a new credential.

<img src="/img/credentials/dynamics-365-customer-insights/click-365-customer-journey.png" alt="search for Microsoft Dynamics 365 Customer Insights - Journeys" width="700"/>


Which leads to a pop-up:

<img src="/img/credentials/dynamics-365-customer-insights/click-save-authorize-appseai-365-customer-journey.png" alt="Enter credential details to add credential" width="700"/>

---

### Step 1. Get Your Dynamics 365 CI Journeys Environment URL

Before connecting, you need to retrieve your Dynamics 365 Environment URL.

1. Go to **[admin.powerplatform.microsoft.com](https://admin.powerplatform.microsoft.com)**
2. Login with your **Microsoft work or school account**
3. Click **Environments** from the left menu
4. Click on your **Dynamics 365 environment**
5. Under the **Details** section, find **Environment URL**

```
Environment URL: https://orgXXXXX.crm8.dynamics.com
```

6. **Copy this URL** — you will need it in the next step.

<img src="/img/credentials/dynamics-365-customer-insights/copy-url-365-journey.png" alt="Copy Environment URL from Power Platform Admin Center" width="700"/>

:::note
The Environment URL format is always: `https://orgXXXXX.crm8.dynamics.com`
:::


### Step 2. Authorize Our App & Connect

1. Paste the copied **Environment URL** in the field labeled:
   **"Dynamics 365 CI Journeys Environment URL"**
   <img src="/img/credentials/dynamics-365-customer-insights/enter-env-url-365-customer-journey-appseai.png" alt="Enter Environment URL and connection name" width="700"/>

2. Click the **Save and Authorize** button

<img src="/img/credentials/dynamics-365-customer-insights/click-save-authorize-appseai-365-customer-journey.png" alt="Click Save and Authorize" width="700"/>

This will open a pop-up window displaying a list of your Microsoft accounts, from which you can select the account you want to use.

If the required account is not already added, click **Use another account**. This will redirect you to the Microsoft sign-in page to authenticate using a different account.

Enter your Microsoft work or school email and click **Next** to continue.

<img src="/img/credentials/dynamics-365-customer-insights/enter-email-365-customer-journey.png" alt="Microsoft sign in page" width="700"/>

Enter your password and click **Sign In** to continue.

<img src="/img/credentials/dynamics-365-customer-insights/click-sign-in-365-business-central.png" alt="Enter password" width="700"/>



Once authorization is successful, your session will be established and an **access token** will be securely generated and stored.

---
 
## Triggers and Actions
 
The following tables outline the available triggers and actions for Microsoft Dynamics 365 Customer Insights - Journeys.
 
### Triggers
 
| Trigger Name | Description |
|---|---|
| **On New Contact Created** | Activates when a new contact record is created in Dynamics 365. |
| **On Contact Updated** | Activates when an existing contact record is modified. |
| **On New Journey Created** | Activates when a new customer journey is created in Dynamics 365. |
| **On Journey Updated** | Activates when an existing customer journey is modified. |
 

  
### Actions
 
| Action Name | Category | Description |
|---|---|---|
| **Create Contact** | Contact | Creates a new contact record in Dynamics 365. |
| **Get Contact** | Contact | Retrieves a specific contact record using its unique identifier. |
| **Update Contact** | Contact | Updates an existing contact record in Dynamics 365. |
| **Create Event Journey** | Journey | Creates a new event-based customer journey in Dynamics 365. |
| **Get Journey** | Journey | Retrieves the details of a specific customer journey using its unique identifier. |
| **Update Journey** | Journey | Updates an existing customer journey in Dynamics 365. |
 
---

## Support

Need help? Contact our support team at [hello@appse.ai](mailto:hello@appse.ai)