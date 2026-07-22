---
title: "WhatsApp"
slug: /app-integrations/whatsapp/
description: Set up Meta WhatsApp Cloud API in appse ai — find test and production IDs, create a Utility template, and send messages.
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

WhatsApp is the world's most widely used messaging platform, with over 2 billion users across 180+ countries. The Meta WhatsApp Cloud API enables businesses to send transactional notifications, alerts, and customer support messages at scale. With appse ai, you can connect your WhatsApp Business Account to automate order updates, shipment notifications, and real-time customer communication — reducing manual effort and keeping customers informed across every stage of their journey.



---

## Setup Credential

:::note

To create credentials for WhatsApp, you must have a Meta Developer account and a WhatsApp Business Account set up in the [Meta App Dashboard](https://developers.facebook.com/apps/).

:::

### Required Fields

You'll be asked to fill in the following details:

| Field | Description |
| ----- | ----------- |
| Connection Name | A name to help you identify this connection. |
| WhatsApp Business Account ID (WabaId) | The ID of your WhatsApp Business Account from Meta. |
| Phone Number ID | The ID of the phone number registered in your WhatsApp Business Account. |
| Access Token | A temporary (test) or permanent (production) token from Meta. |

---

<Tabs>

<TabItem value="test" label="Test Setup" default>

Use this for development and testing with Meta's built-in test number. No approved template or business verification is required.

#### Step-by-Step Guide

**1. Open Meta App Dashboard**

Go to [Meta App Dashboard](https://developers.facebook.com/apps/) and select your WhatsApp app. If you don't have one yet, click **Create App** → use case **Connect with customers through WhatsApp** → select your business portfolio → **Create app**.

**2. Navigate to WhatsApp Basic Setup**

In the left menu, click **WhatsApp** → under **Basic setup**, click **Step 1. Try it out**.

<img src="/img/credentials/whatsapp/whatsapp-basic-setup-step1.png" alt="appse ai WhatsApp Basic Setup Step 1" width="700"/>

**3. Find Your WhatsApp Business Account ID**

Open the **Claim a WhatsApp test number** section. Find the label **WhatsApp Business Account ID** and copy the number shown.

<img src="/img/credentials/whatsapp/whatsapp-test-waba-id1.png" alt="appse ai WhatsApp Test Business Account ID" width="700"/>

**4. Find Your Phone Number ID**

Below the test phone number, find the label **Phone number ID** and copy the number shown.

:::note
- You can only send to **5 recipient numbers** verified on this same page (**Send a message from your test number → Recipient**).
- Test **Phone Number ID** is different from production — do not mix them.
:::

<img src="/img/credentials/whatsapp/whatsapp-test-phone-number-id1.png" alt="appse ai WhatsApp Test Phone Number ID" width="700"/>

**5. Generate a Temporary Access Token**

Click **Generate token** and copy the token. Paste it into the **Access Token** field in appse ai.

:::note
This token **expires**. For live workflows, generate a permanent token using the Production Setup tab.
:::

<img src="/img/credentials/whatsapp/whatsapp-test-generate-token1.png" alt="appse ai WhatsApp Test Generate Token" width="700"/>

</TabItem>

<TabItem value="production" label="Production Setup">

Use this after you register your own business phone number. Allows messaging any WhatsApp user with an approved template.

#### Step-by-Step Guide

**1. Navigate to Production Setup**

In the [Meta App Dashboard](https://developers.facebook.com/apps/), select your app → left menu → **WhatsApp** → **Basic setup** → **Step 2. Production setup**.

<img src="/img/credentials/whatsapp/whatsapp-production-setup.png" alt="appse ai WhatsApp Production Setup" width="700"/>

**2. Find Your Production WhatsApp Business Account ID**

Open the **Register your WhatsApp phone number** section. Under your account name, find **WhatsApp Business Account ID** and copy the number shown.

<img src="/img/credentials/whatsapp/whatsapp-production-waba-id.png" alt="appse ai WhatsApp Production Business Account ID" width="700"/>

**3. Register Your Phone Number and Find Phone Number ID**

Find your phone number with status **Registered** and copy its **Phone number ID**.

:::note
If no number is registered yet: click **Add new number** → complete SMS/voice OTP → wait for **Registered** status → then copy **Phone number ID**.
:::

<img src="/img/credentials/whatsapp/whatsapp-production-phone-number-id.png" alt="appse ai WhatsApp Production Phone Number ID" width="700"/>

**4. Generate a Permanent Access Token**

1. Open [Meta Business Settings](https://business.facebook.com/settings/).
2. Left menu → **Users → System users**.
3. Click **Add+** (or select an existing system user).
4. Click **Assign assets** → assign your Meta **app** and **WhatsApp account** (Full control) → **Save**.
5. Click **Generate token** → select your app.
6. Enable permissions: `business_management`, `whatsapp_business_messaging`, `whatsapp_business_management`.
7. Click **Generate token** → copy immediately (shown once).

<img src="/img/credentials/whatsapp/whatsapp-production-system-user-token.png" alt="appse ai WhatsApp Production System User Token" width="700"/>

:::caution

Copy and store the token immediately. Meta does not display it again after you leave the page.

:::

**5. Create a Utility Template**

Before sending production messages, you need an approved Meta template.

1. Open [Meta Business Suite](https://business.facebook.com/).
2. Go to **WhatsApp Manager → Message templates → Create template**.
3. Category: **Utility** · Name: e.g. `appse_ai_template` · Language: note the language code shown (e.g. `en` or `en_US`).
4. Body — use one variable only:

```
Hi 👋 {{1}} Thanks, appse ai team
```

5. Submit → wait for **Approved** status.

:::note
- Use **only `{{1}}`** with appse ai **Send Message (Template)**.
- Put your custom text in appse ai **Message Text** — not in the Meta footer.
:::

**6. Complete Remaining Production Steps**

Still on **Step 2. Production setup**, finish in order:

- **Add payment to send business-initiated messages** — required for template alerts.
- **Test your registered number** — send a test message to confirm everything works.
- Set app **Live**: **App settings → Basic → App mode → Live**.

:::note
**Business verification** may be required before going live: **Basic setup → Step 3. Business verification**.
:::

</TabItem>

</Tabs>

---

### Webhook Setup

Webhooks allow Meta to send real-time events (incoming messages, status updates) to your appse ai workflows.

#### Step-by-Step Guide

**1. Get Your Webhook URL from appse ai**

In your appse ai workflow, add an **On webhook** trigger. Under **Verification**, select **WhatsApp Webhook (Meta Cloud API)** and choose your WhatsApp credential under **Verification credential**. Copy the **Production URL** shown in the **Preview URLs** section — you'll paste this into Meta in the next step.

<img src="/img/credentials/whatsapp/whatsapp-webhook-config-appseai.png" alt="appse ai WhatsApp On Webhook Trigger Configuration" width="700"/>

**2. Open Webhook Configuration in Meta**

In the [Meta App Dashboard](https://developers.facebook.com/apps/), go to **WhatsApp → Basic setup → Step 2. Production setup**, then click **Configure Webhooks**.

<img src="/img/credentials/whatsapp/whatsapp-webhook-config.png" alt="appse ai WhatsApp Meta Configure Webhooks" width="700"/>

**3. Enter Your Webhook URL**

Paste the Production URL copied from appse ai into the **Callback URL** field and enter a **Verify token** of your choice.

<img src="/img/credentials/whatsapp/whatsapp-webhook-url.png" alt="appse ai WhatsApp Webhook URL" width="700"/>

**4. Verify the Webhook**

Click **Verify and Save**. Meta will send a verification request to your URL. A successful response confirms the connection.

<img src="/img/credentials/whatsapp/whatsapp-webhook-verify.png" alt="appse ai WhatsApp Webhook Verify" width="700"/>

**5. Subscribe to Webhook Events**

Toggle **Subscribe webhooks** to **ON** and select the events your workflow needs (e.g. `messages`, `message_status`).

<img src="/img/credentials/whatsapp/whatsapp-webhook-subscribe.png" alt="appse ai WhatsApp Webhook Subscribe" width="700"/>

---

### Add Credential in appse ai

Once you have your IDs and token ready from the steps above, follow these steps to create the connection:

1. Navigate to [workflow.appse.ai](https://workflow.appse.ai/) → **Credentials** → **Add Credentials** → **WhatsApp**.

<img src="/img/credentials/whatsapp/whatsapp-appseai-add-credential.png" alt="appse ai WhatsApp Add Credential" width="700"/>

2. Fill in the **Connection Name**, **WhatsApp Business Account ID**, **Phone Number ID**, and **Access Token**.

<img src="/img/credentials/whatsapp/whatsapp-appseai-credential-form.png" alt="appse ai WhatsApp Credential Form" width="700"/>

3. Click **Save / Validate**. A success indicator confirms the credential is active.
<img src="/img/credentials/whatsapp/whatsapp-appseai-credential-form-save.png" alt="appse ai WhatsApp Credential Save" width="700"/>
---

## Triggers and Actions

Here is a list of the available actions for WhatsApp:

### Actions

- **Send Message (Template)** — Send a custom notification using your approved Meta template. Enter **Template Name** and **Message Text**; the text replaces `{{1}}` in the template body.
- **Send Message (Text)** — Send free-form text (including multi-line messages) to a customer within an active 24-hour chat window.

---

## Action Configuration

### Send Message (Template)

Use this action for outbound alerts, new customers, or any contact outside the 24-hour reply window.

| Field | Description |
| ----- | ----------- |
| Sender Phone Number ID | The Phone Number ID copied from Meta. |
| Recipient Phone Number | Recipient's number with country code, no `+` (e.g. `919876543210`). |
| Template Name | The approved template name from Meta (e.g. `appse_ai_template`). |
| Message Text | Dynamic text to inject into `{{1}}` (e.g. `John, your order #1001 has been created`). |

:::note
Your Meta template must use **only one variable** `{{1}}`. Put all dynamic text (name, order ID, etc.) into **Message Text** as one string.
:::

---

### Send Message (Text)

Use this action when the customer has replied to your business within the **last 24 hours**.

| Field | Description |
| ----- | ----------- |
| Sender Phone Number ID | The Phone Number ID copied from Meta. |
| Recipient Phone Number | Recipient's number with country code, no `+` (e.g. `919876543210`). |
| Message Body | The free-form text message to send (multi-line supported). |

:::note
Free text only works inside the **24-hour customer service window**. Use **Send Message (Template)** for proactive or first-contact messages.
:::

---

## Support

If you're unsure about any field or face connection issues, reach out to our support team at [support@appse.ai](mailto:support@appse.ai)
