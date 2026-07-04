export default function Button({
  children,
  variant = "primary",
  size = "md",
  className = "",
  ...props
}) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-[24px] font-['Satoshi:Medium'] transition-colors whitespace-nowrap";

  const variants = {
    primary: "bg-[#d4fb20] text-[#242528] hover:bg-[#c2e91c]",
    secondary: "bg-white text-[#242528] hover:bg-[#f5f5f6]",
    outline: "border border-[#ced0d3] text-[#4b4c53] hover:bg-[#f5f5f6]",
    ghost: "text-[#f5f5f6] hover:opacity-80",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-2.5 text-base",
    lg: "px-6 py-3 text-base sm:text-lg",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
