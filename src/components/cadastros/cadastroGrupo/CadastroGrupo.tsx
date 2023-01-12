import React, { ChangeEvent, useState } from 'react'
import { Container, Typography, TextField, Grid, Button } from "@material-ui/core";
import { useNavigate, useParams } from 'react-router-dom';
import { post } from '../../../services/Service';
import { toast } from 'react-toastify';
import Grupos from '../../../models/Grupos';

function CadastroGrupo() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [grupos, setGrupos] = useState<Grupos>(
        {
            id: 0,
            numeroGrupo: '',
            maisInfos: '',
            turmaId: ''
        })

    function updatedGrupos(e: ChangeEvent<HTMLInputElement>) {

        setGrupos({
            ...grupos,
            [e.target.name]: e.target.value
        })
    
    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            post(`/grupos/cadastrar`, grupos, setGrupos);
            toast.success('Grupo criado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        }
        back()

    }

    function back() {
        navigate('/grupos')
    }
    return (
        <Grid className='postcard'>
        <Container maxWidth="sm">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" className='postcard' >Cadastro de Grupo</Typography>
                <TextField value={grupos.numeroGrupo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedGrupos(e)} id="numeroGrupo" label="Número" variant="outlined" name="numeroGrupo" margin="normal" fullWidth />
                <TextField value={grupos.maisInfos} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedGrupos(e)} id="maisInfos" label="Integrantes" name="maisInfos" variant="outlined" margin="normal" fullWidth />
                <TextField value={grupos.turmaId} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedGrupos(e)} id="turmaId" label="Número da Turma" name="turmaId" variant="outlined" margin="normal" fullWidth />
            </form>
            <Button type="submit" variant="contained" className='botaopostagem'>
                Finalizar
            </Button>
        </Container>
        </Grid>
    )
}
export default CadastroGrupo;