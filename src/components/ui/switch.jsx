import React from 'react';
import { cn } from './utils';

// Switch component props:
// - className: string - additional CSS classes
// - checked: boolean - controlled checked state
// - onCheckedChange: function - callback when checked state changes
// - disabled: boolean - whether the switch is disabled
// - ...props: any other input element props
const Switch = React.forwardRef(({ className, checked, onCheckedChange, disabled, ...props }, ref) => {
  const [internalChecked, setInternalChecked] = React.useState(false);
  
  const isChecked = checked !== undefined ? checked : internalChecked;
  
  const handleChange = () => {
    if (disabled) return;
    
    const newChecked = !isChecked;
    
    if (checked === undefined) {
      setInternalChecked(newChecked);
    }
    
    if (onCheckedChange) {
      onCheckedChange(newChecked);
    }
  };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isChecked}
      ref={ref}
      className={cn(
        "peer inline-flex h-6 w-11 shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50",
        isChecked ? "bg-primary" : "bg-switch-background",
        disabled && "cursor-not-allowed opacity-50",
        className
      )}
      onClick={handleChange}
      disabled={disabled}
      {...props}
    >
      <span
        className={cn(
          "pointer-events-none block h-5 w-5 rounded-full bg-background shadow-lg ring-0 transition-transform",
          isChecked ? "translate-x-5" : "translate-x-0"
        )}
      />
    </button>
  );
});
Switch.displayName = "Switch";

export { Switch };