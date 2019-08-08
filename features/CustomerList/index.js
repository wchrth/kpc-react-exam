import React from 'react'
import { connect } from 'react-redux'
import styled from '@emotion/styled'
import CustomerForm from './CustomerForm'
import { addCustomer } from '../../reducers/customerReducer'

const Container = styled('div')`
  max-width: 960px;
  margin: 20px auto 0;
`

const CustomerList = ({ customers, addCustomer }) => {
  return (
    <Container>
      <CustomerForm onSubmit={values => addCustomer(values)} />
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
    addCustomer: data => dispatch(addCustomer(data))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomerList)
