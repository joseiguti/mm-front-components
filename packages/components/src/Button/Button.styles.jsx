import React from 'react';
import { Button } from '../../../../src/components/ui/button';
import themeForm from '../themeForm';

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
        loadingText={props.loadingText || 'Loading...'}
        bg={themeForm.colors.buttonDisabled}
        color={themeForm.colors.buttonText}
        css={{
          minWidth: themeForm.buttonMinWidth,
          maxWidth: themeForm.buttonMaxWidth,
        }}
        size={props.size}
        type={props.isSubmit ? 'submit' : 'button'}
      >
        {props.label}
      </Button>
    );
  }

  return (
    <Button
      onClick={props.isSubmit ? undefined : handleClick}
      onSubmit={props.isSubmit ? handleSubmit : undefined}
      type={props.isSubmit ? 'submit' : 'button'}
      bg={
        props.isDisabled ? theme.colors.buttonDisabled : theme.colors.buttonBg
      }
      color={theme.colors.buttonText}
      css={{
        minWidth: themeForm.buttonMinWidth,
        maxWidth: themeForm.buttonMaxWidth,
      }}
      isDisabled={props.isDisabled}
      _hover={{
        bg: props.isDisabled
          ? theme.colors.buttonDisabled
          : theme.colors.buttonHover,
      }}
      _disabled={{
        cursor: 'not-allowed',
        bg: themeForm.colors.buttonDisabled,
      }}
      size={props.size}
    >
      {props.icon && <span className="button-icon">{props.icon}</span>}
      {props.label}
    </Button>
  );
};
