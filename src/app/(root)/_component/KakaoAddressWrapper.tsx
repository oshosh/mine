'use client';

import { useModalStore } from '@/store/modal';
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

  return (
    <>
      <button onClick={handleClick}>카카오 주소 모달 열기</button>
      {open && <KakaoAddress />}
    </>
  );
}
