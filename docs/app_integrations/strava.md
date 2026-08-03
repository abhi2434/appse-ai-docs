---
title: "Strava"
description: Step-by-step guide to set up Strava credentials and automate fitness activity workflows in appse ai.
slug: /app-integrations/strava/
---

Strava is a leading fitness tracking platform used by athletes and teams to record, analyze, and share physical activities such as running, cycling, and swimming. It provides detailed performance data including pace, distance, elevation, and heart rate. Integrating Strava into appse ai allows you to automate fitness data workflows, synchronize activity records with your broader business or health systems, and eliminate manual data exports across your operations.

---

## Set Up Credential

:::note

Before you create a credential for Strava using appse ai, ensure you have an active Strava account and have registered an API application in the Strava Developer Portal to obtain your OAuth 2.0 credentials.

:::

### Required Fields

You'll be asked to fill in the following details:

| Field           | Description                                                                 |
| --------------- | --------------------------------------------------------------------------- |
| Connection Name | A name to help you identify this connection                                 |
| Client ID       | Your OAuth 2.0 Client ID from the Strava Developer Portal                   |
| Client Secret   | Your OAuth 2.0 Client Secret from the Strava Developer Portal               |

### Step-by-Step Guide

#### 1. Open the Credential Form

Click **Select a Credential** and choose **Strava** from the application list.

<img src="/img/credentials/strava/click-select-credential-strava.png" alt="appse ai Strava Select Credential" width="700"/>

This opens the Strava credential form. Add your **Connection Name**.

<img src="/img/credentials/strava/enter-connection-name-strava.png" alt="appse ai Strava Connection Name" width="700"/>

#### 2. Sign In to the Strava Developer Portal

Go to the [Strava Developer Portal](https://www.strava.com/settings/api) and sign in with your Strava account credentials.

#### 3. Create an API Application

1. On the **My API Application** page, fill in the required details — **Application Name**, **Website**, and **Authorization Callback Domain**.

<img src="/img/credentials/strava/create-app-strava.png" alt="appse ai Strava Create App" width="700"/>

2. Click **Save** to register your application.

3. Your **Client ID** and **Client Secret** will be displayed on the application page. Copy both values.

<img src="/img/credentials/strava/copy-client-id-strava.png" alt="appse ai Strava Client ID" width="700"/>


#### 4. Paste Your Credentials in appse ai

Return to the appse ai credential form. Fill in all the required fields — **Client ID**, **Client Secret** — then click **Save** to store and validate your credential.

<img src="/img/credentials/strava/paste-credentials-strava.png" alt="appse ai Strava Save Credential" width="700"/>

:::caution

Keep your credentials secure. Do not share your Client Secret publicly. If you believe your credentials have been compromised, revoke access from the Strava Developer Portal immediately and generate new credentials.

:::

---

## Triggers

| Trigger | Description |
| ------- | ----------- |
| **New Activity** | Triggers when a new activity is recorded in your Strava account. Returns activity details such as activity ID, name, type, distance, duration, and start date. |

---

## Actions

Here is a list of the available actions for Strava:

#### Activities

| Action | Description |
| ------ | ----------- |
| **Update Activity** | Updates the details of an existing activity in your Strava account. Requires the **Activity ID** and the fields to update, such as name, type, description, or gear. |

---

## Support

Need help? Contact our support team at [support@appse.ai](mailto:support@appse.ai)
