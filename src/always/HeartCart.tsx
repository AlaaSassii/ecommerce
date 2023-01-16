import React , {useState , useEffect} from 'react'
import {AiFillEye, AiOutlineClose} from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs';
import './index.scss'

interface Props {
  setHeartCart  : (b:boolean) => void 
  showHeartCart : boolean
}

const HeartCart = ({setHeartCart , showHeartCart}:Props) => {
        
  console.log("showHeartCart",showHeartCart);
  
  return (
    <div className={ showHeartCart ? "shoping-cart hide-shoping-cart" :"shoping-cart"}>
            <div className="Header">
                        <div>
                        Shoping Cart <span>0</span>
                        </div>
                        <button  onClick={()=>setHeartCart(showHeartCart)}><AiOutlineClose style={{fontSize:"25px",fontWeight:800}}/></button>
            </div>
            <div className="Center">
                        <h3>no items yet</h3>
            </div>
            <div className="Footer">
                       
                        <button>
                            <span >Checkout <AiFillEye style={{
                                    padding:0 , margin:0 
                            }}/></span>
                        </button>
            </div>
    </div>
  )
}

export default HeartCart