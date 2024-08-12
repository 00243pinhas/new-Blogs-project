import { useState } from 'react';
import { Dropdown } from "flowbite-react";
import { Button, Textarea , FloatingLabel} from "flowbite-react";
import '../create/create.css';

export default function Home() {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [body, setBody] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState(null);

  const handleSelect = (value) => {
    setCategory(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append("title", title);
    formData.append("author", author);
    formData.append("body", body);
    formData.append("category", category);
    formData.append("image", image);

 
    
    fetch('http://127.0.0.1:5000/blogs',{
      method: 'POST',
      body: formData,

    })

      .then(response => response.json())
      .then(data => console.log('Blog created:', data))
      .catch(error => console.error('Error creating blog:',error));
      
  };

  return (
    <div className="formWrapper ">


          <div className="create_Title">
            <h1> Create Your First Blogs For Free</h1>
          </div>
      
      <form onSubmit={handleSubmit}>

        <label htmlFor="Title">Write the title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />

        <label htmlFor="Author">Author</label>
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          required
        />


      <label htmlFor="Image">profile image</label>
        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          placeholder='Image'
          required
          className="imageSubmit"

        />


         <label htmlFor="Body">Enter Your Blog</label>
        <Textarea
          id="bodyField"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Leave a comment..."
          required
        />

        <label htmlFor="category">Choose The category Of You Blog</label>
        <FloatingLabel variant="outlined" label={category}  disabled={true} />
        <Dropdown label="Category" dismissOnClick={true}>
          <Dropdown.Item onClick={() => handleSelect("Sport")}>Sport</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelect("Love")}>Love</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelect("Social")}>Social</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelect("Politics")}>Politics</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelect("Economics")}>Economics</Dropdown.Item>
        </Dropdown>

        <Button type='submit' >Submit</Button>

      </form>
    </div>
  );
}
