import React from 'react'
import { AiOutlineCloudDownload, AiOutlineDashboard, AiOutlineHeart } from 'react-icons/ai'
import { BsBorderStyle, BsPerson } from 'react-icons/bs'
import { FaRegAddressCard } from 'react-icons/fa'
import { MdPayments } from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const style = {
  fontSize:"25px" , 
}
const TableCo = () => {
  const navigate = useNavigate() ; 
  return (
            <div className='table'>
                        
                        <div className='one'><div><AiOutlineDashboard style={style}/></div> <div>Dashboard</div></div> 
                        <div className='one' onClick={()=>navigate("/account/order")}><div><BsBorderStyle style={style}/> </div><div>Orders</div> </div> 
                        <div className='one' onClick={()=>navigate("/account/downloads")}><div><AiOutlineCloudDownload style={style}/></div> <div>Downloads</div></div>
                        <div className='one'><div><FaRegAddressCard style={style}/></div> <div>Addresses</div></div>
                        <div className='one' onClick={()=>navigate("/account/payment")}><div><MdPayments style={style}/></div> <div>Payment methodes </div></div>
                        <div className='one'><div><BsPerson style={style}/></div> <div>Account Details</div></div>
                        <div className='one'><div><AiOutlineHeart style={style}/></div> <div>Wishlist</div></div>
            </div>
  )
}

export default TableCo