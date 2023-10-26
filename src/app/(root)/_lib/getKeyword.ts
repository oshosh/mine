import { env } from '@/env.mjs';
import { QueryFunction } from '@tanstack/query-core';
import { KeywordItem } from '../../../../service/api';

const getKeyword: QueryFunction<KeywordItem> = async ({ queryKey }) => {
  const res = await fetch(`${env.NEXT_PUBLIC_APP_URL}/api/keyword`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
export { getKeyword };
