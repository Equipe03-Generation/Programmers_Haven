import React, {useState, useEffect, ChangeEvent} from 'react'
import { TextField, Button, Grid, InputLabel, FormControl, Select, MenuItem, FormHelperText, Container, Typography } from "@material-ui/core"
import { useNavigate, useParams } from 'react-router-dom'
import { busca, buscaId, post, put } from '../../../services/Service';
import { toast } from 'react-toastify'
import Projetos from '../../../models/Projetos';
import './CadastroProjeto.css'
import Grupos from '../../../models/Grupos';
import Turmas from '../../../models/Turmas';

function CadastroProjetos() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    const [grupos, setGrupos] = useState<Grupos[]>([])
    const [turmas, setTurmas] = useState<Turmas[]>([])

    const [projeto, setProjeto] = useState<Projetos>(
    {
        id: 0,
        nomeProjeto: '',
        logoProjeto: '',
        linkProjeto: '',
        pitProjeto: '',
        turmas: null,
        grupos: null
    })

    const [grupo, setGrupo] = useState<Grupos>(
    {
        id: 0,
        numeroGrupo: '',
        maisInfos: '',
        turmas: null,
        projetos: null
    })

    const [turma, setTurma] = useState<Turmas>(
    {
        id: 0,
        descricao: '',
        isAtivo: '',
        projetos: null
    })

    useEffect(() => { 
        setProjeto({
            ...projeto,
            turmas: turma
        })
    }, [turma])

    useEffect(() => { 
        setProjeto({
            ...projeto,
            grupos: grupo
        })
    }, [grupo])

    useEffect(() => {
        getTurmas()
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function getTurmas() {
        await busca("/turmas", setTurmas)
    }

    useEffect(() => {
        getGrupos()
        if (id !== undefined) {
            findById(id)
        }
    }, [id])

    async function getGrupos() {
        await busca("/grupos", setGrupos)
    }

    async function findById(id: string) {
        await buscaId(`/projetos/${id}`, setProjeto)
    }
        function updatedProjeto(e: ChangeEvent<HTMLInputElement>) {

            setProjeto({
                ...projeto,
                [e.target.name]: e.target.value,
                turmas: turma,
                grupos: grupo
            })
    
        }

        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            console.log("projetos" + JSON.stringify(projeto))

        if (id !== undefined) {
            put(`/projetos/atualizar`, projeto, setProjeto)
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
            post(`/projetos/cadastrar`, projeto, setProjeto)
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
<>      
        <Container maxWidth="sm" className="topo">
            <form onSubmit={onSubmit}>
                <Typography variant="h3" className='fontecadtema' component="h1" align="center">Formulário de Projeto</Typography>
                <TextField value={projeto.nomeProjeto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjeto(e)} id="nomeProjeto" label="Nome do Projeto" variant="outlined" name="nomeProjeto" margin="normal" fullWidth />
                <TextField value={projeto.logoProjeto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjeto(e)} id="logoProjeto" label="Logo do Projeto" name="logoProjeto" variant="outlined" margin="normal" fullWidth />
                <TextField value={projeto.linkProjeto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjeto(e)} id="linkProjeto" label="Link do Projeto" variant="outlined" name="linkProjeto" margin="normal" fullWidth />
                <TextField value={projeto.pitProjeto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedProjeto(e)} id="pitProjeto" label="Pit do Projeto" variant="outlined" name="pitProjeto" margin="normal" fullWidth />

                <FormControl>
                    <InputLabel id="demo-simple-select-helper-label">Turma </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/turmas/${e.target.value}`, setTurma)}>
                        {
                            turmas.map(turma => (
                                <MenuItem value={turma.id}>{turma.descricao}</MenuItem>
                            ))
                        }
                    </Select>
                    <InputLabel id="demo-simple-select-helper-label">Grupo </InputLabel>
                    <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        onChange={(e) => buscaId(`/usuarios/${e.target.value}`, setGrupo)}>
                        {
                            grupos.map(grupo => (
                                <MenuItem value={grupo.id}>{grupo.numeroGrupo}</MenuItem>
                            ))
                        }
                    </Select>
                    <FormHelperText>Escolha uma turma e grupo para finalizar</FormHelperText>
                    <Button type="submit" variant="contained" color="primary">
                        Finalizar
                    </Button>
                </FormControl>
            </form>
        </Container>


        </>
    )

}
export default CadastroProjetos;