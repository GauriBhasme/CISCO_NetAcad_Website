import React from 'react';
import { cn } from './utils';
import { Check } from 'lucide-react';

// Checkbox component props:
// - className: string - additional CSS classes
// - checked: boolean - controlled checked state
// - onCheckedChange: function - callback when checked state changes
// - ...props: any other input element props
const Checkbox = React.forwardRef(({ className, checked, onCheckedChange, ...props }, ref) => {
  const [internalChecked, setInternalChecked] = React.useState(false);
  
  const isChecked = checked !== undefined ? checked : internalChecked;
  
  const handleChange = (event) => {
    const newChecked = event.target.checked;
    
    if (checked === undefined) {
      setInternalChecked(newChecked);
    }
    
    if (onCheckedChange) {
      onCheckedChange(newChecked);
    }
  };

  return (
    <div className="relative">
      <input
        type="checkbox"
        ref={ref}
        className="sr-only"
        checked={isChecked}
        onChange={handleChange}
        {...props}
      />
      <div
        className={cn(
          "peer h-4 w-4 shrink-0 rounded-sm border border-primary ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
          isChecked ? "bg-primary text-primary-foreground" : "bg-background",
          className
        )}
        onClick={() => {
          const event = { target: { checked: !isChecked } };
          handleChange(event);
        }}
      >
        {isChecked && (
          <Check className="h-4 w-4 text-current" />
        )}
      </div>
    </div>
  );
});
Checkbox.displayName = "Checkbox";

export { Checkbox };