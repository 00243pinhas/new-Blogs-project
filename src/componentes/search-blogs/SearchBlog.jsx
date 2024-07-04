// import React from 'react'
// import { func } from 'prop-types';
import List from '../list/list'
import { React, useState } from "react";


export default function SearchBlog() {

    const [inputText,setInputText]=useState('');

    const handlingInput =(e)=>{
        const lowerCase = e.target.value.toLowerCase();
        setInputText(lowerCase)
    }

  return (
    <div>
        
        <input
            type="text"
            placeholder="Search for an author..."
            // value={}
            onChange={handlingInput}
        />

        <List input={inputText}/>
    </div>
  )
}
