import React , {useState}from 'react'
import { BsSearch } from 'react-icons/bs' ; 
import {MdOutlineShoppingCart} from 'react-icons/md' ; 
import {AiOutlineHeart} from 'react-icons/ai' ; 
import {BsPerson} from 'react-icons/bs'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './index.scss'
import ShopingCart from './ShopingCart';
import { product } from '../States/reudcers/shopCardReducer';
const style = {
    fontWeight:"500" , 
    fontSize:"20px",
    color:"black"
}
interface Props {
    setShopCa(b:boolean) : void  ,
  showShopingCart : boolean
  setHeartCart  : (b:boolean) => void 
  showHeartCart : boolean

}
const Header = ({setShopCa , showShopingCart,setHeartCart , showHeartCart}:Props) => { 
      const products:product[]  = useSelector((state:any) => state.shopCard) ; 
      const amount = products.reduce((total:number , item:product)=>{
        total += item.amount ;
        return total ;
      },0)
  return (
    <nav className='header'>
    <nav className='container'>
        <div className="logo">
        <img src="https://www.nicepng.com/png/full/440-4408335_logo-clip-art-royalty-free-logos-png.png" alt="Logo" />
        </div>
        <ul className="links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/shop">Shop</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contact-us">Contact Us</Link></li>
            <li><Link to="/shopCard">Shop Card </Link></li>
        </ul>   
        <ul className="icons">
            <li><BsSearch style={style} onFocus={()=>{

            }}/>
            </li>
            {/* <li onClick={()=>setHeartCart(false)}><AiOutlineHeart style={style}/>
                <span>0</span>
            </li> */}
            <li><BsPerson style={style}/></li>
            <li onClick={()=>setShopCa(showShopingCart)}><MdOutlineShoppingCart style={style} />
            <span>{amount > 9 ? "9+" : amount}</span>
            </li>
        
        </ul>
    </nav>
    </nav>
  )
}

export default Header