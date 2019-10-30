import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import User from '../CalassAndComponents/Usuario/usuarioReducer'
import ProdutoReducer from '../CalassAndComponents/Produto/produtoReducer'
import FarmaciaReducer from '../CalassAndComponents/Farmacia/farmaciaReducer'

export default combineReducers({
   form: formReducer,
   toastr: toastrReducer,
   user: User,
   produtos: ProdutoReducer,
   farmacia: FarmaciaReducer
})