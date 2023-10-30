'use client';

import { useModalStore } from '@/store/modal';
import { toast } from 'sonner';

import KakaoAddress from './KakaoAddress';

export default function KakaoAddressWrapper() {
  const open = useModalStore(
    (store) => store.modal.find(({ modalID }) => modalID === 'daumPost')?.modalID
  );
  const opened = useModalStore((store) => store.opened);

  const handleClick = () =>
    opened({
      open: true,
      modalID: 'daumPost',
    });

  const handleClick2 = () => {
    toast.success('My success toast');
  };

  return (
    <>
      <button onClick={handleClick2}>토스트 팝업 실행</button>
      <button onClick={handleClick}>카카오 주소 모달 열기</button>
      {open && <KakaoAddress />}
    </>
  );
}
