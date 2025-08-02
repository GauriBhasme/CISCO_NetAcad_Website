import React from 'react';

// AspectRatio component props:
// - ratio: number - the aspect ratio (width/height)
// - className: string - additional CSS classes
// - children: React.ReactNode - content to display
const AspectRatio = React.forwardRef(({ ratio = 1, className, children, ...props }, ref) => (
  <div
    ref={ref}
    style={{
      position: 'relative',
      width: '100%',
      paddingBottom: `${100 / ratio}%`
    }}
    className={className}
    {...props}
  >
    <div style={{ position: 'absolute', inset: 0 }}>
      {children}
    </div>
  </div>
));
AspectRatio.displayName = "AspectRatio";

export { AspectRatio };