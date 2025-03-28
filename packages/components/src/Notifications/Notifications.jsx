import PropTypes from 'prop-types';
import Toastify from 'toastify-js';
import defaultStyles from './Notifications.styles';
import 'toastify-js/src/toastify.css';

/**
 * @typedef {Object} NotificationsProps
 * @property {string} message
 * @property {"success" | "error" | "warning" | "info"} [type]
 * @property {number} [duration]
 * @property {"top-right" | "top-left" | "bottom-right" | "bottom-left"} [position]
 * @property {{ background?: string; color?: string; } | null} [theme]
 */

/**
 * @param {NotificationsProps} props
 */
export const Notifications = ({
  message,
  type = 'info',
  duration = 5000,
  position = 'top-right',
  theme,
}) => {
  const notify = () => {
    const styles = theme
      ? { ...defaultStyles[type], ...theme }
      : defaultStyles[type];

    Toastify({
      text: message,
      duration: duration,
      close: true,
      gravity: position.includes('top') ? 'top' : 'bottom',
      position: position.includes('left') ? 'left' : 'right',
      style: {
        background: styles.background,
        color: styles.color,
      },
    }).showToast();
  };

  return { notify };
};

Notifications.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error', 'warning', 'info']),
  duration: PropTypes.number,
  position: PropTypes.oneOf([
    'top-right',
    'top-left',
    'bottom-right',
    'bottom-left',
  ]),
  theme: PropTypes.shape({
    background: PropTypes.string,
    color: PropTypes.string,
  }),
};

Notifications.defaultProps = {
  type: 'info',
  duration: 5000,
  position: 'top-right',
  theme: null,
};

export default Notifications;
