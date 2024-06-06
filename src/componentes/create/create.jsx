import { useState } from 'react'




export default function Home() {

  const [title, settitle]=useState("");
  const [author, setAuthor]=useState("");
  const [body,setbody]=useState("");
  
  
    const handleSubmit=(event) => {
      event.preventDefault();

      const newblogs={title,author,body};

      fetch('http://127.0.0.1:5000/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newblogs),
      })
        .then(response => response.json())
        .then(data => console.log('Blog created:', data))
        .catch(error => console.error('Error creating blog:', error));
    };

  
  return (
    <form onSubmit={handleSubmit}>

      <input type="text" value={title} 
      onChange={(e) => settitle(e.target.value)}
       placeholder="title" 
       required 
      />

      <input type="text" value={author} 
      onChange={(e) => setAuthor(e.target.value)}
       placeholder="Author" 
       required 
      />

      <input type="text"
          value={body}
          onChange={(e)=>setbody(e.target.value)}
          placeholder='body authore'
          required
       />

      <button type="submit">Create Blog</button>
    </form>
  )

}


