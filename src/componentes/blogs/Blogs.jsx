// import List from '../list/list'
import { Button } from "flowbite-react";
import { React, useState } from "react";
import useFetchBlogs from "../useFetch";
import "./blogs.css";
// import"./search-blog.css";

export default function Blogs() {

  const {blogs, isPending,error}= useFetchBlogs();
  const [selectedCategory, setSelectedCategory]= useState ("All");

  const categories = ["All", "Sport", "Love", "Politics", "Social", "Economic"];

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

    <div className="contentWrapper">
                   
        

            <div className="flex flex-wrap justify-center mb-9 gap-5">
              {categories.map((category) => (
                <Button
                  key={category}
                  gradientMonochrome="success"
                  onClick={() => handleCategoryClick(category)}
                >
                  {category}
                </Button>
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
                      <a href="#">Read More</a>
                    </p>
                  </div>
                </div>
              ))
            ) : (
              <div>No blogs available for the selected category.</div>
            )}
          </div>
        
      
 
    </>
  );
}
