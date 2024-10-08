import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Components/Main';
import { BrowserRouter } from 'react-router-dom';
import './Components/style.css'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <BrowserRouter>
  <Main></Main>
  </BrowserRouter>
  </>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

