import React from 'react';
import {Typography, Grid, Button} from '@material-ui/core';
import {Box} from '@mui/material';
import './Home.css';
import TabProjetos from '../tabprojetos/tabprojetos';

function Home() {
    return (
    
            <Grid container direction="row" justifyContent="center" alignItems="center" className='caixa'>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" className='titulo'>Seja bem-vindes!</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" className='titulo'>Encontre e registre todos os projetos já feitos na Generation!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                    </Box>
                </Grid>
                <Grid item xs={6} >
                <Box  className='img4 imagemcentrada'/>
                </Grid>
                <Grid xs={12} className='projetos'>
                    <TabProjetos />
                </Grid>
            </Grid>
    );
}

export default Home;