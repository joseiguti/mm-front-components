import React from 'react';
import { Box, Input } from '@chakra-ui/react';
import { Field } from '../../../../src/components/ui/field';

export const StyledBox = (props) => <Box {...props} pb={4} borderRadius="md" />;

export const StyledInput = ({
                              isDisabled,
                              isInvalid,
                              isRequired,
                              value,
                              onChange,
                              type,
                              errorText,
                              label,
                              labelColor,
                              placeholder,
                              size,
                            }) => {
  return (
    <Field
      disabled={isDisabled}
      invalid={isInvalid}
      errorText={isInvalid ? errorText || 'Error' : undefined}
      label={label}
      css={{ color: labelColor }}
      {...(isRequired && { required: true })}
    >
      <Input
        size={size}
        placeholder={placeholder}
        value={value || ''}
        onChange={onChange}
        type={type}
      />
    </Field>
  );
};
