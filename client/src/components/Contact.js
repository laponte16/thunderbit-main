import React from 'react';
import {Link} from 'react-router-dom';

function Contact() {
    return(
        <div className='fondo-white py-2 px-8 w-full'>
            <div className='flex flex-col items-center texto-blue texto-titulo'>
                <p>
                    Picked Your Interest?
                </p>
                <p>
                    You Can Find Us by Any of the Methods Below:
                </p>
            </div>
            <div className='flex flex-col lg:flex-row justify-center items-center mt-2'>
                <div className='mt-2 lg:mr-2'>
                    <b className='hover-blue rounded p-1 texto-subtitulo'><a 
                    href="https://www.fiverr.com/thunderbitcode">
                        Fiverr
                    </a></b>
                </div>
                <div className='mt-2 lg:mr-2'>
                    <b className='hover-blue rounded p-1 texto-subtitulo'><a 
                    href="https://www.upwork.com/freelancers/~01705b8c54e863f159">
                        Upwork
                    </a></b>
                </div>
                <div className='mt-2 lg:mr-2'>
                    <b className='hover-blue rounded p-1 texto-subtitulo'><a 
                    href="https://www.linkedin.com/company/thunderbitcode">
                        Linkedin
                    </a></b>
                </div>
                <div className='mt-2 lg:mr-2'>
                    <b className='hover-blue rounded p-1 texto-subtitulo'>
                        Thunderbitcode@gmail.com
                    </b>
                </div>
            </div>
            <div className='flex flex-col text-center texto-blue texto-titulo mt-4 items-center'>
                <p className='lg:w-4/5'>
                    Please keep in mind that we won't do any first-time contract outside of
                    Fiverr/Upwork, but we do are open to chatting about project details in whatever way you
                    are most comfortable with.
                </p>
            </div>
            
        </div>
    );
}

export default Contact;