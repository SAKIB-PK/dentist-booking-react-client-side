import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';
import { useEffect, useState } from "react";

const auth = getAuth()
const useFirebase=()=>{
    const [user,setUser] = useState({})
    const GoogleProvider = new GoogleAuthProvider();


    // state memorize user database
    useEffect(() => {
        onAuthStateChanged(auth,user=>setUser(user))
        
    }, [])

    const googleSignIn=()=> {
        return signInWithPopup(auth,GoogleProvider)

    }


    return {
        user,
        googleSignIn
    }

}
export default useFirebase;