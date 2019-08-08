const ADD_CUSTOMER = 'ADD_CUSTOMER'
const DELETE_CUSTOMER = 'DELETE_CUSTOMER'
const BULK_DELETE_CUSTOMER = 'BULK_DELETE_CUSTOMER'

export const addCustomer = data => ({
  type: ADD_CUSTOMER,
  payload: data
})

export const deleteCustomer = id => ({
  type: DELETE_CUSTOMER,
  payload: {
    id
  }
})

export const bulkDeleteCustomer = ids => ({
  type: BULK_DELETE_CUSTOMER,
  payload: {
    ids
  }
})

const customerReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_CUSTOMER:
      return [
        ...state,
        {
          id: state.reduce((maxId, customer) => Math.max(customer.id, maxId), 0) + 1,
          ...action.payload
        }
      ]
    case DELETE_CUSTOMER:
      return state.filter(customer => customer.id !== action.payload.id)
    case BULK_DELETE_CUSTOMER:
      return state.filter(customer => !action.payload.ids.includes(customer.id))
    default:
      return state
  }
}

export default customerReducer
