import { create } from 'zustand';

export interface ModalStore {
    movieId: string | undefined;
    isOpen: boolean;
    openModal: (movieId: string) => void;
    closeModal: () => void;
}

const useInfoModal = create<ModalStore>((set) => ({
    movieId: undefined,
    isOpen: false,
    openModal: (movieId) => set({ isOpen: true, movieId }),
    closeModal: () => set({ isOpen: false, movieId: undefined }),
}));

export default useInfoModal;
