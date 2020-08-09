import classNames from "classnames";
import * as React from "react";
import { MouseEventHandler } from "react";
import './Button.css';

export enum ButtonType {
  Primary,
  Secondary,
  Outline,
  Icon,
  Custom,
  IconAndText,
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
  type = ButtonType.Primary,
  className,
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={classNames(
        "Button",
        { "Button--secondary": type === ButtonType.Secondary },
        { "Button--outline": type === ButtonType.Outline },
        { "Button--clear": type === ButtonType.Clear },
        className
      )}
      disabled={disabled}
    >
      {children}
    </button>
  );
};