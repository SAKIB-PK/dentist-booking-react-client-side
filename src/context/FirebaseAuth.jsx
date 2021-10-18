import React, { createContext } from 'react'
import useFirebase from '../hooks/useFirebase'


export const FirebaseAuthContext= createContext()
const FirebaseAuth = ({children}) => {
    const allcontext = useFirebase()
    return (
        <FirebaseAuthContext.Provider value={allcontext}>
            {children}
        </FirebaseAuthContext.Provider>
    )
}

export default FirebaseAuth
