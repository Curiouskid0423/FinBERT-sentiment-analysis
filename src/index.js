import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ChakraProvider } from "@chakra-ui/react";
import './index.css';
import App from './App';
import launchStore from './store/configStore';

const store = launchStore();

// React section
const storage = (
  <React.StrictMode>
    <ChakraProvider> {/** Chakra UI style provider  */}
      <Provider store={store}> {/** Redux provider  */}
        <App />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
  )

const renderApp = () => {
  ReactDOM.render(
    storage, 
    document.getElementById('root'));
}

renderApp();