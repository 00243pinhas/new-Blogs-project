import '../home/home.css'

import { useState , useEffect} from 'react'




export default function Home() {

  const [blogs, setBlogs] = useState([]);


  useEffect(()=>{

      fetch('http://127.0.0.1:5000/blogs')
      .then(response => response.json())
      .then(data => setBlogs(data))
      .catch(error => console.error('Error fetching blogs:', error));

  },[]);

  return (

    <div>
      
    {blogs.map((blog) => (
            <div key={blog.id}>
              <h2>{blog.title}</h2>
              <p>By {blog.author}</p>
              <p>{blog.body}</p>
            </div>
          ))}
    </div>
  )

}


