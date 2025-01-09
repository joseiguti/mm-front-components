import React from "react";
import Notifications from "./Notifications";
import Button from "../Button";

export default {
  title: "Components/Notifications",
  component: Notifications,
};

const showNotification = (message, type, duration, position) => {
  const { notify } = Notifications({
    message,
    type,
    duration,
    position,
  });

  notify();
};

export const LongMessageNotification = () => (
  <Button
    label="Show Long Notification"
    onClick={() =>
      showNotification(
        "This is a very long notification message to test how the notification system handles large amounts of text. Let's see how this works!",
        "info",
        5000,
        "top-right"
      )
    }
    iconName="RiTextLine"
  />
);

export const CustomDurationNotification = () => (
  <Button
    label="Show 10-Second Notification"
    onClick={() =>
      showNotification(
        "This notification will stay for 10 seconds!",
        "info",
        10000,
        "bottom-right"
      )
    }
    iconName="RiTimerLine"
  />
);

export const CustomPositionNotification = () => (
  <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
    <Button
      label="Warning Top Left"
      onClick={() =>
        showNotification("Warning: Check your input!", "warning", 3000, "top-left")
      }
      iconName="RiAlertLine"
    />
    <Button
      label="Info Top Right"
      onClick={() =>
        showNotification("Info: This is an informational message.", "info", 3000, "top-right")
      }
      iconName="RiInformationLine"
    />
    <Button
      label="Error Bottom Left"
      onClick={() =>
        showNotification("Error: Something went wrong!", "error", 3000, "bottom-left")
      }
      iconName="RiErrorWarningLine"
    />
    <Button
      label="Success Bottom Right"
      onClick={() =>
        showNotification("Success: Operation completed successfully!", "success", 3000, "bottom-right")
      }
      iconName="RiCheckLine"
    />
  </div>
);

export const PersistentNotification = () => (
  <Button
    label="Show Persistent Notification"
    onClick={() =>
      showNotification(
        "This notification won't close automatically. Close it manually.",
        "info",
        0, // Setting duration to 0 makes it persistent
        "top-right"
      )
    }
    iconName="RiPushpinLine"
  />
);

export const SuccessNotification = () => (
  <Button
    label="Success Notification"
    onClick={() =>
      Notifications({
        message: "Success: Operation completed successfully!",
        type: "success",
        duration: 3000,
        position: "top-right",
        iconName: "RiCheckLine", // Ícono de éxito
      }).notify()
    }
    iconName="RiCheckLine"
  />
);

export const ErrorNotification = () => (
  <Button
    label="Error Notification"
    onClick={() =>
      Notifications({
        message: "Error: Something went wrong!",
        type: "error",
        duration: 3000,
        position: "bottom-right",
        iconName: "RiErrorWarningLine", // Ícono de error
      }).notify()
    }
    iconName="RiErrorWarningLine"
  />
);

export const WarningNotification = () => (
  <Button
    label="Warning Notification"
    onClick={() =>
      Notifications({
        message: "Warning: Check your input!",
        type: "warning",
        duration: 3000,
        position: "top-left",
        iconName: "RiAlertLine", // Ícono de advertencia
      }).notify()
    }
    iconName="RiAlertLine"
  />
);

export const InfoNotification = () => (
  <Button
    label="Info Notification"
    onClick={() =>
      Notifications({
        message: "Info: This is an informational message.",
        type: "info",
        duration: 3000,
        position: "bottom-left",
        iconName: "RiInformationLine", // Ícono de información
      }).notify()
    }
    iconName="RiInformationLine"
  />
);
