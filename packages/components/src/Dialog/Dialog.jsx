import React from 'react';
import PropTypes from 'prop-types';
import {
  DialogRoot,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogBody,
  DialogFooter,
  DialogCloseTrigger,
} from '../../../../src/components/ui/dialog';
import Button from '../Button';
import defaultTheme from './Dialog.styles';

export const Dialog = ({
  isOpen,
  onClose,
  title,
  body,
  buttons,
  theme,
  placement,
}) => {
  const mergedTheme = { ...defaultTheme, ...theme };

  return (
    <DialogRoot open={isOpen} onOpenChange={onClose} placement={placement}>
      <DialogContent style={mergedTheme.content}>
        {title && (
          <DialogHeader>
            <DialogTitle style={mergedTheme.title}>{title}</DialogTitle>
          </DialogHeader>
        )}
        <DialogBody style={mergedTheme.body}>{body}</DialogBody>
        {buttons && (
          <DialogFooter>
            {buttons.map((buttonConfig, index) => (
              <Button
                key={index}
                label={buttonConfig.label}
                icon={buttonConfig.icon}
                size={buttonConfig.size || 'md'}
                theme={buttonConfig.theme || mergedTheme.buttonTheme}
                onClick={buttonConfig.onClick}
              />
            ))}
          </DialogFooter>
        )}
        <DialogCloseTrigger />
      </DialogContent>
    </DialogRoot>
  );
};

Dialog.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  title: PropTypes.string,
  body: PropTypes.node.isRequired,
  buttons: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      icon: PropTypes.element,
      size: PropTypes.oneOf(['sm', 'md', 'lg']),
      theme: PropTypes.object,
      onClick: PropTypes.func.isRequired,
    })
  ),
  theme: PropTypes.object,
  placement: PropTypes.oneOf(['top', 'center', 'bottom']),
};

Dialog.defaultProps = {
  theme: {},
  placement: 'center',
};

export default Dialog;
