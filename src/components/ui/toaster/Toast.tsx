'use client';

import { Toaster as ReactToast } from 'sonner';

export function Toast() {
  return (
    <ReactToast
      position='bottom-right'
      toastOptions={{
        style: {
          background: 'blue',
          color: 'yellow',
          border: '1px solid orange',
        },
      }}
    />
  );
}
