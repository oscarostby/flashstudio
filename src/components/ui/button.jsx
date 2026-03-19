import { cva } from 'class-variance-authority'
import { cn } from '../../lib'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground hover:brightness-105',
        secondary: 'border border-white/10 bg-white/5 text-foreground hover:bg-white/10',
        ghost: 'text-foreground hover:bg-white/5',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
)

function Button({ className, variant, asChild = false, ...props }) {
  const Comp = asChild ? 'span' : 'button'
  return <Comp className={cn(buttonVariants({ variant }), className)} {...props} />
}

export { Button, buttonVariants }
