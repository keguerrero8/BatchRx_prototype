import React from 'react';

import App from './App';
import './index.css';
import { theme } from "./styles/styles";

import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material/styles';




const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeProvider theme={theme} >
        <BrowserRouter >
            <App />
        </BrowserRouter>
    </ThemeProvider>
)

