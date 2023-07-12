import React from 'react';
import logo from '../images/logo.png';
import {FaCircle} from "react-icons/fa";

function WebApp() {

    return(

            
        <div className='flex flex-col justify-center border-2 borde-dark fondo-blue texto-white sm:px-20 py-7 px-7'>
        <span className='self-center texto-subtitulo'><b>Web Application</b></span>
        <span className='self-center'><b>Modern, Compact, Powerful</b></span>
        <div className='self-center my-7 '>
            <p>
                Are You Into Commerce, Entertaiment, Marketing or Building a Community Online?
                A Fullblown Web Application may be just what you're looking for.
            </p>
            <p className='mt-2'>
                Whenever there is a need to store and process the Data we get from our Users,
                this should be your choice.
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

export default WebApp;