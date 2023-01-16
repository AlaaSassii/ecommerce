import React , {useState} from 'react'
import {FaShoppingCart} from 'react-icons/fa' ; 
import './index.scss' ; 
import {BsPlus} from 'react-icons/bs'
import {TbMinus} from 'react-icons/tb'
import {AiOutlineMinus} from 'react-icons/ai'
import {HiPlus} from 'react-icons/hi'
const Index = () => {
            const [state , setState] = useState([]) ; 
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
                        <tr>
                        <td><img src="https://cdn.shopify.com/s/files/1/0594/1506/8881/products/6716_1_San-Marino-White-Embellished-Long-Sleeve-Maxi-Dress-With-Split2.jpg?v=1671114671&width=680" alt="" /></td>
                        <td>$50.00</td>
                        <td>  <div><button><TbMinus style={{fontSize:"20px",color:"#d00000" }}/></button> <span>1</span> <button><HiPlus style={{fontSize:"20px",color:"#d00000"}}/></button> </div></td>
                        <td>Subtotal</td>
                        </tr>
                        <tr>
                        <td><img src="https://cdn.shopify.com/s/files/1/0594/1506/8881/products/6716_1_San-Marino-White-Embellished-Long-Sleeve-Maxi-Dress-With-Split2.jpg?v=1671114671&width=680" alt="" /></td>
                        <td>Price</td>
                        <td>Quantity</td>
                        <td>Subtotal</td>
                        </tr>
                        </table>
                        <div className="cart-totals">
                                    <h5>Cart Totals</h5>
                                    <div className='underline'><div>Subtotal</div> <div><span className='noy'>$50.00</span></div></div>
                                    <div className='underline'><div>Coupon:10off</div> <div>$50.00 <span>{"[ Removed]"}</span></div></div>
                                    <h6>shipping</h6>
                                    <p>Flat rate: <span>$2.00</span></p>
                                    <p>shipping to Mumbai 400001,Delhi</p>
                                    <div className='underline'>change address</div>
                                    <div className='underline'><div>GST 10%</div> <div>$4.50 <span>{"[ Removed]"}</span></div></div>
                                    <div className='underline'><div>Total</div> <div>$51.50 <span>{"[ Removed]"}</span></div></div>

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