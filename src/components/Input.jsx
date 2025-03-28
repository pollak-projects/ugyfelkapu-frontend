import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "../lib/utils";

const inputVariants = cva(
  "rounded-md transition-all duration-300 ease-in-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 hover:ring-1",
  {
    variants: {
      variant: {
        text: "h-8 w-full px-3 bg-off text-sm placeholder:text-muted-foreground border border-input focus:placeholder-transparent hover:bg-off/90 focus:bg-off/90",
        checkbox:
          "h-4.5 w-4.5 rounded-xl focus:ring-2",
      },
    },
    defaultVariants: {
      variant: "text",
    },
  }
);

const Input = React.forwardRef(function Input(
  {
    wrapperClassName,
    className,
    type = "text",
    label,
    id,
    variant = "text",
    ...props
  },
  ref
) {
  const isCheckbox = variant === "checkbox";

  return (
    <div
      className={cn(
        "flex flex-col gap-2",
        isCheckbox && "flex-row items-center mb-4",
        wrapperClassName
      )}
    >
      {label && (
        <label
          htmlFor={id}
          className={cn(
            "text-md font-light text-muted-foreground",
            isCheckbox && "order-2"
          )}
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className={cn(inputVariants({ variant }), className)}
        ref={ref}
        {...props}
      />
    </div>
  );
});

Input.displayName = "Input";

export { Input, inputVariants };  
