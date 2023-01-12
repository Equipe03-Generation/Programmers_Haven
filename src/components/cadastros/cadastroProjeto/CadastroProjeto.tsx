import React, { ChangeEvent, useEffect, useState } from 'react'
import { Container, Typography, TextField, Button, Select, InputLabel, MenuItem, FormControl, FormHelperText, Grid } from "@material-ui/core";
import { useNavigate, useParams } from 'react-router-dom';
import { busca, buscaId, post, put } from '../../../services/Service';
import { toast } from 'react-toastify'
import Projetos from '../../../models/Projetos';
import Turmas from '../../../models/Turmas';

function CadastroProjetos() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();


    const [turmas, setTurmas] = useState<Turmas>(
        {
            id: 0,
            descricao: '',
            isAtivo: ''
        })

    const [projetos, setProjetos] = useState<Projetos>({
        id: 0,
        nomeProjeto: '',
        logoProjeto: '',
        linkProjeto: '',
        pitProjeto: '',
        grupoId: '',
    })

    useEffect(() => { 
        setProjetos({
            ...projetos,
            turmas: turmas
        })
    }, [turmas])

    useEffect(() => {
        getTurmas()
        if (id !== undefined) {
            findByIdProjetos(id)
        }
    }, [id])

    async function getTurmas() {
        await busca("/turmas", setTurmas)
    }

    async function findByIdProjetos(id: string) {
        await buscaId(`projetos/${id}`, setProjetos)
    }

    function updatedProjetos(e: ChangeEvent<HTMLInputElement>) {

        setProjetos({
            ...projetos,
            [e.target.name]: e.target.value,
            turmas: turmas
        })

    }

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()

        if (id !== undefined) {
            put(`/projetos/atualizado`, projetos, setProjetos)
            toast.success('Projeto modificado com sucesso!', {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
        } else {
            post(`/projetos/cadastrar`, projetos, setProjetos)
            toast.success('Projeto criado com sucesso!', {
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
        navigate('/projetos')
    }
    return (
        <Grid className='postcard'>
        <Container maxWidth="sm">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" color="textSecondary" component="h1" align="center" className='postcard' >Cadastro de Projeto</Typography>
                <TextField value={projetos.nomeProjeto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjetos(e)} id="nomeProjeto" label="Nome Projeto" variant="outlined" name="nomeProjeto" margin="normal" fullWidth />
                <TextField value={projetos.logoProjeto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjetos(e)} id="logoProjeto" label="Logo Projeto" variant="outlined" name="logoProjeto" margin="normal" fullWidth />
                <TextField value={projetos.linkProjeto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjetos(e)} id="linkProjeto" label="Link Projeto" variant="outlined" name="linkProjeto" margin="normal" fullWidth />
                <TextField value={projetos.pitProjeto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjetos(e)} id="pitProjeto" label="Pit Projeto" variant="outlined" name="pitProjeto" margin="normal" fullWidth />
                <TextField value={projetos.grupoId} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjetos(e)} id="grupoId" label="Número do Grupo" variant="outlined" name="grupoId" margin="normal" fullWidth />
                <FormControl >
                    <Button type="submit" variant="contained" className='botaopostagem'>
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>
        </Grid>
    )
}
export default CadastroProjetos;