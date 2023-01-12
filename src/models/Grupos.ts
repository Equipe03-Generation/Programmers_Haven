import Projetos from './Projetos';

interface Grupos{

id: number;
numeroGrupo: string;
maisInfos: string;
turmaId: string;
projetos?: Projetos| null

}

export default Grupos;