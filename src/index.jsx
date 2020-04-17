// Package dependencies
import React from 'react';
import ReactDOM from 'react-dom';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

import Home from './components/MainPage';

const GlobalStyle = createGlobalStyle`
 html {
  Font-family: Arial;
  color: #707070;
 }

 p {
   margin: 0;
 }

 input {
   outline: none;
 }
`;

const theme = {
  color: '#707070',
  backgroundColor: '#F5F5F5'
};

ReactDOM.render((
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Home />
  </ThemeProvider>
), document.getElementById('app'));
