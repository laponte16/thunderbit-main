import React from 'react';
import logo from '../images/logo.png';

function Introduction() {

    return(

            
            <div className='flex flex-col justify-center'>
                <span className='self-center texto-subtitulo texto-blue'><b>Compendium</b></span>
                <span className='self-center texto-blue'><b>Finished Projects of Note</b></span>
                <div className='self-center text-center fondo-blue texto-white rounded-md p-2'>
                    <p>
                        Here we try to showcase a variety of completed Sites, with vastly different approaches,
                        techniques and themes. 
                    </p>
                    <p className='mt-1'>
                        The idea is to give you, our potential partner, guidance into what
                        you can expect from us in terms of quality and features, as well as present you with the
                        mindset of there being many paths to solve a Problem.
                    </p>
                    <p className='mt-1'>
                        The Problem in Question?
                    </p>
                    <p className='mt-1'>
                        <b>Not having Your dreamed Website in hand already!</b>  
                    </p>
                </div>
                <div className='flex flex-col md:flex-row self-center mt-4'>
                    <img className='w-full md:w-1/3' src={logo} alt="" />
                    <img className='w-full md:w-1/3' src={logo} alt="" />
                    <img className='w-full md:w-1/3' src={logo} alt="" />
                </div>
            </div>

    );
}

export default Introduction;