import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import API_URL from '../../consts'
import { getProdutosByFarmacia } from '../Produto/produtosAction'

const BASE_URL = API_URL.API_URL

export const temp = () => {
    return {
        type: 'TEMP'
    }
}

export const SaveProdutoFarmacia = (values) => {
    return dispatch => {
        const { valor, qtd, pro_in_codigo, far_in_codigo } = values;
        axios.post(`${BASE_URL}/produtoFarmacia`, { valor, qtd, pro_in_codigo, far_in_codigo })
            .then(res => {
                console.log(res)
                if (res.data.err) {
                    console.log('deu algum erro')
                    return dispatch(temp())
                } else {
                    toastr.success('Item Adicionado!');
                    return dispatch(temp())
                }
            })
    }
}

export const searchUser = (endereco, remedio) => {
    return dispatch => {
        axios.post(`${BASE_URL}/produtoFarmacia/search`, { endereco, remedio })
            .then(res => {
                console.log(res)
                if (res.data.err) {
                    console.log('deu algum erro')
                    return dispatch(temp())
                } else {
                    return dispatch({
                        type: 'FETCH_PRODUTO_FARMACIA',
                        payload: res.data.dados
                    })
                }
            })
    }
}

export const setProdutoFarmacia = (payload) => {
    location.replace("#/produtoFarmaciaDescricao")
    return {
        type: 'SET_PRODUTO_FARMACIA',
        payload
    }
}
export const clearProdutoFarmacia = (payload) => {
    return {
        type: 'CLEAR_PRODUTO_FARMACIA',
        payload
    }
}

export const EditPF = (values) => {
    return dispatch => {
        console.log(values)
        const { valor, qtd, pro_in_codigo, far_in_codigo, codigo } = values;
        axios.put(`${BASE_URL}/produtoFarmacia`, { valor, qtd, pro_in_codigo, far_in_codigo, codigo })
            .then(res => {
                console.log(res)
                if (res.data.err) {
                    console.log('deu algum erro')
                    return dispatch(temp())
                } else {
                    toastr.success('Edição concluida');
                    return dispatch(getProdutosByFarmacia(far_in_codigo))
                }
            })
    }
}