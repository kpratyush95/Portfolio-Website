import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ThemeProvider } from "styled-components";
import { theme } from "./themes/theme";
import 'react-mdl/extra/material.css';   
import 'react-mdl/extra/material.js';

ReactDOM.render(
  <ThemeProvider theme = {theme}>
    <App />
 </ThemeProvider>,
  document.getElementById('root')
);

