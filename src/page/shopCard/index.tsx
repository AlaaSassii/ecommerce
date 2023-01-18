import  {useState} from 'react'
import {FaShoppingCart} from 'react-icons/fa' ; 
import './index.scss' ; 
import {TbMinus} from 'react-icons/tb'
import {HiPlus} from 'react-icons/hi'
import { useDispatch , useSelector } from 'react-redux';
import { bindActionCreators } from 'redux' ; 
import { actionCreators } from '../../States';
import { product } from '../../States/reudcers/shopCardReducer';

const Index = () => {
      const products:product[] = useSelector((state:any) => state.shopCard) ; 
      const dispatch = useDispatch() ; 
      const {addAmount , removeAmount , removeProduct} = bindActionCreators(actionCreators , dispatch);
      const totalPrice = products.reduce((total:number , item:product) =>{
        total += item.price * item.amount 
        return total 
      },0 )

  return (
    <div className='ShoppingCart'>
            <div className='header'>
            <FaShoppingCart style={{marginRight:"10px" }}/> {"  "} Shiping costs updated.  
            </div>
            <div className="info">
            {
                        true?
                        <>
                        <table>
                        <tr>
                        <th>Product</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Subtotal</th>
                        </tr>
                      
                        { 
                          products.length > 0 ? 
                          products.map(product =>
                            <tr>
                            <td><img src={product.image} alt=""/></td>
                            <td>{product.price}</td>
                            <td>
                              <div className="buttons">
                                <div>
                                <button onClick={()=>addAmount(product.id)}><HiPlus style={{color:"white"}}/></button>{product.amount}
                                <button onClick={()=>removeAmount(product.id)}><TbMinus style={{color:"white"}}/></button></div> </div></td>
                            <td><button onClick={()=>removeProduct(product.id)}>unpurchase</button>
                            </td>
                        </tr>

                          ) : 
                         <></>
                          }
                        </table>
                        <div className="cart-totals">
                                    <h5>Cart Totals</h5>
                                    <div className='underline'><div>Subtotal</div> <div><span className='noy'>$50.00</span></div></div>
                                    <div className='underline'><div>Coupon:10off</div> <div>$45.00 <span>{"[ Removed]"}</span></div></div>
                                    <h6>shipping</h6>
                                    <p>Flat rate: <span>$2.00</span></p>
                                    <p>shipping to Mumbai 400001,Delhi</p>
                                    <div className='underline'>change address</div>
                                    <div className='underline'><div>GST 10%</div> <div>$4.50 <span>{"[ Removed]"}</span></div></div>
                                    <div className='underline'><div>Total</div> <div>${totalPrice.toFixed(2)} <span>{"[ Removed]"}</span></div></div>

                        </div>      
                        </>
                        
                        : 
                        <></>

            }
            </div>
    </div>
  )
}

export default Index