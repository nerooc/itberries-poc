import classNames from "classnames";
import * as React from "react";
import { MouseEventHandler } from "react";

export enum ButtonType {
  Default,
  Inverted,
  Modified,
  Outline,
  Nav,
  Clear,
}

interface ButtonProps {
  /** Button content */
  children?: React.ReactNode;
  disabled?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: ButtonType;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  disabled = false,
  onClick,
  type = ButtonType.Default,
  className,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        "Button",
        { "Button--default": type === ButtonType.Default },
        { "Button--inverted": type === ButtonType.Inverted },
        { "Button--modified": type === ButtonType.Modified },
        { "Button--outline": type === ButtonType.Outline },
        { "Button--nav": type === ButtonType.Nav},
        { "Button--clear": type === ButtonType.Clear },
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};