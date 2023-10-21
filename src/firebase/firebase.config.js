// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCFd_8DWmd0tZCkim_6F_-n1WaPBI2fLOs",
  authDomain: "car-deal-website.firebaseapp.com",
  projectId: "car-deal-website",
  storageBucket: "car-deal-website.appspot.com",
  messagingSenderId: "308826406128",
  appId: "1:308826406128:web:f6f0b18ae1341678129635"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;