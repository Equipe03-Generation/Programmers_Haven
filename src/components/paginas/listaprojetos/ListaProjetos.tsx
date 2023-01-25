import React, {useState, useEffect} from 'react'
import {Card, CardContent, Typography,Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { busca } from '../../../services/Service';
import Projetos from '../../../models/Projetos';
import './ListaProjetos.css'

function ListaProjetos() {
  const [projetos, setProjetos] = useState<Projetos[]>([])
  let navigate = useNavigate();

  async function getProjetos(){
    await busca("/projetos", setProjetos)
  };

  useEffect(() => {

    getProjetos()

   }, [projetos.length]);
  
   return (
    <>
    <Grid container className= 'displayflex'>
      {
        projetos.map(projetos => (
          <Box m={5} className='caixalistapost'>
            <Card variant="outlined" className='papelpost'>
              <CardContent>
                <Typography color="textSecondary" gutterBottom className='cordefundo'>
                  Projeto
                </Typography>
                <Typography variant="h5" component="h2">
                  Nome:
                  {projetos.nomeProjeto}
                </Typography>
                <Typography variant="body2" component="p">
                  Link:
                  {projetos.linkProjeto}
                </Typography>
                  <Typography variant="h5" component="p">
                  Logo:
                  {projetos.logoProjeto}
                </Typography>
                <Typography variant="h5" component="p">
                  Pit:
                  {projetos.pitProjeto}
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
