import React, { useState } from 'react'
import { AiOutlineCreditCard } from 'react-icons/ai';
import { BsFillCloudDownloadFill } from 'react-icons/bs';
import TableCo from '../TableCo';

const Index = () => {
  const [clicked ,setClick] = useState<boolean>(false) ;

  return (
    <div className='account'>
            <TableCo/>

      <div className='content'>
    <div className='payment'>
      {!clicked ? 
      <>
      <div className='downloads'>
        <span><BsFillCloudDownloadFill/></span>
        <span>No Saved Methode Found </span>
      </div>
      <button onClick={()=>setClick(true)}>Add payment method</button> 
      </>
  :
      <div className='payment'>
        

        <div>
          <h6>pay with your credit card via Stripe. </h6>
            <div>
              <p>Card Number <span>*</span></p>
              <div className='input'>
              <input type="text" placeholder='1234 1234 1234' />
              <div><AiOutlineCreditCard/></div>
              </div>
              <p>Card Number <span>*</span></p>
              <input type="text" placeholder='MM / YY' />
              <p>Card Code {"(CVC)"} <span>*</span></p>
              <input type="text" placeholder='CVC' />
            </div>
        </div>
      </div>
  }
    </div>
    </div>
    </div>
  )
}

export default Index