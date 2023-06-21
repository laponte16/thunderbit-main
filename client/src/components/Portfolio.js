import React,{useState} from 'react';
import Select, {createFilter} from 'react-select';

function Portfolio() {

    const [vista, setVista] = useState(0);

    const options = [
        {label:"First",value:1},
        {label:"Second",value:2}
    ]

    return(
        <div className='fondo-white py-2 px-8'>
            Un texto introductorio
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
                    <span>Sin Opcion</span>
                }
                {
                    vista === 1 &&
                    <span>primera</span>
                }
                {
                    vista === 2 &&
                    <span>Segunda</span>
                }
            </div>
            
        </div>
    );
}

export default Portfolio;