export const Button = ({
  children,
  className = "",
  size = "default",
  ...props
}) => {
  const baseClasses =
    "relative overflow-hidden rounded-full px-6 py-3 text-sm font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25";

  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-sm",
    large: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};