
A reusable and customizable form component for your projects. It supports dynamic field configurations, validations, file uploads, and flexible layouts with Chakra UI.
[Back to Table of Contents](#table-of-contents)

## Usage

Import the `Form` component and configure it with dynamic fields:

```javascript
import React from 'react';
import Form from 'web-monorepo-ui-components';

const App = () => {
  return (
    <Form
      fields={[
        // First row: 2 fields
        [
          {
            name: 'firstName',
            label: 'First Name',
            type: 'text',
            placeholder: 'Enter your first name',
            isRequired: true,
          },
          {
            name: 'lastName',
            label: 'Last Name',
            type: 'text',
            placeholder: 'Enter your last name',
            isRequired: true,
          },
        ],
        // Second row: 3 fields
        [
          {
            name: 'email',
            label: 'Email Address',
            type: 'text',
            placeholder: 'Enter your email',
            isRequired: true,
          },
          {
            name: 'phone',
            label: 'Phone Number',
            type: 'text',
            placeholder: 'Enter your phone number',
            isRequired: true,
          },
          {
            name: 'city',
            label: 'City',
            type: 'text',
            placeholder: 'Enter your city',
          },
        ],
        // Third row: Drop field
        {
          name: 'documents',
          label: 'Upload Documents',
          type: 'drop',
          description: '.png, .jpg, .pdf up to 10MB',
          accept: ['image/png', 'image/jpeg', 'application/pdf'],
        },
        // Fourth row: File field
        {
          name: 'profilePicture',
          label: 'Upload Profile Picture',
          type: 'file',
          accept: ['image/png', 'image/jpeg'],
        },
        // Submit button
        {
          type: 'button',
          label: 'Submit',
          isSubmit: true,
        },
      ]}
      onSubmit={(values) =>
        alert(`Form submitted with values: ${JSON.stringify(values)}`)
      }
    />
  );
};

export default App;
```

## Props

### `fields`

- **Type**: `Array`
- **Description**: Defines the fields of the form. Can include `text`, `select`, `button`, `file`, and `drop` types. Supports grouping fields in rows using nested arrays.

#### Field Object Properties:

- `name` (string): Unique identifier for the field.
- `label` (string): Label displayed above the field.
- `type` (string): Type of the field (`"text"`, `"select"`, `"button"`, `"file"`, `"drop"`).
- `placeholder` (string): Placeholder text for input fields.
- `options` (array): For `select` fields, an array of options `{ value, label }`.
- `isRequired` (boolean): If `true`, validates the field as required.
- `validate` (function): Custom validation function for the field value.
- `errorMessage` (string): Error message displayed for validation failures.
- `maxWidth` (string): Maximum width of the field.
- `accept` (array): For `file` or `drop` fields, an array of accepted MIME types.

### `onSubmit`

- **Type**: `function`
- **Description**: Callback function executed when the form is submitted.

### `theme`

- **Type**: `object`
- **Description**: Custom theme object to override the default styles.

### `buttonsPosition`

- **Type**: `string`
- **Description**: Alignment of the buttons in the form footer. Options: `"flex-start"`, `"center"`, `"flex-end"`, `"space-between"`.
- **Default**: `"center"`

## Layout and Responsiveness

The `Form` component uses `Flex` and `Box` from Chakra UI for layout. Fields in the same array are rendered in a single row, with a maximum of 4 fields per row. The width of each field is dynamically calculated based on the number of fields in the row.

If a row has:

- 1 field: It will occupy 100% of the row.
- 2 fields: Each field will occupy 50% of the row.
- 3 fields: Each field will occupy 33.33% of the row.
- 4 fields: Each field will occupy 25% of the row.

### Special Case: `drop` Fields

Fields of type `drop` (e.g., `FileDropZone`) will automatically occupy 100% of the row, regardless of the number of other fields. This ensures an intuitive drag-and-drop experience without being constrained by other fields in the same row.

For rows with more than 4 fields, the additional fields will be wrapped to the next row.

## Example

A larger example with validations, file fields, drop zones, and theming:

```javascript
<Form
  fields={[
    // First row: Text fields
    [
      {
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        placeholder: 'First name',
        isRequired: true,
      },
      {
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        placeholder: 'Last name',
        isRequired: true,
      },
    ],
    // Second row: Email and phone
    [
      {
        name: 'email',
        label: 'Email',
        type: 'text',
        placeholder: 'Enter your email',
        isRequired: true,
      },
      {
        name: 'phone',
        label: 'Phone',
        type: 'text',
        placeholder: 'Enter your phone number',
      },
    ],
    // Third row: File upload
    {
      name: 'profilePicture',
      label: 'Upload Profile Picture',
      type: 'file',
      accept: ['image/png', 'image/jpeg'],
    },
    // Fourth row: Drop zone
    {
      name: 'documents',
      label: 'Upload Documents',
      type: 'drop',
      description: 'Drag and drop documents here (PDF only)',
      accept: ['application/pdf'],
    },
    // Fifth row: Buttons
    { type: 'button', label: 'Submit', isSubmit: true },
    {
      type: 'button',
      label: 'Cancel',
      onClick: () => console.log('Form canceled'),
    },
  ]}
  onSubmit={(values) => console.log('Form submitted:', values)}
/>
```

## Theming

The `Form` component allows customization through a `theme` object to adjust the appearance of fields and buttons. You can override default styles to match your application's design.

### Example Theme

```javascript
const customTheme = {
  size: 'lg', // Adjust the size of the fields
  colors: {
    labelColor: 'purple.500', // Customize label text color
    inputBorderColor: 'blue.300', // Border color for input fields
    inputFocusBorderColor: 'blue.500', // Border color when focused
    errorBorderColor: 'red.600', // Border color for invalid fields
    errorTextColor: 'red.600', // Color of error messages
    buttonBg: 'green.500', // Background color for buttons
    buttonText: 'white', // Text color for buttons
    buttonHover: 'green.600', // Background color on hover
  },
};

<Form
  fields={[
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'Enter your username',
      isRequired: true,
    },
    { type: 'button', label: 'Submit', isSubmit: true },
  ]}
  theme={customTheme}
  onSubmit={(values) => console.log(values)}
/>;
```

### Applying Theme to Specific Fields

You can also apply custom themes to specific fields using the theme property within a field object:

```javascript
<Form
  fields={[
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'Enter your username',
      isRequired: true,
      theme: {
        size: 'md',
        colors: {
          labelColor: 'teal.500',
          inputBorderColor: 'teal.300',
          inputFocusBorderColor: 'teal.500',
        },
      },
    },
    { type: 'button', label: 'Submit', isSubmit: true },
  ]}
  onSubmit={(values) => console.log(values)}
/>
```
