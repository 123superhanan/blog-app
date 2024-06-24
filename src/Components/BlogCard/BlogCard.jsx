import React from 'react'
import "./BlogCard.css"
import {Link} from "react-router-dom"



const BlogCard = ({blog}) => {
  return (
    <>
      
      <div className="blog-card ">
     
        <div className="blog-card-content">
          <div className="card">
            <img src={blog.image} alt={blog.title} />
            <div className="card-down">
            <Link to={`/category/${blog.category}`}> <span>{blog.category}</span></Link>
            <h2>{blog.content}</h2>
            <div className='over-end'>
              <img src={blog.Authorimage} alt="img" />
              <p>{blog.author}</p>
              <p>{blog.info}</p>

            </div>
            </div>
            </div>
          </div>

        </div>
      
    </>
  )
}

export default BlogCard
