---
title: "Google Sheets"
description: Step-by-step guide to set up Google Sheets credentials and automate spreadsheet workflows in appse ai.
slug: /app-integrations/googlesheets/
unlisted: true
---

import ConnectAccountButton from '@site/src/components/ConnectAccountButton';

Google Sheets is a powerful cloud-based spreadsheet application that allows users to create, edit, and collaborate on spreadsheets in real time. With **appse ai**, you can securely connect your Google Sheets account, automate data operations, and seamlessly integrate spreadsheet data into your workflows.

:::note
Google Sheets uses OAuth 2.0 authentication only. Install and connect the app directly through the OAuth flow. Users do not need to manually enter client IDs or client secrets.
:::

<ConnectAccountButton
  appName="Google Sheets"
  authorizeUrl="https://workflow.insync.top/credentials?appCode=googlesheets&credentialTypeCode=googlesheets_oauth2_public"
/>

Click **Connect your Google Sheets Account** above to open the Public App authorization page and start the OAuth connection. If you are not signed in to appse ai, you will be prompted to log in or register first.

---

### Add Credential in appse ai

- Click **Save & Authorize**.

<img src="/img/credentials/google-sheets/GS29.png" alt="Google Sheets Save and Authorize screen" width="700"/>

- You will be redirected to the Google authentication page. Enter your Google account email and click **Next**.

<img src="/img/credentials/google-sheets/GS30.png" alt="Google Sheets email login screen" width="700"/>

- Enter your password and continue.

<img src="/img/credentials/google-sheets/GS31.png" alt="Google Sheets password login screen" width="700"/>

- Complete Two-Step Verification if it is enabled on your account.

- Click **Continue** to proceed.

<img src="/img/credentials/google-sheets/GS32.png" alt="Google Sheets continue authorization screen" width="700"/>

- Review the requested permissions and approve access so appse ai can connect to Google Sheets.

<img src="/img/credentials/google-sheets/GS33.png" alt="Google Sheets OAuth consent screen" width="700"/>

- Once connected, you will be automatically redirected back to the appse ai platform, and the Google Sheets credential will be saved successfully.

- Verify that the credential is successfully validated.

<img src="/img/credentials/google-sheets/GS34.png" alt="Google Sheets credential successfully validated" width="700"/>

---

## Actions

| Action | Description |
| ------ | ----------- |
| **Get Rows from Google Sheet** | Retrieves data from a specified range in a Google Sheet and returns each row as a structured object. |
| **Create New Sheet in Spreadsheet** | Creates a new sheet (tab) inside an existing Google Spreadsheet. |
| **Append Row to Google Sheet** | Adds a new row of data to an existing Google Sheet without affecting existing rows. |
| **Update Row in Google Sheet** | Updates an existing row by matching a specific value in a chosen column and then updating one or more column values in that row. |
| **Create new Spreadsheet** | Creates a brand-new Google Spreadsheet directly from your workflow. |

## Common Setup

### Sample Spreadsheet

For all examples in this documentation, assume the following Google Sheet:
   <img src="/img/credentials/google-sheets/GS35.png" width="700"/>

---

### How to Get Spreadsheet ID

