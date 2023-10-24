import { DefaultProps } from '@/app/types/common';

export default function Layout({ children, modal }: DefaultProps) {
  return (
    <div>
      {children}
      {modal}
    </div>
  );
}
