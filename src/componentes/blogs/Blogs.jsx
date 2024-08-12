
// import List from '../list/list'
import { React, useState } from "react";
import useFetchBlogs from "../useFetch";
import "./blogs.css"
// import"./search-blog.css";

export default function Blogs() {

  const {blogs, isPending,error}= useFetchBlogs();

  if (isPending){
    return <div>Loading...</div>;
  }

  if(error){
    return <div>We are Really LOst You Know That..? </div>;
  }

  // const cardStyle = {
  //   backgroundImage: 'url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)',
  // }

  return (

    <div>Loading...</div>
    // <div className="blog-card">
    // <div className="meta">
    //   <div className="photo" style={cardStyle} ></div>
    //   <ul className="details">
    //     <li className="author"><a href="#">John Doe</a></li>
    //     <li className="date">Aug. 24, 2015</li>
    //     <li className="tags">
    //        <ul>
    //         <li><a href="#">Learn</a></li>
    //         <li><a href="#">Code</a></li>
    //         <li><a href="#">HTML</a></li>
    //         <li><a href="#">CSS</a></li>
    //       </ul> 
    //     </li>
    //   </ul>
    // </div>
    // <div className="description">
    //   <h1>Learning to Code</h1>
    //   <h2>Opening a door to the future</h2>
    //   <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad eum dolorum architecto obcaecati enim dicta praesentium, quam nobis! Neque ad aliquam facilis numquam. Veritatis, sit.</p>
    //   <p className="read-more">
    //     <a href="#">Read More</a>
    //   </p>
    // </div>
    // </div>
  )
}
