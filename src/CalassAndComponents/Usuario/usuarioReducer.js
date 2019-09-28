const INITIAL_STATE = {
    logged: localStorage.getItem('userHF') ? true : false,
    user: JSON.parse(localStorage.getItem('userHF')) || [],
    userData: JSON.parse(localStorage.getItem('userDataHF')) || [],

}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'LOG_IN':
            localStorage.setItem('userHF', JSON.stringify(action.payload))
            return {
                ...state,
                logged: true,
                user: action.payload
            }
        case 'LOG_OUT':
            localStorage.removeItem('userHF')
            localStorage.removeItem('userDataHF')
            return {
                ...state,
                logged: false,
                user: []
            }
        case 'GET_USER_DATA':
            localStorage.setItem('userDataHF', JSON.stringify(action.payload))
            return {
                ...state,
                userData: action.payload,
            }

        default:
            return state
    }
}