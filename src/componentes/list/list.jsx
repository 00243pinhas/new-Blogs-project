
// The list Component 

import React from 'react'
import useFetchBlogs from '../useFetch'

export default function List(props) {

const { blogs, isPending, error } = useFetchBlogs();

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

    <div>
        <ul>
            {
                filteredData.map((item)=>(
                    <li key={item.id}>{item.author}</li>
                ))
            }
            
        </ul>

    </div>
  )
}
