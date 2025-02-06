declare module "web-monorepo-ui-components" {
  import { ElementType, ReactNode } from 'react';

  export interface DialogButton {
    label: string;
    icon?: ReactNode;
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
    headers: {
      label: string;
      key: string;
      textAlign?: string;
      width?: number;
      isSortable?: boolean;
      isLink?: boolean;
      buttons?: { label?: string; icon: ReactNode; onClick: (item?: any) => void; theme?: object }[];
    }[];
    data: any[];
    theme?: object;
    pagination?: boolean;
    itemsPerPage?: number;
    enableSorting?: boolean;
  }

  export const Grid: React.FC<GridProps>;

  export interface ButtonProps {
    label?: string;
    isLoading?: boolean;
    isDisabled?: boolean;
    isSubmit?: boolean;
    onClick?: () => void;
    onSubmit?: () => void;
    icon?: ReactNode;
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

  export function Notifications(props: NotificationsProps): { notify: () => void };

  export interface FileFieldProps {
    label: string;
    maxWidth?: string;
    onFileChange: (event: any) => void;
    accept?: string[];
  }

  export const FileField: React.FC<FileFieldProps>;

  export interface MenuProps {
    config?: {
      logo: string;
      items: {
        label: string;
        icon?: ElementType;
        link?: string;
        children?: { label: string; link: string }[];
      }[];
    };
    theme?: object;
    isCollapsed?: boolean;
    toggleMenu?: () => void;
    LinkComponent?: ElementType;
  }

  export const Menu: React.FC<MenuProps>;
}
