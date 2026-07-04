export default function Badge({ icon: Icon, children, className = "" }) {
  return (
    <div
      className={`inline-flex items-center gap-2 bg-white px-4 sm:px-6 py-2 rounded-[24px] backdrop-blur-[20px] shrink-0 ${className}`}
    >
      {Icon && <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-[#242528]" strokeWidth={1.8} />}
      <span className="font-['Satoshi:Medium'] text-[#242528] text-sm sm:text-base whitespace-nowrap">
        {children}
      </span>
    </div>
  );
}
