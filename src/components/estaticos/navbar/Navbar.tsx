import React from 'react';
import { AppBar, Toolbar, Typography} from '@material-ui/core';
import {Box} from '@mui/material';
import { Link } from 'react-router-dom';
import './Navbar.css'
import ModalTurma from '../../modais/modalTurma/ModalTurma';
import ModalProjeto from '../../modais/modalProjeto/ModalProjeto';
import ModalGrupo from '../../modais/modalGrupo/ModalGrupo';

function Navbar() {
    return (
    
    <AppBar position="static">
        <Toolbar variant="dense" className='bgnav centro'>

            <Box display="flex" justifyContent="start">
                <Link to="/home" className="text-decorator-none">
                    <Box mx={5} className='cursor text-decorator-none center'>
                        <img src="https://cdn-icons-png.flaticon.com/512/7606/7606136.png" height={40} alt="" />
                        <br />
                        Home
                    </Box>
                </Link>
                <Link to="/turmas" className="text-decorator-none sizeicons">
                    <Box mx={5} className='cursor text-decorator-none center'>
                        <img src="https://cdn-icons-png.flaticon.com/512/43/43289.png" height={40} alt="" />
                        <br />
                        Turmas
                    </Box>
                </Link>
                <Link to="/equipes" className="text-decorator-none">
                    <Box mx={5} className='cursor text-decorator-none center'>
                        <img src="https://cdn-icons-png.flaticon.com/512/1570/1570120.png" height={40} alt="" />
                        <br />
                        Grupos
                    </Box>
                </Link>
                <Link to="/projetos" className="text-decorator-none">
                    <Box mx={5} className='cursor text-decorator-none center'>
                        <img src="https://cdn-icons-png.flaticon.com/512/1087/1087927.png" height={40} alt="" />
                        <br />
                        Projetos
                    </Box>
                </Link> 
                    <Box mx={5} className='cursor text-decorator-none center'>
                    <ModalTurma/>
                        Criar Turma
                    </Box>               
                <Box mx={5} className='cursor text-decorator-none center'>
                    <ModalGrupo/>
                        Criar Grupo
                </Box>
                <Box mx={5} className='cursor text-decorator-none center'>
                    <ModalProjeto/>
                        Criar Projeto
                </Box>
            </Box>
        </Toolbar>
    </AppBar>

    )
}

export default Navbar;