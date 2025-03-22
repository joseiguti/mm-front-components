import React from 'react';
import PropTypes from 'prop-types';
import { StyledBox, StyledSelect } from './SelectField.styles.jsx';
import defaultTheme from '../themeForm';

export const SelectField = ({
  label = '',
  value = '',
  onChange,
  options = [],
  placeholder = 'Select an option',
  errorMessage = '',
  isInvalid = false,
  isDisabled = false,
  isRequired = false,
  theme = defaultTheme,
}) => {
  const mergedTheme = { ...defaultTheme, ...theme };

  return (
    <StyledBox>
      <StyledSelect
        label={label}
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        isInvalid={isInvalid}
        isDisabled={isDisabled}
        isRequired={isRequired}
        errorMessage={errorMessage}
        borderColor={mergedTheme.colors.inputBorderColor}
        size={mergedTheme.size}
        labelColor={mergedTheme.colors.labelColor}
        _focus={{
          borderColor: mergedTheme.colors.inputFocusBorderColor,
        }}
      />
    </StyledBox>
  );
};

SelectField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
  placeholder: PropTypes.string,
  errorMessage: PropTypes.string,
  isInvalid: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isRequired: PropTypes.bool,
  theme: PropTypes.object,
};

export default SelectField;
