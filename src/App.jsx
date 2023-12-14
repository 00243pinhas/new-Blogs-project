// import { useState } from 'react'

import NavBar from "./componentes/navBar/NavBar.jsx"  
import Home from "./componentes/home/Home.jsx"
import Create  from "./componentes/create/create.jsx"
import BlogDetails from "./componentes/blogs-details/BlogDetails.jsx"
import { BrowserRouter as Router, Route , Switch } from "react-router-dom/cjs/react-router-dom.min.js"
import NotFound from "./componentes/notFound.jsx"


function App() {
  return (
    <>
      <Router>

      <div className="app"></div>
          <NavBar/> 
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
    </>
  )
}

export default App







