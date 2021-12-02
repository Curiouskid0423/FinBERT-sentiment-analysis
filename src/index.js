import React from 'react';
import ReactDOM from 'react-dom';
import { ChakraProvider } from "@chakra-ui/react";
import './index.css';
import App from './App';



const storage = (
  <React.StrictMode>
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </React.StrictMode>
  )

const renderApp = () => {
  ReactDOM.render(
    storage, 
    document.getElementById('root'));
}

renderApp();