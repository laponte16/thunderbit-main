import React from 'react';
import logo from '../images/logo.png';
import {FaCircle} from "react-icons/fa";

function DeliveryManager() {

    return(

            
            <div className='flex flex-col justify-center'>
                <span className='self-center texto-subtitulo texto-blue'><b>Delivery Manager</b></span>
                <span className='self-center texto-blue'><b>A RESTful Application for Bulk Sale and Business Administration</b></span>
                <div className='self-center'>
                    Aqui una Introduccion
                </div>
                <div className='flex flex-col md:flex-row self-center mt-4'>
                    <img className='w-full md:w-1/3' src={logo} alt="" />
                    <img className='w-full md:w-1/3' src={logo} alt="" />
                    <img className='w-full md:w-1/3' src={logo} alt="" />
                </div>
                <div className='self-center'>
                    Aqui las funciones o puntos resaltantes, a nivel tecnico
                </div>
            </div>

    );
}

export default DeliveryManager;