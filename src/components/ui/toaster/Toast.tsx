'use client';

import { Toaster as ReactToast } from 'sonner';

export function Toast() {
  return <ReactToast position='top-center' richColors expand={true} />;
}
