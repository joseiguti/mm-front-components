import React from "react";
import PropTypes from "prop-types";
import {
  FileUploadRoot,
  FileUploadDropzone,
  FileUploadList,
} from "../../../../src/components/ui/file-upload";

const FileUpload = ({
                      maxFiles,
                      maxSize,
                      acceptedFormats,
                      dropzoneLabel,
                      dropzoneDescription,
                      fileListStyles,
                      rootStyles,
                    }) => {
  return (
    <FileUploadRoot maxFiles={maxFiles} maxSize={maxSize} {...rootStyles}>
      <FileUploadDropzone
        label={dropzoneLabel}
        description={dropzoneDescription}
        accept={acceptedFormats}
      />
      <FileUploadList {...fileListStyles} />
    </FileUploadRoot>
  );
};

FileUpload.propTypes = {
  maxFiles: PropTypes.number,
  maxSize: PropTypes.number,
  acceptedFormats: PropTypes.string,
  dropzoneLabel: PropTypes.string,
  dropzoneDescription: PropTypes.string,
  fileListStyles: PropTypes.object,
  rootStyles: PropTypes.object,
};

FileUpload.defaultProps = {
  maxFiles: 5,
  maxSize: 5, // 5MB
  acceptedFormats: ".png, .jpg, .jpeg",
  dropzoneLabel: "Drag and drop files here",
  dropzoneDescription: "Accepted formats: .png, .jpg, .jpeg up to 5MB",
  fileListStyles: {},
  rootStyles: { maxW: "xl", alignItems: "stretch" },
};

export default FileUpload;
