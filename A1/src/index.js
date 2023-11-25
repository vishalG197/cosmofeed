import React from 'react';
import ReactDOM from 'react-dom';
// import { ChakraProvider } from '@chakra-ui/react';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import { AuthProvider } from './component/AuthcontextProvider';
ReactDOM.render(
  <AuthProvider>


  
  <BrowserRouter>
 
    <App />
 
  </BrowserRouter></AuthProvider>,
  document.getElementById('root')
);
