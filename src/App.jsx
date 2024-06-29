// import { useState } from 'react'

import NavBar from "./componentes/navBar/NavBar.jsx"  
import Home from "./componentes/home/Home.jsx"
import Create  from "./componentes/create/create.jsx"
import BlogDetails from "./componentes/blogs-details/BlogDetails.jsx"
import { BrowserRouter as Router, Route , Switch } from "react-router-dom/cjs/react-router-dom.min.js"
import NotFound from "./componentes/notFound.jsx"
import Disclamer from "./componentes/disclamer/disclamer.jsx"
import { BlogProvider } from "./componentes/contex.jsx"
import './App.css'


function App() {
  return (
    <>
    <BlogProvider>
      <Router>
      <div className="app"></div>
          <NavBar/> 
          <div className="disclamerWrapper">
            <Disclamer/>
          </div>

        <div className="content">
           <Switch>
          
            <Route exact path='/'>
     
              <Home/>
            </Route>

            <Route path='/Create'>
              <Create/>
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
    </BlogProvider>
    </>
  )
}

export default App







