import { useEffect, useState } from 'react';

import { ToastProps } from '../type';

type ToastPropsWithoutType = Omit<ToastProps, 'type'>;
export function useCustomToast({ description = '', callback, duration }: ToastPropsWithoutType) {
  const [text, setText] = useState<string>(description);
  const [textArr, setTextArr] = useState<string[]>([]);

  useEffect(() => {
    return () => {
      setTimeout(() => {
        callback && callback();
      }, duration);
    };
  }, [duration, callback]);

  useEffect(() => {
    if (!text) return;

    const arr: string | string[] = text.split('. ').reduce((acc: string[], cur) => {
      if (!cur.endsWith('.')) {
        return acc.concat((cur += '.'));
      } else {
        return acc.concat(cur);
      }
    }, []);

    if (typeof arr === 'object') setTextArr(arr);
    else setText(arr);
  }, [description, text]);

  return { text, textArr };
}
