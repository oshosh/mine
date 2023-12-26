import { Fragment } from 'react';
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
import { ReactCarousel } from '@/components/ui/carousel/ReactCarousel';
import { Input, InputLabel } from '@/components/ui/input/Input';
import { Label } from '@/components/ui/label/Label';
import { WorkLeftCard } from '@/components/cards/work-left-card';
import { HighlightText } from '@/components/highlight-text/HighlightText';
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
    <div className='flex flex-col bg-slate-500'>
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
      <HighlightText msg='ABOUT ME' search=' B U   E' effectColor='boldLightPurple' underline />
      <div>
        {/* <Label className='text-red-500' htmlFor='password' title=''>
          Password 테스트
        </Label>
        <Input id='password' type='password' value='' placeholder='비번을 입력해주세요 테스트' />

        <Label className='text-red-500' htmlFor='text'>
          Text 테스트
        </Label>
        <Input type='text' id='text' value='테스트 텍스트' /> */}

        <ReactCarousel>
          {[1].map((item) => {
            return (
              <div className='flex flex-row md:flex-col' key={item}>
                <WorkLeftCard />
                <WorkLeftCard />
              </div>
            );
          })}
        </ReactCarousel>
        <InputLabel
          label='text2 테스트'
          type='text'
          id='text2'
          defaultValue='sadgsdgdsfasdfasdf'
          placeholder='xxx'
          labelStyle='text-red-700'
        />
        <Label className='text-red-500' htmlFor='text'>
          Text 테스트
        </Label>
        <Input type='text' id='text' defaultValue='테스트 텍스트' />
      </div>
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
