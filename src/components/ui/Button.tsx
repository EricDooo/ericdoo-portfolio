import type { ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/cn'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost'
}

export function Button({ variant = 'primary', className, ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex min-h-[44px] items-center justify-center rounded-md px-5 py-2.5 text-sm font-medium transition-colors',
        variant === 'primary' &&
          'bg-primary text-primary-foreground hover:opacity-90',
        variant === 'ghost' &&
          'border border-border text-foreground hover:bg-surface',
        className,
      )}
      {...props}
    />
  )
}
