import React from "react";
import { Button } from "../../../../src/components/ui/button";
import themeForm from "../themeForm";
import * as RiIcons from "react-icons/ri";

const DynamicIcon = ({ iconName }) => {
  const IconComponent = RiIcons[iconName] || RiIcons["RiErrorWarningLine"];
  if (!IconComponent) {
    console.error(`Icon "${iconName}" not found in react-icons/ri`);
    return null;
  }
  return <IconComponent />;
};

export const StyledButton = (props) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    if (props.onSubmit && !props.isDisabled) {
      props.onSubmit();
    }
  };

  const handleClick = () => {
    if (props.onClick && !props.isDisabled) {
      props.onClick();
    }
  };

  const theme = props.theme ? { ...themeForm, ...props.theme } : themeForm;

  if (props.isLoading) {
    return (
        <Button
          loading
          loadingText={props.loadingText || "Loading..."}
          bg={themeForm.colors.buttonBg}
          color={themeForm.colors.buttonText}
          size={props.size}
          type={props.isSubmit ? "submit" : "button"}
        >
          {props.label}
        </Button>
    );
  }

  return (
    <Button
      onClick={props.isSubmit ? undefined : handleClick}
      onSubmit={props.isSubmit ? handleSubmit : undefined}
      type={props.isSubmit ? "submit" : "button"}
      bg={props.isDisabled ? theme.colors.buttonDisabled : theme.colors.buttonBg}
      color={theme.colors.buttonText}
      isDisabled={props.isDisabled}
      _hover={{
        bg: props.isDisabled ? theme.colors.buttonDisabled : theme.colors.buttonHover,
      }}
      _disabled={{
        cursor: "not-allowed",
        bg: themeForm.colors.buttonDisabled,
      }}
      size={props.size}
    >
      {props.iconName && <DynamicIcon iconName={props.iconName} />}
      {props.label}
    </Button>
  );
};
