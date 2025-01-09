import React from "react";
import PropTypes from "prop-types";
import ReactDOM from "react-dom";
import Toastify from "toastify-js";
import * as RiIcons from "react-icons/ri";
import "toastify-js/src/toastify.css";

const Notifications = ({ message, type = "info", duration = 5000, position = "top-right", iconName }) => {
  const IconComponent = iconName ? RiIcons[iconName] : null;

  const notify = () => {
    // Creamos un nodo React con el contenido
    const content = (
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
        {IconComponent && <IconComponent style={{ fontSize: "24px", marginRight: "8px" }} />}
        <span>{message}</span>
      </div>
    );

    // Renderizamos el nodo React en un contenedor DOM
    const container = document.createElement("div");
    ReactDOM.render(content, container);

    Toastify({
      node: container, // Pasamos el nodo como contenido
      duration: duration,
      close: true,
      gravity: position.includes("top") ? "top" : "bottom",
      position: position.includes("left") ? "left" : "right",
      style: {
        background:
          type === "success"
            ? "green"
            : type === "error"
              ? "red"
              : type === "warning"
                ? "orange"
                : "blue",
        color: "white",
      },
    }).showToast();
  };

  return { notify };
};

Notifications.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["success", "error", "warning", "info"]),
  duration: PropTypes.number,
  position: PropTypes.oneOf(["top-right", "top-left", "bottom-right", "bottom-left"]),
  iconName: PropTypes.string,
};

Notifications.defaultProps = {
  type: "info",
  duration: 5000,
  position: "top-right",
};

export default Notifications;
