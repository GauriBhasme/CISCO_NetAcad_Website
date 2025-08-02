import React from 'react';
import { cn } from './utils';
import { Label } from './label';

// Context for Form
const FormContext = React.createContext({});

// Form component props:
// - onSubmit: function - form submit handler
// - className: string - additional CSS classes
// - children: React.ReactNode - form content
const Form = ({ onSubmit, className, children, ...props }) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    if (onSubmit) {
      onSubmit(event);
    }
  };

  return (
    <FormContext.Provider value={{}}>
      <form
        onSubmit={handleSubmit}
        className={cn("space-y-6", className)}
        {...props}
      >
        {children}
      </form>
    </FormContext.Provider>
  );
};

// FormField component props:
// - name: string - field name
// - children: React.ReactNode - field content
const FormField = ({ name, children, ...props }) => {
  return (
    <div className="space-y-2" {...props}>
      {children}
    </div>
  );
};

// FormItem component props:
// - className: string - additional CSS classes
// - children: React.ReactNode - item content
const FormItem = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("space-y-2", className)} {...props} />
));
FormItem.displayName = "FormItem";

// FormLabel component props:
// - className: string - additional CSS classes
// - children: React.ReactNode - label content
const FormLabel = React.forwardRef(({ className, ...props }, ref) => (
  <Label
    ref={ref}
    className={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)}
    {...props}
  />
));
FormLabel.displayName = "FormLabel";

// FormControl component props:
// - className: string - additional CSS classes
// - children: React.ReactNode - control content
const FormControl = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={className} {...props} />
));
FormControl.displayName = "FormControl";

// FormDescription component props:
// - className: string - additional CSS classes
// - children: React.ReactNode - description content
const FormDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
FormDescription.displayName = "FormDescription";

// FormMessage component props:
// - className: string - additional CSS classes
// - children: React.ReactNode - message content
const FormMessage = React.forwardRef(({ className, children, ...props }, ref) => {
  if (!children) return null;

  return (
    <p
      ref={ref}
      className={cn("text-sm font-medium text-destructive", className)}
      {...props}
    >
      {children}
    </p>
  );
});
FormMessage.displayName = "FormMessage";

export {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
};