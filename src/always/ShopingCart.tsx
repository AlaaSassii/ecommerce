import React , {useState} from 'react'
import {AiFillEye, AiOutlineClose} from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs';
import './index.scss'
const ShopingCart = () => {
            const [close , setClose] = useState<boolean>(true)  ;
            const remove = ():void => {
                        setClose(true) ; 
            }
  return (
    <div className={close ? "shoping-cart hide-shoping-cart" :"shoping-cart"}>
            <div className="Header">
                        <div>
                        Shoping Cart <span>0</span>
                        </div>
                        <button  onClick={remove}><AiOutlineClose style={{fontSize:"25px",fontWeight:800}}/></button>
            </div>
            <div className="Center">
                        <h3>no items yet</h3>
            </div>
            <div className="Footer">
                        <div>
                                    <h6>SUBTOTAL:</h6>
                                    <p>$0</p>
                        </div>

                        <button>
                             view cart <span><BsFillCartFill style={{
                                    padding:0 , margin:0 
                            }}/></span>
                        </button>
                        <button>
                            <span >Checkout <AiFillEye style={{
                                    padding:0 , margin:0 
                            }}/></span>
                        </button>
            </div>
    </div>
  )
}

export default ShopingCart