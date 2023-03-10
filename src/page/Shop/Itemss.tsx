import { useEffect, useState } from "react"
import React  from 'react'
import axios from "axios"
import { FaStar } from "react-icons/fa"
import {style1 , style2} from './interfaces'
import './index.scss' ; 
import Item from "./Item"
import Loading from "../../asset/Loading"

interface Props {
  products : products[] 
  loading : boolean
}
type rating ={
            count: number ,
            rate:  number 
}
type products = {
            category: string , 
            description: string , 
            id: number , 
            image: string , 
            price: number,
            rating:rating , 
            title: string , 
}
const Itemss = ({ products , loading}:Props) => {
           
            if(loading) return <Loading/>
  return (
    <div className="Items">
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
           
            {
            products.map(product =>
                        <Item {...product}/>
            )
            }
             </div>
    </div>
  )
}

export default Itemss
