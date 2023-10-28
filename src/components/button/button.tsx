import { cva, type VariantProps } from "class-variance-authority"
import clsx from "clsx"
import { twMerge } from "tailwind-merge"

const buttonVariants = cva(
  "flex items-center gap-1 justify-center rounded-full font-medium transition-colors disabled:pointer-events-none disabled:opacity-50 disabled:cursor-not-allowed outline-none border-2 text-center bg-primary-1 ",
  {
    variants: {
      variant: {
        contained: "bg-primary-1 text-white border-primary-1",
        nonContained: "border-alerts-success text-alerts-success bg-none",
      },
      size: {
        default: "h-11 px-4 py-2",
      },
    },
    defaultVariants: {
      variant: "contained",
      size: "default",
    },
  }
)

const Button = ({
  className,
  variant,
  size,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>) => {
  return (
    <button
      {...props}
      className={twMerge(clsx(buttonVariants({ variant, size, className })))}
    />
  )
}

export { Button, buttonVariants }
