import Grupos from './Grupos';
import Turmas from './Turmas'

interface Projetos{

id: number;
nomeProjeto: string;
logoProjeto: string;
linkProjeto: string;
pitProjeto: string;
grupoId: string;
turmas?: Turmas| null
grupos?: Grupos| null

}

export default Projetos;