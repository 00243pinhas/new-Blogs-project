import React from 'react'
import useFetchBlogs from '../useFetch'
import { Button ,Card } from "flowbite-react";
import '../latestBlog/latestBlog.css'


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
    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 m-10">
            {newBlogs.length > 0 ? (
              newBlogs.map(blog => (
      
                <Card className="max-w-xl" key={blog.id}>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {blog.title}
                    </h5>
            
                  <h3> <strong>{blog.author}</strong></h3>


                  <div className="body_paragraph">
                  <p> {blog.body}</p>
                  </div>

                  <Button>
                      Read more
                      <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                </Button>
                  </Card>

                  //  Need to make a link to the the btn now 
              ))
            ):(<div>No Blogs Found ..</div>)}
            
        </div>
     
   
  )
}

/// We have to fic that rerender issue as quick as possible 

/// We need To find a better mapper that is nice for the design ..
