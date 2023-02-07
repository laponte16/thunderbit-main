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
                <p className='w-4/5 mt-1'><b>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent a est ipsum. Duis posuere purus nec feugiat ullamcorper. Pellentesque viverra nisl eget magna rhoncus, at iaculis sapien lacinia. Nam pharetra, enim finibus egestas rutrum, enim nulla elementum nisi, quis scelerisque nunc metus eget ante. Aenean iaculis, augue vel porta laoreet, dolor ligula ornare diam, et convallis arcu elit quis urna. Integer sollicitudin sagittis tortor eget vestibulum. Cras sed justo ultrices, tincidunt urna a, sollicitudin purus.</b></p>
            </div>
            <div className='flex flex-row justify-center'>
                <img src={logo} className='w-1/5 p-2'></img>
                <img src={logo} className='w-1/5 p-2'></img>
                <img src={logo} className='w-1/5 p-2'></img>
            </div>
        </div>
    );
}

export default Home;