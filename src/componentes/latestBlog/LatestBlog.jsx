import React from 'react'
import useFetchBlogs from '../useFetch'
import { Button ,Card } from "flowbite-react";
import '../latestBlog/latestBlog.css'


export default function LatestBlog() {

  const { blogs, isPending, error } = useFetchBlogs();  

  const newBlogs = blogs && blogs.length > 0 ? [...blogs].sort((a,b) => new Date(b.updated_at) - new Date(a.updated_at)).slice(0, 3) : [];

  console.log(newBlogs)

  // const imageHandler= 

  if (isPending){
    return <div>Loading...</div>;
  }

  if(error){
    return <div>Error We are Lost...</div>;
  }

  return (  
    
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[6rem] m-7">
            {newBlogs.length > 0 ? (
              newBlogs.map(blog => (


                <Card className="max-w-sm" imgSrc={blog.image}  key={blog.id} vertical >
                  <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    {/* Noteworthy technology acquisitions 2021 */}
                    {blog.title}
                  </h5>
                      <div className=" h-[23rem] overflow-hidden">
                          <p className="font-normal text-gray-700 dark:text-gray-400 p-[1rem]">
                            {blog.body}
                          </p>
                        </div>
                  </Card>
    
              ))
            ):(<div>No Blogs Found ..</div>)}
            
        </div>
     
   
  )
}

/// We have to fix that rerender issue as quick as possible 

/// We need To find a better mapper that is nice for the design ..
