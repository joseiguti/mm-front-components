import React from "react";
import PropTypes from "prop-types";
import {
  FileUploadRoot,
  FileUploadDropzone,
  FileUploadList,
} from "../../../../src/components/ui/file-upload";

const FileDropZone = ({
                        maxWidth = "xl",
                        maxFiles = 10,
                        label = "Drag and drop here to upload",
                        description = ".png, .jpg up to 5MB",
                        onFileChange,
                        accept = ["image/png", "image/jpeg"],
                      }) => {
  const handleFileChange = (event) => {
    if (onFileChange) {
      onFileChange(event);
    }
  };

  return (
    <FileUploadRoot
      maxW={maxWidth}
      alignItems="stretch"
      maxFiles={maxFiles}
      onFileChange={(event) => handleFileChange(event)}
      accept={accept.join(",")}
    >
      <FileUploadDropzone label={label} description={description} />
      <FileUploadList
      showSize={true}
      clearable={true}
      />
    </FileUploadRoot>
  );
};

FileDropZone.propTypes = {
  maxWidth: PropTypes.string,
  maxFiles: PropTypes.number,
  label: PropTypes.string,
  description: PropTypes.string,
  onFileChange: PropTypes.func,
  accept: PropTypes.arrayOf(PropTypes.string),
};

export default FileDropZone;
