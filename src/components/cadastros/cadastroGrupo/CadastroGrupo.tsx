import React, {useState, useEffect, ChangeEvent} from 'react'
import { TextField, Button, Grid, Typography } from "@material-ui/core"
import { useNavigate, useParams } from 'react-router-dom'
import { buscaId, post, put } from '../../../services/Service';
import { toast } from 'react-toastify'
import Grupos from '../../../models/Grupos';
import './CadastroGrupo.css'

function CadastroGrupos() {
    let navigate = useNavigate();
    const { id } = useParams<{ id: string }>();

    const [grupos, setGrupos] = useState<Grupos>({
        id: 0,
        numeroGrupo: '',
        maisInfos: '',
        turmaId: ''

    })

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/grupos/${id}`, setGrupos)
        }

        function updatedGrupos(e: ChangeEvent<HTMLInputElement>) {

            setGrupos({
                ...grupos,
                [e.target.name]: e.target.value,
            })
    
        }

        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            console.log("grupos" + JSON.stringify(grupos))

        if (id !== undefined) {
            put(`/grupos/atualizar`, grupos, setGrupos)
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
            post(`/grupos/cadastrar`, grupos, setGrupos)
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
        navigate('/grupos')
    }
    
    return (
        <Grid className='fundotema'>
            <Grid alignItems="center" item xs={12} className='fundotema'>
            <form onSubmit={onSubmit}  className='formcadastro'>
                <Typography variant="h3" className='fontecadtema' component="h1" align="center">Cadastro de Grupo</Typography>
                <TextField value={grupos.numeroGrupo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedGrupos(e)} id="numeroGrupo" label="Número do Grupo" variant="outlined" name="numeroGrupo" margin="normal" fullWidth />
                <TextField value={grupos.maisInfos} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedGrupos(e)} id="maisInfo" label="Membros do Grupo" variant="outlined" name="maisInfos" margin="normal" fullWidth />
                <TextField value={grupos.turmaId} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedGrupos(e)} id="turmaId" label="Número da Turma" variant="outlined" name="turmaId" margin="normal" fullWidth />
                <Button type="submit" variant="contained" className='botaogrupo'>
                    Finalizar
                </Button>
            </form>
            </Grid>
        </Grid>
    )
}

export default CadastroGrupos;