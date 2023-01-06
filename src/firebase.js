import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDamcyaQHNbkoag0mSGoz8ekA7XVw6Xsrw",
  authDomain: "whataap-clone.firebaseapp.com",
  projectId: "whataap-clone",
  storageBucket: "whataap-clone.appspot.com",
  messagingSenderId: "793869560383",
  appId: "1:793869560383:web:ad7575020ea7511a4ae68a",
};
// export const auth = getAuth();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
