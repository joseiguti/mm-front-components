import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles.jsx';
import defaultTheme from '../themeForm';

export const Button = ({
                         label = '',
                         isLoading = false,
                         isDisabled = false,
                         isSubmit = false, // 🔹 Si es un botón de submit
                         onClick,
                         onSubmit,
                         icon = null,
                         size = '',
                         loadingText = '',
                         theme = defaultTheme,
                       }) => {
  const mergedTheme = { ...defaultTheme, ...theme };

  const handleClick = (event) => {
    if (isDisabled) return; // Evita interacciones si está deshabilitado

    if (isSubmit && onSubmit) {
      event.preventDefault();
      onSubmit(event); // 🔹 Llama a la función `onSubmit`
    } else if (onClick) {
      onClick(event); // 🔹 Llama a la función `onClick`
    }
  };

  return (
    <StyledButton
      label={label}
      isLoading={isLoading}
      isDisabled={isDisabled}
      size={size}
      onClick={handleClick} // 🔹 Solo manejamos eventos aquí
      loadingText={loadingText}
      icon={icon}
      theme={mergedTheme}
      isSubmit={isSubmit}
    />
  );
};

Button.propTypes = {
  label: PropTypes.string,
  isLoading: PropTypes.bool,
  isDisabled: PropTypes.bool,
  isSubmit: PropTypes.bool,
  onClick: PropTypes.func,
  onSubmit: PropTypes.func,
  icon: PropTypes.element,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  loadingText: PropTypes.string,
  theme: PropTypes.object,
};

Button.defaultProps = {
  label: '',
  isLoading: false,
  isSubmit: false,
  isDisabled: false,
  onClick: () => {},
  onSubmit: () => {},
  icon: null,
  size: 'md',
  loadingText: 'Loading...',
};

export default Button;
