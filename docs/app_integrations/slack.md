---
title: "Slack"
slug: /app-integrations/slack/
---

Slack is a team collaboration and messaging platform for sending messages, managing channels, and automating workplace conversations. Integrating Slack into appse ai enables you to automate channel notifications, direct messages, channel management, and more — directly within your AI-powered workflows.

---

## Set Up Credential

:::info

Before you create a credential for Slack using appse ai, you need to create your own Slack App at [api.slack.com/apps](https://api.slack.com/apps) to obtain a **Client ID** and **Client Secret**. Slack does not provide shared OAuth credentials, so every workspace connection requires its own app.

:::

### Required Fields

| Field | Description |
|---|---|
| **Connection Name** | A label to identify this credential within appse ai. |
| **Client ID** | The Client ID from your Slack App's **Basic Information** page. |
| **Client Secret** | The Client Secret from your Slack App's **Basic Information** page. |
| **Callback API URL** | Auto-filled by appse ai. Copy this value and add it as a Redirect URL in your Slack App — do not edit it. |

### Step-by-Step Guide

#### 1. Create a Slack App

Go to [api.slack.com/apps](https://api.slack.com/apps) and sign in with your Slack account. Click **Create New App**.

<img src="/img/credentials/slack/Create_app.png" alt="appse ai Slack Create New App button on api.slack.com/apps" width="700"/>

In the **Create new app** dialog, choose **Blank app** and click **Continue**.

<img src="/img/credentials/slack/create_blank_app.png" alt="appse ai Slack choose Blank app option" width="500"/>

Give the app a name and select the Slack workspace you want to connect it to, then click **Create**.

<img src="/img/credentials/slack/create_app_scratch.png" alt="appse ai Slack create from scratch app name and workspace" width="500"/>

#### 2. Add Bot Token Scopes

In your new app, open **OAuth & Permissions** from the left sidebar. Under **Scopes → Bot Token Scopes**, click **Add an OAuth Scope** and add the scopes your workflows will need:

```
chat:write, chat:write.public, channels:read, channels:history, groups:read, im:read, im:history, users:read, users:read.email, files:read, files:write, reactions:write, pins:write
```

<img src="/img/credentials/slack/add_bot_scopes.png" alt="appse ai Slack add Bot Token Scopes under OAuth and Permissions" width="700"/>

:::note
This is the scope set required for all Slack actions and triggers available in appse ai. Only remove scopes you are certain you won't need.
:::

#### 3. Copy the Client ID and Client Secret

Open **Basic Information** from the left sidebar. Under **App Credentials**, copy the **Client ID**, then click **Show** next to **Client Secret** and copy it as well.

<img src="/img/credentials/slack/app_credentials.png" alt="appse ai Slack App Credentials Client ID and Client Secret" width="700"/>

:::warning
Treat the Client Secret like a password. Do not share it publicly, and regenerate it in Slack if you suspect it has been exposed.
:::

#### 4. Enter Credentials in appse ai

Open the Slack credential form in appse ai, add your **Connection Name**, then paste the **Client ID** and **Client Secret** copied in the previous step.

<img src="/img/credentials/slack/add_clientid_clientsecret.png" alt="appse ai Slack Configure Credentials Client ID and Client Secret fields" width="500"/>

#### 5. Copy the Callback API URL

Still on the same credential form, copy the auto-filled **Callback API URL**.

<img src="/img/credentials/slack/getting_redirect_url_from_appseai_credential.png" alt="appse ai Slack Configure Credentials Callback API URL" width="500"/>

#### 6. Add the Redirect URL in Slack

Back in your Slack App, under **OAuth & Permissions → Redirect URLs**, paste the Callback API URL and click **Add**, then **Save URLs**.

<img src="/img/credentials/slack/redirect_url.png" alt="appse ai Slack add Redirect URL under OAuth and Permissions" width="700"/>

#### 7. Save and Authorize

Return to appse ai and click **Save & Authorize**. You'll be redirected to Slack to sign in (if not already) and approve the requested permissions for your workspace. Click **Allow**.

Once approved, you will be redirected back to appse ai and your credential will be validated and saved.

:::tip
If authorization fails, confirm the Callback API URL was added exactly as shown under Redirect URLs in your Slack App, and that the Bot Token Scopes were saved under OAuth & Permissions.
:::

---

## Triggers and Actions

Here is a list of the available triggers and actions for Slack:

:::note
Your Slack App must be a member of a channel before it can post to it or read from it. In Slack, open the channel and run the command `/invite @YourAppName` (use the app name you gave it in [Step 1](#1-create-a-slack-app)) to add it. This is required for **Send Channel Message**, **New Message Posted**, and any other action that targets a specific channel — public or private.
:::

### Triggers

- **New Message Posted** — Fires when a new message is posted in the selected Slack channel. Requires a **Channel** and a starting **Fetch messages since** date/time. Note: the app must be a member of private channels before it can read messages from them.

### Actions

| Action | Description |
|---|---|
| **Send Channel Message** | Posts a notification message to a Slack channel. Supports Slack mrkdwn formatting, optional link unfurling, and replying within an existing thread via a parent message's **Message Timestamp (ts)**. |
| **Send Direct Message** | Sends a private notification message directly to a Slack workspace member. |
| **Update Message** | Edits the text of a message the app previously posted to a channel. Requires the **Channel** and the message's **Message Timestamp (ts)**. |
| **Delete Message** | Deletes a message the app previously posted to a channel. Requires the **Channel** and the message's **Message Timestamp (ts)**. |
| **Create Channel** | Creates a new public or private Slack channel. Channel names must use lowercase letters, numbers, hyphens, and underscores only (max 80 characters, no spaces). |
| **Invite User to Channel** | Invites one or more workspace members to a Slack channel. Accepts a comma-separated list of up to 1000 Slack user IDs. |

---

## Support

Need help? Contact our support team at [hello@appse.ai](mailto:hello@appse.ai)
