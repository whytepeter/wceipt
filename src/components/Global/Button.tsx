"use client";
import clsx from "clsx";
import { CgSpinner } from "react-icons/cg";
import { twMerge } from "tailwind-merge";

const colors = {
  primary: "#1B4946",
  "primary-light": "#48B3AB",
  secondary: "#76172F",
  "secondary-light": "#BC2747",
  accent: "#F4D690",
} as const;

const sizes = {
  small: "px-3 py-2 text-xs",
  medium: "px-4 py-3 text-sm",
  large: "px-5 py-3.5 text-lg",
};

type ButtonType = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "fill" | "text" | "outlined";
  loading?: boolean;
  disabled?: boolean;
  block?: boolean;
  size?: "small" | "medium" | "large";
  color?: keyof typeof colors;
  bold?: boolean;
  children: React.ReactNode;
};

export default function CustomButton({
  variant = "fill",
  type = "button",
  disabled = false,
  loading = false,
  block = false,
  size = "medium",
  color = "primary",
  className = "",
  bold = false,
  children,
  onClick,
  ...rest
}: ButtonType) {
  // Accessibility improvements
  const ariaDisabled = disabled ? "true" : undefined;

  const mainColor = colors[color];

  const loaderStyle = {
    color: variant == "fill" ? "white" : mainColor,
  };

  const variants = {
    outlined: {
      background: "transparent",
      color: mainColor,
      border: `1px solid ${mainColor}`,
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

  const buttonStyles = twMerge(
    clsx(
      sizes[size],
      bold ? "font-medium" : "",
      block ? "max-w-full min-w-full w-full" : "w-fit",
      loading ? "pointer-events-none" : "",
      disabled ? "opacity-60" : "hover:opacity-90",
      "active:opacity-90",
      "text-center",
      "relative",
      "rounded-lg",
      className
    )
  );

  return (
    <>
      <button
        {...rest}
        type={type}
        disabled={disabled}
        aria-disabled={ariaDisabled}
        className={buttonStyles}
        style={variantStyles}
        onClick={onClick}
      >
        <div style={{ opacity: loading ? 0 : 1 }} className={`text-center`}>
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
