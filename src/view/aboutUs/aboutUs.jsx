import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'
import { Carousel } from "flowbite-react";

export default function AboutUs(){
    return(
        <section className='grid justify-center align-center'>

                <div className="">
                    <h1 className='font-costum font-bold text-[3rem]'>Hello, we are the Story Day </h1>
                    <p className='font-costum text-[2.5rem] text-gray-600'>here what we offert</p>
                </div>

                <div className="flex justify-center align-center gap-[8rem] mt-[5rem]">
                    
                    <div className=" w-[50rem] p-5">

                        <h2>Here is about Us </h2>

                        <p>
                        Printers in the 1500s scrambled the words from Cicero's "De Finibus Bonorum et Dolorem'' 
                        after mixing the words in each sentence. They abbreviated the word Dolorem, which means pain,
                        to the phrase lorem, which does not have an actual meaning. Ipsum means itself. Lorem Ipsum, then, 
                        refers to your pain. The word "sham pain" in the song by Five Finger Death Punch in modern music lyrics
                        corresponds to lorem ipsum

                        Printers in the 1500s scrambled the words from Cicero's "De Finibus Bonorum et Dolorem'' 
                        after mixing the words in each sentence. They abbreviated the word Dolorem, which means pain,
                        to the phrase lorem, which does not have an actual meaning. Ipsum means itself. Lorem Ipsum, then, 
                        refers to your pain. The word "sham pain" in the song by Five Finger Death Punch in modern music lyrics
                        corresponds to lorem ipsum

                        

                        </p>
                    </div>

                    <div className="mt-[15rem]">
                        <img src="src/assets/undraw_People_search_re_5rre (1).png" alt="" className='w-full h-auto object-cover rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl h-4xl' />
                    </div>
                </div>

                <div className="flex justify-center align-center gap-[8rem] mt-[5rem]">

                    <div className="mt-[1rem]">
                        <img src="src/assets/undraw_Portfolio_website_re_jsdd.png" alt="" className='w-full h-auto object-cover rounded-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-3xl h-5xl' />
                    </div>
                    
                    <div className=" w-[50rem] p-5">

                        <p>
                        Printers in the 1500s scrambled the words from Cicero's "De Finibus Bonorum et Dolorem'' 
                        after mixing the words in each sentence. They abbreviated the word Dolorem, which means pain,
                        to the phrase lorem, which does not have an actual meaning. Ipsum means itself. Lorem Ipsum, then, 
                        refers to your pain. The word "sham pain" in the song by Five Finger Death Punch in modern music lyrics
                        corresponds to lorem ipsum

                        Printers in the 1500s scrambled the words from Cicero's "De Finibus Bonorum et Dolorem'' 
                        after mixing the words in each sentence. They abbreviated the word Dolorem, which means pain,
                        to the phrase lorem, which does not have an actual meaning. Ipsum means itself. Lorem Ipsum, then, 
                        refers to your pain. The word "sham pain" in the song by Five Finger Death Punch in modern music lyrics
                        corresponds to lorem ipsum

                        

                        </p>
                    </div>

                </div>

                {/* <div className="mt-[5rem] text-center">
                    <h1>some of Us</h1>

                <div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96 mt-[2rem]">
                    <Carousel>
                        <img src="src/assets/undraw_Portfolio_website_re_jsdd.png" alt="..." />
                        <img src="src/assets/undraw_Business_plan_re_0v81.png" alt="..." />
                        <img src="src/assets/undraw_Businessman_re_mlee.png" alt="..." />
                        <img src="src/assets/undraw_Completing_re_i7ap.png" alt="..." />
                        <img src="src/assets/undraw_Insert_re_s97w.png" alt="..." />
                    </Carousel>
                    <Carousel indicators={false}>
                        <img src="src/assets/undraw_Online_cv_re_gn0a (1).png" alt="..." />
                        <img src="src/assets/undraw_Online_cv_re_gn0a.png" alt="..." />
                        <img src="src/assets/undraw_Select_re_3kbd.png" alt="..." />
                        <img src="src/assets/undraw_website_ij0l.svg" alt="..." />
                        <img src="src/assets/undraw_Lost_re_xqjt.png" alt="..." />
                    </Carousel>
                </div>
                </div> */}
        </section>
    )
}