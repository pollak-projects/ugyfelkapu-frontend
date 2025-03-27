import * as React from "react";
import { cva } from "class-variance-authority";

import { cn } from "../lib/utils";

const inputVariants = cva(
  "rounded-md transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 hover:ring-1 hover:bg-off/90",
  {
    variants: {
      variant: {
        text: "h-8 w-full px-3 bg-off text-sm placeholder:text-muted-foreground border border-input focus:placeholder-transparent",
        checkbox: "h-4.5 w-4.5 rounded-xl",
      },
    },
    defaultVariants: {
      variant: "text",
    },
  }
);

const Input = React.forwardRef(function Input(
  { wrapperClassName, className, type = "text", label, id, variant = "text", ...props },
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
