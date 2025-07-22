

export const Card = ({ children, className, ...props }) => (
  <div
    className={`rounded-xl border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200 ${className}`}
    {...props}
  >
    {children}
  </div>
);
