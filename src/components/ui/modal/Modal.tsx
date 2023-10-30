import React, { MouseEvent, ReactNode, useCallback } from 'react';

import { cn } from '@/lib/utils';

interface ModalProps extends React.HTMLAttributes<HTMLDivElement> {
  onClose: (e: MouseEvent) => void;
  children: ReactNode;
  opened: boolean;
  id: string;
}

export default function Modal({ onClose, children, opened = false, id }: ModalProps) {
  const onMaskClick = useCallback(() => {
    (e: MouseEvent) => {
      if (e.target === e.currentTarget) {
        onClose && onClose(e);
      }
    };
  }, [onClose]);

  return (
    <>
      <ModalBox
        id={id}
        className={cn('z-[999] bg-black bg-opacity-60', opened ? 'block' : 'hidden')}
      />
      <ModalBox
        className={cn('z-[1000] overflow-auto', opened ? 'block' : 'hidden')}
        tabIndex={-1}
        onClick={onMaskClick}
      >
        <div
          tabIndex={0}
          className={
            'rounded-10 w-360 max-w-480 shadow-custom relative top-1/2 -translate-y-1/2 transform bg-white'
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
    <div className={cn('fixed inset-x-0 inset-y-0 box-border', className)} {...props}>
      {children}
    </div>
  );
}
