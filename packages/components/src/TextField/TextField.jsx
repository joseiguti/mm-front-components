import React from 'react';
import PropTypes from 'prop-types';
import { StyledBox, StyledInput } from './TextField.styles.jsx';
import defaultTheme from '../themeForm';

export const TextField = ({
  label = '',
  value = '',
  onChange,
  placeholder = 'Enter text',
  errorMessage = '',
  isInvalid = false,
  isDisabled = false,
  isRequired = false,
  type = 'text',
  theme = defaultTheme,
}) => {
  const mergedTheme = { ...defaultTheme, ...theme };

  return (
    <StyledBox>
      <StyledInput
        label={label}
        type={type}
        errorText={errorMessage || ''}
        placeholder={placeholder}
        value={value || ''}
        onChange={onChange}
        isInvalid={isInvalid}
        aria-invalid={isInvalid}
        borderColor={mergedTheme.colors.inputBorderColor}
        size={mergedTheme.size}
        labelColor={mergedTheme.colors.labelColor}
        isDisabled={isDisabled}
        isRequired={isRequired}
        _focus={{
          borderColor: mergedTheme.colors.inputFocusBorderColor,
        }}
      />
    </StyledBox>
  );
};

TextField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  isInvalid: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  type: PropTypes.string,
  theme: PropTypes.object,
};

export default TextField;
