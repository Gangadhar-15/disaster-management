// Import the functions you need from the SDKs
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // Firestore
import { getAuth } from "firebase/auth"; // Authentication
import { getStorage } from "firebase/storage"; // Storage

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCd4DWsemwYH2zynZkqT_ZZxSUTMq50ZS0",
  authDomain: "disaster-management-2bbc4.firebaseapp.com",
  projectId: "disaster-management-2bbc4",
  storageBucket: "disaster-management-2bbc4.appspot.com",
  messagingSenderId: "143947123880",
  appId: "1:143947123880:web:f8fc963898703874c8869d",
  measurementId: "G-TKPWVS4VRY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Analytics
const analytics = getAnalytics(app);

// Initialize Firestore
const db = getFirestore(app);

// Initialize Auth
const auth = getAuth(app);

// Initialize Storage
const storage = getStorage(app);

// Export initialized services
export { app, db, auth, analytics, storage };
