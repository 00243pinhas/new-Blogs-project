import '../navBar/navbar.css';
import { Navbar, Button } from "flowbite-react";

export function NavBar() {
  return (
    <Navbar fluid rounded className="p-4  w-full bg-[#f1f1f1] z-50 relative"> 
      <Navbar.Brand href="https://flowbite-react.com">  
        <span className="self-center text-4xl font-semibold text-black">Relentless</span>
      </Navbar.Brand>
      <div className="flex md:order-2">
        <Button>Get started</Button>
        <Navbar.Toggle />
      </div>

      <Navbar.Collapse className="md:flex md:items-center md:w-auto w-full order-1 md:order-1">
        <ul className="md:flex md:space-x-8 mt-4 md:mt-0 text-white text-3xl">
          <li>
            <Navbar.Link href="./home" active>
              Home
            </Navbar.Link>
          </li>
          <li>
            <Navbar.Link href="./AllBlogs">Blogs</Navbar.Link>
          </li>
          <li>
            <Navbar.Link href="./about">About</Navbar.Link>
          </li>
          <li>
            <Navbar.Link href="./create">Create</Navbar.Link>
          </li>
        </ul>
      </Navbar.Collapse>
    </Navbar>
  );
}
