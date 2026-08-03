---
slug: /platform/key-concepts/nodes/built-in/decision
title: Decision Node
description: Step-by-step guide to configure the Decision Node in appse ai workflows.
---

The Decision Node in appse ai allows you to evaluate incoming data based on one or more conditions and route each record into either the True or False output path.

It helps you create dynamic workflow branches—where data is filtered, validated, or separated based on rules you define.

This is useful when you want to:
* Process only records that meet specific criteria
* Route high-value vs low-value orders
* Separate premium customers from standard ones
* Build conditional flows based on dates, numbers, or text

## IF Condition

The IF section is where you define the rules that determine whether an item is considered True or False.

<img src="/img/platform/key-concepts/nodes/built-in/decision/if.png" alt="if" width="700"/>

Each condition has three parts:

1.  **Field** → the data attribute to evaluate
    <img src="/img/platform/key-concepts/nodes/built-in/decision/field-if-condition.png" alt="field if condition" width="700"/>
2.  **Condition** → the comparison operator
    <img src="/img/platform/key-concepts/nodes/built-in/decision/if-conditions.png" alt="if conditions" width="700"/>
3.  **Value** → the expected value
    <img src="/img/platform/key-concepts/nodes/built-in/decision/value-if-condition.png" alt="value if conditions" width="700"/>

### Conditions

| Category | Condition name | Description | Expected Data Type | Example Usage |
| :--- | :--- | :--- | :--- | :--- |
| **Basic** | Exists | Checks whether the field has a value and is present in the data. | Any | "Email" exists |
| **Basic** | Does not exist | Checks whether the field is missing or undefined in the data. | Any | "MiddleName" does not exist |
| **Basic** | Is empty | Checks whether the field is empty (for example, null, blank text, or an empty list). | Any | "Notes" is empty |
| **Basic** | Is not empty | Checks whether the field contains a non-empty value. | Any | "Description" is not empty |
| **Basic** | Is true | Checks whether a boolean field evaluates to true. | Boolean | "IsActive" is true |
| **Basic** | Is false | Checks whether a boolean field evaluates to false. | Boolean | "IsDeleted" is false |
| **Text** | Equal to | Compares the field value to the specified text for an exact match. | String | "Status" equal to "Open" |
| **Text** | Not equal to | Passes when the field value does not match the specified text. | String | "Country" not equal to "USA" |
| **Text** | Contains | Checks whether the field includes the specified substring anywhere in its value. | String | "Name" contains "Inc" |
| **Text** | Does not contain | Passes when the field does not include the specified substring. | String | "Comment" does not contain "error" |
| **Text** | Starts with | Checks whether the field value begins with the specified text. | String | "ID" starts with "EMP-" |
| **Text** | Does not start with | Passes when the field value does not begin with the specified text. | String | "Tag" does not start with "tmp" |
| **Text** | Ends with | Checks whether the field value ends with the specified text. | String | "FileName" ends with ".pdf" |
| **Text** | Does not end with | Passes when the field value does not end with the specified text. | String | "FileName" does not end with ".tmp" |
| **Number** | Equal to | Compares the field to the specified number for an exact match. | Number | "Score" equal to 10 |
| **Number** | Not equal to | Passes when the field value is not equal to the specified number. | Number | "Quantity" not equal to 0 |
| **Number** | Greater than | Passes when the field value is numerically greater than the specified value. | Number | "Age" greater than 18 |
| **Number** | Less than | Passes when the field value is numerically less than the specified value. | Number | "Price" less than 100 |
| **Number** | Greater than or Equal to | Passes when the field value is greater than or equal to the specified value. | Number | "Hours" greater than or equal to 40 |
| **Number** | Less than or Equal to | Passes when the field value is less than or equal to the specified value. | Number | "Attempts" less than or equal to 3 |
| **Date & Time** | Equal to | Compares the field to the specified date and time for an exact match. | DateTime | "CreatedDate" equal to "2024-01-01" |
| **Date & Time** | Not equal to | Passes when the field date/time does not match the specified value. | DateTime | "StartDate" not equal to "Today" |
| **Date & Time** | Later than | Passes when the field date/time occurs after the specified value. | DateTime | "DueDate" later than "Now" |
| **Date & Time** | Earlier than | Passes when the field date/time occurs before the specified value. | DateTime | "EventDate" earlier than "Deadline" |
| **Date & Time** | Later than or Equal to | Passes when the field date/time is on or after the specified value. | DateTime | "ValidFrom" later than or equal to "Today" |
| **Date & Time** | Earlier than or Equal to | Passes when the field date/time is on or before the specified value. | DateTime | "ExpiryDate" earlier than or equal to "Now" |

## AND Conditions

<img src="/img/platform/key-concepts/nodes/built-in/decision/and.png" alt="and" width="700"/>

