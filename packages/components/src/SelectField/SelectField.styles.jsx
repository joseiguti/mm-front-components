import React from "react";
import { useState } from "react";
import { Box, Text } from "@chakra-ui/react";
import {
  SelectRoot,
  SelectTrigger,
  SelectValueText,
  SelectContent,
  SelectItem
} from "../../../../src/components/ui/select";
import { createListCollection } from "@chakra-ui/react"

import themeForm from "../themeForm";

export const StyledBox = (props) => (
  <Box {...props} bg="gray.50" p={4} borderRadius="md" />
);

export const StyledText = (props) => (
  <Text
    {...props}
    mb={2}
    fontWeight="bold"
    color={props.isInvalid ? themeForm.colors.errorTextColor : themeForm.colors.labelColor}
  />
);

export const StyledSelect = ({ options, ...props }) => {

  const [value, setValue] = useState([]);
  const selectOptions = createListCollection({
    items: options,
  })

  const handleValueChange = (selectedItem) => {
    const value = Array.isArray(selectedItem.value)
      ? selectedItem.value[0]
      : selectedItem.value;

    setValue(value);
    if (props.onChange) {
      props.onChange(value);
    } else {
      console.warn("props.onChange is undefined!");
    }
  };

  return (
    <SelectRoot
      collection={selectOptions}
      size={props.size}
      onValueChange={(value) => {
        handleValueChange(value);
      }}
    >
      <SelectTrigger>
        <SelectValueText placeholder={props.placeholder} />
        <SelectContent>
          {selectOptions.items.map((record) => (
            <SelectItem item={record} key={record.value}>
              {record.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectTrigger>
    </SelectRoot>
    )
};


