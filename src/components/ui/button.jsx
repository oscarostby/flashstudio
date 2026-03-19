import { cva } from 'class-variance-authority'
import { cn } from '../../lib'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-slate-950 text-white shadow-[0_18px_35px_rgba(15,23,42,0.16)] hover:-translate-y-0.5 hover:bg-slate-900',
        secondary: 'border border-slate-200 bg-white/85 text-slate-900 hover:bg-white',
        ghost: 'text-slate-900 hover:bg-slate-100',
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
