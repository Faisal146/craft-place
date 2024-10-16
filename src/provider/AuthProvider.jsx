import { createUserWithEmailAndPassword, GithubAuthProvider, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
export const AuthContext = createContext(null)


const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loader, setLoader] = useState(true)

    const Googleprovider = new GoogleAuthProvider();
    const githubprovider = new GithubAuthProvider();


   const  userRegister = (email, password) => {
      setLoader(true)
      return    createUserWithEmailAndPassword(auth, email, password)
   }

   const  userLogin = (email, password) => {
    setLoader(true)
      return    signInWithEmailAndPassword(auth, email, password)
   }

   
   const GoogleSign = ()=>{
    setLoader(true)
   return signInWithPopup(auth, Googleprovider)
    }
    const githubSign = ()=>{
        setLoader(true)
    return signInWithPopup(auth, githubprovider)
    }


   const updateProfilee = (name ,photoURL) => {
       
    return  updateProfile(auth.currentUser, { displayName: name, photoURL: photoURL  })
    //console.log(name, photoURL)
}
const logOut = () => {
    setLoader(true)
    signOut(auth)
}


    const authInfo = {userRegister, userLogin, updateProfilee, logOut, GoogleSign,githubSign, user, loader}

    useEffect(()=>{
        const unSubscribe =  onAuthStateChanged(auth, currentUser => {
             console.log('current user', currentUser);
             setUser(currentUser)
             setLoader(false)
         })
         return () =>{
             unSubscribe()
         }
     },[])
    return (
       
<AuthContext.Provider value={authInfo}>
    {children}
</AuthContext.Provider>
    );
};

export default AuthProvider;