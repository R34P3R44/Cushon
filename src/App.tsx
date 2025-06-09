import './App.css'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout'
import LoginPage from './features/auth/pages/LoginPage';
import InvestmentPage from './features/investments/pages/InvestmentPage';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useAuthStore } from './store/authStore';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../firebase';
import { useEffect, useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';

function App() {
  const user = useAuthStore((state) => state.user);
  const clearUser = useAuthStore((state) => state.clearUser);
  const setUser = useAuthStore((state) => state.setUser)
  const [authLoading, setAuthLoading] = useState<boolean>(true);

  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000,
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
        refetchOnMount: true,
      },
    },
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {

        const userDocRef = doc(db, 'users', firebaseUser.uid);
        const userSnapshot = await getDoc(userDocRef);

        const previousLoginAt = userSnapshot.exists() ? userSnapshot.data().previousLoginAt ?? null : null;

        setUser(firebaseUser, previousLoginAt);
      } else {
        clearUser()
      }
      setAuthLoading(false)
    });

    return () => unsubscribe();

  }, [setUser, clearUser]);

  if (authLoading) return null;

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} >
            <Route
              index
              element={!user ? <LoginPage /> : <Navigate to="/user-dashboard" />}
            />
            <Route
              path="user-dashboard"
              element={user ? <InvestmentPage /> : <Navigate to="/" />}
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
