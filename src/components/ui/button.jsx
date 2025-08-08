import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium ring-offset-background transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 active:scale-95",
  {
    variants: {
      variant: {
        // Main CTA: Green with glow effect
        primary: "bg-primary text-primary-foreground shadow-lg shadow-primary/20 hover:bg-primary/90 transform hover:scale-105",
        // Secondary/Glass button: Transparent with blur
        secondary: "bg-white/5 border border-white/10 text-muted-foreground backdrop-blur-md hover:bg-white/10 hover:text-foreground",
        ghost: "hover:bg-accent hover:text-accent-foreground",
      },
      size: {
        default: "h-10 px-6",
        sm: "h-9 px-4",
        lg: "h-12 px-8 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
  const Comp = asChild ? Slot : "button"
  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      {...props} />
  );
})
Button.displayName = "Button"

export { Button }