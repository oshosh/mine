'use client';

import { forwardRef } from 'react';

import { cn } from '@/lib/utils';
import { Button, ButtonProps, buttonVariants } from '@/components/ui/button/Button';

const Hamburger = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'none', size = 'none', asChild = false, ...props }, ref) => {
    const handleClick = () => {
      console.log('hamburger click');
    };
    return (
      <Button
        className={cn(
          buttonVariants({
            variant,
            size,
            className: cn(
              'fixed right-12 top-8 z-[9999] md:block md:opacity-100 lg:hidden lg:opacity-0',
              className
            ),
          })
        )}
        onClick={handleClick}
        ref={ref}
        {...props}
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='40'
          height='40'
          viewBox='0 0 24 24'
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          strokeLinecap='round'
          strokeLinejoin='round'
        >
          <line x1='4' x2='20' y1='12' y2='12' />
          <line x1='4' x2='20' y1='6' y2='6' />
          <line x1='4' x2='20' y1='18' y2='18' />
        </svg>
      </Button>
    );
  }
);

Hamburger.displayName = 'Hamburger';

export { Hamburger };
