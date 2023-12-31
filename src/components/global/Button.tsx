"use client";

import { useEffect } from "react";
import { CgSpinner } from "react-icons/cg";

const colors = {
  primary: "#1B4946",
  "primary-light": "#48B3AB",
  secondary: "#76172F",
  "secondary-light": "#BC2747",
  accent: "#F4D690",
};

// Check if the type match the colors type
function isValidColor(color: string): color is keyof typeof colors {
  return Object.keys(colors).includes(color);
}

const sizes = {
  small: "px-3 py-2 text-xs",
  medium: "px-4 py-3 text-base",
  large: "px-5 py-3.5 text-lg",
};

interface ButtonType {
  variant?: "fill" | "text" | "outlined";
  type?: "button" | "submit" | "reset" | undefined;
  className?: string;
  loading?: boolean;
  disabled?: boolean;
  block?: boolean;
  size?: "small" | "medium" | "large";
  color?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  bold?: boolean;
  children: React.ReactNode;
}

export default function CustomButton({
  variant = "fill",
  type = "button",
  disabled = false,
  loading = false,
  block = false,
  size = "medium",
  color = "primary",
  className = "",
  onClick,
  bold = false,
  children,
}: ButtonType) {
  // Accessibility improvements
  const ariaDisabled = disabled ? "true" : undefined;

  const mainColor = Object.keys(colors).includes(color)
    ? isValidColor(color)
      ? colors[color]
      : undefined
    : color;

  const loaderStyle = {
    color: variant == "fill" ? "white" : mainColor,
  };

  const variants = {
    outlined: {
      background: "transparent",
      color: mainColor,
      border: `2px solid ${mainColor}`,
    },
    text: {
      background: "transparent",
      color: mainColor,
    },
    fill: {
      background: mainColor,
      color: "white",
    },
  };

  const variantStyles = variants[variant];

  const otherStyles = `
          ${sizes[size]}
          ${bold ? "font-medium" : ""}
          ${block ? "max-w-full min-w-full w-full" : "w-fit"}
          ${loading ? "pointer-events-none" : ""}
          ${disabled ? "opacity-60" : "hover:opacity-95"}
          active:opacity-90
          text-center relative  
          rounded-lg
          
          `;

  return (
    <>
      <button
        type={type}
        disabled={disabled}
        aria-disabled={ariaDisabled}
        className={otherStyles}
        style={variantStyles}
        onClick={onClick}
      >
        <div
          style={{ opacity: loading ? 0 : 1 }}
          className={`text-center ${className}`}
        >
          {children}
        </div>

        <span className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          {loading && (
            <CgSpinner
              style={loaderStyle}
              size={25}
              className={` animate-spin `}
            />
          )}
        </span>
      </button>
    </>
  );
}
