import React from "react";
import { Button } from "../../../../src/components/ui/button";
import { Stack } from "@chakra-ui/react";
import themeForm from "../themeForm";
import * as RiIcons from "react-icons/ri";

const DynamicIcon = ({ iconName }) => {
  const IconComponent = RiIcons[iconName] || RiIcons["RiErrorWarningLine"]; // Fallback
  if (!IconComponent) {
    console.error(`Icon "${iconName}" not found in react-icons/ri`);
    return null;
  }
  return <IconComponent />;
};

export const StyledButton = (props) => {
  const handleClick = () => {
    if (props.onClick && !props.isDisabled) {
      props.onClick();
    }
  };

  const theme = props.theme ? { ...themeForm, ...props.theme } : themeForm;

  if (props.isLoading) {
    return (
      <Stack direction="row" gap="4" align="center">
        <Button
          loading
          loadingText={props.loadingText || "Loading..."}
          bg={themeForm.colors.buttonBg}
          color={themeForm.colors.buttonText}
          size={props.size}
        >
          {props.label}
        </Button>
      </Stack>
    );
  }

  return (
    <Button
      onClick={handleClick}
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
