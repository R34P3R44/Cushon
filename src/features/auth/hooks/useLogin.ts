import { useMutation } from '@tanstack/react-query';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../../../../firebase';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { useAuthStore } from '../../../store/authStore';

export const useLogin = () => {

    const setUser = useAuthStore((state) => state.setUser);

    return useMutation({
        mutationFn: async ({ email, password }: { email: string; password: string }) => {
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            const userDocRef = doc(db, 'users', user.uid);
            const userSnapshot = await getDoc(userDocRef);

            // Read the *currentLoginAt* from Firestore → this will become the "previousLoginAt"
            const previousLoginAt = userSnapshot.exists() && userSnapshot.data().currentLoginAt
                ? userSnapshot.data().currentLoginAt
                : null;

            // Update Firestore:
            await setDoc(userDocRef, {
                displayName: user.displayName,
                email: user.email,
                previousLoginAt: previousLoginAt, // move current → previous
                currentLoginAt: user.metadata.lastSignInTime, // save current login time
            }, { merge: true });

            // Update store:
            setUser(user, previousLoginAt);

            return {
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
            };
        },
    });
};