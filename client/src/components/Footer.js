import React from 'react'; // ES6 js
import {Link} from 'react-router-dom';
import Tooltip from '@mui/material/Tooltip';
import { ImTwitter, ImInstagram } from "react-icons/im";
import { TbBrandFiverr, TbBrandUpwork } from "react-icons/tb";

function Footer() {
    return(
        <footer className='fondo-blue z-10 absolute bottom-0 w-full'>
            <div className='flex flex-row p-2'>
                <div className='flex flex-col w-1/2 justify-start texto-white texto-subtitulo'>
                    <p>© Thunderbit Code 2023</p>
                    <p>All Rights Reserved</p>
                    
                </div>

                <div className='flex flex-row w-1/2 justify-end texto-white'>
                    <div className='p-2'>
                        <Tooltip title="Twitter">
                            <Link to='/contact' className="w-fit h-fit">
                                <span className=' texto-icon hover-text-blue'><ImTwitter/></span>
                            </Link>
                        </Tooltip>
                        
                    </div>
                    <div className='p-2'>
                        <Tooltip title="Instagram">
                            <Link to='/contact' className="w-fit h-fit">
                                <span className="texto-icon hover-text-blue"><ImInstagram/></span>
                            </Link>
                        </Tooltip>
                        
                    </div>
                    <div className='p-2'>
                        <Tooltip title="Fiverr">
                            <Link to='https://www.fiverr.com/thunderbitcode' className="w-fit h-fit">
                                <span className=" texto-icon hover-text-blue"><TbBrandFiverr/></span>
                            </Link>
                        </Tooltip>
                        
                    </div>
                    <div className='p-2'>
                        <Tooltip title="Upwork">
                            <Link to='https://www.upwork.com/freelancers/~01705b8c54e863f159' className="w-fit h-fit">
                                <span className=" texto-icon hover-text-blue"><TbBrandUpwork/></span>
                            </Link>
                        </Tooltip>
                        
                    </div>
                </div>
            </div>
            
        </footer>
    );
}

export default Footer;