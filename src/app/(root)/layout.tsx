import { PropsWithChildren, ReactNode } from 'react';

import ReactQueryProvider from '@/components/ui/provider/ReactQueryProvider';
import { Hamburger } from '@/components/hamburger/hamburger';

interface LayoutProps {
  modal: ReactNode;
}

export default function Layout({ children, modal }: PropsWithChildren<LayoutProps>) {
  return (
    <ReactQueryProvider>
      {children}
      {modal}
      <Hamburger />
    </ReactQueryProvider>
  );
}
