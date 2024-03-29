import React from 'react';
import ReactDOM from 'react-dom/client';

import Header from './components/Header';
import reportWebVitals from './reportWebVitals';
import Faq from './components/faq.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header/>
    <Faq/>
    </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
