import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
const firebaseConfig = {
    apiKey: "AIzaSyDYbaGGZ1UWD0uvBzaqbvOrAhFGMwzrSA4",
    authDomain: "maltimart-8b495.firebaseapp.com",
    projectId: "maltimart-8b495",
    storageBucket: "maltimart-8b495.appspot.com",
    messagingSenderId: "13361064372",
    appId: "1:13361064372:web:4cca2d97056b6f3a54aae1"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;