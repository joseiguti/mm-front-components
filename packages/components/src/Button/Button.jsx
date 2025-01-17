import React from 'react';
import PropTypes from 'prop-types';
import { StyledButton } from './Button.styles.jsx';
import defaultTheme from '../themeForm';

export const Button = ({
  label = '',
  isLoading = false,
  isDisabled = false,
  isSubmit = false,
  onClick,
  onSubmit,
  iconName = '',
  size = '',
  loadingText = '',
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
      onSubmit={onSubmit}
      loadingText={loadingText}
      iconName={iconName}
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
  iconName: PropTypes.string,
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg']),
  loadingText: PropTypes.string,
};

Button.defaultProps = {
  label: '',
  isLoading: false,
  isSubmit: false,
  isDisabled: false,
  onClick: () => {},
  onSubmit: () => {},
  iconName: null,
  size: 'md',
  loadingText: 'Loading...',
};

export default Button;
