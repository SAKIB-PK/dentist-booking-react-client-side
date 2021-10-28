import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useEffect, useState } from "react";
import FirebaseAuthInitialize from '../firebase/firebase.init';


// firebase app.initial function call
FirebaseAuthInitialize()

const useFirebase=()=>{
    const [user,setUser] = useState({})
    const [isLoading,setIsLoading] = useState(true)
    const GoogleProvider = new GoogleAuthProvider();
    const auth = getAuth()

    // state memorize user database
    useEffect(() => {
       const subscribe = onAuthStateChanged(auth,user=>{
        if(user){
          setUser(user)
        }else{
          setUser({})
        }
        setIsLoading(false)
       })
       return ()=>subscribe
    }, [auth])

    // create user with email and password
    const customLogin = (email,pwd)=>{
       return signInWithEmailAndPassword(auth,email,pwd) 
    }
    const customSignIn=(email,pwd)=>{
        return createUserWithEmailAndPassword(auth,email,pwd)  
    }
    // // logged user info 
    // const loggedUser = {
    //   displayName:'',
    //   email:'',
    //   photoURL:''
    // }
    const updateData = (name,img)=>{
        updateProfile(auth.currentUser, {
          displayName:name,
          photoURL:img
        })
        .then(() => {
          // without reload window show name first time user registration
          const newUser = {...user,displayName:name,photoURL:img}
          setUser(newUser)
          
          }).catch((error) => {
            console.log('Profile Update Unsuccessful.')
          })
    }
    const googleSignIn=()=> {
      return signInWithPopup(auth,GoogleProvider)
    }
    
    const logOut=()=>{
        signOut(auth)
        .then(()=> {
            setUser({})
            console.log('sign out successful.')
        })
    }


    return {
        user,
        setIsLoading,
        isLoading,
        googleSignIn,
        customSignIn,
        customLogin,
        setUser,
        updateData,
        logOut,
    }

}
export default useFirebase;