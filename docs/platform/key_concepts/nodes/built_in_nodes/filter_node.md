---
slug: /platform/key-concepts/nodes/built-in/filter
title: Filter Node
description: Step-by-step guide to configure the Filter Node in appse ai workflows.
---

The Filter Node in appse ai allows you to selectively pass through only the data records that meet one or more defined conditions.

Records that do not satisfy the conditions are simply excluded from the workflow and are not forwarded further.

It helps you clean, narrow down, and control data flow without creating branches.

This is useful when you want to:
* Allow only valid or relevant records to continue
* Remove unwanted or incomplete data
* Process only high-priority or matching records
* Reduce noise before downstream processing

## IF Condition

The IF section is where you define the rules that determine whether an item is considered True or False.

<img src="/img/platform/key-concepts/nodes/built-in/filter/if.png" alt="if" width="700"/>

Each condition has three parts:

1. **Field** → the data attribute to evaluate
   <img src="/img/platform/key-concepts/nodes/built-in/filter/field-if-condition.png" alt="if field" width="700"/>
2. **Condition** → the comparison operator
   <img src="/img/platform/key-concepts/nodes/built-in/filter/if-conditions.png" alt="if condition" width="700"/>
3. **Value** → the expected value
   <img src="/img/platform/key-concepts/nodes/built-in/filter/value-if-condition.png" alt="value if condition" width="700"/>

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

<img src="/img/platform/key-concepts/nodes/built-in/filter/and.png" alt="and" width="700"/>

The AND button adds another condition inside the same rule group.

**Example meaning:** Condition A **AND** Condition B

For a record to pass the filter, all AND conditions must be satisfied.

Use AND when every condition must be true at the same time.

## OR Conditions

<img src="/img/platform/key-concepts/nodes/built-in/filter/or.png" alt="or" width="700"/>

The OR button creates a separate rule group.

**Example meaning:**
**(Group 1: ConditionA AND ConditionB)** OR **(Group 2: ConditionC AND ConditionD)**

If any one group evaluates to true, the record is allowed to pass.

Use OR when multiple alternative criteria should qualify.

## Case Sensitivity (Settings Tab)

* **Disable Case Sensitivity**
* When **ON** → "Alice" = "alice" = "ALICE"
* When **OFF** (default) → comparisons are case-sensitive
* Applies only to Text-based conditions.

## Steps to Use the Filter Node

Use the **Field** box for the data you want to evaluate, the **Condition** dropdown for the operator, and the **Value** box for what you want to compare against.

### 1. Select the Filter node from the selection screen.
    
<img src="/img/platform/key-concepts/nodes/built-in/filter/select-filter-node.png" alt="select-filter-node" width="700"/>

### 2. An empty configuration screen is displayed.

<img src="/img/platform/key-concepts/nodes/built-in/filter/empty-filter-node.png" alt="empty-filter-node" width="700"/>

### 3. Configuring the Field and Value boxes

#### Field box

The Field box defines the left side of the comparison. You can configure it in any of these ways:

1. **Drag and drop** any field from the current node's input schema into the Field box.
2. **Type the exact field name** from the input data (for example, `CardCode` or `BPAddresses[0].Street`).

<img src="/img/platform/key-concepts/nodes/built-in/filter/field_mapped.png" alt="Field mapped" width="700"/>

3. **Combine a field with supported functions** — use a field name together with [supported functions](/platform/key-concepts/expressions/using-functions) to transform the expression value before comparison (for example, `{{date_diff($payload.createdAt, now(), 'days')}}` or `{{mod($payload.id,`2`)}}` or `{{substringAfter($payload.email, '@')}}` ).

<img src="/img/platform/key-concepts/nodes/built-in/filter/date_diff.png" alt="Date diff function" width="700"/>

<img src="/img/platform/key-concepts/nodes/built-in/filter/mod.png" alt="Mod function" width="700"/>

#### Value box

The Value box defines the right side of the comparison. You can configure it in any of these ways:

1. **Drag and drop** any field from the direct preceeding node (displayed in the current node's input schema) into the Value box.
2. **Drag and drop** any field from a **prior node's** output in the workflow, say, data field displayed for an earlier node or trigger (displayed in the current node's input schema).

<img src="/img/platform/key-concepts/nodes/built-in/filter/prior_node.png" alt="Prior Node" width="700"/>

3. **Combine a field with expressions** — use a field name together with [supported functions](/platform/key-concepts/expressions/using-functions) to build the comparison value.

You can mix these approaches across Field and Value as per your integration requirement.

**Example with AND and OR**

User can also use AND and OR conditions in the Filter node like this:

- First, user clicked **AND +** and added another rule where `order.status` is **Equal to** `Shipped` **AND** `customer.segment` is **Equal to** `Premium`.

- Then, user clicked **OR +** to create a second group, where `dates.orderDate` is **Later than** `01/02/2025 14:00`.

- **Together, this means a record will pass the filter if it matches:**
`(order.status = Shipped AND customer.segment = Premium) OR (orderDate > 01/02/2025 14:00)`.

<img src="/img/platform/key-concepts/nodes/built-in/filter/or-condition.png" alt="and or condition" width="700"/>

### 4. Execute the Node and Check the Output

<img src="/img/platform/key-concepts/nodes/built-in/filter/execute.png" alt="Execute" width="700"/>

### 5. Output Behavior

<img src="/img/platform/key-concepts/nodes/built-in/filter/filtered-branch.png" alt="filtered branch" width="700"/>

* All records that satisfy at least one of the above rule groups are passed to the next connected node (for example, a shipped order from a premium customer, or any order placed after the specified date).
* Records that do not satisfy any of the configured groups are filtered out and will not be processed further.

Use the Filter node when you want only matching records to continue in a single flow, without creating separate True or False branches.

## Support

Need help? Contact the support team at [support@appse.ai](mailto:support@appse.ai)