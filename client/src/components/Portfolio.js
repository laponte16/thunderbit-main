import React,{useState} from 'react';
import Select, {createFilter} from 'react-select';

import Introduction from './PortfolioOptions/Introduction';
import DeliveryManager from './PortfolioOptions/DeliveryManager';
import BookLovers from './PortfolioOptions/BookLovers';
import ISPSample from './PortfolioOptions/ISPSample';
import PuppiesAndCare from './PortfolioOptions/PuppiesAndCare';

function Portfolio() {

    const [vista, setVista] = useState(0);

    const options = [
        {label:"Introduction",value:0},
        {label:"Delivery Manager App",value:1},
        {label:"Book Review Forum",value:2},
        {label:"Internet Service Provider",value:3},
        {label:"Pet Care Shop",value:4}
    ]

    return(
        <div className='fondo-white py-2 px-8'>
            <Select className='texto-negro w-[calc(50%+2rem)]' 
                defaultValue={{ 
                    label:'Choose a Project', 
                    value:0
                    }}  
                onChange={
                    (option)=>{
                        setVista(option.value)
                    }
                } 
                filterOption={
                    createFilter({
                    matchFrom: 'any',
                    stringify: option => `${option.label}`
                    })
                }
                options={options}
            />
            <div className='flex flex-col justify-center mt-4'>
                {
                    vista === 0 &&
                    <Introduction/>
                }
                {
                    vista === 1 &&
                    <DeliveryManager/>
                }
                {
                    vista === 2 &&
                    <BookLovers/>
                }
                {
                    vista === 3 &&
                    <ISPSample/>
                }
                {
                    vista === 4 &&
                    <PuppiesAndCare/>
                }
            </div>
            
        </div>
    );
}

export default Portfolio;