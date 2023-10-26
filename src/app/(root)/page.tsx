import { KeywordAnimation } from '@/app/(root)/_component/KeywordAnimation';
import KakaoAddressWrapper from '@/app/(root)/_component/KakaoAddressWrapper';
import { Button, buttonVariants } from '@/components/ui/button/Button';
import { cn, getQueryClient } from '@/lib/utils';
import { getKeyword } from './_lib/getKeyword';
import { HydrationBoundary, dehydrate } from '@tanstack/react-query';

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
    </div>
  );
}
