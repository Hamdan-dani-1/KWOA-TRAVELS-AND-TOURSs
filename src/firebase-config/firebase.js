// /src/firebase.js  <-- UPDATED CODE

// Core Firebase imports
import { initializeApp } from "firebase/app";

// Import the specific services you need: Auth and Firestore (and Analytics)
import { getAuth } from "firebase/auth";      // <-- NEW: Import Auth service function
import { getFirestore } from "firebase/firestore"; // <-- NEW: Import Firestore service function
import { getAnalytics } from "firebase/analytics";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB4t_23OIDCjl9i87FaimK0U74lH_EXuOc",
  authDomain: "voice-of-aimma.firebaseapp.com",
  projectId: "voice-of-aimma",
  storageBucket: "voice-of-aimma.firebasestorage.app",
  messagingSenderId: "918718654337",
  appId: "1:918718654337:web:68c21313652e83dd8aaa80",
  measurementId: "G-S58HSR4G5E"
};

// Initialize Firebase App
const app = initializeApp(firebaseConfig);

// Initialize Services
const analytics = getAnalytics(app);

// Initialize and EXPORT the services needed by your React components
export const auth = getAuth(app);      // <-- THE ESSENTIAL FIX: Initialize and EXPORT 'auth'
export const db = getFirestore(app);   // <-- IMPORTANT: Export 'db' for fetching users

// Optional: You can also export the app instance itself if needed
// export default app;