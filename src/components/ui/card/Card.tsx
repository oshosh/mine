import * as React from 'react';
import { cva, VariantProps } from 'class-variance-authority';

import { cn } from '@/lib/utils';

const cardVariants = cva('box-border ', {
  variants: {
    variant: {
      default: 'w-full',
      half: 'w-1/2',
    },
    size: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type DivType = React.HTMLAttributes<HTMLDivElement>;

type CardProps = DivType & {
  as?: 'div' | 'section' | 'article';
} & VariantProps<typeof cardVariants>;

type CardTitleProps = React.HTMLAttributes<HTMLHeadingElement> & {
  as?: 'h1' | 'h2' | 'h3';
};

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ variant, size, className, as: Component = 'div', ...props }, ref) => (
    <Component ref={ref} className={cn(cardVariants({ variant, size, className }))} {...props} />
  )
);
Card.displayName = 'Card';

const CardHeader = React.forwardRef<HTMLDivElement, DivType>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn('flex flex-col space-y-1.5 p-6', className)} {...props} />
));
CardHeader.displayName = 'CardHeader';

const CardTitle = React.forwardRef<HTMLParagraphElement, CardTitleProps>(
  ({ className, as: Component = 'h3', ...props }, ref) => (
    <Component
      ref={ref}
      className={cn(
        'font-noto-sans-kr inline-block text-lg font-semibold text-dark-purple',
        className
      )}
      {...props}
    />
  )
);
CardTitle.displayName = 'CardTitle';

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('space-x-2.5 text-[0.95rem] leading-[1.6rem]', className)}
    {...props}
  />
));
CardDescription.displayName = 'CardDescription';

export { Card, CardHeader, CardTitle, CardDescription, cardVariants };
