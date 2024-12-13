import React from "react";
import PropTypes from "prop-types";
import { StyledBox, StyledText, StyledInput } from "./TextField.styles.jsx";
import themeForm from "../themeForm";

const TextField = ({
                     label = "",
                     value = "",
                     onChange,
                     placeholder = "Enter text",
                     errorMessage = "",
                     isInvalid = false,
                   }) => {

  return (
    <StyledBox>
      {label && <StyledText>{label}</StyledText>}
      <StyledInput
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        isInvalid={isInvalid}
        aria-invalid={isInvalid}
      />
      {isInvalid && errorMessage && (
        <StyledText
          fontSize="sm"
          color={themeForm.colors.errorTextColor}
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
};

export default TextField;
