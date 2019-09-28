import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import { reducer as toastrReducer } from 'react-redux-toastr'

import User from '../CalassAndComponents/Usuario/usuarioReducer'

export default combineReducers({
   form: formReducer,
   toastr: toastrReducer,
   user: User
})