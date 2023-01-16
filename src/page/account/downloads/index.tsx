import React from 'react'
import { BsFillCloudDownloadFill } from 'react-icons/bs'
import TableCo from '../TableCo'

const index = () => {
  return (
    <div className='account'>
        <TableCo/>
    <div className='content'>
    <div className='downloads'>
        <span><BsFillCloudDownloadFill/></span>
        <span>Browse Producrs</span>
        <span>No downloads available yet</span>
    </div>
    </div>
    </div>
  )
}

export default index