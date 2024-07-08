import React from 'react'
import useFetchBlogs from '../useFetch'

export default function LatestBlog() {

  const { blogs, isPending, error } = useFetchBlogs();  

  const newBlogs = blogs && blogs.length > 0 ? [...blogs].sort((a,b) => new Date(b.updated_at) - new Date(a.updated_at)).slice(0, 3) : [];

  console.log(newBlogs)

  if (isPending){
    return <div>Loading...</div>;
  }

  if(error){
    return <div>Error We are Lost...</div>;
  }

  return (

    <div>
        {newBlogs.length > 0 ? (
          newBlogs.map(blog => (
            <div key={blog.id}>
              <h3>{blog.title}</h3>
              <p>{blog.body}</p>
              <p><strong>Author:</strong> {blog.author}</p>
            </div>
          ))
        ):(<div>No Blogs Found ..</div>)}
    </div>
  )
}

// We have to fic that rerender issue as quick as possible 

// We need To find a better mapper that is nice for the design ..
