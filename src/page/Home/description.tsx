import React ,{useState}from 'react'
import {FaStar} from 'react-icons/fa'
import { MdEmail } from 'react-icons/md';
interface Colors {
    orange:string , 
    grey:string ,
}
const colors:Colors={
    orange: "#FFBA5A",
    grey: "#a9a9a9"
}
const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center"
    },
    stars: {
      display: "flex",
      flexDirection: "row",
    },
    textarea: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      padding: 10,
      margin: "20px 0",
      minHeight: 100,
      width: 300
    },
    button: {
      border: "1px solid #a9a9a9",
      borderRadius: 5,
      width: 300,
      padding: 10,
    }
  
  };
const Description = () => {
    const stars = Array(5).fill(0)
    const [show , setShow] = useState(false) ;  
    // stars
    const [currentValue, setCurrentValue] = useState(0);
    const [hoverValue, setHoverValue] = useState<undefined|string|number>(undefined);
    // functions 
    const handleClick = (value : number): void  => {
        setCurrentValue(value)
      }
    
      const handleMouseOver  = (newHoverValue :number): void => {
        setHoverValue(newHoverValue)
      };
    
      const handleMouseLeave = ():void => {
        setHoverValue(undefined)
      }
  return (
    <section className='section6'>
        <div className="container">
            <div>
            <div className={show ?  "":"show" } onClick={()=>setShow(false)}>Description</div>
            <div className={show ?  "show":"" }  onClick={()=>setShow(true)}>Reviews{"(0)"}</div>
            </div>
            {show || <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam nam reprehenderit fugit distinctio, nostrum facere autem ipsam velit neque, laudantium accusamus necessitatibus possimus voluptates doloribus perferendis quis quasi tenetur porro laborum aspernatur. Rerum fugiat accusamus asperiores dolore rem? Suscipit perferendis ducimus architecto nemo iusto nihil ipsam est illo aut fugiat neque itaque cupiditate reiciendis debitis doloribus dolores eum nam, esse dolorum pariatur sequi laudantium tempore. Accusamus, expedita veritatis. Totam atque blanditiis eum ea repudiandae unde nobis adipisci error cupiditate doloribus provident sit neque esse quisquam illum doloremque, possimus voluptates exercitationem nostrum nam. Voluptate mollitia nesciunt recusandae perferendis autem itaque at exercitationem obcaecati incidunt deleniti ab nihil, necessitatibus quae distinctio quo rem delectus fuga consequuntur corporis quas hic, reiciendis, blanditiis corrupti adipisci. Similique omnis ex sint sed iste voluptate quidem illum est repellendus dicta repellat fuga excepturi doloremque quisquam at eum, sequi, labore vitae expedita? Perspiciatis itaque molestiae velit, at voluptates ratione tempore, rerum aut tenetur, commodi nemo dolores aliquid. Veritatis dolorum magni quis consequatur debitis cum, ipsum laborum sapiente incidunt aspernatur a itaque necessitatibus pariatur nulla tempora nostrum iure cumque omnis accusantium atque. Porro cumque deserunt temporibus enim nesciunt saepe quibusdam modi, libero id repellat fugit sit, veritatis suscipit ipsam fugiat rem magni praesentium amet dolorem officiis autem? Eaque unde error nostrum voluptatum obcaecati eius saepe dolor dicta numquam quidem esse quae aliquam reprehenderit tempora odio ab, cum non nam a assumenda aut? Ducimus nam soluta doloribus itaque delectus similique rerum, iusto minus hic natus eum aspernatur est deserunt aliquid?</p>}
            {
                show && <div>
                    <p>there is no reviews yet.</p>
                    <p>your rating <span>*</span></p>
                    <div className='stars'>
        {stars.map((_, index) => {
          return (
            <FaStar
              key={index}
              size={20}
              onClick={() => handleClick(index + 1)}
              onMouseOver={() => handleMouseOver(index + 1)}
              onMouseLeave={handleMouseLeave}
              color={(hoverValue || currentValue) > index ? colors.orange : colors.grey}
              style={{
                cursor: "pointer"
              }}
            />
          )
        })}
      </div>
                    <p>Your review <span>*</span></p>
                    <input type="email" placeholder='example@gmail.com'/>
                    <textarea placeholder='Give Us Your Feedback'></textarea>
                    <button> <span>Submit</span>  <span><MdEmail/></span></button>

                </div>
            }
        </div>
    </section>
  )
}

export default Description