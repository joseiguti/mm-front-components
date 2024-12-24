# Form Component

A reusable and customizable form component for your projects. It supports dynamic field configurations, validations, and flexible layouts with Chakra UI.

## Installation

Install the package via NPM:

```bash
npm install @mi-monorepo/form
```

## Usage

Import the `Form` component and configure it with dynamic fields:

```javascript
import React from "react";
import Form from "@mi-monorepo/form";

const App = () => {
  return (
    <Form
      fields={[
        // First row: 2 fields
        [
          {
            name: "firstName",
            label: "First Name",
            type: "text",
            placeholder: "Enter your first name",
            isRequired: true,
          },
          {
            name: "lastName",
            label: "Last Name",
            type: "text",
            placeholder: "Enter your last name",
            isRequired: true,
          },
        ],
        // Second row: 3 fields
        [
          {
            name: "email",
            label: "Email Address",
            type: "text",
            placeholder: "Enter your email",
            isRequired: true,
          },
          {
            name: "phone",
            label: "Phone Number",
            type: "text",
            placeholder: "Enter your phone number",
            isRequired: true,
          },
          {
            name: "city",
            label: "City",
            type: "text",
            placeholder: "Enter your city",
          },
        ],
        // Submit button
        {
          type: "button",
          label: "Submit",
          isSubmit: true,
        },
      ]}
      onSubmit={(values) => alert(`Form submitted with values: ${JSON.stringify(values)}`)}
    />
  );
};

export default App;
```

## Props

### `fields`
- **Type**: `Array`
- **Description**: Defines the fields of the form. Can include `text`, `select`, and `button` types. Supports grouping fields in rows using nested arrays.

#### Field Object Properties:
- `name` (string): Unique identifier for the field.
- `label` (string): Label displayed above the field.
- `type` (string): Type of the field (`"text"`, `"select"`, `"button"`).
- `placeholder` (string): Placeholder text for input fields.
- `options` (array): For `select` fields, an array of options `{ value, label }`.
- `isRequired` (boolean): If `true`, validates the field as required.
- `validate` (function): Custom validation function for the field value.
- `errorMessage` (string): Error message displayed for validation failures.

### `onSubmit`
- **Type**: `function`
- **Description**: Callback function executed when the form is submitted.

### `theme`
- **Type**: `object`
- **Description**: Custom theme object to override the default styles.

## Layout and Responsiveness

The `Form` component uses `Flex` and `Box` from Chakra UI for layout. Fields in the same array are rendered in a single row, with a maximum of 4 fields per row. The width of each field is dynamically calculated based on the number of fields in the row.

If a row has:
- 1 field: It will occupy 100% of the row.
- 2 fields: Each field will occupy 50% of the row.
- 3 fields: Each field will occupy 33.33% of the row.
- 4 fields: Each field will occupy 25% of the row.

For rows with more than 4 fields, the additional fields will be wrapped to the next row.

## Example

A larger example with validations and theming:

```javascript
<Form
  fields={[
    [
      { name: "firstName", label: "First Name", type: "text", placeholder: "First name", isRequired: true },
      { name: "lastName", label: "Last Name", type: "text", placeholder: "Last name", isRequired: true },
    ],
    [
      { name: "email", label: "Email", type: "text", placeholder: "Enter your email", isRequired: true },
      { name: "phone", label: "Phone", type: "text", placeholder: "Enter your phone number" },
    ],
    [
      { name: "city", label: "City", type: "text", placeholder: "Enter your city" },
      { name: "state", label: "State", type: "text", placeholder: "Enter your state" },
      { name: "zip", label: "ZIP Code", type: "text", placeholder: "Enter your ZIP code" },
    ],
    { type: "button", label: "Submit", isSubmit: true },
  ]}
  onSubmit={(values) => console.log(values)}
/>
```

## Theming

The `Form` component allows theming to customize the appearance of fields and buttons. Pass a `theme` object to override default styles.

### Example Theme

```javascript
const customTheme = {
  colors: {
    buttonBg: "green.500",
    buttonText: "white",
    buttonHover: "green.600",
  },
};

<Form
  fields={[
    { name: "username", label: "Username", type: "text", placeholder: "Enter your username", isRequired: true },
    { type: "button", label: "Submit", isSubmit: true },
  ]}
  theme={customTheme}
  onSubmit={(values) => console.log(values)}
/>;
```
