import React, { useState } from 'react';
import FileField from './FileField';

export default {
  title: 'Components/FileField',
  component: FileField,
};

export const Default = () => {
  const [uploadedFile, setUploadedFile] = useState(null);

  const handleFileChange = (file) => {
    setUploadedFile(file);
    if (file) {
      console.log(`File uploaded: ${file.name}`);
    } else {
      console.log('File cleared');
    }
  };

  return <FileField label="Upload your file" onFileChange={handleFileChange} />;
};

export const ImagesOnly = () => {
  const handleFileChange = (file) => {
    console.log(file ? `Image uploaded: ${file.name}` : 'No file uploaded');
  };

  return (
    <FileField
      label="Upload an image"
      accept={['image/png', 'image/jpeg']}
      onFileChange={handleFileChange}
    />
  );
};

export const TextFilesOnly = () => {
  const handleFileChange = (file) => {
    console.log(file ? `Text file uploaded: ${file.name}` : 'No file uploaded');
  };

  return (
    <FileField
      label="Upload a text file"
      accept={['text/plain']}
      onFileChange={handleFileChange}
    />
  );
};
