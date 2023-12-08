'use client';

import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';

import { KeywordItem } from '../../../../service/api';
import { getKeyword } from '../_lib/getKeyword';

export const KeywordAnimation = () => {
  const mainKeyWord = useRef<HTMLSpanElement | null>(null);
  const [animationStarted, setAnimationStarted] = useState(false);

  const delayLetter = () => new Promise((resolve) => setTimeout(resolve, 100));
  const delayWord = () => new Promise((resolve) => setTimeout(resolve, 1000));

  const { data } = useQuery<KeywordItem>({
    queryKey: ['keyword'],
    queryFn: getKeyword,
  });

  const keywordAnimation = async (loopCount = 0) => {
    let textSplit: string[][] = [];
    let count = 0;

    if (data?.contents)
      textSplit = [...data?.contents].reduce((acc: string[][], cur: string) => {
        let obj: string[][] = [];
        obj.push(cur.split(''));
        acc = acc.concat(obj);
        return acc;
      }, []);

    while (loopCount !== textSplit.length && count < textSplit[loopCount].length) {
      await delayLetter();

      mainKeyWord.current?.append(textSplit[loopCount][count]);

      if (count === textSplit[loopCount].length - 1) {
        await delayWord();

        const nextLoopCount = (loopCount + 1) % textSplit.length;
        keywordAnimation(nextLoopCount);

        if (mainKeyWord.current) mainKeyWord.current.textContent = '';
        return;
      }
      count++;
    }
  };

  const handleStartAnimation = () => {
    if (!animationStarted) {
      setAnimationStarted(true);
      keywordAnimation(0);
    }
  };

  useEffect(() => {
    handleStartAnimation();
  }, []);

  return (
    <main>
      <span
        className='invisible absolute h-1 w-1 animate-typing pr-1 font-semibold'
        style={{
          clip: 'rect(0, 0, 0, 0)',
          clipPath: 'polygon(0 0, 0 0, 0 0)',
        }}
      />
      {mainKeyWord && <span ref={mainKeyWord} className='animate-typing pr-1 font-semibold' />}
    </main>
  );
};
