import { initializeApp } from "firebase/app";
import firebaseConfig from "./FirebaseConfi";


const initializeAuthentication = () => {
     initializeApp(firebaseConfig);
}

export default initializeAuthentication;