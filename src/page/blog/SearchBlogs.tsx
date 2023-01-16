import React from 'react'

const SearchBlogs = () => {
  return (
    <div className='side-back'>
            <div className="input">
            <input type="text" placeholder='search..' />
            <button>search</button>
            </div>
            <div className='recents-post'>
            <h2>Recents Posts</h2>
            <div>
            <img src="https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" />
            <p>Lorem ipsum dolor, sit amet consectetur .</p>
            </div>
            <div>
            <img src="https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" />
            <p>Lorem ipsum dolor, sit amet consectetur .</p>
            </div>
            <div>
            <img src="https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="image" />
            <p>Lorem ipsum dolor, sit amet consectetur .</p>
            </div>
            </div>
            <div className='categories'>
                        <h2>categories</h2>
                        <div>
                        <p>Editorial</p>
                        <p>Fashion</p>
                        <p>Life Style</p>
                        <p>Look Book</p>
                        <p>Trending</p>
                        </div>
            </div>
    </div>
  )
}

export default SearchBlogs