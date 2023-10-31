import { dehydrate, HydrationBoundary } from '@tanstack/react-query';

import { cn, getQueryClient } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button/Button';
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
  cardVariants,
} from '@/components/ui/card/Card';
import { HighlightText } from '@/components/ui/highlight-text/HighlightText';
import KakaoAddressWrapper from '@/app/(root)/_component/KakaoAddressWrapper';
import { KeywordAnimation } from '@/app/(root)/_component/KeywordAnimation';

import { getKeyword } from './_lib/getKeyword';

export default async function Page() {
  const queryClient = getQueryClient();
  await queryClient.prefetchQuery({
    queryKey: ['keyword'],
    queryFn: getKeyword,
  });
  const dehydratedState = dehydrate(queryClient);

  return (
    <div className='flex flex-col'>
      <div>Root Home</div>
      <KakaoAddressWrapper />
      <HydrationBoundary state={dehydratedState}>
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
      <HighlightText msg='ABOUT ME' search=' B U   E' effectColor='boldLightPurple' />
      <div className='flex'>
        <Card
          className={cn(
            cardVariants({
              variant: 'half',
              className: 'px-2',
            })
          )}
        >
          <CardHeader>
            <CardTitle>카드 테스트</CardTitle>
          </CardHeader>
          <Card>
            <CardDescription>설명설명설명설명설명</CardDescription>
            <CardDescription>설명설명설명설명설명</CardDescription>
            <CardDescription>설명설명설명설명설명</CardDescription>
            <CardDescription>설명설명설명설명설명</CardDescription>
          </Card>
        </Card>

        <Card
          className={cn(
            cardVariants({
              variant: 'half',
              className: 'px-2',
            })
          )}
        >
          <CardHeader>
            <CardTitle>카드 테스트2</CardTitle>
          </CardHeader>
          <Card>
            <CardDescription>설명설명설명설명설명2</CardDescription>
            <CardDescription>설명설명설명설명설명2</CardDescription>
            <CardDescription>설명설명설명설명설명2</CardDescription>
            <CardDescription>설명설명설명설명설명2</CardDescription>
          </Card>
        </Card>
      </div>
    </div>
  );
}
