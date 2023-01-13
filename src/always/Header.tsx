import React , {useState}from 'react'
import { BsSearch } from 'react-icons/bs' ; 
import {MdOutlineShoppingCart} from 'react-icons/md' ; 
import {AiOutlineHeart} from 'react-icons/ai' ; 
import {BsPerson} from 'react-icons/bs'
import './index.scss'
const style = {
    fontWeight:"500" , 
    fontSize:"20px",
    color:"black"
}
const Header = () => { 
  return (
    <nav className='header'>
    <nav className='container'>
        <div className="logo">
        <img src="https://www.nicepng.com/png/full/440-4408335_logo-clip-art-royalty-free-logos-png.png" alt="Logo" />
        </div>
        <ul className="links">
            <li>Home</li>
            <li>Shop</li>
            <li>Blog</li>
            <li>Track Order</li>
            <li>Contact Us</li>
        </ul>
        <ul className="icons">
            <li><BsSearch style={style} onFocus={()=>{

            }}/></li>
            <li><AiOutlineHeart style={style}/>
                <span>0</span>
            </li>
            <li><BsPerson style={style}/></li>
            <li><MdOutlineShoppingCart style={style}/>
            <span>0</span>
            </li>
        
        </ul>
    </nav>
    </nav>
  )
}

export default Header