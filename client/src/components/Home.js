import React from 'react';
import {Link} from 'react-router-dom';
import logo from './images/logo.png'

function Home() {
    return(
        <div className='fondo-white py-2 px-8'>
            <div className='flex flex-row justify-between'>
                <div></div>
                <div className='flex flex-col justify-end items-end borde-blue border-4 pt-3 pb-1 pl-28 pr-3 mr-2 text-end rounded'>
                    <p className='texto-titulo mb-2'><b>Computer Engineers</b></p>
                    <p className='texto-subtitulo'><b>Profesional Web</b></p>
                    <p className='texto-subtitulo'><b>Developers</b></p>
                    <Link to='/' className="texto-subtitulo fondo-blue w-fit p-1 rounded texto-white"><b>Our Offers</b></Link>
                </div>
            </div>
            <div className='w-full fondo-gray mt-8 rounded pt-1 pb-8 pl-4 texto-white'>
                <p className='texto-subtitulo'><b>Who We Are</b></p>
                
                <p className='w-4/5 mt-2'>Welcome all!</p>
                <br></br>
                <p className='w-4/5'>Thunderbit Code is an independent group of Computer Engineers specialized in Web Development, offering services ranging from simple static pages to the most state-of-the-art Apps. We're passionate about our work and trying out new things everyday, firmly bilinguals in both English and Spanish and fielding full fledged modern design and marketing strategies.</p>
                <br></br>
                <p className='w-4/5'>If you're starting a new business, branching out to new industries, modernizing your brand or simply want a little piece of the internet to build your dreams on? We would be more than happy to work with you together on achieving it.</p>
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