import { create } from "zustand";

type MusicState = {
    isMusic: boolean;
}

type MusicActiom = {
    setMusic: (status: MusicState["isMusic"]) => void;
}

export const useMusicStore = create<MusicState & MusicActiom>((set) => ({
    isMusic: false,
    setMusic: (status) => set(() => ({ isMusic: status })),
}));