import React from "react";
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

  const frameworks = createListCollection({
    items: options,
  })

  return (
    <SelectRoot collection={frameworks} size={props.size}>
      <SelectTrigger>
        <SelectValueText placeholder={props.placeholder} />
        <SelectContent>
          {frameworks.items.map((record) => (
            <SelectItem item={record} key={record.value}>
              {record.label}
            </SelectItem>
          ))}
        </SelectContent>
      </SelectTrigger>
    </SelectRoot>
    )
};


