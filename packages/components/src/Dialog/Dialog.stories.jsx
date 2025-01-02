import React, { useState } from "react";
import Dialog from "./Dialog";
import Button from "../Button";
import Form from "../Form/Form";

export default {
  title: "Components/Dialog",
  component: Dialog,
};

const sharedButtons = (setDialogOpen) => [
  {
    label: "Cancel",
    iconName: "RiCloseLine",
    size: "sm",
    theme: { colors: { buttonBg: "red.500", buttonText: "white" } },
    onClick: () => {
      console.log("Cancel button clicked");
      if (setDialogOpen) setDialogOpen(false);
    },
  },
  {
    label: "Save",
    iconName: "RiSaveLine",
    size: "sm",
    theme: { colors: { buttonBg: "blue.500", buttonText: "white" } },
    onClick: () => {
      console.log("Save button clicked");
      if (setDialogOpen) setDialogOpen(false);
    },
  },
];

// Stories
export const Default = () => (
  <Dialog
    isOpen={true}
    onClose={() => console.log("Dialog closed")}
    title="Default Dialog"
    body={<p>This is a default dialog with basic content.</p>}
    buttons={sharedButtons()}
  />
);

export const FormDialog = () => {
  const handleSubmit = (values) => {
    alert(`Form submitted with values: ${JSON.stringify(values, null, 2)}`);
  };

  const fields = [
    {
      name: "username",
      label: "Username",
      type: "text",
      placeholder: "Enter your username",
      isRequired: true,
      errorMessage: "Username is required",
    },
    {
      name: "email",
      label: "Email",
      type: "text",
      placeholder: "Enter your email",
      validate: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return "Invalid email format";
        }
        return null;
      },
      isRequired: true,
    },
    {
      type: "button",
      label: "Cancel",
      iconName: "RiCloseLine",
      theme: { colors: { buttonBg: "red.500", buttonText: "white" } },
      onClick: () => {
        console.log("Cancel button clicked");
      },
    },
    {
      type: "button",
      label: "Submit",
      isSubmit: true,
      iconName: "RiCheckLine",
      theme: { colors: { buttonBg: "blue.500", buttonText: "white" } },
    },
  ];

  return (
    <Dialog
      isOpen={true}
      onClose={() => console.log("Dialog closed")}
      title="Form Inside Dialog"
      body={<Form fields={fields} onSubmit={handleSubmit} />}
    />
  );
};

export const ExternalButtonControl = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    console.log("Dialog closed");
    setDialogOpen(false);
  };

  return (
    <div>
      <Button
        label="Open External Dialog"
        onClick={handleOpenDialog}
        iconName="FaWindowRestore"
      />
      <Dialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        title="External Dialog"
        body={<p>This dialog is controlled by an external button.</p>}
        buttons={sharedButtons(setDialogOpen)}
      />
    </div>
  );
};
