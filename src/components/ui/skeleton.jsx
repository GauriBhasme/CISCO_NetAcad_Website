import React from 'react';
import { cn } from './utils';

// Skeleton component props:
// - className: string - additional CSS classes
function Skeleton({ className, ...props }) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-muted", className)}
      {...props}
    />
  );
}

export { Skeleton };