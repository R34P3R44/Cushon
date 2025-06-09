import { create } from 'zustand';
import type { User } from 'firebase/auth';


interface AuthStore {
    user: User | null;
    previousLoginAt: string | null
    setUser: (user: User | null, previousLoginAt?: string | null) => void;
    clearUser: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
    user: null,
    previousLoginAt: null,
    setUser: (user, previousLoginAt) => set(() => ({
        user,
        previousLoginAt,
      })),
    clearUser: () => set({user: null, previousLoginAt: null})
}));