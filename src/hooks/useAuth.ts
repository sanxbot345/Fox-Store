import { useState, useEffect } from 'react';
import { auth } from '../lib/firebase';
import { onAuthStateChanged, User, signInWithPopup, signOut, signInWithEmailAndPassword } from 'firebase/auth';
import { googleProvider, githubProvider } from '../lib/firebase';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);
    });
    return () => unsubscribe();
  }, []);

  const loginWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      console.error('Error logging in with Google', error);
      throw error;
    }
  };

  const loginWithGithub = async () => {
    try {
      await signInWithPopup(auth, githubProvider);
    } catch (error) {
      console.error('Error logging in with Github', error);
      throw error;
    }
  };

  const loginWithEmail = async (email: string, pass: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, pass);
    } catch (error) {
      console.error('Error logging in with Email', error);
      throw error;
    }
  }

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error('Error logging out', error);
    }
  };

  return { user, loading, loginWithGoogle, loginWithGithub, loginWithEmail, logout };
}
