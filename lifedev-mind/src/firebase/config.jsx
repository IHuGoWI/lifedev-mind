
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyAH4oxvwsKyXLz2CZnWSU74ecEDydCMZcY",
  authDomain: "lifedev-toppan.firebaseapp.com",
  projectId: "lifedev-toppan",
  storageBucket: "lifedev-toppan.firebasestorage.app",
  messagingSenderId: "1001517255216",
  appId: "1:1001517255216:web:8f2d6079569557e8333bf5",
  measurementId: "G-S7SLSTH6FP"
}


const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)
const db = getFirestore(app)

export { db }