import React from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min'


export default function AboutUs(){
    return(
        <section className='mt-[10rem] '>



            <div className='grid justify-center text-center gap-[3rem]'>
                <div className="title_aboutUs">
                    <h1 className='font-bold  text-3xl'>More About Us  </h1>
                </div>
                <div className="wrapper">
                    <p class="mb-3 text-gray-700 dark:text-gray-400 first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-start">Track work across the enterprise through an open, collaborative platform. Link issues across Jira and ingest data from other software development tools, so your IT support and operations teams have richer contextual information to rapidly respond to requests, incidents, and changes.</p>
                    <p class="text-gray-700 dark:text-gray-700">Deliver great service experiences fast - without the complexity of traditional ITSM solutions.Accelerate critical development work, eliminate toil, and deploy changes with ease, with a complete audit trail for every change.</p>
                </div>

            </div>

        </section>
    )
}