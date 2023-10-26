'use client';
import { useQuery } from '@tanstack/react-query';
import { useEffect, useRef, useState } from 'react';
import { getKeyword } from '../_lib/getKeyword';

export const KeywordAnimation = () => {
  const mainKeyWord = useRef<HTMLSpanElement | null>(null);
  const [animationStarted, setAnimationStarted] = useState(false);

  const delayLetter = () => new Promise((resolve) => setTimeout(resolve, 100));
  const delayWord = () => new Promise((resolve) => setTimeout(resolve, 1000));

  const {
    data: { contents },
  } = useQuery<any>({
    queryKey: ['keyword'],
    queryFn: getKeyword,
  });

  const keywordAnimation = async (loopCount = 0) => {
    let textSplit: string[][] = [];
    let count = 0;

    textSplit = [...contents].reduce((acc: string[][], cur: string) => {
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
    <>
      <span
        className='pr-1 font-semibold animate-typing absolute w-1 h-1 invisible'
        style={{
          clip: 'rect(0, 0, 0, 0)',
          clipPath: 'polygon(0 0, 0 0, 0 0)',
        }}
      ></span>
      {mainKeyWord && <span ref={mainKeyWord} className='pr-1 font-semibold animate-typing'></span>}
    </>
  );
};
