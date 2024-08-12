
// The list Component 

import React from 'react'
import useFetchBlogs from '../useFetch'
// import { Button ,Card } from "flowbite-react";
import './list.css'


export default function List(props) {

const { blogs, isPending, error } = useFetchBlogs();  

// const filteredData = blogs.filter((el) => {

//     if (props.input === '') {
        
//         return el;
//     }

//     else {
//         return el.author.toLowerCase().includes(props.input)
//     }
// })


if (isPending) {
    return <div>Loading...</div>;
  }

  if(error){
    return <div>Error We are Lost...</div>;
  }

  return (


        <div className="good">look</div>
    // <div className='cards' >
    
    //         {
    //             filteredData.map((item)=>(
                // <Card id="cards" className="max-w-sm justify-center" key={item.id} horizontal>

                //     <div className="card_wrapper">

                //         <div className="title">
                //             <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                //                 {item.author}
                //             </h5>
                //         </div>
                        
                //         <div className="card_body" id="cardBody">
                //             <p className="font-normal text-gray-700 dark:text-gray-400">    
                //                 {item.body}
                //             </p>
                //         </div>

                //         <div className='card_img'>
                //         {item.image && (
                                    
                //             <img src={item.image} alt="" />
                //         )}
                //         </div>
                        
                //     </div>
                // </Card>
                // <div className='blog-card' key={item.id}>
              
                //         <div className="meta">
                //             <div className="photo" style="background-image: url(https://storage.googleapis.com/chydlx/codepen/blog-cards/image-1.jpg)"></div>

                //         </div>
                // </div>
                            
                // ))
            // }
            
    // </div>
  )
}
