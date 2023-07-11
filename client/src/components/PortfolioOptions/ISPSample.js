import React from 'react';
import ISPHome from '../images/ISPHome.png';
import ISPHome2 from '../images/ISPHome2.png';
import ISPplans from '../images/ISPplans.png';
import {FaCircle} from "react-icons/fa";

function ISPSample() {

    return(

            
            <div className='flex flex-col justify-center'>
                <span className='self-center texto-subtitulo texto-blue'><b>ISP Sample</b></span>
                <span className='self-center texto-blue'><b>A Fullstack Website for a New and Quickly Expanding Internet Service Provider</b></span>
                <div className='self-center fondo-blue texto-white rounded my-7 border-2 borde-dark py-7 px-7 sm:px-20'>
                    <p>
                        A fully animated legacy App for a budding Internet Provider.
                    </p>
                    <p className='mt-2'>
                        Modern design and compact presentation are used to bring user attention to all the
                        important points of interest. 
                    </p>
                    <p className='mt-2'>
                        Low resource use and full compatibility with Apache Servers.
                    </p>
                    <p className='mt-2'>
                        On display is an array of many kinds of different types of animation techniques,
                        all applied by CSS as to reduce the script loading times. 
                    </p>
                    <p className='mt-2'>
                        User interaction can be tracked as to better understand the needs of the customer base!
                    </p>
                </div>
                <div className='flex flex-col md:flex-row self-center mt-4'>
                    <img className='w-full md:w-1/3 rounded border-2 borde-blue m-1' src={ISPHome} alt="" />
                    <img className='w-full md:w-1/3 rounded border-2 borde-blue m-1' src={ISPHome2} alt="" />
                    <img className='w-full md:w-1/3 rounded border-2 borde-blue m-1' src={ISPplans} alt="" />
                </div>
                <div className='flex flex-col self-center my-7 rounded border borde-dark fondo-blue2 p-7'>
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
                        PHP for Legacy Backend Systems
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-blue'><FaCircle/></span>
                        MySQL for Accesible and Efficient Database Managing 
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-blue'><FaCircle/></span>
                        Our Local Suite of Encryption/Routing/Client Authentication for Solid Protection
                    </p>
                </div>
            </div>

    );
}

export default ISPSample;