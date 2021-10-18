import { initializeApp } from 'firebase/app';
import firebaseConfig from './firebase.config';
function FirebaseAuth(){
    initializeApp(firebaseConfig);
}
export default FirebaseAuth;