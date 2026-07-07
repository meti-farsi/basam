import { InputHTMLAttributes } from "react";

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export default function Input({
  label,
  className = "",
  ...props
}: Props) {
  return (
    <div className="space-y-2">
      <label className="border border-gray-300 text-gray-900 placeholder:text-gray-400">
        {label}
      </label>

      <input
        {...props}
        className={`
          w-full rounded-xl
          border border-black-300
          px-4 py-3
          outline-none
          focus:border-lime-400
          ${className}
        `}
      />
    </div>
  );
}