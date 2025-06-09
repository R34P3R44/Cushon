import { FirebaseError } from 'firebase/app';

export function getFirebaseAuthError(error: unknown): string {
    if (error instanceof FirebaseError) {
        switch (error.code) {
            case 'auth/invalid-credential':
            case 'auth/wrong-password':
                return 'Incorrect email or password. Please try again.';
            case 'auth/user-not-found':
                return 'No account found with this email.';
            case 'auth/too-many-requests':
                return 'Too many failed attempts. Please try again later.';
            case 'auth/network-request-failed':
                return 'Network error. Please check your connection.';
            default:
                return 'An unexpected error occurred. Please try again.';
        }
    }
    return 'An unknown error occurred.';
}