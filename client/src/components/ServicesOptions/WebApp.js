import React from 'react';
import {FaCircle} from "react-icons/fa";
import { Fade,Slide } from '@mui/material';

function WebApp() {

    return(

            
        <div className='flex flex-col justify-center border-2 borde-dark fondo-blue texto-white sm:px-20 py-7 px-7'>

        <Fade in={true} timeout={1000}>
            <Slide in={true}>
                <span className='self-center texto-subtitulo'><b>Web Application</b></span>
            </Slide>
        </Fade>
        <Fade in={true} timeout={1250}>
            <Slide in={true}>
                <span className='self-center'><b>Modern, Compact, Powerful</b></span>
            </Slide>
        </Fade>
        <div className='self-center my-7 '>
            <Fade in={true} timeout={1500}>
                <p>
                    Are You Into Commerce, Entertaiment, Marketing or Building a Community Online?
                    A Fullblown Web Application may be just what you're looking for.
                </p>
            </Fade>
            <Fade in={true} timeout={1750}>
                <p className='mt-2'>
                    Whenever there is a need to store and process the Data we get from our Users,
                    this should be your choice.
                </p>
            </Fade>
            <Fade in={true} timeout={2000}>
                <p className='mt-2'>
                    A couple examples would be Forums, Shopping Sites, Record Keeping, Videogames and any kind of 
                    Website that would involve changing what is displayed beyond just adding new content. 
                </p>
            </Fade>
            <Fade in={true} timeout={2250}>
                <p className='mt-2'>
                    You can expect from our Apps: 
                </p>
            </Fade>
            <Fade in={true} timeout={2500}>
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
                        Secure Transfer and Storage of sensible Data 
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-white'><FaCircle/></span>
                        Easy and cheap to run on most modern enviroments
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-white'><FaCircle/></span>
                        Fully Documented, with Manuals, Progress Reports and Video Proof
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-white'><FaCircle/></span>
                        On-going Support on the lifetime of the Application 
                            
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
            </Fade>
            <Fade in={true} timeout={2750}>
                <p className='mt-2'>
                    Interested? Find us on 
                    <b className='hover-text-blue rounded p-1 texto-subtitulo'><a href="https://www.fiverr.com/thunderbitcode">Fiverr</a></b> 
                    and 
                    <b className='hover-text-blue rounded p-1 texto-subtitulo'><a href="https://www.upwork.com/freelancers/~01705b8c54e863f159">Upwork</a></b> 
                </p>
            </Fade>
            
            
        </div>
    </div>

    );
}

export default WebApp;