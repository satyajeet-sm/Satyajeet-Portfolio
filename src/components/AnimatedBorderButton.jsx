const AnimatedBorderButton = ({ children , className = "",
  ...props}) => {
  return (
    <button
      className={`
        relative group rounded-full
        px-8 py-4 text-lg font-medium
        text-foreground bg-transparent
        border border-border
        hover:border-primary/40
        transition-all duration-300
        focus:outline-none focus-visible:ring-2
        focus-visible:ring-primary focus-visible:ring-offset-2
        overflow-hidden
        ${className}
      `}
      {...props}   
    >
      {/* Animated Border (pushed OUTSIDE) */}
      <svg
        className="absolute -inset-0.5 w-[calc(100%+4px)] h-[calc(100%+4px)] pointer-events-none"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        <rect
          x="1"
          y="1"
          width="98"
          height="98"
          rx="999"
          ry="999"
          fill="none"
          stroke="none"
          strokeWidth="0"
          vectorEffect="non-scaling-stroke"
          className="animated-border-path"
        />
      </svg>

      {/* Content */}
      <span className="relative z-10 flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};

export default AnimatedBorderButton;
