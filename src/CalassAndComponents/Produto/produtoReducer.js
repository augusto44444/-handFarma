const INITIAL_STATE = {
    produtos: [],
    produto: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_PRODUCTS':
            return {
                ...state,
                produtos: action.payload
            }
        case 'SET_PRODUTO':
            return {
                ...state,
                produto: action.payload
            }
        default:
            return state
    }
}