---
title: "Creditsafe"
description: Step-by-step guide to set up Creditsafe credentials and automate business credit risk, compliance, and monitoring workflows in appse ai.
slug: /app-integrations/creditsafe/
---

**Creditsafe** is a global business intelligence provider offering company credit reports, financial data, director and ownership information, and risk management insights. With **appse ai**, you can connect Creditsafe to your existing business tools to automate due diligence, credit risk assessment, AML/KYB compliance checks, and portfolio monitoring workflows.

---

## Key Features

- **Company Search & Verification** — Search, match, and enrich company records using name, registration number, VAT number, or address.
- **Credit Reports & Scoring** — Pull full credit reports, credit scores, and recommended credit limits for any company.
- **Financial & Director Data** — Retrieve financial statements, company officers, and director details.
- **Portfolio Monitoring** — Create monitoring portfolios, add companies to them, and get notified of changes.
- **AML & Compliance** — Run AML/sanctions/PEP checks and manage KYB/KYC compliance cases.
- **Bank Account Verification** — Verify IBAN or sort code and account number details before making payments.

---

## Setup Credential

:::info

Before you create a credential for Creditsafe in appse ai, ensure you have a Creditsafe account (Sandbox and/or Production) with a valid **username** and **password** for the [Creditsafe Connect API](https://connect.creditsafe.com/).

:::

### Required Fields

| Field           | Description                                                              |
| --------------- | ------------------------------------------------------------------------- |
| Connection Name | A name to help you identify this connection                              |
| Environment     | Choose **Production** or **Sandbox**, depending on which account you're connecting |
| Username        | Your Creditsafe account username or email address                        |
| Password        | Your Creditsafe account password                                         |

---

### Step-by-Step Guide

#### 1. Open the Credential Form

Log in to **appse ai** and navigate to **Credentials** → **Add credentials**. Search for **Creditsafe** and select it to open the credential form. You can also do this while creating a workflow by clicking **Create a new credential**.

Add a **Connection Name**, then select an **Environment** from the dropdown.

<img src="/img/credentials/creditsafe/creditsafe_credentialSupport.png" alt="appse ai Creditsafe Configure Credentials form" width="500"/>

#### 2. Choose Sandbox or Production

Creditsafe issues **separate accounts** for its Sandbox and Production environments, and each account only works against its matching environment. The Environment dropdown on the credential form tells appse ai which Creditsafe API to call:

- **Production** — `https://connect.creditsafe.com/` — connects to live Creditsafe data. Use this with your Production username and password. Requests here return real company data and consume your paid API usage.
- **Sandbox** — `https://connect.sandbox.creditsafe.com/` — connects to Creditsafe's test environment. Use this with your Sandbox username and password. This is intended for building and testing workflows with sample data before going live, without using production API credits.

:::tip

If you're unsure which environment your account belongs to, sign in at the [Creditsafe Connect API portal](https://connect.creditsafe.com/) — the sign-in page shows an **Environment** selector confirming whether your account is Sandbox or Production.

<img src="/img/credentials/creditsafe/creditsafe_login.png" alt="Creditsafe Connect API sign-in page showing the Environment selector" width="500"/>

:::

:::warning

Selecting the wrong environment for your username and password will cause authentication to fail. Make sure the Environment field matches the account you're signing in with.

:::

#### 3. Enter Username and Password

Enter the **Username** (or email) and **Password** for the Creditsafe account matching the environment selected above, then click **Save** to store and validate your credential.

---

## Triggers and Actions

Here is a list of the available triggers and actions for Creditsafe:

### Triggers

| Trigger                              | Description                                                                                                                     |
| ------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| **New Portfolio Alerts**              | Triggers when new monitoring alerts are generated for companies in a Creditsafe portfolio.                                    |
| **Portfolio Companies Changed**       | Triggers when companies in a Creditsafe portfolio have changes (credit score updates, status changes, etc.) since a given date. |
| **New Portfolio Events**              | Triggers when new events (credit score changes, address changes, insolvency filings, etc.) occur for companies in a portfolio.  |

### Actions

**Company Intelligence**

| Action                          | Description                                                                                          |
| -------------------------------- | ------------------------------------------------------------------------------------------------------ |
| **Search Companies**             | Search for companies in Creditsafe by name, registration number, or other criteria.                  |
| **Match Company**                | Find and match a company using partial details (name, registration number, address) to get its connectId. |
| **Enrich Company**               | Enrich a company record with additional data using the company connectId.                            |
| **Get Company Credit Report**    | Retrieve a full credit report for a company using its Creditsafe company ID.                         |
| **Get Credit Score**             | Retrieve the current credit score and rating for a company.                                          |
| **Get Credit Limit**             | Retrieve the recommended credit limit for a company.                                                 |
| **Get Financial Data**           | Retrieve financial statements and key financial figures for a company.                               |
| **Get Company Officers**         | Retrieve the list of company officers (secretaries, shareholders, and other key personnel).           |
| **Get Directors**                | Retrieve the list of directors associated with a company.                                            |

**People & Directors**

| Action                    | Description                                                                                    |
| --------------------------- | -------------------------------------------------------------------------------------------------- |
| **Search People (Directors)** | Search for people (directors/officers) by name, country, and other filters.                    |
| **Get Person Details**       | Retrieve detailed profile information for an individual (director or officer) using their person ID. |
| **Get Person Report**        | Retrieve a detailed report for a person (director/officer) using their Creditsafe person ID.    |

**Portfolio Monitoring**

| Action                              | Description                                                                                 |
| ------------------------------------- | ----------------------------------------------------------------------------------------------- |
| **Create Portfolio**                  | Create a new monitoring portfolio to track companies and receive change alerts.              |
| **List Portfolios**                   | Retrieve a list of monitoring portfolios.                                                     |
| **Update Portfolio**                  | Update the name or notification settings of an existing monitoring portfolio.                |
| **Add Company to Portfolio**          | Add a company to a monitoring portfolio to receive alerts on changes.                         |
| **Update Company in Portfolio**       | Update the settings or reference details of a company already added to a portfolio.          |
| **Get Portfolio Alerts**              | Retrieve monitoring alerts for companies in a portfolio.                                      |

**Compliance & Risk**

| Action                        | Description                                                                                          |
| ------------------------------- | -------------------------------------------------------------------------------------------------------- |
| **Run AML Check**               | Run an Anti-Money Laundering (AML) compliance check against global sanctions, PEP, and watchlist databases. |
| **Create Compliance Case**      | Create a new compliance case to manage and track KYB/KYC/AML review workflows.                       |
| **Verify Bank Account**         | Verify bank account details using IBAN (international) or sort code + account number (UK).           |

---

## Support

Need help? Contact our support team at [support@appse.ai](mailto:support@appse.ai)
