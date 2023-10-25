import { KeywordAnimation } from '@/app/(root)/_component/KeywordAnimation';
import KakaoAddressWrapper from '@/app/(root)/_component/KakaoAddressWrapper';
import { Button } from '@/components/ui/button/Button';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <div>Root Home</div>
      <KakaoAddressWrapper />
      <KeywordAnimation />
      <br />
      테스트
      <Button variant='contents'>버튼 테스트</Button>
      <Button asChild className='flex justify-center'>
        <a href='https://github.com/oshosh'> 테스트</a>
      </Button>
    </div>
  );
}
