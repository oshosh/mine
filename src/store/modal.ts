import { create } from 'zustand';

export interface ModalData {
  open: boolean;
  modalID: string;
}

interface Modal {
  modal: Array<ModalData>;
  opened: (modalInfo: ModalData) => void;
  closed: (modalID: string) => void;
}

export const useModalStore = create<Modal>((set) => ({
  modal: [],
  opened: (modalInfo: ModalData) => set((state) => ({ modal: [modalInfo, ...state.modal] })),
  closed: (currentID: string) =>
    set((state) => {
      debugger;
      const filterData = state.modal.filter(({ modalID }) => modalID !== currentID);
      return { modal: filterData };
    }),
}));
