
import { initializeApp } from "firebase/app";
//for auth
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from "firebase/auth"
import { getFirestore, getDoc, setDoc, doc } from "firebase/firestore"
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
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt: "select_account"
});
export const auth = getAuth();
//giving google with auth and parameters it requires
export const signInWithGooglePopUp = () => signInWithPopup(auth, provider)
//using fire base to enable google pop up sign in 

//storing the authenticated user
//
//instantiate firestore db to store the authenticated users
export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
    //this ask 3 arguments 1.db,2.collection,3.uniqueid this is for initializing the collection with unique id in a db
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);
    //getting the information about the userDoCRef if use with .Exist() it will return wther that user is existed in the db
    const userSnapShot = await getDoc(userDocRef);
    //inserting data that i got from authnetication service
    if (!userSnapShot.exists()) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
            setDoc(userDocRef, { displayName, email, createdAt });
        } catch (error) {
            console.log("Error while creating the user!", error.message);
        }
    }else{
        return userDocRef;
    }
}


//storing the authenticated user