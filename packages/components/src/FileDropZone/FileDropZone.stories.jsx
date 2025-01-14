import React from "react";
import FileDropZone from "./FileDropZone";

export default {
  title: "Components/FileDropZone",
  component: FileDropZone,
};

export const Default = () => (
  <FileDropZone
    onFileChange={(files) => {
      console.log("Files uploaded:", files);
    }}
  />
);

export const CustomWidth = () => (
  <FileDropZone
    maxWidth="md"
    label="Upload your documents"
    description=".docx, .pdf up to 10MB"
    onFileChange={(files) => {
      console.log("Files uploaded:", files);
    }}
  />
);

export const ImagesOnly = () => (
  <FileDropZone
    label="Upload your images"
    description="Only .png and .jpg files up to 2MB"
    accept={["image/png", "image/jpeg"]}
    onFileChange={(files) => {
      console.log("Images uploaded:", files);
    }}
  />
);

export const MaxFilesLimit = () => (
  <FileDropZone
    maxFiles={3}
    label="Upload up to 3 files"
    description=".png, .jpg up to 5MB each"
    onFileChange={(files) => {
      console.log("Files uploaded:", files);
    }}
  />
);
