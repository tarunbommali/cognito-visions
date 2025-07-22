
export const Badge = ({ children, variant, className, ...props }) => {
  const baseStyle =
    "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2";
  const variants = {
    default: "bg-blue-100 text-blue-800 border border-blue-200",
    secondary: "bg-gray-100 text-gray-800 border border-gray-200",
    destructive: "bg-red-100 text-red-800 border border-red-200",
    outline: "text-gray-700 border border-gray-300 bg-white",
    success: "bg-green-100 text-green-800 border border-green-200",
    warning: "bg-yellow-100 text-yellow-800 border border-yellow-200",
  };
  return (
    <div
      className={`${baseStyle} ${
        variants[variant] || variants.default
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
