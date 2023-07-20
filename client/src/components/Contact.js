import React from 'react';
import { Fade,Slide } from '@mui/material';

function Contact() {
    return(
        <div className='fondo-white pt-6 pb-2 px-8 w-full'>
            <Fade in={true} timeout={1000}>
                <div className='flex flex-col items-center texto-blue texto-titulo'>
                    
                    <p>
                       <b>Picked Your Interest?</b> 
                    </p>
                    <p>
                        <b>You Can Find Us by Any of the Methods Below:</b>
                    </p>
                </div>
            </Fade>
            
            <div className='flex flex-col lg:flex-row justify-center items-center mt-8'>
                <Slide in={true} direction={'right'} timeout={750}>
                    <div className='mt-2 lg:mr-2'>
                        <b className='hover-blue rounded p-1 texto-subtitulo'><a 
                        href="https://www.fiverr.com/thunderbitcode">
                            Fiverr
                        </a></b>
                    </div>
                </Slide>
                <Slide in={true} direction={'up'} timeout={750}>
                    <div className='mt-2 lg:mr-2'>
                        <b className='hover-blue rounded p-1 texto-subtitulo'><a 
                        href="https://www.upwork.com/freelancers/~01705b8c54e863f159">
                            Upwork
                        </a></b>
                    </div>
                </Slide>
                <Slide in={true} direction={'down'} timeout={750}>
                    <div className='mt-2 lg:mr-2'>
                        <b className='hover-blue rounded p-1 texto-subtitulo'><a 
                        href="https://www.linkedin.com/company/thunderbitcode">
                            Linkedin
                        </a></b>
                    </div>
                </Slide>
                <Slide in={true} direction={'left'} timeout={750}>
                    <div className='mt-2 lg:mr-2'>
                        <b className='hover-blue rounded p-1 texto-subtitulo'>
                            Thunderbitcode@gmail.com
                        </b>
                    </div>
                </Slide>
                
            </div>
            <Fade in={true} timeout={1000}>
                <div className='flex flex-col text-center texto-blue texto-titulo mt-8 items-center'>
                    <p className='lg:w-4/5'>
                        <b>
                            Please keep in mind that we won't do any first-time contract outside of
                            Fiverr/Upwork, but we do are open to chatting about project details in whatever way you
                            are most comfortable with.
                        </b>
                        
                    </p>
                </div>
            </Fade>
            
        </div>
    );
}

export default Contact;