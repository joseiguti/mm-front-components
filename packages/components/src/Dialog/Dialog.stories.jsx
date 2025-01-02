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
    theme: { colors: { buttonBg: "gray.300", buttonText: "black" } },
    onClick: () => alert("Cancel button clicked"),
  },
  {
    label: "Save",
    iconName: "RiSaveLine",
    size: "sm",
    theme: { colors: { buttonBg: "green.500", buttonText: "white" } },
    onClick: () => alert("Save button clicked"),
  },
];

export const Default = () => (
  <Dialog
    isOpen={true}
    onClose={() => alert("Dialog closed")}
    title="Default Dialog"
    body={<p>This is a default dialog with basic content.</p>}
    buttons={buttons}
  />
);

export const WithoutButtons = () => (
  <Dialog
    isOpen={true}
    onClose={() => alert("Dialog closed")}
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
    setDialogOpen(false);
  };

  return (
    <div>
      <Button
        label="Open External Dialog"
        onClick={handleOpenDialog}
        iconName="RiOpenLine"
      />
      <Dialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        title="Controlled Dialog"
        body={<p>This dialog is controlled by an external button.</p>}
        buttons={[
          {
            label: "Cancel",
            onClick: handleCloseDialog,
          },
          {
            label: "Save",
            onClick: () => {
              alert("Save clicked!");
              handleCloseDialog();
            },
          },
        ]}
      />
    </div>
  );
};
