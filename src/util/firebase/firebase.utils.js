
import { initializeApp } from "firebase/app";
import {getAuth,signInWithRedirect,signInWithPopup,GoogleAuthProvider} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbFDBI3cCkg8-XMg-5EhLWFTTqOJawJm8",
  authDomain: "crwn-clothing-db-2fed3.firebaseapp.com",
  projectId: "crwn-clothing-db-2fed3",
  storageBucket: "crwn-clothing-db-2fed3.appspot.com",
  messagingSenderId: "776125887309",
  appId: "1:776125887309:web:d586e734b5ee59cc62fd04"
};
//using fire base to enable google pop up sign in 
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
//the way that google want
const provider= new GoogleAuthProvider();
provider.setCustomParameters({
    prompt:"select_account"
});
export const auth=getAuth();
//giving google with auth and parameters it requires
export const signInWithGooglePopUp=()=>signInWithPopup(auth,provider)
//using fire base to enable google pop up sign in 