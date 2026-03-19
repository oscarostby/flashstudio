import { cn } from '../../lib'

export function Card({ className, ...props }) {
  return (
    <div
      className={cn(
        'rounded-[28px] border border-white/10 bg-[rgba(10,18,31,0.78)] shadow-glow backdrop-blur-xl',
        className,
      )}
      {...props}
    />
  )
}
