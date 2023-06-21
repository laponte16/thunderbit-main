import React from 'react';
import {Link} from 'react-router-dom';
import logo from './images/logo.png'
import { ImPencil2, ImCogs, ImMobile, ImUser, ImLock } from "react-icons/im";

function Home() {
    return(
        <div className='fondo-white py-2 px-8'>
            <div className='flex flex-row justify-center md:justify-end w-full'>
                <div className='w-full p-2 fondo-blue text-center'>
                    IMAGEN TIKI TIKI
                </div>
                <div className='flex flex-col justify-end items-center w-2/3 md:w-1/4 fondo-blue2 py-3 px-8 text-center rounded'>
                    <p className='texto-titulo mb-2'><b>Computer Engineers</b></p>
                    <p className='texto-subtitulo pb-1'><b>Profesional Web Developers</b></p>
                    <Link to='/services' className="texto-subtitulo fondo-blue w-fit py-1 px-2 rounded texto-white hover-blue"><b>Our Offers</b></Link>
                </div>
            </div>
            <div className='w-full flex flex-col mt-8 rounded pt-1 pb-8 texto-white'>
                <p className='self-center texto-subtitulo texto-blue p-1 rounded-md w-2/3 text-center'><b>Who We Are</b></p>

                <p className='self-center mt-3 fondo-blue p-2 rounded-md w-2/3 text-center'>
                    Thunderbit Code is an independent group of Computer Engineers 
                    specialized in Web Development, offering services 
                    ranging from simple static pages to the most state-of-the-art Apps. 
                    We're passionate about our work and trying out new things everyday, 
                    firmly bilinguals in both English and Spanish 
                    and fielding fully fledged modern design and marketing strategies.
                </p>
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
                    If you're starting a new business, 
                    branching out to new sectors, 
                    modernizing your brand or 
                    simply want a little piece of the internet to build your dreams on? 
                    We would be more than happy to work with you together on achieving it.
                </p>
            </div>
            <div className='flex flex-row justify-center w-full mt-10 px-16'>
                <div className='flex flex-col justify-end w-1/4 p-2'><img src={logo}></img></div>
                <div className='w-2/4 flex flex-col justify-end p-2'><img src={logo}></img></div>
                <div className='w-1/4 flex flex-col justify-end p-2'><img src={logo}></img></div>
            </div>
        </div>
    );
}

export default Home;