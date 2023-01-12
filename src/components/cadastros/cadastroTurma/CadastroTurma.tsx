import React, {useState, useEffect, ChangeEvent} from 'react'
import { TextField, Button, Grid, Typography } from "@material-ui/core"
import { useNavigate, useParams } from 'react-router-dom'
import { buscaId, post, put } from '../../../services/Service';
import { toast } from 'react-toastify'
import Turmas from '../../../models/Turmas';


function CadastroTurma() {
    let navigate = useNavigate();
    const { id } = useParams<{id: string}>();

    const [turmas, setTurmas] = useState<Turmas>({
        
        id: 0,
        descricao: '',
        isAtivo: ''
    })

    useEffect(() =>{
        if(id !== undefined){
            findById(id)
        }
    }, [id])

    async function findById(id: string) {
        buscaId(`/turmas/${id}`, setTurmas)
        }

        function updatedTurmas(e: ChangeEvent<HTMLInputElement>) {

            setTurmas({
                ...turmas,
                [e.target.name]: e.target.value,
            })
    
        }
        
        async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
            e.preventDefault()
            console.log("tema " + JSON.stringify(turmas))
    
            if (id !== undefined) {
                console.log(turmas)
                put(`/turmas/atualizar`, turmas, setTurmas);
                toast.success('Turma atualizada com sucesso', {
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
                post(`/turmas/cadastrar`, turmas, setTurmas);
                toast.success('Turma cadastrada com sucesso', {
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
            navigate('/turmas')
        }

    return (
        <Grid className='fundotema'>
            <Grid alignItems="center" item xs={12} className='fundotema'>
            <form onSubmit={onSubmit}  className='formcadastro'>

                <Typography variant="h3" className='fontecadtema' component="h1" align="center">Cadastro de Turma</Typography>
                <TextField className='cortemacaixa' value={turmas.descricao} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTurmas(e)} id="descricao" label="Descrição" name="descricao" margin="normal" fullWidth />
                <TextField className='cortemacaixa' value={turmas.isAtivo} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedTurmas(e)} id="isAtivo" label="Ativo ou Desativo" name="isAtivo" margin="normal" fullWidth />
                <Button type="submit" variant="contained" className='botaocadtema'>
                    Finalizar
                </Button>
            </form>
            </Grid>
        </Grid>
    )
}

export default CadastroTurma;