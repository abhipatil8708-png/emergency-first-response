import { initializeApp } from 'firebase/app';
import { getAuth, signInAnonymously, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  projectId: "gen-lang-client-0403708175",
  appId: "1:524121547998:web:6489df8d8db00e62980e4f",
  apiKey: "AIzaSyC52xxI8r4KWZzmFBHYdrZISiMiLU0DKCg",
  authDomain: "gen-lang-client-0403708175.firebaseapp.com",
  firestoreDatabaseId: "ai-studio-bb34e74a-a5ac-4d94-a150-3dd921de3611",
  storageBucket: "gen-lang-client-0403708175.firebasestorage.app",
  messagingSenderId: "524121547998",
  measurementId: ""
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app, firebaseConfig.firestoreDatabaseId);

// Helper function to ensure user is logged in anonymously
export const ensureAuthenticated = async () => {
  return new Promise((resolve, reject) => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      unsubscribe();
      if (user) {
        resolve(user);
      } else {
        signInAnonymously(auth)
          .then((cred) => resolve(cred.user))
          .catch(reject);
      }
    });
  });
};
