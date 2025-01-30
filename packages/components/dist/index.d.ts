declare module "web-monorepo-ui-components" {

  export interface DialogButton {
    label: string;
    iconName?: string;
    size?: "sm" | "md" | "lg";
    theme?: { colors: { buttonBg: string; buttonText: string } };
    onClick: () => void;
  }

  export interface DialogProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    body: React.ReactNode;
    buttons?: DialogButton[];
    theme?: object;
    placement?: "top" | "center" | "bottom";
  }

  export const Dialog: React.FC<DialogProps>;

  export interface FormProps {
    fields: any[];
    buttonsPosition?: string;
    theme?: object;
    onSubmit: (values: any) => void;
  }

  export const Form: React.FC<FormProps>;

  export interface FileDropZoneProps {
    maxWidth?: string;
    maxFiles?: number;
    label?: string;
    description?: string;
    onFileChange: (event: any) => void;
    accept?: string[];
  }

  export const FileDropZone: React.FC<FileDropZoneProps>;

  export interface TextFieldProps {
    label?: string;
    value?: string;
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    errorMessage?: string;
    isInvalid?: boolean;
    isDisabled?: boolean;
    isRequired?: boolean;
    type?: string;
    theme?: object;
  }

  export const TextField: React.FC<TextFieldProps>;

  export interface SelectFieldProps {
    label?: string;
    defaultValue?: string;
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
    options: { value: string; label: string }[];
    placeholder?: string;
    errorMessage?: string;
    isInvalid?: boolean;
    isDisabled?: boolean;
    isRequired?: boolean;
    isMultiple?: boolean;
    theme?: object;
  }

  export const SelectField: React.FC<SelectFieldProps>;

  export interface GridProps {
    headers: string[];
    data: any[];
    theme?: object;
    pagination?: object;
    itemsPerPage?: number;
  }

  export const Grid: React.FC<GridProps>;

  export interface ButtonProps {
    label?: string;
    isLoading?: boolean;
    isDisabled?: boolean;
    isSubmit?: boolean;
    onClick?: () => void;
    onSubmit?: () => void;
    iconName?: string;
    size?: string;
    loadingText?: string;
    theme?: object;
  }

  export const Button: React.FC<ButtonProps>;

  export interface NotificationsProps {
    message: string;
    type?: "info" | "success" | "warning" | "error";
    duration?: number;
    position?: "top-right" | "top-left" | "bottom-right" | "bottom-left";
    theme?: object;
  }

  export const Notifications: React.FC<NotificationsProps>;

  export interface FileFieldProps {
    label: string;
    maxWidth?: string;
    onFileChange: (event: any) => void;
    accept?: string[];
  }

  export const FileField: React.FC<FileFieldProps>;

  export interface MenuProps {
    items: { label: string; path: string; icon?: React.ReactNode }[];
    theme?: object;
    onItemClick?: (path: string) => void;
  }

  export const Menu: React.FC<MenuProps>;
}
