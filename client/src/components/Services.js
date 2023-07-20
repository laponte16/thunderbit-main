import React,{useState} from 'react';

import Introduction from './ServicesOptions/Introduction';
import WebApp from './ServicesOptions/WebApp';
import Static from './ServicesOptions/Static';
import Translation from './ServicesOptions/Translation';
import Design from './ServicesOptions/Design';

function Services() {

    const [vista, setVista] = useState(0);

    return(
        <div className='fondo-white pt-6 pb-2 px-8'>
            <div className='flex flex-col md:flex-row w-full'>
                <div className='flex flex-col self-center text-center texto-dark w-full md:w-1/4 rounded border borde-dark fondo-blue2 p-7 mr-2'>
                   <button className='hover-blue rounded-md' onClick={()=> setVista(0)}>READ ME FIRST</button>
                   <button className='mt-2 hover-blue rounded-md' onClick={()=> setVista(1)}>WEB APPLICATION</button>
                   <button className='mt-2 hover-blue rounded-md' onClick={()=> setVista(2)}>STATIC WEBSITE</button>
                   <button className='mt-2 hover-blue rounded-md' onClick={()=> setVista(3)}>WEBSITE TRANSLATION</button>
                   <button className='mt-2 hover-blue rounded-md' onClick={()=> setVista(4)}>WEBSITE DESIGN</button>
                </div>
                <div className='self-center mt-4 md:mt-0 w-full md:w-3/4'>
                    {
                        vista === 0 &&
                        <Introduction/>
                    }
                    {
                        vista === 1 &&
                        <WebApp/>
                    }
                    {
                        vista === 2 &&
                        <Static/>
                    }
                    {
                        vista === 3 &&
                        <Translation/>
                    }
                    {
                        vista === 4 &&
                        <Design/>
                    }
                    
                </div>
            </div>
        </div>
    );
}

export default Services;