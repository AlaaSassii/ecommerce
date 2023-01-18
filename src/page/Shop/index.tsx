import axios from 'axios';
import React ,{FC , useEffect, useRef , useState}from 'react' ; 
import './index.scss' ;
import ItemsFilter from './ItemsFilter';
import Itemss from './Itemss';
// e:InputHTMLAttributes<HTMLInputElement>
type rating ={
  count: number ,
  rate:  number 
}
type Product = {
  category: string , 
  description: string , 
  id: number , 
  image: string , 
  price: number,
  rating:rating , 
  title: string , 
}
const Index:FC = () => {
  // products 
  const [products , setProducts] = useState<Product[]>([]) ; 
  const [products2 , setProducts2] = useState<Product[]>([]) ; 
  const [loading , setLoading] = useState<boolean>(true) ; 
  console.log("products2" ,products2 )
  useEffect(()=>{
    axios("https://fakestoreapi.com/products?limit=20")
                .then(resp =>{
                            setProducts(resp.data) ; 
                            setProducts2(resp.data)
                            setLoading(false) ; 
                })
                .catch(err => console.log(err)) ; 
},[])


  // range
            const inputRangeRef = useRef<any>(null) ; 
            const maxPrice :number = 700 
            const [price ,setPrince] = useState<number | string>(0) ; 
            const [rangeValue ,setRangeValue] = useState(0) ; 
            const changeRange = ():void =>{
              const number :number = inputRangeRef.current.value ; 
              setRangeValue(number) ; 
              const oneRange :number = 700 / 100  ; 
              setPrince((oneRange * number ).toFixed(0)) ; 
  }
  useEffect(()=>{
    setProducts(products2.filter((product:Product) => product.price > price ))
  },[price])
  const [show , setShow] = useState(false)
  
  return (
            <section className='shop'>
              <button className='showbutton' onClick={()=>setShow(!show)}>{show ? 'show' : 'Hide'} </button>
            <div className='container'>
            <ItemsFilter show={show} inputRangeRef={inputRangeRef} price={price} rangeValue={rangeValue} changeRange={changeRange} />
            <Itemss products={products} loading={loading}/>
            </div>
            </section>
)
}

export default Index