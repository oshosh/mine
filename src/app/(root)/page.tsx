import { HydrationBoundary } from '@tanstack/react-query';

import { cn, prefetchQuery } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button/Button';
import { HighlightText } from '@/components/highlight-text/HighlightText';
import KakaoAddressWrapper from '@/app/(root)/_component/KakaoAddressWrapper';
import { KeywordAnimation } from '@/app/(root)/_component/KeywordAnimation';

import WorkWrapper from './_component/work/WorkWrapper';
import { getKeyword } from './_lib/getKeyword';
import { getWorks } from './_lib/getWorks';

export default async function Page() {
  const keywordDehydratedState = await prefetchQuery(['keyword'], getKeyword);
  const worksDehydratedState = await prefetchQuery(['works'], getWorks);

  return (
    <div className='flex flex-col bg-slate-500'>
      <div>Root Home</div>
      <KakaoAddressWrapper />
      <HydrationBoundary state={keywordDehydratedState}>
        <KeywordAnimation />
      </HydrationBoundary>
      <br />
      테스트
      <Button
        className={cn(
          buttonVariants({
            variant: 'contents',
          })
        )}
      >
        버튼 테스트
      </Button>
      <Button asChild className='flex justify-center'>
        <a href='https://github.com/oshosh'> 테스트</a>
      </Button>
      <p>
        <a href="/legacy">➡ Pages Router (/legacy) 로 이동</a>
      </p>
      <HighlightText msg='ABOUT ME' search=' B U   E' effectColor='boldLightPurple' underline />
      <HydrationBoundary state={worksDehydratedState}>
        <WorkWrapper />
      </HydrationBoundary>
    </div>
  );
}
