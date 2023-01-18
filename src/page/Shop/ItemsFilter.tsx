import React ,{FC, useRef, useState , InputHTMLAttributes} from 'react'
import { FaStar } from 'react-icons/fa' ; 
import {style1 , style2} from './interfaces'
interface Props {
  inputRangeRef : any , 
  price: number | string , 
  rangeValue : number , 
  changeRange : () => void , 
  show:boolean
}
// e:InputHTMLAttributes<HTMLInputElement>
const ItemsFilter = ({inputRangeRef , price , rangeValue ,changeRange , show}:Props) => {
           
            // function 
      console.log(show);
        

  return (
    <div className={show ? 'ItemsFilter showItemsFilter' : 'ItemsFilter'}>
            <div className="input">
                        <input type="text" placeholder='search..' />
                        <button>search</button>
            </div>
            <div className="filter-price">
                        <input style={{ }} value={rangeValue} type="range" ref={inputRangeRef} onChange={e => changeRange()} />
                        <div>
                        <button>filter</button>
                        <p>Price: $0 -- ${price} </p>
                        </div>
            </div>
            <div className="filter-color">
                        <h5>Filter By</h5>
                        <div><span>Black</span> <span>{"(3)"}</span></div>
                        <div><span>Green</span> <span>{"(1)"}</span></div>
                        <div><span>Orange</span> <span>{"(2)"}</span></div>
                        <div><span>Red</span> <span>{"(2)"}</span></div>
                        <div><span>White</span> <span>{"(3)"}</span></div>
            </div>
            <div className='top-products'>
                        <h4>Top Products</h4>
                        <div>
                                    <img src="https://res.cloudinary.com/leonisa/image/upload/q_auto,f_auto,w_540,dpr_1.5/assets/1/14/DimLarge/091001_506_1200X1500_1.jpg?pgw=1&pgwact=1" alt="" />
                                    <div>
                                                <div className="name">T-shirt</div>
                                                <div className="stars">
                                                <FaStar style={style1} />
                                                <FaStar style={style1}/>
                                                <FaStar style={style1}/>
                                                <FaStar style={style1}/>
                                                <FaStar style={style2}/>
                                                </div>
                                                <div className="prices"><span className='oldPrice'></span><span className='curr-price'>$50.00</span></div>
                                    </div>
                        </div>
                        <div>
                                    <img src="https://res.cloudinary.com/leonisa/image/upload/q_auto,f_auto,w_540,dpr_1.5/assets/1/14/DimLarge/091001_506_1200X1500_1.jpg?pgw=1&pgwact=1" alt="" />
                                    <div>
                                                <div className="name">T-shirt</div>
                                                <div className="stars">
                                                <FaStar style={style1} />
                                                <FaStar style={style1}/>
                                                <FaStar style={style1}/>
                                                <FaStar style={style1}/>
                                                <FaStar style={style2}/>
                                                </div>
                                                <div className="prices"><span className='oldPrice'></span><span className='curr-price'>$50.00</span></div>
                                    </div>
                        </div>
                        <div>
                                    <img src="https://res.cloudinary.com/leonisa/image/upload/q_auto,f_auto,w_540,dpr_1.5/assets/1/14/DimLarge/091001_506_1200X1500_1.jpg?pgw=1&pgwact=1" alt="" />
                                    <div>
                                                <div className="name">T-shirt</div>
                                                <div className="stars">
                                                <FaStar style={style1} />
                                                <FaStar style={style1}/>
                                                <FaStar style={style1}/>
                                                <FaStar style={style1}/>
                                                <FaStar style={style2}/>
                                                </div>
                                                <div className="prices"><span className='oldPrice'></span><span className='curr-price'>$50.00</span></div>
                                    </div>
                        </div>
            </div>
            <div className='products-categories'>
                        <h3>Products categories</h3>
                        <ul>
                        <li>jackets</li>
                        <li>Man</li>
                        <li>T-shirts</li>
                        <li>Uncategorized</li>
                        </ul>
            </div>
            <div className='categories-btn'>
                        <button>baby</button>
                        <button>beauty</button>
                        <button>fashion</button>
                        <button>feeling</button>
                        <button>man</button>
                        <button>spring</button>
                        <button>street style</button>
                        <button>summer</button>
                        <button>woosify</button>
            </div>
            <div className='active-filters'>
                        <div><span>x</span> Min $10.00</div>
                        <div><span>x</span> Max $10.00</div>
            </div>
            
    </div>
  )
}

export default ItemsFilter

// refrence 
// https://www.programcreek.com/typescript/?api=react.InputHTMLAttributes