const INITIAL_STATE = {
    farmacias: [],
    farmacia: []
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'FETCH_FARMACIAS':
            return {
                ...state,
                farmacias: action.payload
            }
        case 'FETCH_FARMACIA':
            return {
                ...state,
                farmacia: action.payload
            }
        default:
            return state
    }
}