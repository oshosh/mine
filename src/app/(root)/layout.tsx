import { PropsWithChildren, ReactNode } from 'react';

interface LayoutProps {
  modal: ReactNode;
}

export default function Layout({ children, modal }: PropsWithChildren<LayoutProps>) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
