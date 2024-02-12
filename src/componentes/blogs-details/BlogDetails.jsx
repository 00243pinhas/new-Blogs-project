import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import '../blogs-details/blogDetails.css'
// import { useState } from 'react'
import useFetch from '../useFetch';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'


export default function BlogDetails() {

   const {id}=useParams()

   const history = useHistory()

   const {data:blog,error,isPending} = useFetch('https://crabby-pantsuit-duck.cyclic.app/blog/' + id);
   
   console.log(id)

   const handelDelete = ()=>{
        fetch('https://crabby-pantsuit-duck.cyclic.app/blog/' + id,{
            
        method:'DELETE'
        }).then(()=>{
            history.push('/')
        })
   }
  return (
        <div className="blog-details">

            {isPending && <div>Loading containt ...</div>}

            {error && <div>{error}</div>}

            {blog && (
                <article>
                    <h1>{blog.title}</h1>
                    <p> Written By : {blog.author}</p>
                    <div>{blog.body}</div>


                    <button onClick={handelDelete}>Delete</button>
                </article>
            )}

            
        </div>
  )
}
