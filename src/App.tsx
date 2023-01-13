import React from 'react';
import './App.css';
import {Route , Routes , BrowserRouter} from 'react-router-dom'
import Header from './always/Header';
import Footer from './always/Footer';
import Home from './page/Home'
import ShopingCart from './always/ShopingCart';
function App() {
  const [showShopingCart , setShopCa] = React.useState<boolean>(false);
  return (
    <BrowserRouter>
      <Header setShopCa={setShopCa}/>
      <ShopingCart/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
