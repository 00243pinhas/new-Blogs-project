import React, { useState } from 'react'

import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

import '../create/create.css'

export default function Create() {

  const [title,setTitle]=useState('')
  const [body ,setBody]=useState('')
  const [author ,setAuthor]=useState('Lugui')
  const history = useHistory()


  const handlSubmit =(e)=>{
    e.preventDefault()

    const blogs = {title,body,author}

    fetch(' http://localhost:8000/blogs',{

    method:'POST',
    headers:{'content-type': 'Application/json'},
    body: JSON.stringify(blogs)
    }).then(()=>{
      console.log('New Data just Arrived ')
      history.push('/')
    })

    // console.log(blogs);
  }

  return (
    <div className="create">

      <h2>Add A new Blog </h2>
          
      <form onSubmit={handlSubmit}>

            <label> Blog Title</label>

            <input
                type='text'
                required

                value={title}
                onChange={(e)=> setTitle(e.target.value)}
            />

            <label> Bloge Body :</label>

              <textarea 
              
              value={body}

              onChange={(e)=> setBody(e.target.value)}
              
              required
              
              ></textarea>

              <label> Blog Author :</label>

              <select
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    >
                    <option value="Mario">Mario</option>
                    <option value="Luigi">Luigi</option>
              </select>


              <button type="submit">Submit</button>   

      </form>
    </div>
  )
}
