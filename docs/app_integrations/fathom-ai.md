---
title: "Fathom"
slug: /app-integrations/fathom/
---

Fathom is an AI meeting assistant that automatically records, transcribes, and summarizes your meetings on Zoom, Google Meet, and Microsoft Teams. Integrating Fathom into appse ai enables you to pull meeting transcripts, summaries, and action items directly into your workflows and agents — so post-meeting tasks are automated and insights are always within reach.

---

## Set Up Credential

:::info

Before you create a credential for Fathom using appse ai, make sure your Fathom account has active recordings available and that your API key has been generated from your User Settings.

:::

### Required Fields

You'll be asked to fill in the following details:

| Field             | Description                                        |
|------------------|----------------------------------------------------|
| Connection Name   | A name to help you identify this connection        |
| API Key           | Your personal API key from Fathom                  |

---

### Step-by-Step Guide

#### 1. Open the Credential Form

Click **Select a Credential** and choose **Fathom** from the application list.

<img src="\img\credentials\fathom-ai\fathom-create-new-connection.png" alt="APPSeAI Fathom Select Credential" width="700"/>

<br/>

This opens the Fathom credential form. Add your **Connection Name**.

<img src="\img\credentials\fathom-ai\fathom-connection-name.png" alt="APPSeAI Fathom Connection Name" width="700"/>

#### 2. Sign In / Create an account in Fathom

Go to [Fathom](https://fathom.video) and sign in or sign up. New accounts can connect their calendar and start recording meetings right away.

#### 3. Retrieve your API Key

Once logged in, follow these steps to generate your API key:

1. Click on your **profile avatar** or **account name** in the top-right corner of the Fathom dashboard to open the dropdown menu.
2. Select **Developer** from the dropdown.

<img src="\img\credentials\fathom-ai\fathom-developer-dropdown.png" alt="APPSeAI Fathom Developer Dropdown" width="700"/>

3. You'll land on the Developer page. Click on **Quickstart**.

4. In the Quickstart page, click the **Get your Fathom API Key** link. This will redirect you to the **API Key** section inside your **User Settings**.

<img src="\img\credentials\fathom-ai\fathom-get-api-key-link.png" alt="APPSeAI Fathom Get API Key Link" width="700"/>

5. On the User Settings page, click **Add** in the API Access. Then click on Generate API Key.

<img src="\img\credentials\fathom-ai\fathom-add-api-access.png" alt="APPSeAI Fathom Add API Access" width="700"/>

6. Enter a name for your API key in the **API Name** field, then click **Create API Client**.

<img src="\img\credentials\fathom-ai\fathom-api-name.png" alt="APPSeAI Fathom API Name" width="700"/>

7. Your **API Key** and **Webhook Secret** will be displayed. Copy the API Key and store it somewhere safe — it will not be shown again.

<img src="\img\credentials\fathom-ai\api-key.png" alt="APPSeAI Fathom API key" width="700"/>

:::info

API keys in Fathom are created at the user level. Your key can only access meetings recorded by you or those explicitly shared to your Team. Admin keys do **not** grant access to other users' unshared meetings.

:::

#### 4. Paste API Key in appse ai

Return to the appse ai credential form. Paste the copied API key into the **API Key** field and click **"Save"** to store and validate your credential.

<img src="\img\credentials\fathom-ai\credential-form.png" alt="APPSeAI Fathom credential form" width="700"/>

<br/>

:::warning

Make sure you save your **API key** somewhere safe. Treat it like a password — do not share it publicly or commit it to version control.

:::

---

## Triggers and Actions

Here is a list of the available triggers and actions for Fathom:

### Triggers

- **List Meetings** — Triggers a workflow whenever there are meetings recorded by you or shared to your Team. Returns a list of meetings according to date-time filter.

### Actions

- **Get Meeting Summary** — Retrieve the AI-generated summary for a specific meeting. Returns a markdown-formatted overview of key discussion points, decisions, and context — useful for sending recap emails or populating CRM notes automatically.

- **Get Meeting Transcript** — Fetch the full transcript of a specific meeting, including per-speaker labels and timestamps. Ideal for feeding conversation content into downstream AI processing, search indexing, or archiving to a knowledge base.

- **List Teams** — Retrieve a list of all Teams within your Fathom account. Useful for scoping subsequent actions to a specific team or building multi-team reporting workflows.

- **List Team Members** — Fetch all members belonging to a specific Team in your Fathom account. Useful for filtering meeting data by team member or routing summaries and transcripts to the right people in your workflow.

---

## Support

Need help? Contact our support team at [hello@appse.ai](mailto:hello@appse.ai)