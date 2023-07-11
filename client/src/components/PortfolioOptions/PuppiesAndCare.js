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
                <div className='self-center'>
                    Aqui una Introduccion
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