import React from 'react'

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';

const Explorar = () => {
  return (
    <div className='border-gray-200 border-[1px] h-full'>

        <div className='py-1 sticky top'>
            <div className='relative flex items-center mx-3.5'>
                <input type='text' placeholder="Buscar" className='py-3 rounded-full text-gray-500 w-full pl-12 border border-gray-300' />

                <div className='absolute top-0 left-0 pl-3 pt-3'>
                    <SearchRoundedIcon className='text-gray-500' />
                </div>
                <SettingsOutlinedIcon className='ml-3 cursor-pointer'/>
            </div>

            <div className="flex justify-evenly border-gray-200 border-b-[1px] items-center relative">
                <div className="flex flex-col w-full hover:bg-gray-100 cursor-pointer px-3">
                    <h6 className="py-2 text-base font-bold opacity-90">Para ti</h6>
                    <span className="bottom-0 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
                </div>

                <div className="flex flex-col w-full hover:bg-gray-100 cursor-pointer px-3">
                    <h6 className="py-3 text-base font-bold opacity-90">Tendencias</h6>
                </div>

                <div className="flex flex-col w-full hover:bg-gray-100 cursor-pointer px-3">
                    <h6 className="py-3 text-base font-bold opacity-90">Noticias</h6>
                </div>

                <div className="flex flex-col w-full hover:bg-gray-100 cursor-pointer px-3">
                    <h6 className="py-3 text-base font-bold opacity-90">Deportes</h6>
                </div>

                <div className="flex flex-col w-full hover:bg-gray-100 cursor-pointer px-3">
                    <h6 className="py-3 text-base font-bold opacity-90">Entretenimiento</h6>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Explorar