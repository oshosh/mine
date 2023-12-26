'use client';

import { useMemo } from 'react';
import { useModalStore } from '@/store/modal';
import DaumPostcode from 'react-daum-postcode';

import Modal from '@/components/modal/Modal';

interface AddressProps {
  address: string;
  addressType: string;
  bname: string;
  buildingName: string;
}

export default function KakaoAddress() {
  const open = useModalStore((store) => {
    const find = store.modal.find((item) => item.modalID === 'daumPost');
    return find?.open;
  });
  const closed = useModalStore((store) => {
    return store.closed;
  });
  const daumPostSize = useMemo(
    () => (window.innerWidth <= 760 ? window.innerWidth - 30 : '700px'),
    []
  );

  const handleCloseClick = () => {
    closed('daumPost');
  };

  const handleComplete = ({ address, addressType, bname, buildingName }: AddressProps) => {
    let fullAddress = address;
    let extraAddress = '';

    if (addressType === 'R') {
      if (bname !== '') {
        extraAddress += bname;
      }
      if (buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${buildingName}` : buildingName;
      }
      fullAddress += extraAddress !== '' ? ` (${extraAddress})` : '';
    }

    closed('daumPost');
  };

  if (!open) return null;
  return (
    <Modal id={'daumPost'} opened={open} onClose={handleCloseClick}>
      <DaumPostcode
        style={{
          display: 'block',
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%,-50%)',
          width: daumPostSize,
          height: '500px',
          padding: '7px',
        }}
        onComplete={handleComplete}
      />
    </Modal>
  );
}
