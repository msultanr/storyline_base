import { create } from "zustand";

type CoverState = {
    isCover: boolean;
}

type CoverActiom = {
    setCover: (status: CoverState["isCover"]) => void;
}

export const useCoverStore = create<CoverState & CoverActiom>((set) => ({
    isCover: true,
    setCover: (status) => set(() => ({ isCover: status })),
}));