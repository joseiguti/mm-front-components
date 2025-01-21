import React from 'react';
import ReactDOM from 'react-dom';

if (!React || !ReactDOM) {
  throw new Error(
    'React or ReactDOM is not available. Ensure peer dependencies are installed correctly in the consumer project.'
  );
}


export { Menu } from './Menu/index';
export * from './GlobalStyles';
export { Button } from './Button/Button';
export { Dialog } from './Dialog/Dialog';
export { FileDropZone } from './FileDropZone/FileDropZone';
export { FileField } from './FileField/FileField';
export { Form } from './Form/Form';
export { Grid } from './Grid/Grid';
export { Notifications } from './Notifications/Notifications';
export { SelectField } from './SelectField/SelectField';
export { TextField } from './TextField/TextField';
