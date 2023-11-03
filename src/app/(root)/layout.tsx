import { PropsWithChildren, ReactNode } from 'react';

import { Hamburger } from '@/components/ui/hamburger/hamburger';

import ReactQueryProvider from './_component/ReactQueryProvider';

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
