import React , {useState , useEffect} from 'react'
import {AiFillEye, AiOutlineClose} from 'react-icons/ai'
import { BsFillCartFill } from 'react-icons/bs';
import './index.scss'
import { useSelector } from 'react-redux';
import { bindActionCreators } from 'redux'
import { useDispatch } from 'react-redux'
import { product } from '../States/reudcers/shopCardReducer';
import { actionCreators } from '../States';
interface Props {
  setShopCa : (b:boolean) => void 
  showShopingCart : boolean
}

const ShopingCart = ({setShopCa , showShopingCart}:Props) => {
      const products:product[]  = useSelector((state:any) => state.shopCard) ; 
  const dispatch = useDispatch() ; 
  const {addAmount , removeAmount} = bindActionCreators(actionCreators , dispatch) ; 
  const totalPrice = products.reduce((total:number , item:product) =>{
    total += item.price * item.amount 
    return total 
  },0 ) ; 
  return (
    <div className={! showShopingCart ? "shoping-cart hide-shoping-cart" :"shoping-cart"}>
            <div className="Header">
                        <div>
                        Shoping Cart <span>0</span>
                        </div>
                        <button  onClick={()=>setShopCa(showShopingCart)}><AiOutlineClose style={{fontSize:"25px",fontWeight:800}}/></button>
            </div>
            <div className="Center">
                      {
                        products.length ? 
                        <>
                          {
                            products.map(product => <div className='image'>
                              <img src={product.image} alt="image" />
                              <div>
                                <p>{product.name.substring(0,20)}..</p>
                                <p>${product.price}</p>
                                <div className='buttons'>
                              <button onClick={()=>addAmount(product.id)}>+</button>
                              <span>{product.amount}</span>
                              <button onClick={()=>removeAmount(product.id)}>-</button>
                              </div>
                              </div>
                              
                            </div>)
                          }
                        </> :
                        <h1>no items yet</h1>
                      }
            </div>
            <div className="Footer">
                        <div>
                                    <h6>SUBTOTAL:</h6>
                                  {products.length ?   <p>${totalPrice.toFixed(2)}</p> :
                                  <p>$0</p>}
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