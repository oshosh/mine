'use client';
import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva, type VariantProps } from 'class-variance-authority';
import { forwardRef, HTMLAttributes, useMemo } from 'react';

const colorTheme = {
  default: 'font-normal',
  boldLightPurple: 'font-bold text-light-purple',
};

const spanVariants = cva('text-center text-dark-purple', {
  variants: {
    variant: {
      ...colorTheme,
    },
    size: {
      default: 'text-4xl',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type ColorType = keyof typeof colorTheme;

export interface SpanProps
  extends HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof spanVariants> {
  asChild?: boolean;
  search: string;
  msg: string;
  effectColor: ColorType;
}

const HighlightText = forwardRef<HTMLSpanElement, SpanProps>(
  ({ className, variant, size, search, msg, effectColor, asChild = false, ...props }, ref) => {
    const regExp = useMemo(
      () => new RegExp(`(${search.trim().replace(/ +/g, '|')})`, 'gi'),
      [search]
    );

    const getStyle = useMemo(
      () => (text: string) => {
        if (!text.match(new RegExp(regExp, 'gi'))) return spanVariants();
        else {
          return spanVariants({
            variant: effectColor,
          });
        }
      },
      [effectColor, regExp]
    );

    const Comp = asChild ? Slot : 'span';

    return (
      <div className='flex'>
        {msg.split(new RegExp(regExp, 'gi')).map((s: string, idx: number) => {
          return (
            <Comp className={cn(getStyle(s))} ref={ref} key={s + idx} {...props}>
              {s}
            </Comp>
          );
        })}
      </div>
    );
  }
);

HighlightText.displayName = 'HighlightText';
export { HighlightText, spanVariants };
