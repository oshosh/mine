import { KeywordAnimation } from '@/app/(root)/_component/KeywordAnimation';
import KakaoAddressWrapper from '@/app/(root)/_component/KakaoAddressWrapper';

export default function Home() {
  return (
    <div className='flex flex-col'>
      <div>Root Home</div>
      <KakaoAddressWrapper />
      <KeywordAnimation />
      <br />
      테스트
    </div>
  );
}
