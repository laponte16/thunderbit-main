import React from 'react';
import logo from '../images/logo.png';
import PncHome from '../images/PncHome.png';
import PncLanding from '../images/PncLanding.png';
import PncTraining from '../images/PncTraining.png';
import {FaCircle} from "react-icons/fa";

function PuppiesAndCare() {

    return(

            
            <div className='flex flex-col justify-center'>
                <span className='self-center texto-subtitulo texto-blue'><b>Puppies & Care</b></span>
                <span className='self-center texto-blue'><b>A Static Website Aimed at Entrepreneurial Petcare Shops</b></span>
                <div className='self-center fondo-blue texto-white rounded my-7 border-2 borde-dark py-7 px-7 sm:px-20'>
                    <p>
                        A sizable static site for all the marketing needs of 
                        an All-rounder Petcare shop, in bilingual presentation.
                    </p>
                    <p className='mt-2'>
                        Information is presented in small animated chunks complemented by images, 
                        instead of simple text blocks. 
                    </p>
                    <p className='mt-2'>
                        The translation is completed, with every part of the page being available to 
                        both parts of the target audiences.
                    </p>
                    <p className='mt-2'>
                        Straightforward in code, even the most barebones hosting provider can run this site. 
                    </p>
                    <p className='mt-2'>
                        Resource use is kept to a minimum, with no outside calls needed on the client side 
                        besides for the page itself.
                    </p>
                </div>
                <div className='flex flex-col md:flex-row self-center mt-4'>
                    <img className='w-full md:w-1/3 rounded border-2 borde-blue m-1' src={PncHome} alt="" />
                    <img className='w-full md:w-1/3 rounded border-2 borde-blue m-1' src={PncLanding} alt="" />
                    <img className='w-full md:w-1/3 rounded border-2 borde-blue m-1' src={PncTraining} alt="" />
                </div>
                <div className='flex flex-col self-center my-7 rounded border borde-dark fondo-blue2 p-7'>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-blue'><FaCircle/></span>
                        JQuery for Client-side Scripting
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-blue'><FaCircle/></span>
                        A Landing Page to Showcase Your Business's Strong Points From the Get-go 
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-blue'><FaCircle/></span>
                        Cheap to mantain and with no need for any fancy hosting service!
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-blue'><FaCircle/></span>
                        We'll help you study the best marketing practices in your field
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-blue'><FaCircle/></span>
                        A Bilingual Site, in both English and Spanish 
                    </p>
                </div>
                
            </div>

    );
}

export default PuppiesAndCare;