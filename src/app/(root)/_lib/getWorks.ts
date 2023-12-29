import { env } from '@/env.mjs';
import { QueryFunction } from '@tanstack/query-core';

import { WorkItem } from '../../../../service/api';

const getWorks: QueryFunction<WorkItem> = async ({ queryKey }) => {
  const res = await fetch(`${env.NEXT_PUBLIC_APP_URL}/api/work`, {
    cache: 'no-store',
  });

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json();
};
export { getWorks };
