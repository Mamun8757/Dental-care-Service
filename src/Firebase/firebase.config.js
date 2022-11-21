// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDI8n5yJCN907i8TAdWyDO3VeejNWlPU7U",
  authDomain: "decare-register-auth.firebaseapp.com",
  projectId: "decare-register-auth",
  storageBucket: "decare-register-auth.appspot.com",
  messagingSenderId: "763697916864",
  appId: "1:763697916864:web:52bc455f05c13bcee3f625",
  measurementId: "G-QPHP87EGXW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export default app;