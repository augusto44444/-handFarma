import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import API_URL from '../../consts'

const BASE_URL = API_URL.API_URL

export const temp = () => {
    return {
        type: 'TEMP'
    }
}


export const saveFarmacia = (values) => {
    return dispatch => {
        console.log(values)
        const { far_st_cnpj, fat_st_cep, far_ch_estado, far_st_cidade, far_st_bairro, far_st_rua, far_in_numero, far_st_nome, far_st_rede, far_st_horario_funcionamento, far_st_telefone, far_st_celular, usu_in_codigo, usu_st_email, usu_st_password, confirm } = values

        if (confirm !== usu_st_password) {
            toastr.warning('As senhas precisam coincidir.')
            return dispatch(temp())
        }

        axios.post(`${BASE_URL}/usuario`, { password: usu_st_password, email: usu_st_email, tipo: 'FA' })
            .then(res => {
                if (res.data.erro) {
                    console.log('erro: ')
                    console.log(res)
                } else {
                    axios.post(`${BASE_URL}/Farmacia`, { far_st_cnpj, fat_st_cep, far_ch_estado, far_st_cidade, far_st_bairro, far_st_rua, far_in_numero, far_st_nome, far_st_rede, far_st_horario_funcionamento, far_st_telefone, far_st_celular, usu_in_codigo: res.data.dados.insertId })
                        .then(resp => {
                            console.log(resp)
                            if (res.data.err) {
                                location.replace('#')
                                toastr.warning('algum erro ocorreu')
                            } else {
                                location.replace("#")
                                toastr.success('Cadastrado com sucesso!')
                                return dispatch(temp())
                            }
                        })
                }
            })
            .catch(error => {
                console.log('Deu ruim')
                console.log(error.response)
            })
    }
}

