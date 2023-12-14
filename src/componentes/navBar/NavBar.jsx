// import '../navBar/navBar.css'

import '../navBar/navbar.css'

import { Link } from 'react-router-dom/cjs/react-router-dom.min'

export default function NavBar() {
    
  return (
   <nav className="navbar">
        <h1> Mr.Robote </h1>
        <div className="links">
          <Link to="/">Home</Link>
            <Link to="/Create">create</Link>
        </div>
   </nav>
  )
}
