// import { useState } from 'react'

import {NavBar} from "./componentes/navBar/NavBar.jsx"  
// import Home from "./view/home/Home.jsx"
// import SearchBlog from "./componentes/search-blogs/SearchBlog.jsx"
// import LatestBlog from "./componentes/latestBlog/LatestBlog.jsx"
import Create  from "./view/create/create.jsx"
import BlogDetails from "./componentes/blogs-details/BlogDetails.jsx"
import { BrowserRouter as Router, Route , Switch } from "react-router-dom/cjs/react-router-dom.min.js"
import NotFound from "./componentes/notFound.jsx"
import {BlogProvider}  from "./componentes/contex.jsx"
import AllBlogs from "./view/allBlogs/allBlogs.jsx"
// import { FooterF } from "./componentes/footer/Footer.jsx"
import './App.css'


function App() {
  return (
    <>
    <BlogProvider>
      <Router>
      <div className="app"></div>
          <NavBar/> 
        <div className="content">
           <Switch>
            <Route exact path='/'>
      
              {/* <Home/> */}
              {/* <SearchBlog/> */}
              {/* <LatestBlog/> */}
              
            </Route>

            <Route path='/Create'>
              <Create/>
            </Route>

            <Route path='/AllBlogs'>
              <AllBlogs/>
            </Route>

            <Route path='/blogs/:id'>
              <BlogDetails/>
            </Route>

            <Route path='*'>
              <NotFound/>
            </Route>
                
           </Switch>
        </div>

      </Router>

    {/* <FooterF/> */}
    </BlogProvider>
    </>
  )
}

export default App







