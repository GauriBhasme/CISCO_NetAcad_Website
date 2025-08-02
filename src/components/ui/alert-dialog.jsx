import React from 'react';
import { cn } from './utils';
import { X } from 'lucide-react';

// Context for AlertDialog
const AlertDialogContext = React.createContext({});

// AlertDialog component props:
// - open: boolean - controlled open state
// - onOpenChange: function - callback when open state changes
// - children: React.ReactNode - dialog content
const AlertDialog = ({ open, onOpenChange, children }) => {
  const [internalOpen, setInternalOpen] = React.useState(false);
  
  const isOpen = open !== undefined ? open : internalOpen;
  
  const setOpen = (newOpen) => {
    if (open === undefined) {
      setInternalOpen(newOpen);
    }
    if (onOpenChange) {
      onOpenChange(newOpen);
    }
  };

  return (
    <AlertDialogContext.Provider value={{ open: isOpen, setOpen }}>
      {children}
    </AlertDialogContext.Provider>
  );
};

// AlertDialogTrigger component props:
// - asChild: boolean - render as child component
// - className: string - additional CSS classes
// - children: React.ReactNode - trigger content
const AlertDialogTrigger = ({ asChild = false, className, children, ...props }) => {
  const { setOpen } = React.useContext(AlertDialogContext);
  
  const handleClick = () => {
    setOpen(true);
  };

  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      onClick: handleClick,
      ...props
    });
  }

  return (
    <button
      className={className}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};

// AlertDialogContent component props:
// - className: string - additional CSS classes
// - children: React.ReactNode - content
const AlertDialogContent = React.forwardRef(({ className, children, ...props }, ref) => {
  const { open, setOpen } = React.useContext(AlertDialogContext);

  if (!open) return null;

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 z-40 bg-background/80 backdrop-blur-sm"
        onClick={() => setOpen(false)}
      />
      
      {/* Content */}
      <div
        ref={ref}
        className={cn(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 sm:rounded-lg",
          className
        )}
        {...props}
      >
        {children}
        
        {/* Close button */}
        <button
          className="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          onClick={() => setOpen(false)}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </button>
      </div>
    </>
  );
});
AlertDialogContent.displayName = "AlertDialogContent";

// AlertDialogHeader component props:
// - className: string - additional CSS classes
// - children: React.ReactNode - header content
const AlertDialogHeader = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col space-y-2 text-center sm:text-left",
      className
    )}
    {...props}
  />
);
AlertDialogHeader.displayName = "AlertDialogHeader";

// AlertDialogFooter component props:
// - className: string - additional CSS classes
// - children: React.ReactNode - footer content
const AlertDialogFooter = ({ className, ...props }) => (
  <div
    className={cn(
      "flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",
      className
    )}
    {...props}
  />
);
AlertDialogFooter.displayName = "AlertDialogFooter";

// AlertDialogTitle component props:
// - className: string - additional CSS classes
// - children: React.ReactNode - title content
const AlertDialogTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h2
    ref={ref}
    className={cn(
      "text-lg font-semibold",
      className
    )}
    {...props}
  />
));
AlertDialogTitle.displayName = "AlertDialogTitle";

// AlertDialogDescription component props:
// - className: string - additional CSS classes
// - children: React.ReactNode - description content
const AlertDialogDescription = React.forwardRef(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));
AlertDialogDescription.displayName = "AlertDialogDescription";

// AlertDialogAction component props:
// - className: string - additional CSS classes
// - children: React.ReactNode - action content
const AlertDialogAction = React.forwardRef(({ className, ...props }, ref) => {
  const { setOpen } = React.useContext(AlertDialogContext);

  return (
    <button
      ref={ref}
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground ring-offset-background transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      onClick={() => setOpen(false)}
      {...props}
    />
  );
});
AlertDialogAction.displayName = "AlertDialogAction";

// AlertDialogCancel component props:
// - className: string - additional CSS classes
// - children: React.ReactNode - cancel content
const AlertDialogCancel = React.forwardRef(({ className, ...props }, ref) => {
  const { setOpen } = React.useContext(AlertDialogContext);

  return (
    <button
      ref={ref}
      className={cn(
        "mt-2 inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-semibold ring-offset-background transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 sm:mt-0",
        className
      )}
      onClick={() => setOpen(false)}
      {...props}
    />
  );
});
AlertDialogCancel.displayName = "AlertDialogCancel";

export {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogFooter,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogAction,
  AlertDialogCancel,
};