import React from 'react';
import PropTypes from 'prop-types';
import { CloseButton } from '../../../../src/components/ui/close-button';
import {
  FileInput,
  FileUploadClearTrigger,
  FileUploadLabel,
  FileUploadRoot,
} from '../../../../src/components/ui/file-upload';
import { InputGroup } from '../../../../src/components/ui/input-group';
import { LuFileUp } from 'react-icons/lu';

const FileField = ({ label, maxWidth, onFileChange, accept }) => {
  const handleFileChange = (event) => {
    const selectedFile = event?.target?.files[0];
    if (selectedFile && onFileChange) {
      onFileChange(selectedFile);
    }
  };

  return (
    <FileUploadRoot
      gap="1"
      maxWidth={maxWidth || '100%'}
      accept={accept ? accept.join(',') : undefined}
      onFileChange={handleFileChange}
    >
      <FileUploadLabel>{label || 'Upload file'}</FileUploadLabel>
      <InputGroup
        w="full"
        startElement={<LuFileUp />}
        endElement={
          <FileUploadClearTrigger asChild>
            <CloseButton
              me="-1"
              size="xs"
              variant="plain"
              focusVisibleRing="inside"
              focusRingWidth="2px"
              pointerEvents="auto"
              color="fg.subtle"
            />
          </FileUploadClearTrigger>
        }
      >
        <FileInput onChange={handleFileChange} />
      </InputGroup>
    </FileUploadRoot>
  );
};

FileField.propTypes = {
  label: PropTypes.string,
  maxWidth: PropTypes.string,
  onFileChange: PropTypes.func,
  accept: PropTypes.arrayOf(PropTypes.string),
};

FileField.defaultProps = {
  label: 'Upload file',
  maxWidth: '100%',
  onFileChange: null,
  accept: null,
};

export default FileField;
