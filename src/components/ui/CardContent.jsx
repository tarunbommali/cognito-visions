

export const CardContent = ({ children, className, ...props }) => (
  <div className={`p-6 pt-0 text-gray-600 ${className}`} {...props}>
    {children}
  </div>
);
