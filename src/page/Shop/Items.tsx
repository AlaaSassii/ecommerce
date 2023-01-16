import React, { FC } from 'react'
import { FaStar } from 'react-icons/fa'
import {style1 , style2} from './interfaces'

const Items:FC = () => {
  return (
    <div className='Items'>
            <div className='header'>
                        <p>Showing all 8 results</p>
                        <select name="" id="">
                                    <option value="volvo">Volvo</option>
                                    <option value="saab">Saab</option>
                                    <option value="mercedes">Mercedes</option>
                                    <option value="audi">Audi</option>
                        </select>
            </div>

            
            <div className="items">
                <div className="item">
                <div className='image'>
                  <img src="https://res.cloudinary.com/leonisa/image/upload/q_auto,f_auto,w_540,dpr_1.5/assets/1/14/DimLarge/091001_506_1200X1500_1.jpg?pgw=1&pgwact=1" alt="" />
                  <div>-4%</div>
                  <button>heart</button>
                  </div>  
                  <div className='info'>
                      <div className="name">black fashion jacket</div>
                      <div className="stars">
                        <FaStar style={style1} />
                        <FaStar style={style1}/>
                        <FaStar style={style1}/>
                        <FaStar style={style1}/>
                        <FaStar style={style2}/>
                      </div>
                        <div>
                          <span className="old-price">
                          $52.00
                          </span>
                          <span>
                          $50.00
                          </span>
                        </div>
                  </div>
                  </div>
                  <div className="item">
                <div className='image'>
                  <img src="https://res.cloudinary.com/leonisa/image/upload/q_auto,f_auto,w_540,dpr_1.5/assets/1/14/DimLarge/091001_506_1200X1500_1.jpg?pgw=1&pgwact=1" alt="" />
                  <div>-4%</div>
                  <button>heart</button>
                  </div>  
                  <div className='info'>
                      <div className="name">black fashion jacket</div>
                      <div className="stars">
                        <FaStar style={style1} />
                        <FaStar style={style1}/>
                        <FaStar style={style1}/>
                        <FaStar style={style1}/>
                        <FaStar style={style2}/>
                      </div>
                        <div>
                          <span className="old-price">
                          $52.00
                          </span>
                          <span>
                          $50.00
                          </span>
                        </div>
                  </div>
                  </div>
                  <div className="item">
                <div className='image'>
                  <img src="https://res.cloudinary.com/leonisa/image/upload/q_auto,f_auto,w_540,dpr_1.5/assets/1/14/DimLarge/091001_506_1200X1500_1.jpg?pgw=1&pgwact=1" alt="" />
                  <div>-4%</div>
                  <button>heart</button>
                  </div>  
                  <div className='info'>
                      <div className="name">black fashion jacket</div>
                      <div className="stars">
                        <FaStar style={style1} />
                        <FaStar style={style1}/>
                        <FaStar style={style1}/>
                        <FaStar style={style1}/>
                        <FaStar style={style2}/>
                      </div>
                        <div>
                          <span className="old-price">
                          $52.00
                          </span>
                          <span>
                          $50.00
                          </span>
                        </div>
                  </div>
                  </div>
                  <div className="item">
                <div className='image'>
                  <img src="https://res.cloudinary.com/leonisa/image/upload/q_auto,f_auto,w_540,dpr_1.5/assets/1/14/DimLarge/091001_506_1200X1500_1.jpg?pgw=1&pgwact=1" alt="" />
                  <div>-4%</div>
                  <button>heart</button>
                  </div>  
                  <div className='info'>
                      <div className="name">black fashion jacket</div>
                      <div className="stars">
                        <FaStar style={style1} />
                        <FaStar style={style1}/>
                        <FaStar style={style1}/>
                        <FaStar style={style1}/>
                        <FaStar style={style2}/>
                      </div>
                        <div>
                          <span className="old-price">
                          $52.00
                          </span>
                          <span>
                          $50.00
                          </span>
                        </div>
                  </div>
                  </div>
                  <div className="item">
                <div className='image'>
                  <img src="https://res.cloudinary.com/leonisa/image/upload/q_auto,f_auto,w_540,dpr_1.5/assets/1/14/DimLarge/091001_506_1200X1500_1.jpg?pgw=1&pgwact=1" alt="" />
                  <div>-4%</div>
                  <button>heart</button>
                  </div>  
                  <div className='info'>
                      <div className="name">black fashion jacket</div>
                      <div className="stars">
                        <FaStar style={style1} />
                        <FaStar style={style1}/>
                        <FaStar style={style1}/>
                        <FaStar style={style1}/>
                        <FaStar style={style2}/>
                      </div>
                        <div>
                          <span className="old-price">
                          $52.00
                          </span>
                          <span>
                          $50.00
                          </span>
                        </div>
                  </div>
                  </div>
                  <div className="item">
                <div className='image'>
                  <img src="https://res.cloudinary.com/leonisa/image/upload/q_auto,f_auto,w_540,dpr_1.5/assets/1/14/DimLarge/091001_506_1200X1500_1.jpg?pgw=1&pgwact=1" alt="" />
                  <div>-4%</div>
                  <button>heart</button>
                  </div>  
                  <div className='info'>
                      <div className="name">black fashion jacket</div>
                      <div className="stars">
                        <FaStar style={style1} />
                        <FaStar style={style1}/>
                        <FaStar style={style1}/>
                        <FaStar style={style1}/>
                        <FaStar style={style2}/>
                      </div>
                        <div>
                          <span className="old-price">
                          $52.00
                          </span>
                          <span>
                          $50.00
                          </span>
                        </div>
                  </div>
                  </div>
            </div>
            
    </div>
  )
}

export default Items