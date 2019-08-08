import React from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import CustomerForm from './CustomerForm'
import CustomerTable from './CustomerTable'
import { addCustomer, deleteCustomer } from '../../reducers/customerReducer'

const Container = styled('div')`
  max-width: 960px;
  margin: 20px auto 0;
`

const CustomerList = ({ customers, addCustomer, deleteCustomer }) => {
  return (
    <Container>
      <CustomerForm onSubmit={values => addCustomer(values)} />
      <CustomerTable
        customers={customers}
        onDelete={id => deleteCustomer(id)}
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
    addCustomer: data => dispatch(addCustomer(data)),
    deleteCustomer: id => dispatch(deleteCustomer(id))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerList)
