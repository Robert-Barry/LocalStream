import { create } from 'zustand';

export type Category = 'home' | 'live' | 'news' | 'settings';

export interface Video {
    id: string;
    title: string;
    thumbnailURL: string;
    videoStreamURL: string;
    category: Category;
};

interface AppState {
    activeCategory: Category;
    setActiveCategory: (category: Category) => void;
};

const useStore = create<AppState>()((set) => ({
    activeCategory: 'home',
    setActiveCategory: (category) => set({ activeCategory: category }),
}));

