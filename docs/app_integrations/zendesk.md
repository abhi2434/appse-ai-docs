---
title: "Zendesk"
slug : /app-integrations/zendesk/
description: Learn how to setup and use Zendesk on appse ai.
---

Zendesk is a cloud-based customer service and support ticketing platform that helps businesses manage customer conversations across email, chat, and social channels. With appse ai, you can seamlessly connect your Zendesk account to automate ticket management, route conversations, and power AI agents that read and respond to customer requests.

---

## Setup Credential

Zendesk uses **API Token** authentication (Basic Auth). Follow the steps below to generate a token and connect your account.

### Required Fields

You'll be asked to fill in the following details:

| Field      | Description                                                                                          |
|------------|--------------------------------------------------------------------------------------------------------|
| Connection Name | A name to identify the connection                                                                 |
| Subdomain  | The subdomain portion of your Zendesk account URL (e.g. if your URL is `https://yourcompany.zendesk.com`, enter `yourcompany`) |
| Username   | Your Zendesk agent email address |
| API Token  | The API token generated from your Zendesk Admin Center                                                |

### Step-by-Step Guide

#### 1. Generate an API Token in Zendesk

1. Log in to your Zendesk account and open **Admin Center**.

<img src="/img/credentials/zendesk/credential-admin.png" alt="Zendesk Admin Center navigation" width="700"/>

2. Go to **Apps and integrations** > **APIs** > **API configuration**, then enable **Allow API token access** if it isn't already enabled.

<img src="/img/credentials/zendesk/api-token-enable.png" alt="Zendesk enable API token access" width="700"/>

3. Go to the **API tokens** tab and click **Add API token**.

<img src="/img/credentials/zendesk/api-token-generate.png" alt="Zendesk add API token button" width="700"/>

4. Give the token a description, click **Save**, and copy the generated token immediately — Zendesk only shows it once.

<img src="/img/credentials/zendesk/api-token-generate-2.png" alt="Zendesk generate and save API token" width="700"/>

:::caution
The API token is displayed only once. If you lose it, you will have to generate a new one.
:::

#### 2. Configure the Credential in appse ai

1. Click **Select a Credential** and choose **Zendesk**, then add a **Connection Name**.
2. Enter your **Subdomain** — the part of your Zendesk URL before `.zendesk.com`.
3. In **User Email**, enter the email address of the agent account.
4. Paste the generated token into the **API Token** field.

<img src="/img/credentials/zendesk/credential-1.png" alt="appse ai Zendesk credential form" width="700"/>

:::warning

Keep your API token secure. Anyone with the token and a valid agent email can access your Zendesk account via the API.

:::

### Save Your Credential

Once you've filled in the necessary fields, click **"Save"** to store and verify your setup.

- If successful, your Zendesk credential will show a "✓" icon. Now you can use this application for your integrations.
- If it fails, you will be displayed a "!" icon. In that case, please recheck your Subdomain, Username, or API Token, or contact support.

---

## Triggers and Actions

Every application has a pre-defined set of triggers and actions that allow users to perform application specific activities within the platform. Here is a list of all the triggers and actions available for Zendesk:

### Triggers

- **New Ticket Created** — Fires when a new support ticket is created in Zendesk.
- **Ticket Updated** — Fires when an existing ticket is updated (status, priority, assignee, comments, or any other field change).
- **New Ticket Comment / Activity** — Fires on new ticket activity (comments, status changes, and field updates) across all tickets. Ideal for driving an AI agent that reads new customer replies and posts an automated response back to the ticket.
- **New User Created** — Fires when a new user (end-user, agent, or admin) is created in Zendesk.

### Actions

> Ticket Actions

- **Get List of Tickets** — Retrieve a page of tickets, with sorting and cursor pagination.
- **Get a Ticket** — Retrieve a single ticket by its ID.
- **Create a Ticket** — Create a new support ticket.
- **Update a Ticket** — Update an existing ticket's fields, such as status, priority, assignee, or tags.
- **Delete a Ticket** — Permanently delete a ticket.

> Comment Actions

- **Add Comment / Reply to Ticket** — Post a public reply or a private internal note on an existing ticket. Use this to publish an AI agent's response to the requester or to notify the support team.
- **Get Ticket Comments** — Retrieve the full conversation history (comments and notes) for a ticket. Useful for giving an AI agent context before it drafts a reply.

> User Actions

- **Get List of Users / Agents** — Retrieve a page of users, optionally filtered by role (end-user, agent, or admin).
- **Create a User** — Create a new user (end-user, agent, or admin).
- **Update a User** — Update an existing user's fields.

> Organization Actions

- **Get List of Organizations** — Retrieve a page of organizations.
- **Create an Organization** — Create a new organization to group related users together.

> Group Actions

- **Get List of Groups** — Retrieve a page of support groups, used to route and assign tickets.

> Generic Actions

- **Get Record by ID** — Retrieve a single record from any Zendesk module (ticket, user, organization, or group) using its unique ID.
- **Search Records** — Search tickets, users, organizations, or groups using Zendesk's advanced search syntax.

---

## Need Help?

If you're unsure about any field or face connection issues, reach out to our support team at support@appse.ai