1. Open your browser and go to [Google Docs](https://docs.google.com)
2. From the left sidebar, click on Sheets to view all your Google Sheets.
3. Open the Google Sheet you want to use.
4. Once the sheet is open, look at the browser’s address bar.
5. The URL will look similar to this:
      https://docs.google.com/spreadsheets/d/1A2B3C4D5E6F7G8H9I0/edit#gid=0
6. The Spreadsheet ID is the highlighted portion between /d/ and /edit:
      https://docs.google.com/spreadsheets/d/🟦1A2B3C4D5E6F7G8H9I0🟦/edit#gid=0

Copy this value and paste it into the Spreadsheet ID field in the action configuration wherever required.

---

## 1. Get Rows from Google Sheet

The **Get Rows from Google Sheet** action retrieves data from a specified range in a Google Sheet and returns each row as a structured object.  
This action is commonly used to **read spreadsheet data**, **fetch records**, or **use Google Sheets as a data source** in workflows.
:::note
Regardless of the configured Start Cell and End Cell, the first row of the spreadsheet is always treated as the header row. The column names in this row are used as the JSON field names in the output array of objects.
:::

---

### Configuration Fields

| Field          | Description |
|---------------|------------|
| Select Spreadsheet | Select the required spreadsheet from the dropdown |
| Sheet Name     | The name of the sheet (tab) inside the spreadsheet |
| Start Cell     | The starting cell of the range to fetch. (e.g., `A1`) |
| End Cell       | The ending cell of the range (Recommended: `ZZ` This allows the engine to read data until the last populated cell automatically) |

---

### Example Configuration
   <img src="/img/credentials/google-sheets/GS40.png" width="700"/>

---

### Result
   <img src="/img/credentials/google-sheets/GS50.png" width="700"/>

---

## 2. Create New Sheet in Spreadsheet

The **Create New Sheet in Spreadsheet** action, creates a **new sheet (tab)** inside an existing Google Spreadsheet.  
This action is commonly used to **initialize data structures**, **generate reports**, or **prepare sheets for downstream write operations**.

---

### Configuration Fields

| Field | Description |
|------|------------|
| Select Spreadsheet | Select the required spreadsheet from the dropdown where the new sheet will be created |
| Sheet Name | The name of the new sheet (tab) to be created. This field appears dynamically after adding an item under **Sheet Creation Requests** |

:::note
You can create multiple sheets by adding multiple items under Sheet Creation Requests.
:::

---

### Example Configuration
   <img src="/img/credentials/google-sheets/GS41.png" width="700"/>

---

### Result
   <img src="/img/credentials/google-sheets/GS42.png" width="700"/>

---

## 3. Append Row to Google Sheet

The **Append Row to Google Sheet** action adds a new row of data to an existing Google Sheet.  
This action is commonly used to **insert new records**, **log workflow outputs**, or **store transactional data** without affecting existing rows.

---

### Configuration Fields

| Field | Description |
|------|------------|
| Select Spreadsheet | Select the required spreadsheet from the dropdown |
| Sheet Name | The name of the sheet (tab) where the row will be appended |
| Append Range | Specifies the column range for the row (e.g., `A1:E1`). Data will be appended to the **next available row** within this range |
| Value Input Mode | Determines how the values are interpreted (`Raw` or `User Entered`). Use **User Entered** when inserting formulas or formatted values |
| Insert Behavior | Controls whether new data is inserted as a new row or overwrites existing data |
| Row Values | Defines the values to be written into each cell of the new row. Ensure that the number of `Cell Value` fields added matches the number of columns in the append range |

---

### Example Configuration
   <img src="/img/credentials/google-sheets/GS43.png" width="700"/>

   <img src="/img/credentials/google-sheets/GS44.png" width="700"/>

---

### Result
   <img src="/img/credentials/google-sheets/GS45.png" width="700"/>

---

## 4. Update Row in Google Sheet

This action allows you to update an existing row in a Google Sheet by matching a specific value in a chosen column and then updating one or more column values in that row.

---

### Configuration Fields

| Field | Description |
|------|------------|
| Select Spreadsheet | Select the required spreadsheet from the dropdown where the row needs to be updated. |
| Sheet Name | The name of the sheet (tab) within the selected Google Spreadsheet where the update operation will be performed. |
| Row Match Condition | Defines the criteria used to identify the exact row that should be updated.<br />**Match Column** – Enter the exact column header name (for example: `Employee ID`, `Name`).<br />**Match Value** – Enter the value to match against the selected column. The row containing this value will be identified and updated. |
| Updated Column Values | Clicking **Add Additional Property** displays a key–value pair UI. Each key represents a column header, and the corresponding value represents the new data to be updated in that column. |

---

### Example Configuration
   <img src="/img/credentials/google-sheets/GS46.png" width="700"/>

---

### Result
   <img src="/img/credentials/google-sheets/GS47.png" width="700"/>

---

## 5. Create new Spreadsheet

The **Create New Spreadsheet** action allows you to create a brand-new Google Spreadsheet directly from your workflow.  
This action is useful when you need to generate spreadsheets dynamically for reports, data collection, exports, or automation use cases.

---

### Configuration Fields

| Field | Description |
|------|------------|
| **Spreadsheet Title** | The title (name) of the new Google Spreadsheet that will be created|
| **Locale** *(Optional)* | Specifies the locale for the spreadsheet (for example: `en_US`). The locale determines default formatting such as date formats, number separators, and currency symbols. |
| **Recalculation Frequency** *(Optional)* | Determines how frequently spreadsheet formulas are recalculated automatically. Select an appropriate option based on how often your data changes. |
| **Initial Sheets** *(Optional)* | Allows you to define one or more sheets (tabs) that should be created when the spreadsheet is generated.<br />**Sheet Name** Enter a name for the sheet (for example: `Sheet1`, `Leads`, `Data`)<br />**Hidden Sheet** Enable this option to create the sheet in a hidden state. Hidden sheets will not be visible by default to users opening the spreadsheet (for example: `true`, `false`)|

---

### Example Configuration
   <img src="/img/credentials/google-sheets/GS48.png" width="700"/>

---

### Result
   <img src="/img/credentials/google-sheets/GS49.png" width="700"/>

---

## Support
 
Need help? Contact our support team at [support@appse.ai](mailto:support@appse.ai)
