import Link, { type LinkProps } from "next/link";
import { ComponentProps, ReactNode } from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed",
  {
    variants: {
      variant: {
        primary:
          "bg-gradient-to-r from-sky-400 to-violet-500 text-white shadow-lg shadow-sky-500/30 hover:from-sky-300 hover:to-violet-400",
        secondary:
          "border border-white/30 bg-white/10 text-white backdrop-blur hover:bg-white/20",
        ghost: "text-white/80 hover:text-white",
      },
      size: {
        default: "px-6 py-3",
        sm: "px-4 py-2 text-xs",
        lg: "px-8 py-4 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export type ButtonProps = ComponentProps<"button"> & VariantProps<typeof buttonVariants>;

export function Button({ className, variant, size, type = "button", ...props }: ButtonProps) {
  return <button type={type} className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}

interface ButtonLinkProps extends LinkProps, VariantProps<typeof buttonVariants> {
  className?: string;
  children: ReactNode;
}

export function ButtonLink({ className, variant, size, children, ...props }: ButtonLinkProps) {
  return (
    <Link {...props} className={cn(buttonVariants({ variant, size }), className)}>
      {children}
    </Link>
  );
}
