import React from "react";
import { useState } from "react";
import { Box, Text } from '@chakra-ui/react';
import {
  SelectRoot,
  SelectTrigger,
  SelectValueText,
  SelectContent,
  SelectItem
} from "../../../../src/components/ui/select";
import { Field } from "../../../../src/components/ui/field"
import { createListCollection } from "@chakra-ui/react"

import themeForm from "../themeForm";

export const StyledBox = (props) => (
  <Box {...props} bg="gray.50" p={4} borderRadius="md" />
);

export const StyledText = (props) => {
  console.log("StyledText Props: ", props);

  const color =
    props.color ||
    (props.isInvalid
      ? themeForm.colors.errorTextColor
      : themeForm.colors.labelColor);

  return (
    <Text
      {...props}
      mb={2}
      fontWeight="bold"
      color={color}
    />
  );
};

export const StyledSelect = ({ options, isInvalid, isMultiple, ...props }) => {
  const [value, setValue] = useState([]);

  const selectOptions = createListCollection({
    items: options,
  });

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

  console.log("StyledSelect ", props);

  return (
    <>
      {isInvalid ? (
        <Field invalid errorText={props.errorMessage || "Error"}>
          <SelectRoot
            collection={selectOptions}
            size={props.size}
            defaultValue={props.defaultValue}
            onValueChange={(value) => {handleValueChange(value);}}
            {...(isMultiple && { multiple: true })}
          >
            <SelectTrigger>
              <SelectValueText placeholder={props.placeholder} />
            </SelectTrigger>
            <SelectContent>
              {selectOptions.items.map((record) => (
                <SelectItem item={record} key={record.value}>
                  {record.label}
                </SelectItem>
              ))}
            </SelectContent>
          </SelectRoot>
        </Field>
      ) : (
        <SelectRoot
          collection={selectOptions}
          size={props.size}
          defaultValue={props.defaultValue}
          onValueChange={(value) => {handleValueChange(value);}}
          {...(isMultiple && { multiple: true })}
        >
          <SelectTrigger>
            <SelectValueText placeholder={props.placeholder} />
          </SelectTrigger>
          <SelectContent>
            {selectOptions.items.map((record) => (
              <SelectItem item={record} key={record.value}>
                {record.label}
              </SelectItem>
            ))}
          </SelectContent>
        </SelectRoot>
      )}
    </>
  );
};


