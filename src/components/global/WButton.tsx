import { CgSpinner } from "react-icons/cg";

const sizes = {
  small: "px-3 py-2 text-xs",
  medium: "px-4 py-2.5 text-sm",
  large: "px-5 py-3 text-lg",
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
  rounded?: "sm" | "md" | "lg" | "xl" | "full";
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
  rounded = "md",
  className = "",
  onClick,
  bold = false,
  children,
}: ButtonType) {
  // Accessibility improvements
  const ariaDisabled = disabled ? "true" : undefined;

  const variants = {
    fill: `bg-${color} text-white`,
    outlined: `bg-transparent text-${color} border-2 border-${color}`,
    text: `bg-transparent text-${color}`,
  };

  const loaderColor = variant == "fill" ? "text-white" : `text-${color}`;

  const buttonStyles = `
          ${variants[variant]}
          ${sizes[size]}
          ${bold && "font-medium"}
          ${block && "max-w-full min-w-full w-full"}
          ${loading && "pointer-events-none"}
          ${disabled ? "opacity-60" : "hover:opacity-95"}
          rounded-${rounded}
           text-center relative
          `;

  return (
    <>
      <button
        type={type}
        disabled={disabled}
        aria-disabled={ariaDisabled}
        className={buttonStyles}
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
            <CgSpinner size={25} className={` animate-spin ${loaderColor}`} />
          )}
        </span>
      </button>
    </>
  );
}
