import '../home/home.css'

import { useState , useEffect} from 'react'

import BlogList from '../blogList'

import useFetch from '../useFetch'


export default function Home() {


    const{ data:blogs,isPending,error} = useFetch('http://localhost:8000/blogs')
  
   
  return (
    <div className="home">

      {error && <p> {error} </p>} 
      {isPending && <p>Loading...</p>}
      {blogs && < BlogList blogs={blogs} title='All The Blogs!' />}
    </div>
  )

}


