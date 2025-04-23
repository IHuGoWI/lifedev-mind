import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBT0noPKKaD5PnYIxLmdXV1Z2cZ-YqxfF0",
  authDomain: "livedev-hugo.firebaseapp.com",
  projectId: "livedev-hugo",
  storageBucket: "livedev-hugo.firebasestorage.app",
  messagingSenderId: "884214768359",
  appId: "1:884214768359:web:92c9af9fa1b146a3373842",
  measurementId: "G-0RHRDY588F",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
