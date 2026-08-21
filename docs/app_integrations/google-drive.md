---
title: "Google Drive"
description: Step-by-step guide to set up Google Drive credentials and automate file and folder workflows in appse ai.
slug: /app-integrations/googledrive/
---

Google Drive is Google's cloud storage service for storing, organising, and sharing files and folders. With **appse ai**, you can securely connect your Google Drive account, automate file and folder operations, manage sharing permissions, and integrate Drive content into your workflows.

---

## Set Up Credential

:::info

Before you create a credential for Google Drive using appse ai, ensure you have a Google account and access to the [Google Cloud Console](https://console.cloud.google.com/), where you will create an OAuth 2.0 client and enable the Google Drive API.

:::

Google Drive uses OAuth 2.0 with your own Google Cloud OAuth client, so you supply the Client ID and Client Secret yourself.

### Required Fields

You'll be asked to fill in the following details:

| Field            | Description                                                                                                                                                                                                                           |
| ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Connection Name  | A name to help you identify this connection                                                                                                                                                                                           |
| Client ID        | Your OAuth 2.0 Client ID from the Google Cloud Console                                                                                                                                                                                |
| Client Secret    | Your OAuth 2.0 Client Secret from the Google Cloud Console                                                                                                                                                                            |
| API Access Scope | Pre-filled and read-only. Requests the `drive`, `drive.file`, and `drive.metadata` scopes. These same scopes must be added to your OAuth client in the Google Cloud Console — see [Configure OAuth Scopes](#5-configure-oauth-scopes) |
| Callback API URL | Provided by appse ai and read-only: `https://embedded-ui.appse.ai/oauth-callback.html`. Add this as an Authorized redirect URI on your Google OAuth client — see [Create the OAuth Client ID and Client Secret](#6-create-the-oauth-client-id-and-client-secret) |

---

### Step-by-Step Guide

#### 1. Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/).
2. Click the **Project selector** (top-left).

<img src="/img/credentials/google-drive/GD1.png" alt="Google Cloud Console project selector" width="700"/>

3. Click **New Project**.

<img src="/img/credentials/google-drive/GD2.png" alt="Google Cloud Console New Project button" width="700"/>

4. Enter a **Project name** and **Location**, then click **Create**.

<img src="/img/credentials/google-drive/GD3.png" alt="Google Cloud Console new project name and location" width="700"/>

#### 2. Enable the Google Drive API

1. Go to **APIs & Services → Library**.

<img src="/img/credentials/google-drive/GD4.png" alt="Google Cloud Console APIs and Services menu" width="700"/>

<img src="/img/credentials/google-drive/GD5.png" alt="Google Cloud Console API Library" width="700"/>

2. Search for **Google Drive API** and open it from the results.

<img src="/img/credentials/google-drive/GD6.png" alt="Google Cloud Console API Library search for Google Drive API" width="700"/>

3. Click **Enable**.

:::note

Enabling the Google Drive API is mandatory. Without it, every Google Drive action fails even when the credential validates successfully.

:::

#### 3. Configure the OAuth Consent Screen

1. Go to **APIs & Services → OAuth consent screen**.

<img src="/img/credentials/google-drive/GD7.png" alt="Google Cloud Console OAuth consent screen menu" width="700"/>

2. If you see the message **"Google Auth Platform not configured yet"**, click **Get started**.

<img src="/img/credentials/google-drive/GD8.png" alt="Google Auth Platform not configured yet get started" width="700"/>

3. **App information** — enter an **App name** and **User support email**, then click **Next**.

<img src="/img/credentials/google-drive/GD9.png" alt="Google Auth Platform app information" width="700"/>

4. **Audience** — select **External** so the integration can be authorized by any Google account, not just users inside a single Google Workspace organization. Click **Next**.

<img src="/img/credentials/google-drive/GD10.png" alt="Google Auth Platform audience external" width="700"/>

5. **Contact information** — enter a **Contact email**, then click **Next**.

<img src="/img/credentials/google-drive/GD11.png" alt="Google Auth Platform contact information" width="700"/>

6. Check **"I agree to the Google API Services: User Data Policy"**, click **Continue**, then **Create**.

<img src="/img/credentials/google-drive/GD12.png" alt="Google Auth Platform agree to user data policy and create" width="700"/>

#### 4. Add Test Users

1. Go to **APIs & Services → OAuth consent screen** and open the **Audience** section.

<img src="/img/credentials/google-drive/GD13.png" alt="Google Auth Platform audience section in the left navigation" width="700"/>

2. Under **Test users**, click **Add users**, add one or more Google email addresses, then click **Save**.

<img src="/img/credentials/google-drive/GD14.png" alt="Google Auth Platform add test users" width="700"/>

:::note

While the app is in testing, only the users added here can successfully authorize and validate the credential. Add the Google account you intend to connect in appse ai.

:::

#### 5. Configure OAuth Scopes

The scopes appse ai requests must be enabled on your Google Cloud OAuth client, or Google will refuse them during authorization.

1. Go to **APIs & Services → OAuth consent screen**.
2. Open **Data Access**.

<img src="/img/credentials/google-drive/GD15.png" alt="Google Auth Platform Data Access section" width="700"/>

3. Click **Add or remove scopes**.

<img src="/img/credentials/google-drive/GD16.png" alt="Google Auth Platform add or remove scopes" width="700"/>

Select all three Google Drive scopes:

| Scope | Grants |
| ----- | ------ |
| `https://www.googleapis.com/auth/drive` | See, edit, create, and delete all of your Google Drive files |
| `https://www.googleapis.com/auth/drive.file` | See, edit, create, and delete only the specific Google Drive files used with this app |
| `https://www.googleapis.com/auth/drive.metadata` | View and manage metadata of files in your Google Drive |

<img src="/img/credentials/google-drive/GD17.png" alt="Google Auth Platform selecting the Google Drive scopes" width="700"/>

4. Click **Update**.

<img src="/img/credentials/google-drive/GD18.png" alt="Google Auth Platform update scopes" width="700"/>

5. Click **Save**.

<img src="/img/credentials/google-drive/GD19.png" alt="Google Auth Platform save scopes" width="700"/>

:::note

These are the same three scopes shown in the read-only **API Access Scope** field on the credential form, and the three checkboxes you approve on the Google consent screen in Step 7. All three must match.

:::

#### 6. Create the OAuth Client ID and Client Secret

1. Go to **APIs & Services → Credentials**.

<img src="/img/credentials/google-drive/GD20.png" alt="Google Cloud Console Credentials page" width="700"/>

2. Click **Create Credentials** and select **OAuth client ID**.

<img src="/img/credentials/google-drive/GD21.png" alt="Google Cloud Console create credentials OAuth client ID" width="700"/>

3. For **Application type**, select **Web application**, then enter a **Name**. This name only identifies the client inside the console and is never shown to end users.

<img src="/img/credentials/google-drive/GD22.png" alt="Google Cloud Console OAuth client application type and name" width="700"/>

4. Under **Authorized redirect URIs**, click **Add URI** and enter the appse ai callback URL:

```text
https://embedded-ui.appse.ai/oauth-callback.html
```

<img src="/img/credentials/google-drive/GD23.png" alt="Google Cloud Console authorized redirect URIs" width="700"/>

:::info

This is the **Callback API URL** shown on the Google Drive credential form in appse ai. You can copy it straight from that form using the copy icon beside the field — see [Add Credential in appse ai](#7-add-credential-in-appse-ai).

:::

:::warning

The redirect URI must **exactly match** the Callback API URL shown in the appse ai credential form — no trailing slash, no `http://` instead of `https://`. A mismatch causes a `redirect_uri_mismatch` error during authorization.

:::

5. Click **Create**. Google displays the **Client ID** and **Client Secret**.

<img src="/img/credentials/google-drive/GD24.png" alt="Google Cloud Console OAuth client created showing Client ID and Client Secret" width="700"/>

6. Copy both values and store them securely. You can also click **Download JSON** to keep a copy.

<img src="/img/credentials/google-drive/GD25.png" alt="Google Cloud Console download OAuth client JSON" width="700"/>

:::warning

Copy the **Client Secret** now. Google no longer lets you view or download it once you close this dialog — if you lose it, you must create a new OAuth client.

:::

:::note

It can take a few minutes for a newly created OAuth client to become active. If authorization fails immediately after creating it, wait a short while and try again.

:::

#### 7. Add Credential in appse ai

- In appse ai, click **Select a Credential** and choose **Google Drive** from the application list. The credential form opens, showing the **Callback API URL** you added as an Authorized redirect URI in Step 6.

<img src="/img/credentials/google-drive/GD26.png" alt="appse ai Google Drive credential form with Client ID, Client Secret, and API Access Scope fields" width="700"/>

- Enter a **Connection Name** and paste your **Client ID** and **Client Secret**. Scroll down to confirm the pre-filled, read-only **API Access Scope** and the **Callback API URL** — the same URL you added as an Authorized redirect URI in Step 6.

<img src="/img/credentials/google-drive/GD27.png" alt="appse ai Google Drive credential form showing Client Secret, API Access Scope, and Callback API URL with the Save and Authorize button" width="700"/>

- Click **Save & Authorize**. appse ai saves the credential and redirects you to the Google authentication page.

- On the Google authentication page, select the Google account you want to connect.

<img src="/img/credentials/google-drive/GD28.png" alt="Google Drive choose an account screen" width="700"/>

- If you are not already signed in, enter your Google account email and click **Next**.

<img src="/img/credentials/google-drive/GD29.png" alt="Google Drive email login screen" width="700"/>

- Enter your password and continue.

<img src="/img/credentials/google-drive/GD30.png" alt="Google Drive password login screen" width="700"/>

- Complete Two-Step Verification if it is enabled on your account.

- Click **Continue** to proceed.

<img src="/img/credentials/google-drive/GD31.png" alt="Google Drive continue authorization screen" width="700"/>

- Review the requested permissions, select all the required scope checkboxes, and approve access so appse ai can connect to Google Drive.

<img src="/img/credentials/google-drive/GD32.png" alt="Google Drive OAuth consent screen" width="700"/>

- Once connected, you will be automatically redirected back to the appse ai platform, and the Google Drive credential will be saved successfully.

- Verify that the credential is successfully validated.

---

## Actions

| Action                                    | Description                                                                                                    |
| ----------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **Search folder by name**                 | Searches for folders in Google Drive that match the given folder name.                                         |
| **Get files in a folder**                 | Gets the list of files contained in a specific Google Drive folder by folder ID.                               |
| **Get images in a folder**                | Gets the list of image files contained in a specific Google Drive folder.                                      |
| **Get file by ID**                        | Gets the metadata of a file or folder in Google Drive by its file ID.                                          |
| **Search folder by name in Shared Drive** | Searches for folders by name inside a specific Google Shared Drive (Team Drive).                               |
| **Get files in folder (Shared Drive)**    | Lists files inside a folder that lives in a Google Shared Drive (Team Drive), returning direct download links. |

## Common Setup

### How to Get Folder ID

1. Open your browser and go to [Google Drive](https://drive.google.com)
2. Open the folder you want to use.
3. Once the folder is open, look at the browser's address bar.
4. The URL will look similar to this:
   `https://drive.google.com/drive/folders/YOUR_FOLDER_ID`
5. The Folder ID is the portion that appears after `/folders/` — in the example above, `YOUR_FOLDER_ID`.

Copy this value and paste it into the Folder ID field in the action configuration wherever required.

:::note
You can also obtain a Folder ID from the output of the **Search folder by name** action, and pass it directly into the folder-based actions in your workflow.
:::

---

### How to Get File ID

1. Open your browser and go to [Google Drive](https://drive.google.com)
2. Right-click the file you want to use and choose **Share → Copy link**.
3. The link will look similar to this:
   `https://drive.google.com/file/d/YOUR_FILE_ID/view?usp=sharing`
4. The File ID is the portion between `/d/` and `/view` — in the example above, `YOUR_FILE_ID`.

Copy this value and paste it into the File ID field in the action configuration wherever required.

:::note
For Google Docs, Sheets, and Slides files the link format is `https://docs.google.com/document/d/YOUR_FILE_ID/edit` — the File ID sits in the same position, between `/d/` and the next `/`.
:::

---

## 1. Search folder by name

The **Search folder by name** action searches for folders in Google Drive that match the given folder name.
This action is commonly used to **resolve a folder name to its Folder ID**, which you can then pass into the folder-based actions.

---

### Configuration Fields

| Field       | Description                                                                                                                 |
| ----------- | --------------------------------------------------------------------------------------------------------------------------- |
| Folder Name | The exact name of the folder to search for (for example: `Classroom`). Only folders that are not in the trash are returned. |

:::note
Files are excluded from the results — the action matches folders only.
:::

---

## 2. Get files in a folder

The **Get files in a folder** action gets the list of files contained in a specific Google Drive folder by folder ID.
This action is commonly used to **iterate over the contents of a folder** in a workflow.

---

### Configuration Fields

| Field     | Description                                                                                 |
| --------- | ------------------------------------------------------------------------------------------- |
| Folder ID | The ID of the folder to list files from. See [How to Get Folder ID](#how-to-get-folder-id). |
| Page Size | Maximum number of files to return per page. Defaults to `10`.                               |

Each file in the response includes its `id`, `name`, `mimeType`, `size`, and `modifiedTime`. Files in the trash are excluded.

---

## 3. Get images in a folder

The **Get images in a folder** action gets the list of image files contained in a specific Google Drive folder.
This action behaves like **Get files in a folder** but returns only files whose MIME type is an image.

---

### Configuration Fields

| Field     | Description                                                                                  |
| --------- | -------------------------------------------------------------------------------------------- |
| Folder ID | The ID of the folder to list images from. See [How to Get Folder ID](#how-to-get-folder-id). |

Each image in the response includes its `id`, `name`, `mimeType`, `size`, and `webContentLink`. Files in the trash are excluded.

---

## 4. Get file by ID

The **Get file by ID** action gets the metadata of a file or folder in Google Drive by its file ID.
This action is commonly used to **look up details of a single file**, such as its name, type, size, or download link.

---

### Configuration Fields

| Field               | Description                                                                                                                                        |
| ------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------- |
| File ID             | The ID of the file to retrieve, for example `YOUR_FILE_ID`. See [How to Get File ID](#how-to-get-file-id).                                        |
| Fields _(Optional)_ | Comma-separated list of metadata fields to return. Defaults to `id,name,mimeType,size,webContentLink,thumbnailLink`. Use `*` to return all fields. |

---

## 5. Search folder by name in Shared Drive

The **Search folder by name in Shared Drive** action searches for folders by name inside a specific Google Shared Drive (Team Drive).
Use this instead of **Search folder by name** when the folder lives in a Shared Drive rather than in My Drive.

---

### Configuration Fields

| Field        | Description                                                                                                                                  |
| ------------ | -------------------------------------------------------------------------------------------------------------------------------------------- |
| Folder Name  | The exact name of the folder to search for (for example: `Classroom`). Only folders that are not in the trash are returned.                  |
| Shared Drive | The Shared Drive (Team Drive) to search within. The dropdown is populated from the Shared Drives available to your connected Google account. |

Each folder in the response includes its `id`, `name`, `mimeType`, `parents`, `webViewLink`, `createdTime`, and `modifiedTime`.

---

## 6. Get files in folder (Shared Drive)

The **Get files in folder (Shared Drive)** action lists the files inside a folder that lives in a Google Shared Drive (Team Drive), returning direct download links.
Results are sorted by file name.

---

### Configuration Fields

| Field     | Description                                                                                                                                               |
| --------- | --------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Folder ID | The ID of the folder inside a Shared Drive whose files should be listed. Typically mapped from a previous **Search folder by name in Shared Drive** step. |

Each file in the response includes its `id`, `name`, and `webContentLink` (a direct download link). Only non-trashed files directly inside the folder are returned.

---

## Support

Need help? Contact our support team at [support@appse.ai](mailto:support@appse.ai)
