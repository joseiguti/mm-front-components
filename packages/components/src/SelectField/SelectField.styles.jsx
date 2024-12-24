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

export const StyledBox = (props) => (
  <Box {...props} pb={4} borderRadius="md" />
);

export const StyledSelect = ({ label, options, isDisabled, isInvalid, isRequired, isMultiple, ...props }) => {

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

  return (
    <>
      {isInvalid ? (
        <Field
          disabled={isDisabled}
          invalid
          errorText={props.errorMessage || "Error"}
          label={label}
          css={{ color: props.labelColor }}
          {...(isRequired && { required: true })}
        >
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
        <Field
          disabled={isDisabled}
          label={label}
          css={{ color: props.labelColor }}
          {...(isRequired && { required: true })}
        >
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
      )}
    </>
  );
};

