import React from "react";
import Dialog from "./Dialog";
import Button from "../Button";

export default {
  title: "Components/Dialog",
  component: Dialog,
};

const buttons = [
  {
    label: "Cancel",
    iconName: "RiCloseLine",
    size: "sm",
    theme: { colors: { buttonBg: "red.500", buttonText: "white" } },
    onClick: () => console.log("Cancel button clicked"),
  },
  {
    label: "Save",
    iconName: "RiSaveLine",
    size: "sm",
    theme: { colors: { buttonBg: "blue.500", buttonText: "white" } },
    onClick: () => console.log("Save button clicked"),
  },
];

export const Default = () => (
  <Dialog
    isOpen={true}
    onClose={() => console.log("Dialog closed")}
    title="Default Dialog"
    body={<p>This is a default dialog with basic content.</p>}
    buttons={buttons}
  />
);

export const FormDialog = () => (
  <Dialog
    isOpen={true}
    title="Dialog Without Buttons"
    body={<form><input type="text" placeholder="Type something..." /></form>}
  />
);

export const ExternalButtonControl = () => {
  const [isDialogOpen, setDialogOpen] = React.useState(false);

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    console.log("Dialog closed");
    setDialogOpen(false);
  };

  const cancelButton = {
      label: "Cancel",
      iconName: "RiCloseLine",
      size: "sm",
      theme: { colors: { buttonBg: "red.500", buttonText: "white" } },
      onClick: () => {
        console.log("Cancel button clicked");
        setDialogOpen(false);
        } ,
    };

  const saveButton =  {
      label: "Save",
      iconName: "RiSaveLine",
      size: "sm",
      theme: { colors: { buttonBg: "blue.500", buttonText: "white" } },
      onClick: () => {
        console.log("Save button clicked")
        setDialogOpen(false);
      }
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
        buttons={[
          cancelButton,
          saveButton,
        ]}
      />
    </div>
  );
};
