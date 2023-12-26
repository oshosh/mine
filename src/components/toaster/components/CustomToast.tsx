import Image from 'next/image';

import { cn } from '@/lib/utils';

import { useCustomToast } from '../hook/useCustomToast';
import { ToastProps } from '../type';
import { CustomToastText } from './CustomToastText';

export function CustomToast({ description = '', type, duration, callback }: ToastProps) {
  const { text, textArr } = useCustomToast({ description, callback, duration });

  return (
    <div
      className={cn(
        'border-white2 shadow-custom-dark min-h-[60px] w-[335px] rounded border-0 bg-white'
      )}
    >
      <div className={cn('whitespace-pre-line p-8 tracking-[-0.47px]')}>
        <div className='flex'>
          <Image width={40} height={40} alt='toast타입' src={`/images/${type}.svg`} />
          <div className='ml-4 flex flex-col'>
            <CustomToastText textArr={textArr} text={text} />
          </div>
        </div>
      </div>
    </div>
  );
}
