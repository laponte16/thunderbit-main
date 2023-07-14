import React from 'react';
import logo from '../images/logo.png';
import {FaCircle} from "react-icons/fa";

function Static() {

    return(

            
        <div className='flex flex-col justify-center border-2 borde-dark fondo-blue texto-white sm:px-20 py-7 px-7'>
        <span className='self-center texto-subtitulo'><b>Static Website</b></span>
        <span className='self-center'><b>Build Yourself a Home in the Web</b></span>
        <div className='self-center my-7 '>
            <p>
                The Classic Experience: Your Little Piece of the World Wide Web, for you to use 
                as you see fit.
            </p>
            <p className='mt-2'>
                There is no better way in the modern World to make Yourself and Your Creations Known to 
                Everybody.
            </p>
            <p className='mt-2'>
                If We can work Together to make a Blueprint for it, 
                then We can assure you We can Build it for you. 
            </p>
            <p className='mt-2'>
                You can expect from our Static Sites: 
            </p>
            <div className='flex flex-col self-center fondo-blue2 p-3'>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-white'><FaCircle/></span>
                        Cutting Edge Frameworks and technologies
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-white'><FaCircle/></span>
                        Modern and Professional Design
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-white'><FaCircle/></span>
                        Practically universal compatibility and trivial file size
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-white'><FaCircle/></span>
                        Fully Documented, with Manuals, Progress Reports and Video Proof
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-white'><FaCircle/></span>
                        On-going Support on the lifetime of the Site
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-white'><FaCircle/></span>
                        Source Code Provided
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-white'><FaCircle/></span>
                        No charges applied to short consultations and full Warranty
                    </p>
                </div>
            <p className='mt-2'>
                Interested? Find us on 
                <b className='hover-text-blue rounded p-1 texto-subtitulo'><a href="https://www.fiverr.com/thunderbitcode">Fiverr</a></b> 
                and 
                <b className='hover-text-blue rounded p-1 texto-subtitulo'><a href="https://www.upwork.com/freelancers/~01705b8c54e863f159">Upwork</a></b> 
            </p>
        </div>
    </div>

    );
}

export default Static;