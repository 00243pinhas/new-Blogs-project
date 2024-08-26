import '../navBar/navbar.css';
import { Navbar, Button } from "flowbite-react";

export function NavBar() {
  return (
    <Navbar fluid rounded className="p-4  w-full bg-[#f1f1f1] z-50 relative"> 
      <Navbar.Brand href="./home">  
        <span className=" font-costum self-center text-4xl font-semibold text-black">Relentless</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
      <button type="button" className="font-costum text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-2xl px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Green</button>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse className="md:flex md:items-center md:w-auto w-full order-1 md:order-1">
        <ul className="md:flex md:space-x-8 mt-4 md:mt-0 text-white text-3xl">
          <li>
            <Navbar.Link href="./home" className='font-costum ' active>
              Home
            </Navbar.Link>
          </li>
          <li>
            <Navbar.Link href="./AllBlogs" className='font-costum '>Blogs</Navbar.Link>
          </li>
          <li>
            <Navbar.Link href="./about" className='font-costum ' >About</Navbar.Link>
          </li>
          <li>
            <Navbar.Link href="./create" className='font-costum '>Create</Navbar.Link>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
}
