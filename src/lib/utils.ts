import { cache } from 'react';
import { dehydrate, QueryClient, QueryFunction, QueryOptions } from '@tanstack/react-query';
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

/**
 * react-query prefetch data
 */
export const prefetchQuery = async (queryKey: QueryOptions['queryKey'], queryFn: QueryFunction) => {
  const queryClient = getQueryClient();

  if (queryKey) {
    await queryClient.prefetchQuery({
      queryKey,
      queryFn,
    });
    return dehydrate(queryClient);
  }
};
