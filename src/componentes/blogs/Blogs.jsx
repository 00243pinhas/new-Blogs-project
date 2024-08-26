// import List from '../list/list'
import { Button,Modal } from "flowbite-react";
import { React, useState } from "react";
import useFetchBlogs from "../useFetch";
import "./blogs.css";
// import"./search-blog.css";

export default function Blogs() {

  const {blogs, isPending,error}= useFetchBlogs();
  const [selectedCategory, setSelectedCategory]= useState ("All");
  const [showModel, setShowmodel]=useState(false);
  const [selectedBlogs, setSelectedBlogs]= useState(null);

  const categories = ["All", "Sport", "Love", "Politics", "Social", "Economics"];


  const handleSelectedBlogs = (blog)=>{
      setSelectedBlogs(blog);
      setShowmodel(true);
  }

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const filterBlogs = 
    selectedCategory ==='All'
    ?blogs
    : blogs.filter((blog)=>blog.category === selectedCategory)
  if (isPending){
    return <div>Loading...</div>;
  }

  if(error){
    return <div>We are Really Lost, You Know That..?</div>;
  }

  return (
    <>

    <div className="mt-[12rem]">
                   
        

            <div className="flex flex-wrap justify-center mb-9 gap-5">
              {categories.map((category) => (
                // <Button
                //   key={category}
                //   gradientMonochrome="success"
                //   onClick={() => handleCategoryClick(category)}
                // >
                //   {category}
                // </Button>
              <button 
              type="button" 
              className="font-costum focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
              key={category}
              gradientMonochrome="success"
              onClick={() => handleCategoryClick(category)}
              >
                {category}
              </button>
              ))}
            </div>
            
            {filterBlogs.length > 0 ? (
              filterBlogs.map((item) => (
                <div className="blog-card" key={item.id}>
                  <div className="meta">
                    <div
                      className="photo"
                      style={{ backgroundImage: `url(${item.image})` }}
                    ></div>
                    <ul className="details">
                      <li className="author">
                        <a href="#">{item.author}</a>
                      </li>
                      <li className="date">Aug. 24, 2015</li>
                      <li className="tags">
                        <ul>
                          <li>
                            <a href="#">Learn</a>
                          </li>
                          <li>
                            <a href="#">Code</a>
                          </li>
                          <li>
                            <a href="#">HTML</a>
                          </li>
                          <li>
                            <a href="#">CSS</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                  <div className="description">
                    <h1>{item.title}</h1>
                    <h2>{item.category}</h2>
                    <div className="body_contents">
                      <p>{item.body}</p>
                    </div>
                    <p className="read-more">
                      <a href="#" onClick={()=>handleSelectedBlogs(item)}>Read More</a>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div>Ooops Not Yet Available ...</div>
            )}


            {
              selectedBlogs && (
       
                <Modal dismissible show={showModel}  onClose={() => setShowmodel(false)}>
                  <Modal.Header>{selectedBlogs.title}</Modal.Header>
                  <Modal.Body>
                    <div className="space-y-6">
                    <p className="<font-costum text-base leading-relaxed text-gray-500">
                        {selectedBlogs.body}
                    </p>
                    </div>
                  </Modal.Body>
                  <Modal.Footer>
                    <Button>Delete</Button>
                    <Button color="gray" onClick={() => setShowmodel(false)}>
                      Decline
                    </Button>
                  </Modal.Footer>
                </Modal>
              )
            }
    </div>


 
    </>
  );
}
