import React from 'react'
import "./allBlogs.css"
import SearchBlog from "../../componentes/search-blogs/SearchBlog"

export default function AllBlogs() {
  return (
    <div>

        <div className="search">
            <SearchBlog/>
        </div>
    </div>
  )
}
