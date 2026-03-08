import { ButtonHTMLAttributes } from 'react';
import { clsx } from 'clsx';

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'outline' | 'danger';
};

export function Button({ className, variant = 'default', ...props }: Props) {
  return (
    <button
      className={clsx(
        'rounded-md px-4 py-2 text-sm font-medium transition',
        {
          'bg-brand-600 text-white hover:bg-brand-500': variant === 'default',
          'border border-slate-300 bg-white hover:bg-slate-100': variant === 'outline',
          'bg-rose-600 text-white hover:bg-rose-500': variant === 'danger'
        },
        className
      )}
      {...props}
    />
  );
}
