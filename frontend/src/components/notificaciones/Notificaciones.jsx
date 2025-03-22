import React from 'react'

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

const Notificaciones = () => {
  return (
    <div className='border-gray-200 border-[1px] h-full'>

    <div className='py-1 sticky top'>
        <div className='relative flex items-center mx-3.5'>
            <h2 className="py-2 text-lg text-start font-bold w-2xl">Notificaciones</h2>
            <SettingsOutlinedIcon className='ml-3 cursor-pointer'/>
        </div>

        <div className="flex justify-evenly border-gray-200 border-b-[1px] items-center relative">
            <div className="flex flex-col w-full hover:bg-gray-100 cursor-pointer px-3">
                <h4 className="py-2 text-sm font-bold">Todas</h4>
                <span className="bottom-0 left-0 w-full h-1 bg-blue-500 rounded-full"></span>
            </div>

            <div className="flex flex-col w-full hover:bg-gray-100 cursor-pointer px-3">
                <h4 className="py-3 text-sm font-bold opacity-80">Verificado</h4>
            </div>

            <div className="flex flex-col w-full hover:bg-gray-100 cursor-pointer px-3">
                <h4 className="py-3 text-sm font-bold opacity-80">Menciones</h4>
            </div>
        </div>
    </div>

</div>
  )
}

export default Notificaciones