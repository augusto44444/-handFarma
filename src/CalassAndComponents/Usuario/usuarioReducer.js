const INITIAL_STATE = {
    logged: localStorage.getItem('userHF') ? true : false,
    user: JSON.parse(localStorage.getItem('userHF')) || [],
    userData: JSON.parse(localStorage.getItem('userDataHF')) || [],
    token: localStorage.getItem('token')
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOG_IN':
            localStorage.setItem('userHF', JSON.stringify(action.payload.dados[0]))
            localStorage.setItem('token', `bearer ${action.payload.token}`)
            return {
                ...state,
                logged: true,
                user: action.payload.dados[0],
                token: `bearer ${action.payload.token}`
            }
        case 'LOG_OUT':
            localStorage.removeItem('userHF')
            localStorage.removeItem('userDataHF')
            localStorage.removeItem('token')
            return {
                ...state,
                logged: false,
                user: [],
                token: ''
            }
        case 'USER_DATA':
            localStorage.setItem('userDataHF', JSON.stringify(action.payload))
            return {
                ...state,
                userData: action.payload,
            }

        default:
            return state
    }
}