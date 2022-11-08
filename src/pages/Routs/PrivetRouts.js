import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';
import { Audio } from 'react-loader-spinner'

const PrivetRouts = ({children}) => {
    const {user, loading} = useContext(AuthContext);
    const location  = useLocation();

    if(loading) {
        return <Audio
        height="80"
        width="80"
        radius="9"
        color="green"
        ariaLabel="loading"
        wrapperStyle
        wrapperClass
      />
        // <h1 className='text-5xl'>Loading...</h1>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login" state={{from: location}} replace></Navigate>;
 
    
};

export default PrivetRouts;