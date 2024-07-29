
import '../navBar/navbar.css'
// import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { Navbar, Button } from "flowbite-react";


export function NavBar() {
  return (
    <Navbar fluid rounded className="p-4"> 

      <Navbar.Brand href="https://flowbite-react.com" >  
        {/* <img src="/favicon.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
        <span className="self-center text-4xl font-semibold text-white;">Pinhas</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>

          <Navbar.Collapse className="md:flex md:items-center md:w-auto w-full order-1 md:order-1" >
            <ul className="md:flex md:space-x-8 mt-4 md:mt-0 text-white text-3xl">

              <li>
                <Navbar.Link href="./home" active>
                  Home
                </Navbar.Link>
              </li>

              <li>
                <Navbar.Link href="#">About</Navbar.Link>
              </li>

              <li>
                <Navbar.Link href="./create">Create</Navbar.Link>

              </li>

              <li>
                <Navbar.Link href="./AllBlogs">All</Navbar.Link>

              </li>

              <li>
                <Navbar.Link href="#">Contact</Navbar.Link>

              </li>

            </ul>
          </Navbar.Collapse>
      
      </Navbar>
  );
}


// We will Need A router in this place and cahnge the coolor of the Btn 