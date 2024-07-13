// import React from 'react'
// import { func } from 'prop-types';
import List from '../list/list'
import { React, useState } from "react";
import"./search-blog.css";

export default function SearchBlog() {

    const [inputText,setInputText]=useState('');

    const handlingInput =(e)=>{
        const lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase)
    }

  return (
    <div className='wrapper_gallerie'>
        
          <div className="serachBarr">
              <input
                type="text"
                placeholder="Search for an author..."
                onChange={handlingInput}
            />
          </div>

          <div className="gallerie_blogs">
                 <List input={inputText}/>
          </div>

    </div>
  )
}
