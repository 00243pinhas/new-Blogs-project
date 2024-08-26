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
        return <div className="flex justify-center align-center mt-[20rem]">
          <div class="flex items-center justify-center w-56 h-56  rounded-lg ">
              <div role="status">
                  <svg aria-hidden="true" class="w-8 h-8 text-gray-500 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                  <span class="sr-only">Loading...</span>
              </div>
          </div>
        </div>
    ;
  }

  if(error){
    return <div className="flex justify-center align-center mt-[20rem]">
        here
      </div>;
  }

  return (
    <>

    <div className="mt-[5rem]">
                   
        

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
              class="<font-costum text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-xl px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"             
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
