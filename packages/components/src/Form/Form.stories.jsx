import React, { useState } from "react";
import Form from "./Form";

export default {
  title: "Components/Form",
  component: Form,
};

const Template = (args) => {
  const defaultHandleClick = () => {
  };
  return (<Form {...args} onClick={args.onClick || defaultHandleClick} />);
}

export const Validation = Template.bind({});
Validation.args = {
  fields: [
    {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter your username",
      defaultValue: "",
      errorMessage: "Please fill this field",
      isRequired: true,
    },
    {
      name: "email",
      label: "Email",
      type: "text",
      placeholder: "Enter your email",
      validate: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return "Invalid email address.";
        }
        return null;
      },
      isRequired: true,
    },
    {
      name: "framework",
      label: "Favorite Framework",
      type: "select",
      options: [
        { value: "react", label: "React" },
        { value: "vue", label: "Vue" },
        { value: "angular", label: "Angular" },
      ],
      placeholder: "Select one...",
      defaultValue: "",
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
        field.type === "button" ? { ...field, isLoading } : field
      )}
      onSubmit={handleSubmit}
    />
  );
};

ajaxCall.args = {
  fields: [
    {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter your username",
      defaultValue: "",
      errorMessage: "Please fill this field",
      isRequired: true,
    },
    {
      type: "button",
      label: "Submit",
      isSubmit: true,
      size: 'lg',
      theme: {
        colors: {
          buttonBg: 'green.500',
          buttonText: 'white',
        },
      },
    },
  ],
  component: (props) => <Form {...props} />,
};
