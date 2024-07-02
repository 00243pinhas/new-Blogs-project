// import '../navBar/navBar.css'
import { Navbar } from "flowbite-react";
import { Link } from 'react-router-dom/cjs/react-router-dom.min' 
// import '../navBar/navbar.css'

export default function NavBar(){
  return (
    <Navbar fluid rounded>
      <Navbar.Brand as={Link} href="https://flowbite-react.com">
        <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">Flowbite React</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link as={Link} href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}

// import { Link } from 'react-router-dom/cjs/react-router-dom.min'

// export default function NavBar() {
    
//   return (
//    <nav className="navbar">
//         <h1> Mr.Robote </h1>
//         <div className="links">
//           <Link to="/">Home</Link>
//             <Link to="/Create">create</Link>
//         </div>
//    </nav>
//   )
// }