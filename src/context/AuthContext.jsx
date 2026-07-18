import React, { createContext, useContext, useState, useEffect } from "react";
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged 
} from "firebase/auth";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { auth, db, isMock } from "../firebase/config";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // MOCK AUTHENTICATION SYSTEM (For sandbox / demo mode)
  const getMockUsers = () => JSON.parse(localStorage.getItem("mock_users") || "[]");
  const saveMockUsers = (users) => localStorage.setItem("mock_users", JSON.stringify(users));

  const mockSignup = async (email, password) => {
    // Simulate delay
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const users = getMockUsers();
    if (users.some(u => u.email === email)) {
      throw new Error("auth/email-already-in-use");
    }

    const newUser = { uid: "mock_" + Math.random().toString(36).substr(2, 9), email };
    users.push({ ...newUser, password });
    saveMockUsers(users);

    localStorage.setItem("mock_current_user", JSON.stringify(newUser));
    setCurrentUser(newUser);
    return newUser;
  };

  const mockLogin = async (email, password) => {
    await new Promise(resolve => setTimeout(resolve, 800));

    const users = getMockUsers();
    const user = users.find(u => u.email === email && u.password === password);
    if (!user) {
      throw new Error("auth/invalid-credential");
    }

    const sessionUser = { uid: user.uid, email: user.email };
    localStorage.setItem("mock_current_user", JSON.stringify(sessionUser));
    setCurrentUser(sessionUser);
    return sessionUser;
  };

  const mockLogout = async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    localStorage.removeItem("mock_current_user");
    setCurrentUser(null);
  };

  // REAL & MOCK SYSTEM ACTIONS
  const signup = (email, password) => {
    if (isMock) {
      return mockSignup(email, password);
    }
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    if (isMock) {
      return mockLogin(email, password);
    }
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    if (isMock) {
      return mockLogout();
    }
    return signOut(auth);
  };

  // Save specifications to database or localStorage
  const saveUserSpecs = async (specs) => {
    if (!currentUser) return;
    
    if (isMock) {
      localStorage.setItem(`specs_${currentUser.uid}`, JSON.stringify(specs));
      return;
    }

    try {
      const userSpecsRef = doc(db, "users", currentUser.uid);
      await setDoc(userSpecsRef, { specs, updatedAt: new Date().toISOString() }, { merge: true });
    } catch (error) {
      console.error("Failed to sync specs to Firestore. Storing locally.", error);
      localStorage.setItem(`specs_${currentUser.uid}`, JSON.stringify(specs));
    }
  };

  // Load specifications from database or localStorage
  const loadUserSpecs = async () => {
    if (!currentUser) return null;

    if (isMock) {
      const local = localStorage.getItem(`specs_${currentUser.uid}`);
      return local ? JSON.parse(local) : null;
    }

    try {
      const userSpecsRef = doc(db, "users", currentUser.uid);
      const docSnap = await getDoc(userSpecsRef);
      if (docSnap.exists() && docSnap.data().specs) {
        return docSnap.data().specs;
      }
    } catch (error) {
      console.error("Failed to fetch specs from Firestore. Reading local cache.", error);
    }

    // Fallback to local storage if Firestore fails
    const local = localStorage.getItem(`specs_${currentUser.uid}`);
    return local ? JSON.parse(local) : null;
  };

  // Lifecycle listeners
  useEffect(() => {
    if (isMock) {
      const localUser = localStorage.getItem("mock_current_user");
      if (localUser) {
        setCurrentUser(JSON.parse(localUser));
      }
      setLoading(false);
      return;
    }

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
      setLoading(false);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    isMock,
    signup,
    login,
    logout,
    saveUserSpecs,
    loadUserSpecs
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
