const INITIAL_STATE = {
    produtos: [],
    produto: [],
    produtoFarmacias: [],
    produtoFarmacia: null

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
        case 'FETCH_PRODUTO_FARMACIA':
            return {
                ...state,
                produtoFarmacias: action.payload
            }
        case 'SET_PRODUTO_FARMACIA':
            return {
                ...state,
                produtoFarmacia: action.payload
            }
        case 'CLEAR_PRODUTO_FARMACIA':
            return {
                ...state,
                produtoFarmacia: null
            }
        default:
            return state
    }
}