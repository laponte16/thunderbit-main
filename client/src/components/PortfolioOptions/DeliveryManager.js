import React from 'react';
import GpAdm from '../images/GpAdm.png';
import Gpcobrar from '../images/Gpcobrar.png';
import GpDesp from '../images/GpDesp.png';
import GpHome from '../images/GpHome.png';
import GpLogin from '../images/GpLogin.png';
import {FaCircle} from "react-icons/fa";

function DeliveryManager() {

    return(

            
            <div className='flex flex-col justify-center'>
                <span className='self-center texto-subtitulo texto-blue'><b>Delivery Manager</b></span>
                <span className='self-center texto-blue'><b>A RESTful Application for Bulk Sale and Business Administration</b></span>
                <div className='self-center fondo-blue texto-white rounded my-7 border-2 borde-dark py-7 px-7 sm:px-20'>
                    <p>
                        A self-contained enterprise-level solution for small to medium-scale operations in the
                        commerce sector, aimed at bulk sale and providing merchandise to
                        up to one thousand retail clients smoothly.
                    </p>
                    <p className='mt-2'>
                        Everything from stocking the inventory,
                        setting earning margins, commissions accrued for sale  and discount lists for each product,
                        assigning vendors their own client pool to manage, 
                        transport/driver and zone control, 
                        creating individual delivery orders for clients and 
                        finally sending them off with generated and printable orders
                        for multiple clients onboard. 
                    </p>
                    <p className='mt-2'>
                        User Sessions with different roles, each with different privileges allows 
                        a growing company to keep a clear hierarchy 
                        and proper security credential verification.
                    </p>
                    <p className='mt-2'>
                        Added on top are a multitude of quality of life tools like smart search filters
                        by every clear metric, like names, phone numbers, dates and status. 
                    </p>
                    <p className='mt-2'>
                        Record keeping powered by an optimized backend solution to ensure consistent performance and easy to
                        understand presentation.
                    </p>
                </div>
                <div className='flex flex-col self-center mt-4'>
                    <div className='flex flex-col md:flex-row self-center mt-4'>
                        <img className='w-full md:w-1/3 rounded border-2 borde-blue m-1' src={GpLogin} alt="" />
                        <img className='w-full md:w-1/3 rounded border-2 borde-blue m-1' src={GpHome} alt="" />
                        <img className='w-full md:w-1/3 rounded border-2 borde-blue m-1'src={GpAdm} alt="" />
                    </div>
                    <div className='flex flex-col md:flex-row self-center justify-center object-center mt-4'>
                        <img className='w-full md:w-1/3 rounded border-2 borde-blue m-1' src={GpDesp} alt="" />
                        <img className='w-full md:w-1/3 rounded border-2 borde-blue m-1' src={Gpcobrar} alt="" />
                    </div>
                    
                </div>
                <div className='flex flex-col self-center my-7 rounded border borde-dark fondo-blue2 p-7'>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-blue'><FaCircle/></span>
                        ReactJS for extremely flexible and lightweight Client-side rendering
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-blue'><FaCircle/></span>
                        TailwindCSS for Crisp and Easy Styling
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-blue'><FaCircle/></span>
                        UI Material for top-of-the-line effects
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-blue'><FaCircle/></span>
                        NodeJS for Powerful Multiclient Backend Services
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-blue'><FaCircle/></span>
                        ExpressJS for Lighting Fast, Complex Routing
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-blue'><FaCircle/></span>
                        MySQL for Resource-cheap and widely compatible Database Managing 
                    </p>
                    <p className='flex flex-row'>
                        <span className='self-center text-[5px] pr-1 texto-blue'><FaCircle/></span>
                        Our Local Suite of Encryption/Routing/Client Authentication for Solid Protection
                    </p>
                </div>
            </div>

    );
}

export default DeliveryManager;