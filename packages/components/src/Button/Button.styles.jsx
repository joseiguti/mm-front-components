import React from 'react';
import { Button } from '../../../../src/components/ui/button';
import themeForm from '../themeForm';

export const StyledButton = ({
                               label,
                               isLoading = false,
                               isDisabled = false,
                               isSubmit = false,
                               onClick,
                               onSubmit,
                               icon,
                               size = 'md',
                               loadingText = 'Loading...',
                               theme = themeForm, // 🔹 Mantener el tema correctamente
                             }) => {
  const mergedTheme = { ...themeForm, ...theme };

  const handleEvent = (event) => {
    if (isDisabled) return; // 🔹 Evita interacción si está deshabilitado

    if (isSubmit && onSubmit) {
      event.preventDefault();
      onSubmit(event);
    } else if (!isSubmit && onClick) {
      onClick(event);
    }
  };

  return (
    <Button
      isLoading={isLoading}
      loadingText={loadingText}
      onClick={handleEvent} // 🔹 Unifica `onClick` y `onSubmit`
      type={isSubmit ? 'submit' : 'button'}
      bg={isDisabled ? mergedTheme.colors.buttonDisabled : mergedTheme.colors.buttonBg}
      color={mergedTheme.colors.buttonText}
      css={{
        minWidth: mergedTheme.buttonMinWidth,
        maxWidth: mergedTheme.buttonMaxWidth,
      }}
      isDisabled={isDisabled}
      _hover={{
        bg: isDisabled ? mergedTheme.colors.buttonDisabled : mergedTheme.colors.buttonHover,
      }}
      _disabled={{
        cursor: 'not-allowed',
        bg: mergedTheme.colors.buttonDisabled,
      }}
      size={size}
    >
      {icon && <span className="button-icon">{icon}</span>}
      {label}
    </Button>
  );
};
