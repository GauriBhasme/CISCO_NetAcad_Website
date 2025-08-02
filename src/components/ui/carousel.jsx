import React from 'react';
import { cn } from './utils';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from './button';

// Context for Carousel
const CarouselContext = React.createContext({});

// Carousel component props:
// - orientation: string - 'horizontal' or 'vertical'
// - className: string - additional CSS classes
// - children: React.ReactNode - carousel content
const Carousel = React.forwardRef(({ 
  orientation = "horizontal", 
  className, 
  children,
  ...props 
}, ref) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [itemsCount, setItemsCount] = React.useState(0);

  const scrollTo = (index) => {
    setCurrentIndex(Math.max(0, Math.min(index, itemsCount - 1)));
  };

  const scrollToPrevious = () => {
    setCurrentIndex(prev => Math.max(0, prev - 1));
  };

  const scrollToNext = () => {
    setCurrentIndex(prev => Math.min(itemsCount - 1, prev + 1));
  };

  const canScrollPrevious = currentIndex > 0;
  const canScrollNext = currentIndex < itemsCount - 1;

  return (
    <CarouselContext.Provider value={{
      currentIndex,
      itemsCount,
      setItemsCount,
      scrollTo,
      scrollToPrevious,
      scrollToNext,
      canScrollPrevious,
      canScrollNext,
      orientation
    }}>
      <div
        ref={ref}
        className={cn("relative", className)}
        role="region"
        aria-label="Carousel"
        {...props}
      >
        {children}
      </div>
    </CarouselContext.Provider>
  );
});
Carousel.displayName = "Carousel";

// CarouselContent component props:
// - className: string - additional CSS classes
// - children: React.ReactNode - carousel items
const CarouselContent = React.forwardRef(({ className, children, ...props }, ref) => {
  const { currentIndex, orientation, setItemsCount } = React.useContext(CarouselContext);

  React.useEffect(() => {
    setItemsCount(React.Children.count(children));
  }, [children, setItemsCount]);

  return (
    <div className="overflow-hidden" {...props}>
      <div
        ref={ref}
        className={cn(
          "flex transition-transform duration-200",
          orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col",
          className
        )}
        style={{
          transform: orientation === "horizontal" 
            ? `translateX(-${currentIndex * 100}%)` 
            : `translateY(-${currentIndex * 100}%)`
        }}
      >
        {children}
      </div>
    </div>
  );
});
CarouselContent.displayName = "CarouselContent";

// CarouselItem component props:
// - className: string - additional CSS classes
// - children: React.ReactNode - item content
const CarouselItem = React.forwardRef(({ className, ...props }, ref) => {
  const { orientation } = React.useContext(CarouselContext);

  return (
    <div
      ref={ref}
      role="group"
      aria-roledescription="slide"
      className={cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      )}
      {...props}
    />
  );
});
CarouselItem.displayName = "CarouselItem";

// CarouselPrevious component props:
// - className: string - additional CSS classes
// - variant: string - button variant
// - size: string - button size
const CarouselPrevious = React.forwardRef(({ 
  className, 
  variant = "outline", 
  size = "icon",
  ...props 
}, ref) => {
  const { scrollToPrevious, canScrollPrevious, orientation } = React.useContext(CarouselContext);

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-left-12 top-1/2 -translate-y-1/2"
          : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollPrevious}
      onClick={scrollToPrevious}
      {...props}
    >
      <ChevronLeft className="h-4 w-4" />
      <span className="sr-only">Previous slide</span>
    </Button>
  );
});
CarouselPrevious.displayName = "CarouselPrevious";

// CarouselNext component props:
// - className: string - additional CSS classes
// - variant: string - button variant
// - size: string - button size
const CarouselNext = React.forwardRef(({ 
  className, 
  variant = "outline", 
  size = "icon",
  ...props 
}, ref) => {
  const { scrollToNext, canScrollNext, orientation } = React.useContext(CarouselContext);

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn(
        "absolute h-8 w-8 rounded-full",
        orientation === "horizontal"
          ? "-right-12 top-1/2 -translate-y-1/2"
          : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      )}
      disabled={!canScrollNext}
      onClick={scrollToNext}
      {...props}
    >
      <ChevronRight className="h-4 w-4" />
      <span className="sr-only">Next slide</span>
    </Button>
  );
});
CarouselNext.displayName = "CarouselNext";

export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
};