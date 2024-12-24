import React from "react";
import { Box, Input } from "@chakra-ui/react";
import { Field } from "../../../../src/components/ui/field";

export const StyledBox = (props) => (
  <Box {...props} pb={4} borderRadius="md" />
);

export const StyledInput = ({
                              mergeTheme,
                              isDisabled,
                              isInvalid,
                              isRequired,
                              value,
                              onChange,
                              ...props
                            }) => {
  return (
    <>
      {isInvalid ? (
        <Field
          disabled={isDisabled}
          invalid
          errorText={props.errorText || "Error"}
          label={props.label}
          css={{ color: props.labelColor }}
          {...(isRequired && { required: true })}
        >
          <Input
            size={props.size}
            placeholder={props.placeholder}
            value={value}
            onChange={onChange}
          />
        </Field>
      ) : (
        <Field
          disabled={isDisabled}
          label={props.label}
          css={{ color: props.labelColor }}
          {...(isRequired && { required: true })}
        >
          <Input
            size={props.size}
            placeholder={props.placeholder}
            value={value}
            onChange={onChange}
          />
        </Field>
      )}
    </>
  );
};
