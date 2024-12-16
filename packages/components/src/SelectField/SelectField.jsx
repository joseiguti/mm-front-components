import React from "react";
import PropTypes from "prop-types";
import { StyledBox, StyledText, StyledSelect } from "./SelectField.styles.jsx";

const SelectField = ({
                       label = "",
                       value = "",
                       onChange,
                       options = [],
                       placeholder = "Select an option",
                       errorMessage = "",
                       isInvalid = false,
                     }) => {
  return (
    <StyledBox>
      {label && <StyledText>{label}</StyledText>}
      <StyledSelect
        value={value}
        onChange={onChange}
        options={options}
        placeholder={placeholder}
        isInvalid={isInvalid}
      />
      {isInvalid && errorMessage && (
        <StyledText fontSize="sm" color="red.500">
          {errorMessage}
        </StyledText>
      )}
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
