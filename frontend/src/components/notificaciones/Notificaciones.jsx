import React, { useState } from 'react'
import { Avatar, Button, Tab, Box } from '@mui/material'
import { TabContext, TabList, TabPanel } from '@mui/lab';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import { useTheme } from '../../context/ThemeContext'

const Notificaciones = () => {
        const { isDarkMode } = useTheme();
        const [tabValue, setTabValue] = useState("1");
    
        const handleTabChange = (event, newValue) => {
            setTabValue(newValue);
        };

  return (
    <div className={`border-[0.5px] h-full ${isDarkMode ? "border-gray-700" : "border-gray-200"}`}>

    <div className='py-1 sticky top'>
        <div className='relative flex items-center mx-3.5'>
            <h2 className="py-2 text-lg text-start font-bold w-2xl">Notificaciones</h2>
            <SettingsOutlinedIcon className='ml-3 cursor-pointer'/>
        </div>

            <div>
                <Box value={0} sx={{ width: '100%'}}>
                    <TabContext value={tabValue}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'center', width: '100%'  }}>
                            <TabList onChange={handleTabChange} aria-label="lab API tabs example">
                                <Tab 
                                    label="Todas" 
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
                                    label="Verificado" 
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
                                <Tab 
                                    label="Menciones" 
                                    value="3" 
                                    sx={{ textTransform: 'none', 
                                        fontWeight: tabValue === "3" ? 'bold' : 'normal',
                                        color: tabValue === "3" ? 'black' : 'gray',
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

                        <TabPanel value="1">Todas</TabPanel>
                        <TabPanel value="2">Verificado</TabPanel>
                        <TabPanel value="3">Menciones</TabPanel>
                    </TabContext>
                </Box>
            </div>
    </div>

</div>
  )
}

export default Notificaciones