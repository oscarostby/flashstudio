import { cn } from '../../lib'

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        'rounded-[32px] border border-white/65 bg-[rgba(255,255,255,0.72)] shadow-glow backdrop-blur-xl',
        className,
      )}
      {...props}
    />
  )
}
