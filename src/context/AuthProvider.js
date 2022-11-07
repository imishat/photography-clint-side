import React, { createContext, useEffect, useState } from 'react';
import{createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword}from 'firebase/auth'
import app from '../firebase/firebase.config';


export const AuthContext=createContext()
const auth=getAuth(app)

const AuthProvider = ({children}) => {
    const [user,setUser]=useState(null)
    const [loading, setLoading] = useState(true);

    //login 
    const login = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }
    //singup
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }





    // create user
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () =>{
            return unsubscribe();
        }
    }, [])


    const Info={login,user,loading,createUser}
    return (
        <AuthContext.Provider value={Info}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;