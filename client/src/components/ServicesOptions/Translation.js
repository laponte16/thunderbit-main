import React from 'react';
import {FaCircle} from "react-icons/fa";
import { Fade,Slide } from '@mui/material';

function Translation() {

    return(

            
        <div className='flex flex-col justify-center border-2 borde-dark fondo-blue texto-white sm:px-20 py-7 px-7'>
        <Fade in={true} timeout={1000}>
            <Slide in={true}>
                <span className='self-center texto-subtitulo'><b>Website Translation</b></span>
            </Slide>
        </Fade>
        <Fade in={true} timeout={1250}>
            <Slide in={true}>
                <span className='self-center'><b>Open Your Business to New Horizons</b></span>
            </Slide>
        </Fade>
        <div className='self-center my-7 '>
            <Fade in={true} timeout={1500}>
                <p>
                    If you wish to extend your feet into the waters of a bilingual audience, 
                    then you came to the right place.
                </p>
            </Fade>
            <Fade in={true} timeout={1750}>
                <p className='mt-2'>
                    Combined, the English and Spanish speaking world represent almost two billion people!
                </p> 
            </Fade>
            <Fade in={true} timeout={2000}>
                <p className='mt-2'>
                    Be it translating Your Website or Application from English to Spanish or the other way around,
                    We're happy to help! 
                </p>
            </Fade>
            <Fade in={true} timeout={2250}>
                <p className='mt-2'>
                    You can expect from our Translation Service: 
                </p>
            </Fade>
            <Fade in={true} timeout={2500}>
                <div className='flex flex-col self-center fondo-blue2 p-3'>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-white'><FaCircle/></span>
                        Deep grammatical and cultural Knowledge of both sides of the equation
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-white'><FaCircle/></span>
                        High Proficiency in technical terms and localisms
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-white'><FaCircle/></span>
                        Lighting-fast writting progress
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-white'><FaCircle/></span>
                        Affordable rates
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-white'><FaCircle/></span>
                        Our full support in the marketing deparment 
                        on how to better reach foreign audiences
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-white'><FaCircle/></span>
                        Proof-reading and consultations before the final delivery
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

export default Translation;