import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import API_URL from '../../consts'

const BASE_URL = API_URL.API_URL

export const temp = () => {
    return {
        type: 'TEMP'
    }
}

export const FetchAllProdutos = (token) => {
    return dispatch => {
        axios.get(`${BASE_URL}/produto`, { headers: { Authorization: token } })
            .then(res => {
                if (res.data.err) {
                    console.log('Deu ruim')
                    console.log(res)
                    return dispatch(temp())
                } else {
                    return dispatch({
                        type: 'FETCH_PRODUCTS',
                        payload: res.data.dados
                    })
                }
            })
    }
}

export const Search = (nome) => {
    return dispatch => {
        axios.post(`${BASE_URL}/produto/nome/`, {nome})
            .then(res => {
                if (res.data.err) {
                    console.log('Deu ruim')
                    console.log(res)
                    return dispatch(temp())
                } else {
                    return dispatch({
                        type: 'FETCH_PRODUCTS',
                        payload: res.data.dados
                    })
                }
            })
    }
}




export const DeleteProduto = (id, token) => {
    return dispatch => {
        axios.delete(`${BASE_URL}/produto/${id}`)
            .then(res => {
                if (res.data.err) {
                    console.log('Deu ruim')
                    console.log(res)
                    return dispatch(temp())
                } else {
                    return dispatch(FetchAllProdutos(token))
                }
            })
    }
}

export const CadProduto = (values) => {
    return dispatch => {
        axios.post(`${BASE_URL}/produto`, { nome: values.nome, marca: values.marca, codBarra: values.codBarra, classificacao: values.classificacao })
            .then(res => {
                if (res.data.err) {
                    console.log('Deu erro')
                    console.log(res)
                } else {
                    toastr.success('Cadastrado com Sucesso!')
                    return dispatch(FetchAllProdutos(values.token))
                }
            })
    }
}

export const setProduto = (produto) => {
    return {
        type: 'SET_PRODUTO',
        payload: produto
    }
}

export const editProduto = (values) => {
    return dispatch => {
        axios.put(`${BASE_URL}/produto`, { nome: values.nome, marca: values.marca, codBarra: values.codBarra, classificacao: values.classificacao, codigo: values.id })
            .then(res => {
                if (res.data.err) {
                    console.log('Deu erro')
                    console.log(res)
                } else {
                    toastr.success('Editado com Sucesso!')
                    return dispatch(FetchAllProdutos(values.token))
                }
            })
    }
}

export const getProdutosByFarmacia = (farmaciaId) => {
    return dispatch => {
        if(!farmaciaId) {
            toastr.warning("Ops", "Está faltando algo")
            return dispatch(temp())
        }

        axios.get(`${BASE_URL}/produto/farmacia/${farmaciaId}`)
            .then(res => {
                if(res.data.err) {
                    console.log(res.data)
                    toastr.error("Erro", "Erro ao buscar produtos por farmacia")
                    return dispatch(temp())
                }

                return dispatch({
                    type: 'FETCH_PRODUCTS',
                    payload: res.data.dados
                })
            })
            .catch(err => {
                console.log(err)
                toastr.error("Erro", "Erro ao buscar produtos por farmacia")
                return dispatch(temp())
            })
    }
}
