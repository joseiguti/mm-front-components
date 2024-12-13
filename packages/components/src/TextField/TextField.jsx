import React from 'react';
import PropTypes from 'prop-types';
import { StyledBox, StyledText, StyledInput } from './TextField.styles.jsx';
import defaultTheme from '../themeForm';

const TextField = ({
  label = '',
  value = '',
  onChange,
  placeholder = 'Enter text',
  errorMessage = '',
  isInvalid = false,
  theme = defaultTheme,
}) => {
  const mergedTheme = { ...defaultTheme, ...theme };

  return (
    <StyledBox>
      {label && (
        <StyledText color={mergedTheme.colors.labelColor}>{label}</StyledText>
      )}
      <StyledInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        isInvalid={isInvalid}
        aria-invalid={isInvalid}
        borderColor={mergedTheme.colors.inputBorderColor}
        _focus={{
          borderColor: mergedTheme.colors.inputFocusBorderColor,
        }}
      />
      {isInvalid && errorMessage && (
        <StyledText
          fontSize="sm"
          color={mergedTheme.colors.errorTextColor}
          isInvalid={isInvalid}
        >
          {errorMessage}
        </StyledText>
      )}
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
  theme: PropTypes.object,
};

export default TextField;
