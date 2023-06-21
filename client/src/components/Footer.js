import React from 'react'; // ES6 js
import {Link} from 'react-router-dom';
import { ImTwitter, ImInstagram } from "react-icons/im";
import { TbBrandFiverr, TbBrandUpwork } from "react-icons/tb";

function Footer() {
    return(
        <footer className='fondo-blue'>
            <div className='flex flex-row'>
                <div className='flex flex-row w-1/2 justify-start texto-white'>
                    <p className='p-2'>ThunderBit Kiss kiss muah muah</p>
                </div>

                <div className='flex flex-row w-1/2 justify-end texto-white'>
                    <div className='p-2'>
                        <Link to='/' className="w-fit h-fit">
                            <span className=' texto-icon hover-text-blue'><ImTwitter/></span>
                        </Link>
                    </div>
                    <div className='p-2'>
                        <Link to='/portfolio' className="w-fit h-fit">
                            <span className="texto-icon hover-text-blue"><ImInstagram/></span>
                        </Link>
                    </div>
                    <div className='p-2'>
                        <Link to='/services' className="w-fit h-fit">
                            <span className=" texto-icon hover-text-blue"><TbBrandFiverr/></span>
                        </Link>
                    </div>
                    <div className='p-2'>
                        <Link to='/contact' className="w-fit h-fit">
                            <span className=" texto-icon hover-text-blue"><TbBrandUpwork/></span>
                        </Link>
                    </div>
                </div>
            </div>
            
        </footer>
    );
}

export default Footer;