The AND button adds another condition inside the same rule group.

**Example meaning:**
Condition A **AND** Condition B
<img src="/img/platform/key-concepts/nodes/built-in/decision/and-condition.png" alt="and-condition" width="700"/>

For the item to be marked True, both conditions must be satisfied.

Use AND when all conditions must be true at the same time.

## OR Conditions

<img src="/img/platform/key-concepts/nodes/built-in/decision/or.png" alt="or" width="700"/>

The OR button creates a separate rule block.

**Example meaning:**
**(Group 1: ConditionA AND ConditionB)** OR **(Group 2: ConditionC AND ConditionD)**
<img src="/img/platform/key-concepts/nodes/built-in/decision/or-condition.png" alt="or condition" width="700"/>

If any one group evaluates to true, the item is routed to the True output.

Use OR when you want multiple possible criteria to qualify.

## Case Sensitivity (Settings Tab)

*   **Disable Case Sensitivity**
*   When **ON** → "Alice" = "alice" = "ALICE"
*   When **OFF** (default) → comparisons are strict
*   This affects Text-based conditions only.

## Steps to Use the Decision Node

Use the **Field** box for the data you want to evaluate, the **Condition** dropdown for the operator, and the **Value** box for what you want to compare against.

### 1. Select the Decision node from the selection screen.
    
<img src="/img/platform/key-concepts/nodes/built-in/decision/select-decision-node.png" alt="select-decision-node" width="700"/>

### 2. An empty configuration screen is displayed.

<img src="/img/platform/key-concepts/nodes/built-in/decision/empty-decision-node.png" alt="empty-decision-node" width="700"/>

### 3. Configuring the Field and Value boxes

#### Field box

The Field box defines the left side of the comparison. You can configure it in any of these ways:

1. **Drag and drop** any field from the current node's input schema into the Field box.
2. **Type the exact field name** from the input data (for example, `CardCode` or `BPAddresses[0].Street`).

<img src="/img/platform/key-concepts/nodes/built-in/decision/field_mapped.png" alt="Field mapped" width="700"/>

3. **Combine a field with supported functions** — use a field name together with [supported functions](/platform/key-concepts/expressions/using-functions) to transform the expression value before comparison (for example, `{{date_diff($payload.createdAt, now(), 'days')}}` or `{{mod($payload.id,`2`)}}` or `{{substringAfter($payload.email, '@')}}` ).

<img src="/img/platform/key-concepts/nodes/built-in/decision/date_diff.png" alt="Date diff function" width="700"/>

<img src="/img/platform/key-concepts/nodes/built-in/decision/mod.png" alt="Mod function" width="700"/>

#### Value box

The Value box defines the right side of the comparison. You can configure it in any of these ways:

1. **Drag and drop** any field from the direct preceeding node (displayed in the current node's input schema) into the Value box.
2. **Drag and drop** any field from a **prior node's** output in the workflow, say, data field displayed for an earlier node or trigger (displayed in the current node's input schema).

<img src="/img/platform/key-concepts/nodes/built-in/decision/prior_node.png" alt="Prior Node" width="700"/>

3. **Combine a field with expressions** — use a field name together with [supported functions](/platform/key-concepts/expressions/using-functions) to build the comparison value. Similar as explained for Field box.

You can mix these approaches across Field and Value as per your integration requirement.

**Example with AND and OR**

User can also use AND and OR conditions like this:

- First, user clicked **AND +** and added another rule where `customer.name` is **Equal to** `Alice Wonderland`.

- Then user clicked **OR +** to create a second group, where `dates.orderDate` is **Equal to** `05/02/2025 14:00` **AND** `order.status` is **Equal to** `Pending`.

- **Together, this means a record will pass if it matches:**
`(amount = 50000 AND customer = Alice Wonderland) OR (orderDate = 05/02/2025 14:00 AND status = Pending)`.

### 4. Execute the Node and Check the Output

<img src="/img/platform/key-concepts/nodes/built-in/decision/execute.png" alt="Execute" width="700"/>

### 5. Output (True and False Division)

1.  In the **False branch** of the output, you will see all records that do not satisfy any of the configured groups (for example, an order with an amount of 75000 and status Delivered).

<img src="/img/platform/key-concepts/nodes/built-in/decision/false-branch.png" alt="false branch" width="700"/>

2.  In the **True branch** of the output, you will see all records that satisfy at least one group (for example, Alice Wonderland’s order with an amount of 50000).

<img src="/img/platform/key-concepts/nodes/built-in/decision/true-branch.png" alt="true branch" width="700"/>

Use these True and False outputs to connect different downstream nodes, depending on how you want to process matching vs non-matching records.

## Support

Need help? Contact the support team at [support@appse.ai](mailto:support@appse.ai)