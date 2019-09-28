import { toastr } from 'react-redux-toastr'
import axios from 'axios'
import API_URL from '../../consts'

const BASE_URL = API_URL.API_URL

export const temp = () => {
    return {
        type: 'TEMP'
    }
}

export const UserLoggedIn = (user) => {
    return {
        type: 'LOG_IN',
        payload: user
    }
}

export const UserLogOut = () => {
    location.replace('#/')
    return dispatch => {
        dispatch([{ type: 'LOG_OUT' }])
    }
}

export const GetUserData = (userData) => {
    return {
        type: 'GET_USER_DATA',
        payload: userData
    }
}


export const login = (email, password) => {
    return dispatch => {
        if (!email) {
            toastr.warning("Campo E-mail obrigatório")
            return dispatch(temp())
        }

        if (!password) {
            toastr.warning("Campo senha obrigatório")
            return dispatch(temp())
        }

        if (password < 6) {
            toastr.warning("Aviso!", "É necessario a senha ter mais de 6 digitos")
            return dispatch(temp())
        }

        axios.post(`${BASE_URL}/usuario/auth`, { email, password })
            .then(res => {
                if(res.data.error || res.data.dados == null){
                    toastr.warning(res.data.msg)
                    return dispatch(temp())
                }
                if (res.data.dados[0] && res.data.dados[0].usu_ch_type == 'AD') {
                    const obj = {
                        godMode: 'on',
                        name: 'ADMIN'
                    }
                    dispatch([
                        UserLoggedIn(res.data.dados[0]),
                        GetUserData(obj),
                    ])

                } else {
                //     if (!res.data.erro) {
                //         if (res.data.dados[0]) {
                //             toastr.success(res.data.msg);
                //             axios.post(`${BASE_URL}/autonomo/profile`, { codigo: res.data.dados[0].usu_in_codigo })
                //                 .then(resp => {
                //                     console.log(resp)
                //                     dispatch([
                //                         UserLoggedIn(res.data.dados[0])
                //                     ])
                //                 })

                //         } else {
                //             toastr.warning(res.data.msg);
                //             dispatch(temp())
                //         }
                //     } else {
                //         toastr.error('Aviso', 'Usuário inexistente ou E-mail incorreto');
                //         console.log(res.data.errorMessage);
                //         dispatch(temp())
                //     }
                }
            })
    }
}

export const recoverPass = (email) => {
    return dispatch => {
        if(!email) {
            toastr.warning("Você deve informar seu email")
            return dispatch(temp())
        }

        axios.post(`${BASE_URL}/password/recovery`, { email })
            .then(res => {
                if(res.data.error) {
                    toastr.error("Algo deu errado ao enviar o email")
                    return dispatch(temp())
                } else {
                    toastr.success("Enviamos um e-mail com sua nova senha")
                    return dispatch({
                        type: 'EMAIL_SENT'
                    })
                }
            })
            .catch(e => {
                toastr.error("Algo deu errado ao enviar o email")
                return dispatch(temp())
            })
    }
}

export const changePassword = (id, email, password, confirmPassword) => {
    return dispatch => {
        if(!email) {
            console.log("Email nao chegou")
            return dispatch(temp())
        }

        if(!password) {
            toastr.warning("Você deve informar uma senha")
            return dispatch(temp())
        }

        if(password != confirmPassword) {
            toastr.warning("As senhas devem ser iguais")
            return dispatch(temp())
        }

        if(password.length < 6) {
            toastr.warning("Sua senha deve ter 6 ou mais caracteres")
            return dispatch(temp())
        }

        axios.put(`${BASE_URL}/password/${id}`, { email, password })
            .then(res => {
                if(res.data.error) {
                    toastr.error("Algo deu errado")
                    return dispatch(temp())
                } else {
                    toastr.success("Senha alterada com sucesso")
                    return dispatch({
                        type: 'PASSWORD_CHANGED'
                    })
                }
            })
    }
}
