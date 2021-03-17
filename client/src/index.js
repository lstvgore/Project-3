import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
const Footer = () => (
  <footer className="footer">
    <button onClick={()=> window.open("https://github.com/Sudan20215", "_blank")} >Sudan</button>
    <button onClick={()=> window.open("https://github.com/lstvgore", "_blank")} >Lester</button>
    <button onClick={()=> window.open("https://github.com/trukat", "_blank")} >Kathy</button>
    <button onClick={()=> window.open("https://github.com/Frank-5850", "_blank")} >Franco</button>
    <button onClick={()=> window.open("https://github.com/Nsilo", "_blank")}>Jivaka</button>
  </footer>
);

ReactDOM.render(
  <React.StrictMode>
    <App key="1" />, <Footer key="2" />
  </React.StrictMode>,
  
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
