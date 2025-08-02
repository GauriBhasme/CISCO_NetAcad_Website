import React from 'react';
import { cn } from './utils';
import { ChevronDown } from 'lucide-react';

// Context for Accordion
const AccordionContext = React.createContext({});

// Accordion component props:
// - type: string - 'single' or 'multiple'
// - collapsible: boolean - whether items can be collapsed
// - value: string | string[] - controlled value(s)
// - onValueChange: function - callback when value changes
// - className: string - additional CSS classes
// - children: React.ReactNode - accordion items
const Accordion = ({ type = 'single', collapsible = false, value, onValueChange, className, children, ...props }) => {
  const [internalValue, setInternalValue] = React.useState(
    type === 'single' ? '' : []
  );

  const currentValue = value !== undefined ? value : internalValue;

  const handleValueChange = (itemValue) => {
    let newValue;
    
    if (type === 'single') {
      newValue = currentValue === itemValue ? (collapsible ? '' : itemValue) : itemValue;
    } else {
      const currentArray = Array.isArray(currentValue) ? currentValue : [];
      newValue = currentArray.includes(itemValue)
        ? currentArray.filter(v => v !== itemValue)
        : [...currentArray, itemValue];
    }

    if (value === undefined) {
      setInternalValue(newValue);
    }
    
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  return (
    <AccordionContext.Provider value={{
      type,
      value: currentValue,
      onValueChange: handleValueChange
    }}>
      <div className={cn("", className)} {...props}>
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

// AccordionItem component props:
// - value: string - unique value for this item
// - className: string - additional CSS classes
// - children: React.ReactNode - item content
const AccordionItem = React.forwardRef(({ className, value, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("border-b", className)}
    data-value={value}
    {...props}
  >
    {children}
  </div>
));
AccordionItem.displayName = "AccordionItem";

// AccordionTrigger component props:
// - className: string - additional CSS classes
// - children: React.ReactNode - trigger content
const AccordionTrigger = React.forwardRef(({ className, children, ...props }, ref) => {
  const { type, value: accordionValue, onValueChange } = React.useContext(AccordionContext);
  const itemValue = React.useContext(AccordionItemContext);
  
  const isOpen = type === 'single' 
    ? accordionValue === itemValue
    : Array.isArray(accordionValue) && accordionValue.includes(itemValue);

  return (
    <button
      ref={ref}
      className={cn(
        "flex flex-1 items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      onClick={() => onValueChange(itemValue)}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-200" />
    </button>
  );
});
AccordionTrigger.displayName = "AccordionTrigger";

// Context for AccordionItem value
const AccordionItemContext = React.createContext('');

// AccordionContent component props:
// - className: string - additional CSS classes
// - children: React.ReactNode - content
const AccordionContent = React.forwardRef(({ className, children, ...props }, ref) => {
  const { type, value: accordionValue } = React.useContext(AccordionContext);
  const itemValue = React.useContext(AccordionItemContext);
  
  const isOpen = type === 'single' 
    ? accordionValue === itemValue
    : Array.isArray(accordionValue) && accordionValue.includes(itemValue);

  if (!isOpen) return null;

  return (
    <div
      ref={ref}
      className={cn(
        "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
      )}
      {...props}
    >
      <div className="pb-4 pt-0">
        {children}
      </div>
    </div>
  );
});
AccordionContent.displayName = "AccordionContent";

// Wrapper to provide item value context
const AccordionItemWrapper = ({ value, children, ...props }) => (
  <AccordionItemContext.Provider value={value}>
    <AccordionItem value={value} {...props}>
      {children}
    </AccordionItem>
  </AccordionItemContext.Provider>
);

export {
  Accordion,
  AccordionItem: AccordionItemWrapper,
  AccordionTrigger,
  AccordionContent,
};