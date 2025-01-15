
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"

const firebaseConfig = {
  apiKey: "AIzaSyDEKbysXOnSiTkiXZ0-IW1-gBx4f5MV6tQ",
  authDomain: "devops-deivid.firebaseapp.com",
  projectId: "devops-deivid",
  storageBucket: "devops-deivid.firebasestorage.app",
  messagingSenderId: "949208235203",
  appId: "1:949208235203:web:59684fb776b1c77748f676",
  measurementId: "G-6K05EEG8MP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig)
const analytics = getAnalytics(app)