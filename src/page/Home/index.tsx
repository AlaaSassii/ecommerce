import React from 'react'
import './index.scss'
import {BsFillStarFill} from 'react-icons/bs'
import { products } from './interfaces' ; 
import {AiOutlineHeart} from 'react-icons/ai';
import Description from './description';
const link1 = products[0].link1 ;  
const link2 = products[0].link2; 
interface images {
  image1: string , 
  image2:string , 
  image3: string , 
  star: string 
}
const images:images = {
  image1:"data:image/png;base64,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" , 
  image2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsCqGoEHmWdnN5v6_7375_ewTLKLX3RoLagNu1nN-aZNquwZuTGVv16d8u4V7_hL5pS3A&usqp=CAU" , 
  image3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTA1gCtqVeWO4SSQ1MlHEpZk1Ons9sC8DcJZkGfC9g&s" , 
  star:"https://st2.depositphotos.com/8511412/11363/v/450/depositphotos_113638426-stock-illustration-star-star-icon-star-icon.jpg"
}
const index = () => {
  return (
    <>
    <section className="section1">
        <div >
        <h6>Top Sale ON THIS WEEK</h6>
        <h1>Explote amazing fashionable blazers this shadi season</h1>
        <div className="buttons">
            <button>shop now</button>
            <button>learn more</button>
        </div>
        </div>
    </section>
    <section className='section0'>
      <div className='container'>
        <div><div >
        <h6>T-shirts</h6>
        <p>View all</p>
      </div></div>
      
      <div><div >
        <h6>T-shirts</h6>
        <p>View all</p>
      </div></div>
      <div><div >
        <h6>T-shirts</h6>
        <p>View all</p>
      </div></div>
      <div><div >
        <h6>T-shirts</h6>
        <p>View all</p>
      </div></div>
      <div><div >
        <h6>T-shirts</h6>
        <p>View all</p>
      </div></div>
      <div><div >
        <h6>T-shirts</h6>
        <p>View all</p>
      </div></div>
      </div>
    </section>
   <section className="section2">
    <div>
      <img src={images.image1} alt="image" />
      <div>
        <h5>free shiping </h5>
        <p>n all orders over $200 </p>
      </div>
    </div>
    <div>
    <img src={images.image2} alt="image" />
      <div>
        <h5>dedicated support</h5>
        <p>quick response 24/7</p>
      </div>
    </div>
    <div>
    <img src={images.image3} alt="image" />
      <div>
        <h5>money back guarantee</h5>
        <p>worry-free shopping </p>
      </div>
    </div>
   </section>
   <section className="section3">
    <div className="container">
    <div>
      <h2>Big Text</h2>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum, quidem ea in a voluptates corrupti sit tempora assumenda commodi perspiciatis. Consectetur voluptates totam possimus quisquam repellat distinctio harum debitis quas.</p>
      <button><div> {"Give Start  "}</div>  <div><BsFillStarFill/></div></button>
    </div>
    <div>
      <h2>5.2</h2>
      <div>
      <span><img src={images.star} alt="image" /></span>
      <span><img src={images.star} alt="image" /></span>
      <span><img src={images.star} alt="image" /></span>
      <span><img src={images.star} alt="image" /></span>
      <span><img src={images.star} alt="image" /></span>
      </div>
    </div>
    </div>
   </section>
   <section className="section4">
    <div className="container">
      <div>
      <h6>
        TOP SALE ON THIS WEEK 
      </h6>
      <h2>Feature Products</h2>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Explicabo minima ipsa debitis necessitatibus odit id culpa accusamus excepturi aspernatur perferendis!</p>
      </div>
      <div className="images">
          <div className='image'>
          <img  className='image1' src="https://img.shein.com/images/shein.com/201703/c2/14894667633545845716_thumbnail_600x799.webp"/>
          <img className='image2' src="https://img.shein.com/images/shein.com/201703/f7/14894667641749550532_thumbnail_600x799.webp" />
          <button><AiOutlineHeart/></button>
          </div> 
          <div className='image'>
          <img  className='image1' src="https://img.ltwebstatic.com/images3_pi/2021/05/31/1622434682821a322ef120f24519a50f9eb08b6dec_thumbnail_600x.webp"/>
          <img className='image2' src="https://img.ltwebstatic.com/images3_pi/2021/05/31/1622434684c35c06ed460e1df1a3c8255d65579afd_thumbnail_600x.webp" />
          <button><AiOutlineHeart/></button>
          </div> 
          <div className='image'>
          <img className='image1' src="https://img.ltwebstatic.com/images3_pi/2022/02/25/1645783289828f36f5f2245c36ff5323b02342ac30_thumbnail_600x.webp" />
          <img  className='image2' src="https://img.ltwebstatic.com/images3_pi/2022/02/25/1645783287e7043f4bda29df441514f019c024c511_thumbnail_600x.webp"/>
          <button><AiOutlineHeart/></button>
          </div> 
          <div className='image'>
          <img  className='image1' src="https://img.ltwebstatic.com/images3_pi/2022/01/18/1642484857fb61abefd87507c7f9bb537d0d54e07f_thumbnail_600x.webp"/>
          <img className='image2' src="https://img.ltwebstatic.com/images3_pi/2022/01/18/16424848596cd91125566c94c3914e6b94254fdc42_thumbnail_600x.webp" />
          <button><AiOutlineHeart/></button>
          </div> 
          <div className='image'>
          <img  className='image1' src="https://img.ltwebstatic.com/images3_pi/2022/08/09/16600384553edc27f3d0e961f9eefcc015c66c222a_thumbnail_600x.webp"/>
          <img className='image2' src="https://img.ltwebstatic.com/images3_pi/2022/08/09/16600384582d21bb3cac0b9cfbf6bd5e31a1e1b301_thumbnail_600x.webp" />
          <button><AiOutlineHeart/></button>
          </div> 
          <div className='image'>
          <img  className='image1' src="https://img.ltwebstatic.com/images3_pi/2021/12/14/1639460640e7c4db610e9ef4e5bff131b915212994_thumbnail_600x.webp"/>
          <img className='image2' src="https://img.ltwebstatic.com/images3_pi/2021/12/14/16394606425579d24c086c099db1fb0754339c2cea_thumbnail_600x.webp" />
          <button><AiOutlineHeart/></button>
          </div> 
          <div className='image'>
          <img  className='image1' src="https://img.ltwebstatic.com/images3_pi/2022/04/13/16498330386065c1ee965400595f00986dba677058_thumbnail_600x.webp"/>
          <img className='image2' src="https://img.ltwebstatic.com/images3_pi/2022/04/13/1649833042e20773aa4e21538ecef4ce9a2c2d31ab_thumbnail_600x.webp" />
          <button><AiOutlineHeart/></button>
          </div> 
          <div className='image'>
          <img  className='image1' src="https://img.ltwebstatic.com/images3_pi/2021/02/22/1613967913a764618d6783eb9b155469a2d3ecb45a_thumbnail_600x.webp"/>
          <img className='image2' src="https://img.ltwebstatic.com/images3_pi/2021/02/22/161396791053a8507d3f5b4a1580680cc6ab31402f_thumbnail_600x.webp" />
          <button><AiOutlineHeart/></button>
          </div> 
          <div className='image'>
          <img  className='image1' src="https://img.ltwebstatic.com/images3_pi/2021/09/14/16316161085d24ad9f544364a0fc6e714f54b0ed86_thumbnail_600x.webp"/>
          <img className='image2' src="https://img.ltwebstatic.com/images3_pi/2021/09/14/16316161102d2d077a996362e15d52bb788d1b6479_thumbnail_600x.webp" />
          <button><AiOutlineHeart/></button>
          </div> 
          <div className='image'>
          <img  className='image1' src="https://img.ltwebstatic.com/images3_pi/2022/08/29/16617552870db52d2a7379747ea8499e644e77dc42_thumbnail_600x.webp"/>
          <img className='image2' src="https://img.ltwebstatic.com/images3_pi/2022/08/29/16617552829b40a53d51bc4686bf646eef6bd93939_thumbnail_600x.webp" />
          <button><AiOutlineHeart/></button>
          </div> 
         
      </div>
    </div>
   </section>
   <section className='section5'>
      <div className="container">
        <div>
          <div>
          <img src="https://i.pinimg.com/originals/fe/97/9e/fe979e521858551b838ab848a78401d0.jpg" alt="" />
          </div>
          <div>
            <h5>Sandy De Mari</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quisquam molestiae iusto modi, nulla accusamus sunt harum</p>
          </div>
        </div>
        <div>
          <div><img src="https://st3.depositphotos.com/5061925/13001/i/600/depositphotos_130016008-stock-photo-young-man-in-studio.jpg" alt="" /></div>
        
          <div>
            <h5>Jhon boop</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quisquam molestiae iusto modi, nulla accusamus sunt harum</p>
          </div>
        </div>
        <div>
          <div><img src="https://i.pinimg.com/236x/90/b7/5a/90b75a1fe23d9a55ba7cb0a338e5b922--pretty-girls-beautiful-people.jpg" alt="" /></div>
          <div>
            <h5>Sarah West</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quisquam molestiae iusto modi, nulla accusamus sunt harum</p>
          </div>
        </div>
        <div>
        <div>
          <img src="https://cdn.webshopapp.com/shops/50297/files/404926835/image.jpg" alt="" /></div>

          <div>
            <h5>Peter barker</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis quisquam molestiae iusto modi, nulla accusamus sunt harum</p>
          </div>
        </div>

      </div>
  </section>
  <Description/>
    </>
  )
}

export default index