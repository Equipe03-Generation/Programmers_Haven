import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import {Card, CardActions, CardContent, Button, Typography,Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { busca } from '../../../services/Service';
import Turmas from '../../../models/Turmas';

function ListaTurmas() {
  const [temas, setTurmas] = useState<Turmas[]>([])
  let navigate = useNavigate();

  async function getTurmas(){
    await busca("/turmas", setTurmas)
  }

  return (
    <>
    <Grid container className= 'displayflextema'>
      <Box m={2}>
        <Card variant="outlined" className='papeltemas caixalistatema'>
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Tema
            </Typography>
            <Typography variant="h5" component="h2">
            </Typography>
          </CardContent>
        </Card>
      </Box>
    </Grid>
    </>
  );
}  

export default ListaTurmas;