import { useState } from 'react'




export default function Home() {

  const [title, settitle]=useState("");
  const [author, setAuthor]=useState("");
  const [body,setbody]=useState("");
  const [Category,setCategory]=useState("");
  // const [image,setImage]=useState("")
  
    const handleSubmit=(event) => {
      event.preventDefault();

      const newblogs={title,author,Category,body};

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

    console.log(body)
  
  return (
    <form onSubmit={handleSubmit}>

      <input type="text" value={title} onChange={(e) => settitle(e.target.value)} placeholder="title" required />

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

      <input type="text"
          value={Category}
          onChange={(e)=>setCategory(e.target.value)}
          placeholder='category'
          required
       />

       {/* need To come back Here for the categiory input type  */}

      <button type="submit">Create Blog</button>
    </form>
  )

}


