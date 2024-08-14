import React from 'react';
// import BlogList from '../../componentes/blogList';
import { Carousel } from "flowbite-react";;
import { useSelector } from 'react-redux';
import { Alert } from "flowbite-react";
import { Button } from "flowbite-react";
import LatestBlog from '../../componentes/latestBlog/LatestBlog';

export default function Home() {
  // const { blogs, isPending, error } = useFetchBlogs();
  const isSuccess= useSelector((state)=>state.isSuccess)
  return (
    
    <div className="home">
        {
            isSuccess && (
            <Alert color="success" onDismiss={() => alert('Alert dismissed!')}>
              <span className="font-medium">You just submited Your Blog  ...</span> 
            </Alert>
            )
        }
    
    {/* TODO: Responsiveness  */}

      <section className=" h-[20rem] sm:h-[25rem] lg:h-[30rem] xl:h-[35rem] ">
        <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
            <div className="flex h-full items-center justify-center  dark:bg-gray-700 dark:text-white">
                    <div id="full_contente " className='flex justify-between gap-[13rem] items-center'>
                      <div className="text_content">
                            <div className="grid gap-[2rem]">
                              <h1 className='text-7xl font-bold'>
                                  For All Your
                                  <br/>
                                  All Blogs Needed 
                              </h1> 

                                <p className='text-[#3e3b3b] text-xl leading-[2.3rem]'> 
                                  Lorem ipsum, dolor sit amet consectetur
                                  <br />
                                  adipisicing elit. Minus quidem maiores
                                  <br />
                                  perspiciatis, illo maxime voluptatem a itaque suscipit.
                                </p>
                            </div>

                            <div className="flex gap-[2rem] mt-[4rem] ">
                                  <Button color="success" pill>
                                      contact Us 
                                  </Button>

                                  <Button color="dark" pill>
                                      About Us 
                                  </Button>
                            </div>

                      </div>

                      <div className="flex justify-center ">
                        <img src="src/assets/undraw_blogging_re_kl0d.svg" alt="" className='w-full h-auto object-cover rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'  />
                      </div>
                    </div>
            </div>

            <div className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white">
            <div id="full_contente " className='flex justify-between gap-[13rem] items-center'>
                      <div className="text_content">
                            <div className="grid gap-[2rem]">
                              <h1 className='text-7xl font-bold'>
                                  For All Your
                                  <br/>
                                  All Blogs Needed 
                              </h1> 

                                <p className='text-[#3e3b3b] text-xl leading-[2.3rem]'> 
                                  Lorem ipsum, dolor sit amet consectetur
                                  <br />
                                  adipisicing elit. Minus quidem maiores
                                  <br />
                                  perspiciatis, illo maxime voluptatem a itaque suscipit.
                                </p>
                            </div>

                            <div className="flex gap-[2rem] mt-[4rem] ">
                                 <Button color="success" pill>
                                      contact Us 
                                  </Button>

                                  <Button color="dark" pill>
                                      About Us 
                                  </Button>
                            </div>

                      </div>

                      <div className="flex justify-center ">
                        <img src="src/assets/undraw_blogging_re_kl0d.svg" alt="" className='w-full h-auto object-cover rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'  />
                      </div>
                    </div>
            </div> 
             <div className="flex h-full items-center justify-center  dark:bg-gray-700 dark:text-white">
              
             <div id="full_contente " className='flex justify-between gap-[13rem] items-center'>
                      <div className="text_content">
                            <div className="grid gap-[2rem]">
                              <h1 className='text-7xl font-bold'>
                                  For All Your
                                  <br/>
                                  All Blogs Needed 
                              </h1> 

                                <p className='text-[#3e3b3b] text-xl leading-[2.3rem]'> 
                                  Lorem ipsum, dolor sit amet consectetur
                                  <br />
                                  adipisicing elit. Minus quidem maiores
                                  <br />
                                  perspiciatis, illo maxime voluptatem a itaque suscipit.
                                </p>
                            </div>

                            <div className="flex gap-[2rem] mt-[4rem] ">
                                  <Button color="success" pill>
                                      contact Us 
                                  </Button>

                                  <Button color="dark" pill>
                                      About Us 
                                  </Button>
                            </div>

                      </div>

                      <div className="flex justify-center ">
                        <img src="src/assets/undraw_blogging_re_kl0d.svg" alt="" className='w-full h-auto object-cover rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'  />
                      </div>
              </div>

            </div>
        </Carousel>
      </section>

      <section className="mt-[6rem] grid justify-center items-center texte-center">

        <div className="text-center">
            <h2 className='font-bold text-5xl'>Latest Blogs </h2>
        </div>

          <div className="mt-[5rem] flex justify-center items-center ">
            <LatestBlog/>
          </div>
      </section>

      <section  className='mt-[10rem] mb-[10rem]'>
               <div className="flex justify-around items-center texte-center ">

                  <div className="aboutUs_image">
                       <img src="src/assets/new.svg" alt="" className='w-full h-auto object-cover rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'  />
                  </div>

                  <div className="aboutus_text">

                    <div className="aboutUs_text_read">
                    <h3 className='font-bold text-5xl mb-[2rem]'>About Us </h3>

                    <p className='font-normal text-gray-700 dark:text-gray-400 p-[1rem] mb-[2rem]'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                      <br />
                      Corrupti dolorem eum consequuntur ipsam repellat
                      <br />
                      dolor soluta aliquid laborum, eius odit consectetur vel
                      <br />
                        quasi in quidem, eveniet ab est corporis tempore...
                    </p>
                    </div>

                    <div className="aboutUs_text_btns">
                        <button type="button" class="text-white bg-green-700 hover:bg-green-800 focus:outline-none focus:ring-4 focus:ring-green-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">Read more</button>

                    </div>

                  </div>
               </div>
               
      </section>



          {/* TODO: Responsiveness  */}

    </div>
  );
}