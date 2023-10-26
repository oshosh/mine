'use client';

import React, { PropsWithChildren, Suspense, useState } from 'react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { env } from '@/env.mjs';

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
