import React , {useState} from 'react'
import { FaStar } from 'react-icons/fa'
import { style1, style2 } from './interfaces'
import {AiFillHeart} from 'react-icons/ai'
// redux 
import { useDispatch , useSelector} from 'react-redux'
import { bindActionCreators } from 'redux'
import {actionCreators} from '../../States'
import { MdOutlineShoppingCart } from 'react-icons/md'
import { product } from '../../States/reudcers/shopCardReducer'
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
const Item = ({id,image,price,rating,title}:Props) => {
            const [add , setAdd] = useState(false)
            const products:product[]  = useSelector((state:any) => state.shopCard) ; 

            const dispatch = useDispatch() ; 
            const {addProduct , removeProduct} = bindActionCreators(actionCreators , dispatch)
            const star = parseInt(rating.rate.toFixed(0)) ; 
            const stars1 = Array(star).fill(0) ; 
            const stars2 = Array(5 - star).fill(0) ; 

        const handleClick= ():void => {
          if(!add){
            console.log(!add);
            
            const name = title 
            addProduct({id , name , image , price , amount:1 })
            setAdd(!add) ; 
          }
          else{
            removeProduct(id) ; 
            setAdd(!add) ; 


          }
        }
        const found = ():boolean =>{
          const prPoduct:product|undefined = products.find(product =>product.id === id )
          if(prPoduct) return true
          return false 
        }
  return (
            <div className="item">
            <div className="image">
                        <img src={image} alt="image" />
                        <div>-4%</div>
                        <button style={{background:"white"}} onClick={handleClick}>
                          {
                          found() ? <AiFillHeart style={{color:"red", }}/> : <MdOutlineShoppingCart style={{color:"red", }}/>
                          }
                        </button>
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