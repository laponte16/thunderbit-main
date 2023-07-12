import React from 'react';
import logo from '../images/logo.png';
import {FaCircle} from "react-icons/fa";

function Design() {

    return(

            
        <div className='flex flex-col justify-center border-2 borde-dark fondo-blue texto-white sm:px-20 py-7 px-7'>
        <span className='self-center texto-subtitulo'><b>Website Design</b></span>
        <span className='self-center'><b>The First Step is Always Charting The Path</b></span>
        <div className='self-center my-7 '>
            <p>
                A compact and easy to use forum-suite for community interaction 
                set around debate and shared love for literature.
            </p>
            <p className='mt-2'>
                Tracking of the hottest trends on the site as well as up and coming new arrivals.
            </p>
            <p className='mt-2'>
                The Forum is searchable by topic and genre simultaneously. 
            </p>
            <p className='mt-2'>
                The groundwork is set for further refining based on the direction of the community,
                like experience keeping, badges and the limitless expansion of user-made genres. 
            </p>
            <p className='mt-2'>
                Fully contained into a single NodeJs App that does all the rendering, 
                it can be run easily
                from any modern hosting service. 
            </p>
        </div>
    </div>

    );
}

export default Design;