import React from 'react';
import { Route, Redirect, Navigate } from 'react-router-dom';
import { useAuth } from './AuthcontextProvider';

const PrivateRoute = ({children}) => {
   const {isAuthenticated}=useAuth();
  return (
    
   isAuthenticated ? {children}
           : (
          <Navigate to="/login" />
        )
    
  );
};

export default PrivateRoute;
