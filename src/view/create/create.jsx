import { useState } from 'react'
import { Dropdown } from "flowbite-react";


export default function Home() {

  const [title, settitle]=useState("");
  const [author, setAuthor]=useState("");
  const [body,setbody]=useState("");
  const [category,setCategory]=useState("");
  // const [image,setImage]=useState("")

  const handleSelect = (value)=>{
    // console.log(value);

    setCategory(value);
  }
  
    const handleSubmit=(event) => {
      event.preventDefault();

      const newblogs={title,author,category,body};

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


      <Dropdown label="Dropdown button" dismissOnClick={false}>
        <Dropdown.Item  onClick={() => handleSelect("Sport")}>Sport</Dropdown.Item>
        <Dropdown.Item  onClick={() => handleSelect("Love")}>Love</Dropdown.Item>
        <Dropdown.Item  onClick={() => handleSelect("Social")}>Social</Dropdown.Item>
        <Dropdown.Item  onClick={() => handleSelect("Politics")}>Politics</Dropdown.Item>
        <Dropdown.Item  onClick={() => handleSelect("Economics")}>Economics</Dropdown.Item>
      </Dropdown>

      <input
       value={category}
       onChange={(e)=>setCategory(e.target.value)}

       />

      <button type="submit">Create Blog</button>
    </form>
  )

}


