import React from 'react';
import { cn } from './utils';

// Alert variants configuration
const alertVariants = {
  variant: {
    default: "bg-background text-foreground",
    destructive: "border-destructive/50 text-destructive dark:border-destructive [&>svg]:text-destructive",
  }
};

// Alert component props:
// - className: string - additional CSS classes
// - variant: string - alert style variant (default, destructive)
// - children: React.ReactNode - alert content
const Alert = React.forwardRef(({ className, variant = "default", ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(
      "relative w-full rounded-lg border p-4 [&>svg~*]:pl-7 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-foreground",
      alertVariants.variant[variant],
      className
    )}
    {...props}
  />
));
Alert.displayName = "Alert";

// AlertTitle component props:
// - className: string - additional CSS classes
// - children: React.ReactNode - title content
const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));
AlertTitle.displayName = "AlertTitle";

// AlertDescription component props:
// - className: string - additional CSS classes
// - children: React.ReactNode - description content
const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed", className)}
    {...props}
  />
));
AlertDescription.displayName = "AlertDescription";

export { Alert, AlertTitle, AlertDescription };