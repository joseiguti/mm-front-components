import React from "react";
import PropTypes from "prop-types";
import { StyledBox, StyledText, StyledSelect } from "./SelectField.styles.jsx";
import defaultTheme from '../themeForm';

const SelectField = ({
                       label = "",
                       defaultValue = "",
                       onChange,
                       options = [],
                       placeholder = "Select an option",
                       errorMessage = "",
                       isInvalid = false,
                       isMultiple = false,
                       theme = defaultTheme,
                     }) => {
  const mergedTheme = { ...defaultTheme, ...theme };

  console.log(mergedTheme)

  return (
    <StyledBox>
      {label && <StyledText color={mergedTheme.colors.labelColor}>{label}</StyledText>}
      <StyledSelect
        defaultValue={defaultValue}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        isInvalid={isInvalid}
        isMultiple={isMultiple}
        errorMessage={errorMessage}
        borderColor={mergedTheme.colors.inputBorderColor}
        size={mergedTheme.size}
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
};

export default SelectField;
