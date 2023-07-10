import React from 'react';
import logo from '../images/logo.png';
import {FaCircle} from "react-icons/fa";

function BookLovers() {

    return(

            
            <div className='flex flex-col justify-center'>
                <span className='self-center texto-subtitulo texto-blue'><b>Book Lovers</b></span>
                <span className='self-center texto-blue'><b>A Server-Rendered Book Review Forum for the Passionate Bibliophiles</b></span>
                <div className='self-center text-center fondo-blue texto-white rounded-md p-2'>
                    <p>
                        A compact and easy to use forum-suite for community interaction 
                        set around debate and shared love for literature.
                    </p>
                    <p className='mt-2'>
                        Tracking of the hottest trends on the site as well as up and coming new arrivals.
                    </p>
                    <p className='mt-2'>
                        The Forum is searchable by topic and genre simultaneously. 
                    </p>
                    <p className='mt-2'>
                        The groundwork is set for further refining based on the direction of the community,
                        like experience keeping, badges and the limitless expansion of user-made genres. 
                    </p>
                    <p className='mt-2'>
                        Fully contained into a single NodeJs App that does all the rendering, it can be run easily
                        from any modern hosting service. 
                    </p>
                </div>
                <div className='flex flex-col md:flex-row self-center mt-4'>
                    <img className='w-full md:w-1/3' src={logo} alt="" />
                    <img className='w-full md:w-1/3' src={logo} alt="" />
                    <img className='w-full md:w-1/3' src={logo} alt="" />
                </div>
                <div className='flex flex-col self-center'>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-blue'><FaCircle/></span>
                        JQuery for Client-side Scripting
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-blue'><FaCircle/></span>
                        TailwindCSS for Crisp and Easy Styling
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-blue'><FaCircle/></span>
                        NodeJS for Powerful Multiclient Backend Services
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-blue'><FaCircle/></span>
                        ExpressJS for Lighting Fast, Complex Routing
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-blue'><FaCircle/></span>
                        EJS for Server-Side Rendering, for a more compact application
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-blue'><FaCircle/></span>
                        PostgreSQL for Resource-cheap Database Managing 
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-blue'><FaCircle/></span>
                        Our Local Suite of Encryption/Routing/Client Authentication for Solid Protection
                    </p>
                </div>
            </div>

    );
}

export default BookLovers;