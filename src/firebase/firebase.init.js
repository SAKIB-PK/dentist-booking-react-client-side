import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';
function FirebaseAuthInitialize(){
    initializeApp(firebaseConfig);
}
export default FirebaseAuthInitialize;