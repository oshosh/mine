'use client';

import { PropsWithChildren, useState } from 'react';
import { env } from '@/env.mjs';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { dynamicNamedImport } from '@/lib/dynamicImport';

const ReactQueryDevtools = dynamicNamedImport(
  () => import('@tanstack/react-query-devtools/build/modern/production.js'),
  'ReactQueryDevtools'
);

function ReactQueryProvider({ children }: PropsWithChildren) {
  const [client] = useState(
    new QueryClient({
      defaultOptions: {
        queries: {
          refetchOnWindowFocus: false,
          retry: false,
        },
      },
    })
  );

  return (
    <QueryClientProvider client={client}>
      {children}
      {env.NEXT_PUBLIC_MODE === 'local' && <ReactQueryDevtools initialIsOpen />}
    </QueryClientProvider>
  );
}

export default ReactQueryProvider;
