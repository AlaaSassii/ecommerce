import React from 'react';
import {Route , Routes , BrowserRouter} from 'react-router-dom'
import Header from './always/Header';
import Footer from './always/Footer';
import Home from './page/Home'
import ShopingCart from './always/ShopingCart';
import Shop from './page/Shop'
import Blog from './page/blog'
import Contact from './page/Contact' ; 
import Account from './page/account' ; 
import AccDownloads from './page/account/downloads'
import AccOrder from './page/account/order'
import AccPayment from './page/account/payment'
import HeartCart from './always/HeartCart';
function App() {
  const [showShopingCart , setShopCa] = React.useState<boolean>(false);
  const [showHeartCart , setShowHeart] = React.useState<boolean>(false);
  const setShopCart = (b:boolean):void => {
    setShopCa(!b) ; 
  }
  const setHeartCart = (b:boolean):void => {
    setShowHeart(!b) ; 

  }
  return (
    <BrowserRouter>
      <Header setShopCa={setShopCart} showShopingCart={showShopingCart} setHeartCart={setShowHeart}  showHeartCart={showHeartCart}/>
      <ShopingCart setShopCa={setShopCart} showShopingCart={showShopingCart}  />
      <HeartCart setHeartCart={setHeartCart}  showHeartCart={showHeartCart}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/shop' element={<Shop/>}/>
        <Route path='/blog' element={<Blog/>}/>
        <Route path='/contact-us' element={<Contact/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/account/downloads' element={<AccDownloads/>}/>
        <Route path='/account/order' element={<AccOrder/>}/>
        <Route path='/account/payment' element={<AccPayment/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
