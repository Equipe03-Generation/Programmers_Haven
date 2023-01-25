import React, {useState, useEffect} from 'react'
import {Card, CardContent, Typography,Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { busca } from '../../../services/Service';
import Grupos from '../../../models/Grupos';
import './ListaGrupos.css'

function ListaGrupos() {
  const [grupos, setGrupos] = useState<Grupos[]>([])
  let navigate = useNavigate();

  async function getGrupos(){
    await busca("/grupos/all", setGrupos)
  };

  useEffect(() => {

    getGrupos()

   }, [grupos.length]);
  
   return (
    <>
    <Grid container className= 'displayflex'>
      {
        grupos.map(grupos => (
          <Box m={5} className='caixalistapost'>
            <Card variant="outlined" className='papelpost'>
              <CardContent>
                <Typography color="textSecondary" gutterBottom className='cordefundo'>
                  Grupo
                </Typography>
                <Typography variant="h5" component="h2">
                  Número:
                  {grupos.numeroGrupo}
                </Typography>
                <Typography variant="body2" component="p">
                  Membros:
                  {grupos.maisInfos}
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

export default ListaGrupos;

