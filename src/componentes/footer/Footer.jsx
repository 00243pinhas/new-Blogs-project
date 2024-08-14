
import { Footer } from "flowbite-react";
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";

export function FooterF() {
  return (
    <Footer container>
      <div className="w-full">
        <div className="grid w-full justify-between sm:flex sm:justify-between md:flex md:grid-cols-1">
          <div>
            
            {/* <Footer.Brand
              href="https://flowbite.com"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="Flowbite Logo"
              name="Releny"
            /> */}
      
          </div>
          <div className="grid grid-cols-2 gap-8 sm:mt-4 sm:grid-cols-3 sm:gap-6">
            <div>
              <Footer.Title title="about" className="text-2xl"/>
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-xl">Pinhas</Footer.Link>
                <Footer.Link className="text-xl" href="https://pinhas-portfolio.vercel.app/">Portfolio</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Follow us"  className="text-2xl" />
              <Footer.LinkGroup col>
                <Footer.Link href="https://github.com/00243pinhas"  className="text-xl" >Github</Footer.Link>
                <Footer.Link href="http://www.linkedin.com/in/pinhas-lokonda"  className="text-xl">LinkedIn</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title="Legal" className="text-2xl"/>
              <Footer.LinkGroup col>
                <Footer.Link href="#" className="text-xl">Privacy Policy</Footer.Link>
                <Footer.Link href="#" className="text-xl">Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className="w-full sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="RelentLess™" year={2024} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center text-base">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
        
          </div>
        </div>
      </div>
    </Footer>
  );
}
