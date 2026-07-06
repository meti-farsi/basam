import { ButtonHTMLAttributes } from "react";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary";
};

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyle =
    "rounded-full px-8 py-3 font-semibold transition";

  const variants = {
    primary: "bg-lime-300 text-black hover:bg-lime-400",
    secondary: "border border-white text-white hover:bg-white hover:text-black",
  };

  return (
    <button
      className={`${baseStyle} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}