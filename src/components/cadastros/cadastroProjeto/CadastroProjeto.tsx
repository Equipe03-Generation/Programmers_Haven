import React, {useState, useEffect, ChangeEvent} from 'react'
import { TextField, Button, Grid, Typography } from "@material-ui/core"
import { useNavigate, useParams } from 'react-router-dom'
import { buscaId, post, put } from '../../../services/Service';
import { toast } from 'react-toastify'
import Projetos from '../../../models/Projetos';
import './CadastroProjeto.css'

function CadastroProjetos() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [projetos, setProjetos] = useState<Projetos>({
        id: 0,
        nomeProjeto: '',
        logoProjeto: '',
        linkProjeto: '',
        pitProjeto: '',
        grupoId: '',
    })

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/projetos/${id}`, setProjetos)
        }

        function updatedProjetos(e: ChangeEvent<HTMLInputElement>) {

            setProjetos({
                ...projetos,
                [e.target.name]: e.target.value,
            })
    
        }

        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            console.log("projetos" + JSON.stringify(projetos))

        if (id !== undefined) {
            put(`/projetos/atualizar`, projetos, setProjetos)
            toast.success('Projeto atualizado com sucesso!', {
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
            toast.success('Projeto cadastrado com sucesso!', {
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
        <Grid className='fundotema'>
            <Grid alignItems="center" item xs={12} className='fundotema'>
            <form onSubmit={onSubmit}  className='formcadastro'>
                <Typography variant="h3" className='fontecadtema' component="h1" align="center">Cadastro de Projeto</Typography>
                <TextField value={projetos.nomeProjeto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjetos(e)} id="nomeProjeto" label="Nome Projeto" variant="outlined" name="nomeProjeto" margin="normal" fullWidth />
                <TextField value={projetos.logoProjeto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjetos(e)} id="logoProjeto" label="Logo Projeto" variant="outlined" name="logoProjeto" margin="normal" fullWidth />
                <TextField value={projetos.linkProjeto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjetos(e)} id="linkProjeto" label="Link Projeto" variant="outlined" name="linkProjeto" margin="normal" fullWidth />
                <TextField value={projetos.pitProjeto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjetos(e)} id="pitProjeto" label="Pit Projeto" variant="outlined" name="pitProjeto" margin="normal" fullWidth />
                <TextField value={projetos.grupoId} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjetos(e)} id="grupoId" label="Número do Grupo" variant="outlined" name="grupoId" margin="normal" fullWidth />
                <Button type="submit" variant="contained" className='botaoprojeto'>
                    Finalizar
                </Button>
            </form>
            </Grid>
        </Grid>
    )
}

export default CadastroProjetos;