import React ,{FC}from 'react' ; 
import './index.scss' ;
import ItemsFilter from './ItemsFilter';
import Itemss from './Itemss';
const index:FC = () => {
  return (
            <section className='shop'>
            <div className='container'>
            <ItemsFilter/>
            <Itemss/>
            </div>
            </section>
)
}

export default index