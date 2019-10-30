import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import API_URL from '../../consts'

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
            .res(res => {
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