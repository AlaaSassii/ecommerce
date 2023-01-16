import React from 'react'
import TableCo from '../TableCo'

const index = () => {
  return (
    <div className='account'>
            <TableCo/>
    <div className='content'>
    <table className=''>
            <tr>
    <th>Order</th>
    <th>Date</th>
    <th>Status</th>
    <th>Total</th>
    <th>Actions</th>
  </tr>
  <tr>
    <td>{"#1554"}</td>
    <td>january 29.2022</td>
    <td>Processing</td>
    <td>$101.00 for 2 items</td>
    <td><button>View</button></td>
  </tr>
    </table>
    </div>
    </div>
  )
}

export default index