import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyAagM10HyAkcDN0hOFSs8Pc2kvUa-e62t0",
    authDomain: "disneyplusclone-daab8.firebaseapp.com",
    projectId: "disneyplusclone-daab8",
    storageBucket: "disneyplusclone-daab8.appspot.com",
    messagingSenderId: "90988171937",
    appId: "1:90988171937:web:575661f5547cb518fa16e0",
    measurementId: "G-E6N4XBBWV7"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();
// provider.setCustomParameters({ prompt: 'select_account' });
const storage = getStorage();

export { auth, provider, storage};
export default db;
