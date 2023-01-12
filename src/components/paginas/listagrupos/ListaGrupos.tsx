import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography,Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { busca } from '../../../services/Service';
import Grupos from '../../../models/Grupos';

function ListaGrupos() {
  const [grupos, setGrupos] = useState<Grupos[]>([])
  let navigate = useNavigate();

  async function getGrupos(){
    await busca("/grupos", setGrupos)
  }


  useEffect(()=>{
    getGrupos()
  }, [grupos.length]);

  return (
    <>
    <Grid container className= 'displayflextema'>
    {
      grupos.map(grupos =>(
      <Box m={2}>
        <Card variant="outlined" className='papeltemas caixalistatema'>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Grupos
            </Typography>
            <Typography variant="h5" component="h2">
             {grupos.numeroGrupo}
            </Typography>
          </CardContent>
        </Card>
      </Box>
      ))
      }
    </Grid>
    </>
  );
}  

export default ListaGrupos;
