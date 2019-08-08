const ADD_CUSTOMER = 'ADD_CUSTOMER'

export const addCustomer = (data) => ({
  type: ADD_CUSTOMER,
  payload: data
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
    default:
      return state
  }
}

export default customerReducer
