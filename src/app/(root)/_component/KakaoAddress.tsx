'use client';
import Modal from '@/components/ui/modal/Modal';
import { useModalStore } from '@/store/modal';
import DaumPostcode from 'react-daum-postcode';

interface AddressProps {
  address: string;
  addressType: string;
  bname: string;
  buildingName: string;
}

export default function KakaoAddress() {
  const open = useModalStore(
    (store) => store.modal.find((item) => item.modalID === 'daumPost')?.modalID
  );
  const closed = useModalStore((store) => store.closed);

  const handleCloseClick = () => {
    closed('daumPost');
  };

  const handleComplete = (data: AddressProps) => {
    const { address, addressType, bname, buildingName } = data;

    let fullAddress = address;
    let extraAddress = '';

    if (addressType === 'R') {
      if (bname !== '') {
        extraAddress += bname;
      }
      if (buildingName !== '') {
        extraAddress += extraAddress !== '' ? `, ${buildingName}` : data.buildingName;
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
          width: '600px',
          height: '500px',
          padding: '7px',
        }}
        onComplete={handleComplete}
      />
    </Modal>
  );
}
