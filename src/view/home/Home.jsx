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

      <div className=" h-[20rem] sm:h-[25rem] lg:h-[30rem] xl:h-[35rem] ">
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
                                      Success
                                  </Button>

                                  <Button color="dark" pill>
                                    Dark
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
                                      Success
                                  </Button>

                                  <Button color="dark" pill>
                                    Dark
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
                                      Success
                                  </Button>

                                  <Button color="dark" pill>
                                    Dark
                                  </Button>
                            </div>

                      </div>

                      <div className="flex justify-center ">
                        <img src="src/assets/undraw_blogging_re_kl0d.svg" alt="" className='w-full h-auto object-cover rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg'  />
                      </div>
                    </div>

            </div>
        </Carousel>
      </div>

      <div className="mt-[5rem] flex justify-center items-center ">
            <LatestBlog/>
      </div>
    </div>
  );
}