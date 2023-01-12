import Projetos from './Projetos'

interface Turmas{
    
id: number;
descricao: string;
isAtivo: string;
projetos?: Projetos| null

}

export default Turmas;