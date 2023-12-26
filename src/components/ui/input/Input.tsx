'use client';

import * as React from 'react';

import { cn } from '@/lib/utils';
import { Label } from '@/components/ui/label/Label';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelStyle?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'mt-2 box-border w-full rounded-md border-none px-[10px] py-[15px] text-sm',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';

const InputLabel = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, labelStyle, id, className, type, ...props }, ref) => {
    return (
      <div>
        {label}
        <Label className={cn(labelStyle)} htmlFor={id}>
          {label}
        </Label>
        <Input id={id} type={type} ref={ref} {...props} />
      </div>
    );
  }
);

InputLabel.displayName = 'InputLabel';

export { Input, InputLabel };
