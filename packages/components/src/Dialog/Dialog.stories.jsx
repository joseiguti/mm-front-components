import React, { useState } from 'react';
import Dialog from './Dialog';
import Button from '../Button';
import Form from '../Form/Form';
import { RiCloseLine, RiSaveLine, RiCheckLine } from 'react-icons/ri';
import { FaWindowRestore } from 'react-icons/fa';

export default {
  title: 'Components/Dialog',
  component: Dialog,
};

const sharedButtons = (setDialogOpen) => [
  {
    label: 'Cancel',
    icon: <RiCloseLine />,
    size: 'sm',
    theme: { colors: { buttonBg: 'red.500', buttonText: 'white' } },
    onClick: () => {
      console.log('Cancel button clicked');
      if (setDialogOpen) setDialogOpen(false);
    },
  },
  {
    label: 'Save',
    icon: <RiSaveLine />,
    size: 'sm',
    theme: { colors: { buttonBg: 'blue.500', buttonText: 'white' } },
    onClick: () => {
      console.log('Save button clicked');
      if (setDialogOpen) setDialogOpen(false);
    },
  },
];

// Stories
export const Default = () => (
  <Dialog
    isOpen={true}
    onClose={() => console.log('Dialog closed')}
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
      name: 'username',
      label: 'Username',
      type: 'text',
      placeholder: 'Enter your username',
      isRequired: true,
      errorMessage: 'Username is required',
    },
    {
      name: 'email',
      label: 'Email',
      type: 'text',
      placeholder: 'Enter your email',
      validate: (value) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
          return 'Invalid email format';
        }
        return null;
      },
      isRequired: true,
    },
    {
      type: 'button',
      label: 'Cancel',
      icon: <RiCloseLine />,
      theme: { colors: { buttonBg: 'red.500', buttonText: 'white' } },
      onClick: () => {
        console.log('Cancel button clicked');
      },
    },
    {
      type: 'button',
      label: 'Submit',
      isSubmit: true,
      icon: <RiCheckLine />,
      theme: { colors: { buttonBg: 'blue.500', buttonText: 'white' } },
    },
  ];

  return (
    <Dialog
      isOpen={true}
      onClose={() => console.log('Dialog closed')}
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
    console.log('Dialog closed');
    setDialogOpen(false);
  };

  return (
    <div>
      <Button
        label="Open External Dialog"
        onClick={handleOpenDialog}
        icon={<FaWindowRestore />} // Reemplazado iconName por icon
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

export const PlacementExample = () => {
  const [isDialogOpen, setDialogOpen] = useState(false);
  const [placement, setPlacement] = useState('bottom');

  const handleOpenDialog = () => {
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    console.log('Dialog closed');
    setDialogOpen(false);
  };

  return (
    <div>
      <div style={{ marginBottom: '1rem' }}>
        <label htmlFor="placement-select">Select Placement:</label>
        <select
          id="placement-select"
          value={placement}
          onChange={(e) => setPlacement(e.target.value)}
          style={{ marginLeft: '8px', padding: '4px' }}
        >
          <option value="top">Top</option>
          <option value="center">Center</option>
          <option value="bottom">Bottom</option>
        </select>
      </div>
      <Button
        label={`Open Dialog (${placement})`}
        onClick={handleOpenDialog}
        icon={<FaWindowRestore />}
      />
      <Dialog
        isOpen={isDialogOpen}
        onClose={handleCloseDialog}
        title={`Dialog with Placement: ${placement}`}
        body={
          <p>
            This dialog is placed at the <strong>{placement}</strong>.
          </p>
        }
        buttons={sharedButtons()}
        placement={placement}
      />
    </div>
  );
};
