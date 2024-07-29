
// The list Component 

import React from 'react'
import useFetchBlogs from '../useFetch'
import { Button ,Card } from "flowbite-react";
import './list.css'


export default function List(props) {

const { blogs, isPending, error } = useFetchBlogs();  // Here is How i am accessinng data in my whole prject

const filteredData = blogs.filter((el) => {

    if (props.input === '') {
        
        return el;
    }

    else {
        return el.author.toLowerCase().includes(props.input)
    }
})


if (isPending) {
    return <div>Loading...</div>;
  }

  if(error){
    return <div>Error We are Lost...</div>;
  }

  return (

    <div className='cards' >
    
            {
                filteredData.map((item)=>(
                <Card className="max-w-sm" imgSrc="/images/blog/image-4.jpg" key={item.id} horizontal>
                    <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.author}
                    </h5>
                    <p className="font-normal text-gray-700 dark:text-gray-400">    

                  
                    </p>

                    <p>
                    {item.image && (
                                
                                <img src={item.image} alt="" />
                            )}
                    </p>
                  </Card>
                            
//                 <Card className="max-w-sm" key={item.id}>
//                     <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                         {item.author}
//                     </h5>


//                     <div className="body_paragraph">
//                       <p> {item.body}</p>
//                     </div>
// {/* 
//                     <div className="body_paragraph">
//                       <p> {item.image1}</p>
//                     </div> */}

//                     {item.image && (
//                         <img
//                             src={item.image}
//                             alt="Blog Image"
//                             className="w-full h-auto object-cover"
//                         />
//                     )}

//                     {/* {console.log(item.image)} */}


//                     <Button>
//                         Read more
//                         <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                         <path
//                             fillRule="evenodd"
//                             d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
//                             clipRule="evenodd"
//                         />
//                         </svg>
//                     </Button>
//                 </Card>
                ))
            }
            
        {/* <Card className="max-w-sm">
                <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Noteworthy technology acquisitions 2021
                </h5>
                <p className="font-normal text-gray-700 dark:text-gray-400">
                    Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.
                </p>
                <Button>
                    Read more
                    <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                    </svg>
                </Button>
        </Card> */}

    </div>
  )
}
