import { cache } from 'react';
import { QueryClient } from '@tanstack/react-query';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * tailwind merge
 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};

/**
 * react-query
 */
export const getQueryClient = cache(() => new QueryClient());
