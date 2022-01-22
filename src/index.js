import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react';
import {BrowserRouter} from 'react-router-dom';
// import * as React from 'react'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
     <ChakraProvider>
      <App />
    </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

