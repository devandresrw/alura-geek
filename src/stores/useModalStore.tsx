import { create } from 'zustand'

interface ModalStore {
    isAddModalOpen: boolean;
    isDeleteModalOpen: boolean;
    toggleAddModal: () => void;
    toggleDeleteModal: () => void;
}

export const useModalStore = create<ModalStore>((set) => ({
    isAddModalOpen: false,
    isDeleteModalOpen: false,
    toggleAddModal: () => set((state) => ({ isAddModalOpen: !state.isAddModalOpen })),
    toggleDeleteModal: () => set((state) => ({ isDeleteModalOpen: !state.isDeleteModalOpen })),
}));