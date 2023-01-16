import React from 'react'
import TableCo from './TableCo'
import X from './payment'
import './index.scss'

const index = () => {
  return (
    <div className='account'>
            <TableCo/>
            <div className='content'>
                    <X/>
            </div>
    </div>
  )
}

export default index