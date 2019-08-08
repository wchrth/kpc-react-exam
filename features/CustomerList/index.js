import React from 'react'
import { connect } from 'react-redux'
import { reset } from 'redux-form'
import styled from '@emotion/styled'
import CustomerForm from './CustomerForm'
import CustomerTable from './CustomerTable'
import {
  addCustomer,
  deleteCustomer,
  bulkDeleteCustomer
} from '../../reducers/customerReducer'

const Container = styled('div')`
  max-width: 960px;
  margin: 20px auto 0;
`

const CustomerList = ({
  customers,
  addCustomer,
  deleteCustomer,
  bulkDeleteCustomer
}) => {
  return (
    <Container>
      <CustomerForm onSubmit={values => addCustomer(values)} />
      <CustomerTable
        customers={customers}
        onDelete={id => deleteCustomer(id)}
        onBulkDelete={ids => bulkDeleteCustomer(ids)}
      />
    </Container>
  )
}

const mapStateToProps = state => {
  return {
    customers: state.customers
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addCustomer: data => {
      dispatch(addCustomer(data))
      dispatch(reset('customer'))
    },
    deleteCustomer: id => dispatch(deleteCustomer(id)),
    bulkDeleteCustomer: ids => dispatch(bulkDeleteCustomer(ids))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerList)
