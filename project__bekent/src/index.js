import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style.css"
import Header from './header/header';
import Select from './SELECT/select'
import Main from './main/main';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <Header/>
  <Main/>
  <Select/>
  </>
)