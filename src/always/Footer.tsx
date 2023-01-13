import React from 'react'
import './index.scss'
const Footer = () => {
  return (
    <footer>
        <div className="container">
        <div className="first">
            <div>
                <div className="logo">
                    <img src="https://www.nicepng.com/png/full/440-4408335_logo-clip-art-royalty-free-logos-png.png" alt="Logo" />
                </div>
                    <p>You can easilly edit this paragraph to talk about your brand as well as your products to your potential customers.</p>
            </div>
            <div className="second">
            <div>
                    <h6>Shop</h6>
                    <ul>
                        <li>My account</li>
                        <li>Shop</li>
                        <li>Orders</li>
                        <li>Downloads</li>
                    </ul>
                </div>
            <div>
            <h6>Support</h6>
                    <ul>
                        <li>Contact Us</li>
                        <li>Track Order</li>
                        <li>Wishlist</li>
                    </ul>
            </div>
            <div>
                <h6>Newsletter</h6>
                <p>Get 20% off your first order by joining to our newsletter</p>
                <div className='input'>
                    <input type="email" placeholder='your@email.com' />
                    <button>Subscribe</button>
                </div>
            </div>
            </div>
        </div>
        <div className='end'>
            <p>Copyright &copy;2023 My Blog| Powered by Us </p>
        </div>
        </div>
    </footer>
  )
}

export default Footer