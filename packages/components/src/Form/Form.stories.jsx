import React from "react";
import Form from "./Form";

export default {
  title: "Components/Form",
  component: Form,
};

const Template = (args) => <Form {...args} />;

export const Default = Template.bind({});
Default.args = {
  fields: [
    {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter your username",
      isInvalid: false,
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
    },
  ],
  onSubmit: (values) => {
    alert(`Form submitted with values: ${JSON.stringify(values)}`);
  },
  buttonLabel: "Submit Form",
};
