import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import Header from './always/Header';
import reportWebVitals from './reportWebVitals';
import Footer from './always/Footer';
import ShopingCart from './always/ShopingCart';
import HeartCart from './always/HeartCart';
import HeartPage from './page/shopCard' ; 
import Products from './page/cart/Products';
import Itemss from './page/Shop/Itemss';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
