import React, {useState, useEffect} from 'react'
import {Card, CardActions, CardContent, Button, Typography,Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { busca } from '../../../services/Service';
import Projetos from '../../../models/Projetos';

function ListaProjetos() {
  const [projetos, setProjetos] = useState<Projetos[]>([])
  let navigate = useNavigate();

  async function getProjetos(){
    await busca("/projetos/all", setProjetos)
  };

  useEffect(() => {

    getProjetos()

   }, [projetos.length]);
  
   return (
    <>
    <Grid container className= 'displayflex'>
      {
        projetos.map(projetos => (
          <Box m={1} className='caixalistapost'>
            <Card variant="outlined" className='papelpost'>
              <CardContent>
                <Typography color="textSecondary" gutterBottom className='cordefundo'>
                  Projeto
                </Typography>
                <Typography variant="h5" component="h2">
                  {projetos.nomeProjeto}
                </Typography>
                <Typography variant="body2" component="p">
                  {projetos.linkProjeto}
                </Typography>
              </CardContent>
            </Card>
          </Box>

        ))
      } 
       </Grid>
    </>
  )
}

export default ListaProjetos;
