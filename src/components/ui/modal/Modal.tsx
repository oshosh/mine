import { cn } from '@/lib/utils';
import React, { MouseEvent, ReactNode } from 'react';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose: (e: MouseEvent) => void;
  children: ReactNode;
  opened: any;
  id: string;
}

export default function Modal({ onClose, children, opened = false, id }: ModalProps) {
  const onMaskClick = (e: MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose && onClose(e);
    }
  };
  return (
    <>
      <ModalBox
        id={id}
        className={cn('bg-black bg-opacity-60 z-[999]', opened ? 'block' : 'hidden')}
      />
      <ModalBox
        className={cn('z-[1000] overflow-auto', opened ? 'block' : 'hidden')}
        tabIndex={-1}
        onClick={onMaskClick}
      >
        <div
          tabIndex={0}
          className={
            'relative bg-white rounded-10 w-360 max-w-480 top-1/2 transform -translate-y-1/2 shadow-custom'
          }
        >
          {children}
        </div>
      </ModalBox>
    </>
  );
}

function ModalBox({ children, className, ...props }: Partial<ModalProps>) {
  return (
    <div className={cn('box-border fixed inset-x-0 inset-y-0', className)} {...props}>
      {children}
    </div>
  );
}
