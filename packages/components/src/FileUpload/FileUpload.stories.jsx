import React from "react";
import FileUpload from "./FileUpload";

export default {
  title: "Components/FileUpload",
  component: FileUpload,
};

export const Default = () => (
  <FileUpload />
);

export const CustomDropzone = () => (
  <FileUpload
    dropzoneLabel="Upload your images here"
    dropzoneDescription="Only .png and .jpg files are allowed, up to 10MB"
    maxFiles={2}
    maxSize={10} // 10MB
  />
);

export const CustomStyles = () => (
  <FileUpload
    rootStyles={{ maxW: "lg", bg: "gray.50", p: 4 }}
    fileListStyles={{ bg: "gray.100", borderRadius: "md" }}
  />
);

export const LargeUploadLimit = () => (
  <FileUpload
    dropzoneLabel="Upload your documents"
    dropzoneDescription="Accepted formats: .pdf, .docx up to 20MB"
    maxFiles={20}
    maxSize={20}
    acceptedFormats=".pdf, .docx"
  />
);
