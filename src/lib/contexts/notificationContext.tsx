"use client";

import React, {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from "react";
import { Alert, Snackbar } from "@mui/material";

interface NotificationContextProps {
  children: ReactNode;
}

interface NotificationState {
  id: number;
  message: string;
  severity: "success" | "error" | "info" | "warning";
}

interface NotificationContextType {
  showNotification: (
    message: string,
    severity: "success" | "error" | "info" | "warning"
  ) => void;
  hideNotification: (id: number) => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(
  undefined
);

let notificationId = 0;

export const NotificationProvider: React.FC<NotificationContextProps> = ({
  children,
}) => {
  const [notifications, setNotifications] = useState<NotificationState[]>([]);

  const showNotification = useCallback(
    (message: string, severity: "success" | "error" | "info" | "warning") => {
      const newNotification = { id: ++notificationId, message, severity };
      setNotifications((prevNotifications) => [
        ...prevNotifications,
        newNotification,
      ]);
    },
    []
  );

  const hideNotification = useCallback((id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((n) => n.id !== id)
    );
  }, []);

  return (
    <NotificationContext.Provider
      value={{ showNotification, hideNotification }}
    >
      {children}
      {notifications.map((notification) => (
        <Snackbar
          key={notification.id}
          open={true}
          onClose={() => hideNotification(notification.id)}
        >
          <Alert
            onClose={() => hideNotification(notification.id)}
            severity={notification.severity}
            variant="filled"
          >
            {notification.message}
          </Alert>
        </Snackbar>
      ))}
    </NotificationContext.Provider>
  );
};

export const useNotification = (): NotificationContextType => {
  const context = useContext(NotificationContext);
  if (!context) {
    throw new Error(
      "useNotification must be used within a NotificationProvider"
    );
  }
  return context;
};
