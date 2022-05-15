import React from 'react'
import { Children } from 'react';
import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/authContext';

const ProtectedRoute=({children}) => {
    let {user}=useAuth();
    if(!user){
        return <Navigate to="/" />;
    }
    
    return children;
}

export default ProtectedRoute;