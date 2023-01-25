import Projetos from './Projetos';
import Turmas from './Turmas';

interface Grupos{

id: number;
numeroGrupo: string;
maisInfos: string;
turmas?: Turmas|null
projetos?: Projetos| null

}

export default Grupos;