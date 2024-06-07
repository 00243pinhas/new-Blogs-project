
import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function BlogList({blogs,title}) {
    
  return (
   
    <div className='blog-list'> 
          <h2>{title}</h2>
         {blogs.map((blog) => (
            <Link to ={`/blogs/${blog.id}`}>
                  <div className="blog-preview" key={blog.id}>
                      <h2>{blog.title}</h2>
                      <p>written by: {blog.author}</p>
                      <button>Delete this Blog</button>
                </div>
            </Link>
        ))}
    
    </div>
  )
}


// todo this is the block we have to design 