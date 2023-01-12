import React, {useState} from 'react'
import { AppBar, Tab, Tabs, Typography } from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import './tabprojetos.css';
import ListaProjetos from '../../paginas/listaprojetos/ListaProjetos';


function TabProjetos() {
    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static">
          <Tabs centered onChange={handleChange}>
            <Tab className='colortab' label="Todos os projetos" value="1"/>
          </Tabs>
        </AppBar>
        <TabPanel value="1" >
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <ListaProjetos />
          </Box>
        </TabPanel>
        <TabPanel value="2">
          <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className="titulo">Sobre-nós</Typography>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabProjetos;