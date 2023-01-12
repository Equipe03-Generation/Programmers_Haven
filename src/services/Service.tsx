import axios from 'axios';

export const api = axios.create({
    baseURL: 'https://genworktable.onrender.com'
})

export const cadastroGrupo = async(url: any,dados: any,setDado: any) => { 
    const resposta = await api.post(url,dados)
    setDado(resposta.data)
}

export const cadastroProjeto = async(url: any,dados: any,setDado: any) => { 
    const resposta = await api.post(url,dados)
    setDado(resposta.data)
}

export const cadastroTurma = async(url: any,dados: any,setDado: any) => { 
    const resposta = await api.post(url,dados)
    setDado(resposta.data)
}

export const busca = async(url: any,setDado: any) => { 
    const resposta = await api.get(url)
    setDado(resposta.data)
}

export const buscaId = async(url: any,setDado: any ) => { 
    const resposta = await api.get(url)
    setDado(resposta.data)
}


export const post = async(url: any, dados: any, setDado: any) => { 
    const resposta = await api.post(url,dados)
    setDado(resposta.data)
}


export const put = async(url: any, dados: any, setDado: any) => { 
    const resposta = await api.put(url,dados)
    setDado(resposta.data)
}


export const deleteId = async(url: any) => { 
    await api.delete(url)
}