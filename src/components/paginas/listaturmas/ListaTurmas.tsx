import React, {useState, useEffect} from 'react'
import {Card, CardContent, Typography,Grid } from '@material-ui/core';
import {Box} from '@mui/material';
import {useNavigate} from 'react-router-dom';
import { busca } from '../../../services/Service';
import Turmas from '../../../models/Turmas';

function ListaTurmas() {
  const [turmas, setTurmas] = useState<Turmas[]>([])
  let navigate = useNavigate();

  async function getTurmas(){
    await busca("/turmas/all", setTurmas)
  };

  useEffect(() => {

    getTurmas()

   }, [turmas.length]);
  
   return (
    <>
    <Grid container className= 'displayflex'>
      {
        turmas.map(turmas => (
          <Box m={5} className='caixalistapost'>
            <Card variant="outlined" className='papelpost'>
              <CardContent>
                <Typography color="textSecondary" gutterBottom className='cordefundo'>
                  Turma
                </Typography>
                <Typography variant="h5" component="h2">
                  {turmas.descricao}
                </Typography>
                <Typography variant="body2" component="p">
                  {turmas.isAtivo}
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

export default ListaTurmas;