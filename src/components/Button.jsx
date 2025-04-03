import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";

import { cn } from "../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none cursor-pointer",
  {
    variants: {
      variant: {
        default:
          "bg-pollak-green hover:bg-pollak-green/85 hover:ring-2 hover:ring-white/70",
        no_bg: "hover:ring-2 hover:ring-white/70",
        sidebar:
          "flex px-4 py-5 hover:bg-gray-700 rounded-md transition-colors justify-start font-light text-lg",
        switch:
          "bg-[#BECCC5] hover:bg-[#BECCC5]/80 text-black font-normal rounded-md px-4 py-2 ",
      },
      size: {
        default: "h-7 w-auto px-3 rounded-[12px]",
        md: "h-9 w-40 rounded-[16px] px-3 text-md",
        lg: "h-10 rounded-[20px] px-4 text-lg",
        sidebar_icon: "h-8 w-8",
        auto: "size-auto h-9 rounded-md",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = React.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
