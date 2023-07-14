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
                No matter the size or level of ambition of the project, a good and solid design 
                is the key to success.
            </p>
            <p className='mt-2'>
                It can be considered a pre-requisite for any project with us to ensure the quality 
                and results you expect.
            </p>
            <p className='mt-2'>
                We'll help you with the structure, logic and functions your site should have, 
                as well as keeping it reigned inside the budget.
            </p>
            <p className='mt-2'>
                We offer this as an independent service and 
                also add it to any of our other programming offers as 
                the first goal to meet.
            </p>
            <p className='mt-2'>
                You can expect from our Designs: 
            </p>
            <div className='flex flex-col self-center fondo-blue2 p-3'>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-white'><FaCircle/></span>
                        Modern Site Distribution
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-white'><FaCircle/></span>
                        Theory of colour-compliant selection of Site Colours.
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-white'><FaCircle/></span>
                        Almost two decades of combined experience in function development
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-white'><FaCircle/></span>
                        A fully coloured Figma page design example to showcase the results.
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-white'><FaCircle/></span>
                        A complete hierarchical tree including all the elements 
                        and structure of the Website/Application
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-white'><FaCircle/></span>
                        For all the results to be compiled into PDF format 
                        and provided to you at no additional cost.
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

export default Design;