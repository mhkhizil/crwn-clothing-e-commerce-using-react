
import { initializeApp } from "firebase/app";
//for auth
import { getAuth, signInWithRedirect, signInWithPopup, signInWithEmailAndPassword, GoogleAuthProvider, createUserWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth"
import { getFirestore, getDoc, setDoc, doc, collection, writeBatch, query, getDocs } from "firebase/firestore"
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
///fb authentication doe tachr auth twy htl chin yon nout provider twy htet lk 

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
    prompt: "select_account"
});
export const auth = getAuth();
//giving google with auth and parameters it requires
export const signInWithGooglePopUp = async () => {
    try {
        await signInWithPopup(auth, googleProvider);
    } catch (error) {
        // Handle the error here
        console.error("Error during Google sign-in popup:", error.message);
    }
};
//google popo up ma k pl  redirect ko use ml so yin thu ka google page ko yt p mha auth lk p mha ko page ko redirect lk py dl atwt page ka asa ka ny reload pyn lk ya dl ae atwt br data mhr shi dot mhr ma hk woo ae dr kyg ae dr ko tone ml so yin useEffect nk firebase ka getredirect metjod twel tone ya ml ui compo phat mhr
// export const signInWithGoogleRedirect=()=> signInWithRedirect(auth,googleProvider)
//using fire base to enable google pop up sign in 

//storing the authenticated user
//
//instantiate firestore db to store the authenticated users
export const db = getFirestore();
//storing the products in firebase 
export const addCollectionsAndDocuments = async (collectionKey, objectToAdd) => {
    //transaction method so dr process takhu lone ma p khin mhr error tt twr yin ae process takhu lone ko cancel lk cha dl concept ae conceppt nk object akone lone ko collection htl htl chin lo writeBAtch ko use 
    const collectionRef = collection(db, collectionKey);
    const batch = writeBatch(db);
    objectToAdd.forEach(object => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object)
    });
    await batch.commit();
    console.log("done");
};
//fetching the data from firestore db
export const getCategoriesAndDocuments=async ()=>{
const collectionRef=collection(db,"categories");
const q=query(collectionRef);
const querySnapShot=await getDocs(q);
const categoriesMap=querySnapShot.docs.reduce((acc,docSnapShot)=>{
    const {title,items} =docSnapShot.data();
    //using hashtable
    acc[title.toLowerCase()]=items;
    return acc;
},{});
return categoriesMap;
}
//storing the authenticated user IN USER COLLECTION
export const createUserDocumentFromAuth = async (userAuth, additionalInfo = {}) => {
    if (!userAuth) return;
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
            setDoc(userDocRef, { displayName, email, createdAt, ...additionalInfo });//additional info is for sign up page bcz the auth api with email adn password doe s not return display name after authenticated user so in order to store that value we have to store it in etra object bcz destructureed displayName value from userAuth will only have null value for sign up unlike sign in with google bcz google will reture displaynAME OF AUTENTICATED USER
        } catch (error) {
            console.log("Error while creating the user!", error.message);
        }
    }
    return userDocRef;

}

//FOR AUTHENTICATION OF ENTERED EMAIL AND PASSWORD  FOR SIGN UP(REGISTER)
export const createAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await createUserWithEmailAndPassword(auth, email, password);


}
//FOR AUTHENTICATION OF WHETHER THE USER IS REGISTERED SIGN IN 
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
    if (!email || !password) return;
    return await signInWithEmailAndPassword(auth, email, password);


};
export const signOutUser = async () => await signOut(auth);
export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);