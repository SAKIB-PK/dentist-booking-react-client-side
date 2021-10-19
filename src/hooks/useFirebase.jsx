import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { useEffect, useState } from "react";
import { useHistory } from 'react-router';
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
    const history = useHistory()

    // state memorize user database
    useEffect(() => {
       const subscribe = onAuthStateChanged(auth,user=>setUser(user))
       return ()=>subscribe
    }, [auth,user])

    // create user with email and password
    const customLogin = ()=>{
       return signInWithEmailAndPassword(auth,email,pwd) 
    }
    const customSignIn=()=>{
        createUserWithEmailAndPassword(auth,email,pwd)
        .then(result=>{
            updateData()
            history.push('/')
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
        googleSignIn,
        customSignIn,
        customLogin,
        setName,
        setEmail,
        setImg,
        setPwd,
        setUser,
        updateData,
        logOut,
        auth
    }

}
export default useFirebase;