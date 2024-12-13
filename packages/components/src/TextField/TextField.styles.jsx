import React from "react";
import { Box, Text, Input } from "@chakra-ui/react";
import themeForm from "../themeForm";

export const StyledBox = (props) => (
  <Box {...props} bg="gray.50" p={4} borderRadius="md" />
);

export const StyledText = (props) => {
  return (
    <Text
      {...props}
      mb={2}
      fontWeight="bold"
      color={props.isInvalid ? themeForm.colors.errorTextColor : themeForm.colors.labelColor}
    />
  );
};

export const StyledInput = (props) => (
  <Input
    {...props}
    size="md"
    borderColor={props.isInvalid ? themeForm.colors.errorBorderColor : themeForm.colors.inputBorderColor}
    _focus={{
      borderColor: props.isInvalid ? themeForm.colors.errorBorderColor : themeForm.colors.inputFocusBorderColor,
    }}
  />
);
