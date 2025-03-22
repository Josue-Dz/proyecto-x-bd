import React, { useState } from 'react'
import { Avatar, Button, Tab, Box } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import {  TarjetaSeguimientoX } from '../seguimiento/TarjetaSeguimientoX'

const Explorar = () => {

    const [tabValue, setTabValue] = useState("1");

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

  return (
    <div className='border-gray-200 border-[1px] h-full'>

        <div className='py-1 sticky top-0'>
            <div className='relative flex items-center mx-3.5'>
                <input type='text' placeholder="Buscar" className='py-3 rounded-full text-gray-500 w-full pl-12 border border-gray-300' />

                <div className='absolute top-0 left-0 pl-3 pt-3'>
                    <SearchRoundedIcon className='text-gray-500' />
                </div>
                <SettingsOutlinedIcon className='ml-3 cursor-pointer'/>
            </div>

            <div>
                <Box value={0} sx={{ width: '100%'}}>
                    <TabContext value={tabValue}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center', width: '100%'  }}>
                            <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                                <Tab 
                                    label="Para ti" 
                                    value="1" 
                                    sx={{ textTransform: 'none',
                                        fontWeight: tabValue === "1" ? 'bold' : 'normal',
                                        color: tabValue === "1" ? 'black' : 'gray',
                                        outline: 'none',  
                                        '&:focus': {
                                        outline: 'none',  
                                        },
                                        '&:hover': {
                                        backgroundColor: 'gray.200', 
                                        }
                                    }} 
                                />
                                <Tab 
                                    label="Tendencias" 
                                    value="2" 
                                    sx={{ textTransform: 'none', 
                                        fontWeight: tabValue === "2" ? 'bold' : 'normal',
                                        color: tabValue === "2" ? 'black' : 'gray',
                                        outline: 'none',  
                                        '&:focus': {
                                        outline: 'none',  
                                        },
                                        '&:hover': {
                                        backgroundColor: 'gray.200', 
                                        }
                                    }} 
                                />
                            </TabList>
                        </Box>

                        <TabPanel value="1">Para ti</TabPanel>
                        <TabPanel value="2">Tendencias</TabPanel>
                    </TabContext>
                </Box>
            </div>
        </div>

    </div>
  )
}

export default Explorar