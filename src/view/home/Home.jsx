import React from 'react';
// import BlogList from '../../componentes/blogList';
import { Carousel } from "flowbite-react";;
import { useSelector } from 'react-redux';
import { Alert } from "flowbite-react";

export default function Home() {
  // const { blogs, isPending, error } = useFetchBlogs();
  const isSuccess= useSelector((state)=>state.isSuccess)
  return (
    <div className="home">
        

      <div className=" sm:h-64 xl:h-80  ">
        <Carousel onSlideChange={(index) => console.log('onSlideChange()', index)}>
            <div className="flex h-full items-center justify-center  dark:bg-gray-700 dark:text-white">
                    <div className="full_contente">
                      <div className="text_content">
                        text here 
                      </div>

                      <div className="illustraction_content">
                        illstructaction
                      </div>
                    </div>
            </div>

            <div className="flex h-full items-center justify-center dark:bg-gray-700 dark:text-white">
                <div className="full_contente">
                    <div className="text_content">
                      text here 
                    </div>

                    <div className="illustraction_content">
                      illstructaction
                    </div>
                  </div>
            </div>
            <div className="flex h-full items-center justify-center  dark:bg-gray-700 dark:text-white">
              
                <div className="full_contente">
                  <div className="text_content">
                    text here 
                  </div>

                  <div className="illustraction_content">
                    illstructaction
                  </div>
                </div>

            </div>
        </Carousel>
      </div>
        

      {
          isSuccess && (
          <Alert color="success" onDismiss={() => alert('Alert dismissed!')}>
            <span className="font-medium">You just submited Your Blog  ...</span> 
          </Alert>
          )
      }
    </div>
  );
}