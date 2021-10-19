import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useEffect, useState } from "react";
import FirebaseAuthInitialize from '../firebase/firebase.init';


// firebase app.initial function call
FirebaseAuthInitialize()

const useFirebase=()=>{
    const [user,setUser] = useState({})
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [pwd,setPwd] = useState('')
    const [img,setImg] = useState('')
    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth()

    // state memorize user database
    useEffect(() => {
       const subscribe = onAuthStateChanged(auth,user=>setUser(user))
       return ()=>subscribe
    }, [auth])

    // create user with email and password
    const customLogin = ()=>{
        signInWithEmailAndPassword(auth,email,pwd)
        .then(result =>{
            setUser(result.user)
        })
        .catch(err => console.log(err.message))
    }
    const customSignIn=()=>{
        createUserWithEmailAndPassword(auth,email,pwd)
        .then(result=>{
            updateData()
            setUser(result.user)
        }).catch(err=>{
            console.log(err.message)
        })
    }
    const updateData = ()=>{
        updateProfile(auth.currentUser, {
            displayName: name, photoURL: img
          }).then(() => {
            console.log('Profile Updated Successfully')
          }).catch((error) => {
            console.log('Profile Update Unsuccessful.')
          });
    }
    const googleSignIn=()=> {
        signInWithPopup(auth,GoogleProvider)
        .then(result=>{
            setUser(result.user)
        })
        .catch(err=>{
            console.log(err.message)
        })

    }
    
    const logOut=()=>{
        signOut(auth)
        .then(()=> console.log('sign out successful.'))
    }


    return {
        user,
        googleSignIn,
        customSignIn,
        customLogin,
        setName,
        setEmail,
        setImg,
        setPwd,
        updateData,
        logOut
    }

}
export default useFirebase;