import React from 'react';
import {Link} from 'react-router-dom';
import pexels from './images/pexels.gif'
import carousel3 from './images/carousel3.jpg'
import carousel from './images/carousel.jpg'
import carousel2 from './images/carousel2.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { ImPencil2, ImCogs, ImMobile, ImUser, ImLock } from "react-icons/im";
import { Slide } from '@mui/material';

function Home() {
    return(
        <div className='flex flex-col fondo-white py-2 px-8 items-center w-full'>
            <div className='flex justify-center items-end w-full pt-4 relative'>
                <div className='flex flex-col justify-center items-center w-full 
                md:w-3/5 fondo-blue2 texto-dark md:bg-opacity-50 md:bg-gray-100 py-3 px-8 text-center rounded md:float-right md:absolute'>
                    <p className='texto-subtitulo mb-1 texto-fancy'><b>Computer Engineers</b></p>
                    <p className='texto-titulo mb-1 texto-fancy'><b>&</b></p>
                    <p className='texto-subtitulo pb-1 texto-fancy'><b className=''>Professional Web Developers</b></p>
                    <Link to='/services' className="texto-subtitulo fondo-blue w-fit py-1 px-2 rounded texto-white hover-blue"><b>Our Offers</b></Link>
                </div>
                <div className='w-full m-0 p-0 text-center hidden md:flex justify-center'>
                    <img src={pexels} alt="my-gif" />
                </div>
            </div>
            <div className='w-full flex flex-col mt-8 rounded pt-1 pb-8 texto-white'>
                <Slide in={true} direction={'right'} timeout={750}>
                    <p className='self-center texto-big texto-blue overline p-1 rounded-md w-2/3 text-center'><b>Who We Are</b></p>
                </Slide>
                <Slide in={true} direction={'left'} timeout={750}>
                    <p className='flex flex-col self-center mt-3 fondo-blue p-2 rounded-md w-2/3 text-center'>
                        Thunderbit Code is an independent group of Computer Engineers 
                        specialized in Web Development, offering services 
                        ranging from simple static pages to the most state-of-the-art Apps. 
                        We're passionate about our work and trying out new things everyday! 
                        
                        <span>
                            Bilinguals in English and Spanish 
                            and fielding fully fledged modern design and marketing strategies, 
                            our team is ready to tackle any challenge.
                        </span>
                    </p>
                </Slide>
                <Slide in={true} direction={'right'} timeout={750}>
                    <div className='flex flex-row justify-evenly texto-blue my-4 w-full sm:w-2/3 self-center text-center'>
                        <div className='flex flex-col w-1/3 items-center'>
                            <p><i><b>Design</b> </i></p>
                            <span className='texto-icon mt-2'><ImPencil2/></span>
                        </div>
                        <div className='flex flex-col w-1/3 items-center'>
                            <p><i><b>Performance</b> </i></p>
                            <span className='texto-icon mt-2'><ImCogs/></span>
                        </div>
                        <div className='flex flex-col w-1/3 items-center'>
                            <p><i><b>Multiplatform</b> </i></p>
                            <span className='texto-icon mt-2'><ImMobile/></span>
                        </div>
                    </div>
                </Slide>
                <Slide in={true} direction={'left'} timeout={750}>
                    <div className='flex flex-col justify-center'>
                        <div className='flex flex-row justify-evenly texto-blue my-4 w-full sm:w-2/3 self-center text-center'>
                            <div className='flex flex-col w-1/2 items-center'>
                                <p><i><b>User Sessions</b> </i></p>
                                <span className='texto-icon mt-2'><ImUser/></span>
                            </div>
                            <div className='flex flex-col w-1/2 items-center'>
                                <p><i><b>Secure</b> </i></p>
                                <span className='texto-icon mt-2 pl-3'><ImLock/></span>
                            </div>
                        </div>
                        <p className='self-center mt-3 fondo-blue p-2 rounded-md w-2/3 text-center'>
                            Are you starting a new business, 
                            branching out to new sectors, 
                            modernizing your brand or 
                            simply want a little piece of the internet to build your dreams on? 
                            We would be more than happy to work alongside you on achieving it.
                        </p>
                    </div>
                    
                </Slide>
                
                
                
            </div>
            <Carousel
            showThumbs = {false}
            showStatus = {false}
            emulateTouch = {true}
            className='w-full lg:w-4/6 mb-14'
            >
                <div className=''>
                    <img src={carousel3} alt='A Universe of Possibilities'></img>
                </div>
                <div className=''>
                    <img src={carousel} alt='Fast. Clean. Sharp'></img>
                    </div>
                <div className=''>
                    <img src={carousel2} alt='Power Up Your Dreams'></img>
                    </div>
            </Carousel>
            <div className='flex flex-row justify-center w-full mt-10 px-16'>
                
            </div>
        </div>
    );
}

export default Home;