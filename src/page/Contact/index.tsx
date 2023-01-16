import React from 'react'
import './index.scss'
const index = () => {
  return (
    <div className='contact-us'>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25222.739004800234!2d-122.44591785588605!3d37.79373055257011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2stn!4v1673709188558!5m2!1sen!2stn" width="600" height="450"  ></iframe>
            <div>
            <div className="info">
                        <div>
                        <h2>Contact Info</h2>
                        <p>Some Information that you may want to know </p>
                        </div>
                        <div>
                        <h6>Phone Number</h6>
                        <p>+1 342 5860 282</p>

                        <div>
                        <h6>Adress</h6>
                        <p>168 park avenue</p>
                        <p>Green Wich Village , NYC 1001 United state</p>
                        </div>
                        <div>
                        <h6>Email</h6>
                        <p>hello@woostify.com</p>
                        </div>
                        </div>
                        
            </div>
            <div className="inputs">
            <h6>Leave Your Message </h6>
            <p>feel free to contact with us by using the from below </p>
            <div className='twoinputs'>
            <div >
            <p>First Name <span>*</span></p>
            <input type="text" placeholder='Peter'/>
            </div>
            <div>
            <p>Last Name <span>*</span></p>
            <input type="text" placeholder='barker'/>
            </div>
            </div>
            <p>Send Us a Message Here <span>*</span></p>
            <textarea  placeholder='type here...'/>
            <button>Send Us</button>
            </div>
            </div>
            
    </div>
  )
}

export default index