import React from 'react'
import { FaStar } from 'react-icons/fa'
import { style1, style2 } from './interfaces'
import {AiFillHeart} from 'react-icons/ai'
type rating ={
            count: number ,
            rate:  number 
}
type Props = {
            category: string , 
            description: string , 
            id: number , 
            image: string , 
            price: number,
            rating:rating , 
            title: string , 
}
const Item = ({category,description,id,image,price,rating,title}:Props) => {
            const star = parseInt(rating.rate.toFixed(0)) ; 
            const stars1 = Array(star).fill(0) ; 
            const stars2 = Array(5 - star).fill(0) ; 


  return (
            <div className="item">
            <div className="image">
                        <img src={image} alt="image" />
                        <div>-4%</div>
                        <button style={{background:"white"}}><AiFillHeart style={{color:"red", }}/></button>
            </div>
            <div className='info'>
<div className="name">{title}</div>
<div className="stars">
{/* awswd */}
<div className="stars">
{stars1.map(star => <FaStar style={style1}/>)}
{stars2.map(star => <FaStar style={style2}/>)}
</div>
</div>
<div>
  <span>
  ${price}
  </span>
</div>
</div>
</div>
  )
}

export default Item