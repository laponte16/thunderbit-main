import React from 'react';
import logo from '../images/logo.png';
import {FaCircle} from "react-icons/fa";

function ISPSample() {

    return(

            
            <div className='flex flex-col justify-center'>
                <span className='self-center texto-subtitulo texto-blue'><b>ISP Sample</b></span>
                <span className='self-center texto-blue'><b>A Fullstack Website for a New and Quickly Expanding Internet Service Provider</b></span>
                <div className='self-center'>
                    Aqui una Introduccion
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