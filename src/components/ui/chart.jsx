import React from 'react';
import { cn } from './utils';

// Chart container component props:
// - className: string - additional CSS classes
// - children: React.ReactNode - chart content
const ChartContainer = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "flex aspect-video justify-center text-xs [&_.recharts-cartesian-axis-tick_text]:fill-muted-foreground [&_.recharts-cartesian-grid_line[stroke='#ccc']]:stroke-border/50 [&_.recharts-curve.recharts-tooltip-cursor]:stroke-border [&_.recharts-dot[stroke='#fff']]:stroke-transparent [&_.recharts-layer]:outline-none [&_.recharts-polar-grid_[stroke='#ccc']]:stroke-border [&_.recharts-radial-bar-background-sector]:fill-muted [&_.recharts-rectangle.recharts-tooltip-cursor]:fill-muted [&_.recharts-reference-line_[stroke='#ccc']]:stroke-border [&_.recharts-sector[stroke='#fff']]:stroke-transparent [&_.recharts-sector]:outline-none [&_.recharts-surface]:outline-none",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
ChartContainer.displayName = "ChartContainer";

// Chart tooltip component props:
// - className: string - additional CSS classes
// - children: React.ReactNode - tooltip content
const ChartTooltip = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-lg border bg-background p-2 shadow-md",
      className
    )}
    {...props}
  >
    {children}
  </div>
));
ChartTooltip.displayName = "ChartTooltip";

// Chart tooltip content component props:
// - className: string - additional CSS classes
// - indicator: string - indicator style
// - label: string - tooltip label
// - children: React.ReactNode - tooltip content
const ChartTooltipContent = React.forwardRef(({ 
  className, 
  indicator = "dot",
  label,
  children,
  ...props 
}, ref) => (
  <div
    ref={ref}
    className={cn("grid gap-2 rounded-lg bg-background p-2 shadow-md", className)}
    {...props}
  >
    {label && (
      <div className="text-sm font-medium text-foreground">
        {label}
      </div>
    )}
    {children}
  </div>
));
ChartTooltipContent.displayName = "ChartTooltipContent";

// Chart legend component props:
// - className: string - additional CSS classes
// - children: React.ReactNode - legend content
const ChartLegend = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center justify-center gap-4 pb-4", className)}
    {...props}
  >
    {children}
  </div>
));
ChartLegend.displayName = "ChartLegend";

// Chart legend content component props:
// - className: string - additional CSS classes
// - children: React.ReactNode - legend content
const ChartLegendContent = React.forwardRef(({ className, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-wrap items-center gap-4", className)}
    {...props}
  >
    {children}
  </div>
));
ChartLegendContent.displayName = "ChartLegendContent";

export {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
};