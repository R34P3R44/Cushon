import { useMutation } from '@tanstack/react-query';
import { signOut } from 'firebase/auth';
import { auth } from '../../../../firebase'
import { useAuthStore } from '../../../store/authStore';

export const useLogout = () => {
    return useMutation({
        mutationFn: async () => {
            await signOut(auth);
            useAuthStore.getState().clearUser();
        },
    });
};