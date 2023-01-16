import React , {FC} from 'react'
import Blogs from './Blogs'
import SearchBlogs from './SearchBlogs'
import './index.scss'
const index:FC = () => {
  return (
    <div className='blog'>
            <Blogs/>
            <SearchBlogs/>
    </div>
  )
}

export default index