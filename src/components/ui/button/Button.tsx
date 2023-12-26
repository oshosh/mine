import * as React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const buttonVariants = cva('relative inline-block cursor-pointer overflow-hidden no-underline', {
  variants: {
    variant: {
      default: 'rounded-[50px] border-2 border-solid border-dark-purple text-dark-purple',
      contents: 'rounded-[50px] border-2 border-solid border-white text-white',
      work: 'mr-5 inline-block rounded-none border-x-0 border-b-2 border-t-0 border-gray-300 text-base text-gray-300 no-underline',
      none: 'border-0',
    },
    size: {
      default: 'px-[15px] py-[30px]',
      none: 'px-0 py-0',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';

    return (
      <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
