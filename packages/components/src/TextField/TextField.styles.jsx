import React from 'react';
import { Box, Text, Input } from '@chakra-ui/react';
import themeForm from '../themeForm';

export const StyledBox = (props) => (
  <Box {...props} bg="gray.50" p={4} borderRadius="md" />
);

export const StyledText = (props) => {
  const color =
    props.color ||
    (props.isInvalid
      ? themeForm.colors.errorTextColor
      : themeForm.colors.labelColor);
  return <Text {...props} mb={2} fontWeight="bold" color={color} />;
};

export const StyledInput = (props) => (
  <Input
    {...props}
    size={props.size}
    borderColor={
      props.isInvalid
        ? themeForm.colors.errorBorderColor
        : themeForm.colors.inputBorderColor
    }
    _focus={{
      borderColor: props.isInvalid
        ? themeForm.colors.errorBorderColor
        : themeForm.colors.inputFocusBorderColor,
    }}
  />
);
