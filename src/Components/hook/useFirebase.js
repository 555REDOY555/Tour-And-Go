import React, { useEffect, useState } from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from '../FireBAse/FireBaseInit';


initializeAuthentication()

const useFirebase = () => {

     const [user, setUser] = useState({});
     const [loading, setLoading] = useState(true)


     const googleProvider = new GoogleAuthProvider()
     const auth = getAuth();

     const signInUsingGoogle = () => {
          return signInWithPopup(auth, googleProvider)
               .finally(() => { setLoading(false) });
     }
     const logOut = () => {
          setLoading(true);
          signOut(auth)
               .then(() => {
                    setUser({})
               })
               .finally(() => setLoading(false))
     }

     useEffect(() => {
          const unsubscribe = onAuthStateChanged(auth, (user) => {
               if (user) {
                    setUser(user);
               }
               else {
                    setUser({});
               }
               setLoading(false);
          });
          return () => unsubscribe;
     }, [])

     return {
          user,

          signInUsingGoogle,
          logOut
     }
};

export default useFirebase;