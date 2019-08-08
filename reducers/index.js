import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import customers from './customerReducer'

const rootReducer = combineReducers({
  form: formReducer,
  customers
})

export default rootReducer
