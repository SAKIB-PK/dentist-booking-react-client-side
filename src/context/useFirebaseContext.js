import { useContext } from "react"
import { FirebaseAuthContext } from "./FirebaseAuth"


const useFirebaseContext =()=>{
    
    return useContext(FirebaseAuthContext)
}
export default useFirebaseContext