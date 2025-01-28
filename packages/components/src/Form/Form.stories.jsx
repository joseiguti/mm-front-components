import React, { useState } from 'react';
import Form from './Form';

export default {
  title: 'Components/Form',
  component: Form,
};

const Template = (args) => {
  const defaultHandleClick = () => {};
  return <Form {...args} onClick={args.onClick || defaultHandleClick} />;
};

export const Validation = Template.bind({});
Validation.args = {
  fields: [
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'Enter your username',
      defaultValue: '',
      errorMessage: 'Please fill this field',
      isRequired: true,
    },
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      placeholder: 'Enter your email',
      validate: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return 'Invalid email address.';
        }
        return null;
      },
      isRequired: true,
    },
    {
      name: 'framework',
      label: 'Favorite Framework',
      type: 'select',
      options: [
        { value: 'react', label: 'React' },
        { value: 'vue', label: 'Vue' },
        { value: 'angular', label: 'Angular' },
      ],
      placeholder: 'Select one...',
      defaultValue: '',
    },
    {
      type: 'button',
      label: 'Submit',
      isSubmit: true,
    },
  ],
  onSubmit: (values) => {
    alert(`Form submitted with values: ${JSON.stringify(values)}`);
  },
};

export const ajaxCall = (args) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (values) => {
    setIsLoading(true);
    try {
      const response = await new Promise((resolve) =>
        setTimeout(() => resolve({ success: true, data: values }), 2000)
      );

      alert(`Response: ${JSON.stringify(response)}`);
    } catch (error) {
      alert(`Error: ${error.message}`);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <args.component
      {...args}
      fields={args.fields.map((field) =>
        field.type === 'button' ? { ...field, isLoading } : field
      )}
      onSubmit={handleSubmit}
    />
  );
};

ajaxCall.args = {
  fields: [
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'Enter your username',
      defaultValue: '',
      errorMessage: 'Please fill this field',
      isRequired: true,
    },
    {
      type: 'button',
      label: 'Submit',
      isSubmit: true,
      size: 'lg',
      theme: {
        colors: {
          buttonBg: 'green.500',
          buttonText: 'white',
          buttonDisabled: 'green.300',
        },
      },
    },
  ],
  component: (props) => <Form {...props} />,
};

export const FormWithFileField = Template.bind({});
FormWithFileField.args = {
  fields: [
    {
      name: 'profilePicture',
      label: 'Profile Picture',
      type: 'file',
      accept: ['image/png', 'image/jpeg'],
      isRequired: true,
    },
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'Enter your username',
      isRequired: true,
    },
    {
      type: 'button',
      label: 'Submit',
      isSubmit: true,
      iconName: 'RiCheckLine',
    },
  ],
  onSubmit: (values) => {
    console.log('Form values:', values);
  },
  buttonsPosition: 'center',
};

export const FormWithDropZone = () => {
  const handleSubmit = (values) => {
    console.log('Form Submitted:', values);
  };

  return (
    <Form
      fields={[
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
        {
          name: 'fileDropZone',
          type: 'drop',
          label: 'Drag and Drop Files Here',
          description: 'Only .png and .jpg files, max size 5MB',
          accept: ['image/png', 'image/jpeg'],
          maxFiles: 3,
        },
        {
          type: 'button',
          label: 'Submit',
          isSubmit: true,
        },
      ]}
      onSubmit={handleSubmit}
    />
  );
};

export const ComplexForm = Template.bind({});
ComplexForm.args = {
  fields: [
    [
      {
        name: 'firstName',
        label: 'First Name',
        type: 'text',
        placeholder: 'Enter your first name',
        isRequired: true,
        errorMessage: 'First name is required',
      },
      {
        name: 'lastName',
        label: 'Last Name',
        type: 'text',
        placeholder: 'Enter your last name',
        isRequired: true,
        errorMessage: 'Last name is required',
      },
    ],
    [
      {
        name: 'email',
        label: 'Email Address',
        type: 'text',
        placeholder: 'Enter your email',
        isRequired: true,
        validate: (value) => {
          const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
          if (!emailRegex.test(value)) {
            return 'Invalid email format';
          }
          return null;
        },
      },
      {
        name: 'phone',
        label: 'Phone Number',
        type: 'text',
        placeholder: 'Enter your phone number',
        isRequired: true,
        errorMessage: 'Phone number is required',
      },
      {
        name: 'city',
        label: 'City',
        type: 'text',
        placeholder: 'Enter your city',
      },
    ],
    [
      {
        name: 'country',
        label: 'Country',
        type: 'select',
        options: [
          { value: 'usa', label: 'United States' },
          { value: 'canada', label: 'Canada' },
          { value: 'mexico', label: 'Mexico' },
        ],
        placeholder: 'Select your country',
        isRequired: true,
        errorMessage: 'Country is required',
      },
      {
        name: 'zipCode',
        label: 'ZIP Code',
        type: 'text',
        placeholder: 'Enter your ZIP code',
        isRequired: true,
      },
      {
        name: 'state',
        label: 'State',
        type: 'text',
        placeholder: 'Enter your state',
        isRequired: true,
      },
      {
        name: 'address',
        label: 'Address',
        type: 'text',
        placeholder: 'Enter your address',
      },
    ],
    [
      {
        name: 'bio',
        label: 'Biography',
        type: 'text',
        placeholder: 'Write about yourself',
        isRequired: false,
      },
    ],
    {
      type: 'button',
      label: 'Say hello',
      iconName: 'RiChatSmileLine',
      theme: {
        colors: {
          buttonBg: 'yellow.600',
          buttonText: 'white',
        },
      },
      onClick: () => {
        alert('Hello!');
      },
    },
    {
      type: 'button',
      label: 'Cancel',
      isReset: true,
      iconName: 'RiCloseFill',
      theme: {
        colors: {
          buttonBg: 'red.600',
          buttonText: 'white',
        },
      },
    },
    {
      type: 'button',
      label: 'Save',
      isSubmit: true,
      iconName: 'RiSave2Fill',
      theme: {
        colors: {
          buttonBg: 'green.600',
          buttonText: 'white',
        },
      },
    },
  ],
  onSubmit: (values) => {
    alert(`Form submitted with values: ${JSON.stringify(values, null, 2)}`);
  },
  buttonsPosition: 'right',
};
