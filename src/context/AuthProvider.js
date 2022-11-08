import React, { createContext, useEffect, useState } from 'react';
import{createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut}from 'firebase/auth'
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
    //logout
    const logOut = () =>{
        
        return signOut(auth);
    }






    // create user
    useEffect( () =>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            
            setUser(currentUser);
            setLoading(false);
        });

        return () =>{
            return unsubscribe();
        }
    }, [])


    const Info={login,user,loading,createUser,logOut}
    return (
        <AuthContext.Provider value={Info}>
            {children}

        </AuthContext.Provider>
    );
};

export default AuthProvider;