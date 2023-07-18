import React from 'react';
import logo from '../images/logo.png';
import {FaCircle} from "react-icons/fa";
import { Fade,Slide } from '@mui/material';

function Introduction() {

    return(

            
            <div className='flex flex-col justify-center border-2 borde-dark fondo-blue texto-white sm:px-20 py-7 px-7'>
                <Fade in={true} timeout={1000}>
                    <Slide in={true}>

                    <span className='self-center texto-subtitulo'><b>Before You Buy</b></span>
                    </Slide>
                </Fade>
                <Slide in={true}>
                    <Fade in={true} timeout={1250}>
                        <span className='self-center'><b>A Couple Things to Bear in Mind</b></span>
                    </Fade>
                </Slide>
                <div className='self-center my-7 '>
                    <Fade in={true} timeout={1500}>
                        <p>
                            Thank you for taking the time to past through here!
                        </p>
                    </Fade>
                    <Fade in={true} timeout={1750}>
                        <p className='mt-2'>
                            We're a small team and do most of our business remotely for the sake of simplicity and practicality.
                        </p>
                    </Fade>
                    <Fade in={true} timeout={2000}>
                        <p className='mt-2'>
                            While we're open to chats, videocalls and emails outside of our chosen mediums,
                            we believe it's best if we keep all the actual dealings on Fiverr/Upwork, as to ensure 
                            a layer of security for both parties. 
                        </p>
                    </Fade>
                    
                    <Fade in={true} timeout={2250}>
                        <p className='mt-2'>
                            We work best on what we know and it will never be easy to give trustworthy estimates on time or
                            price outside of our expertise. That is the reason we'll be leary to work with frameworks or
                            enviroments too removed from our own unless the client is aware of said fact and how it could raise 
                            project costs. 
                        </p>
                    </Fade>
                    
                    <Fade in={true} timeout={2500}>
                        <p className='mt-2'>
                            All of our work has a life-long warranty, as long as it is not modified beyond the original scope. 
                            We don't charge for short consultations, 
                            so don't be afraid to ask for clarification before any purchase or extension!
                        </p>
                    </Fade>
                </div>
            </div>

    );
}

export default Introduction;