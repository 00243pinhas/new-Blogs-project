import { useState } from 'react';
import { Dropdown } from "flowbite-react";
import { Button, Textarea } from "flowbite-react";
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
    <div className="formWrapper">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />

        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Author"
          required
        />

        <input
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
          placeholder='Image'
          required
        />

        <Textarea
          id="bodyField"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Leave a comment..."
          required
        />

        <Dropdown label="Category" dismissOnClick={true}>
          <Dropdown.Item onClick={() => handleSelect("Sport")}>Sport</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelect("Love")}>Love</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelect("Social")}>Social</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelect("Politics")}>Politics</Dropdown.Item>
          <Dropdown.Item onClick={() => handleSelect("Economics")}>Economics</Dropdown.Item>
        </Dropdown>

        <Button type='submit' color="blue">Submit</Button>
      </form>
    </div>
  );
}
