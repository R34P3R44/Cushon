import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyD7X4mRoXZ6YHDaqFUw7Lc4-n73r_2IKu4",
  authDomain: "cushon-investments.firebaseapp.com",
  projectId: "cushon-investments",
  storageBucket: "cushon-investments.firebasestorage.app",
  messagingSenderId: "555672942321",
  appId: "1:555672942321:web:033b897e9d366da62c5b50",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);