import React from "react";
import PropTypes from "prop-types";
import { StyledButton } from "./Button.styles.jsx";
import defaultTheme from "../themeForm";

const Button = ({
                  label = "",
                  isLoading = false,
                  isDisabled = false,
                  onClick,
                  iconName = "", // Icon name as a string
                  size = "",
                  loadingText = "",
                  theme = defaultTheme,
                }) => {
  const mergedTheme = { ...defaultTheme, ...theme };

  return (
    <StyledButton
      label={label}
      isLoading={isLoading}
      isDisabled={isDisabled}
      size={size}
      onClick={onClick}
      loadingText={loadingText}
      iconName={iconName}
      theme={mergedTheme}
    />
  );
};

Button.propTypes = {
  label: PropTypes.string,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  onClick: PropTypes.func,
  iconName: PropTypes.string,
  size: PropTypes.oneOf(["xs", "sm", "md", "lg"]),
  loadingText: PropTypes.string,
};

Button.defaultProps = {
  label: "Click Me",
  isLoading: false,
  isDisabled: false,
  onClick: () => {},
  iconName: null,
  size: "md",
  loadingText: "Loading...",
};

export default Button;
