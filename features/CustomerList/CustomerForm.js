import React from 'react'
import { css } from '@emotion/core'
import { Field, reduxForm } from 'redux-form'
import { Row, Col, Form, Select, Radio, Button } from 'antd'
import { isValidPhoneNumber } from 'react-phone-number-input'
import renderInput from '../../components/form/renderInput'
import renderSelect from '../../components/form/renderSelect'
import renderDatePicker from '../../components/form/renderDatePicker'
import renderRadioGroup from '../../components/form/renderRadioGroup'
import renderPhoneInput from '../../components/form/renderPhoneInput'
import { normalizeMoney } from '../../utils/normalize'

const { Option } = Select

const form = css`
  padding: 20px;
  border: 1px solid #d8d8d8;
`

const CustomerForm = ({ handleSubmit, pristine, submitting }) => {
  return (
    <Form css={form} onSubmit={handleSubmit} labelAlign="left">
      <Row gutter={24}>
        <Col xs={6}>
          <Field label="Title" name="title" component={renderSelect} required>
            <Option value="Mr.">Mr.</Option>
            <Option value="Mrs.">Mrs.</Option>
            <Option value="Miss">Miss</Option>
            <Option value="Ms.">Ms.</Option>
          </Field>
        </Col>
        <Col xs={9}>
          <Field
            label="First Name"
            name="firstName"
            component={renderInput}
            required
          />
        </Col>
        <Col xs={9}>
          <Field
            label="Last Name"
            name="lastName"
            component={renderInput}
            required
          />
        </Col>
      </Row>
      <Row gutter={24}>
        <Col xs={12}>
          <Field
            label="Birthday"
            name="birthday"
            component={renderDatePicker}
            required
          />
        </Col>
        <Col xs={12}>
          <Field
            label="Nationality"
            name="nationality"
            component={renderSelect}
          >
            <Option value="thai">Thai</Option>
          </Field>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col md={12}>
          <Field label="Gender" name="gender" component={renderRadioGroup}>
            <Radio value="male">Male</Radio>
            <Radio value="female">Female</Radio>
            <Radio value="unisex">Unisex</Radio>
          </Field>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col md={12}>
          <Field
            label="Mobile Phone"
            name="phone"
            component={renderPhoneInput}
            required
          />
        </Col>
      </Row>
      <Row gutter={24}>
        <Col md={12}>
          <Field label="Passport No" name="passport" component={renderInput} />
        </Col>
      </Row>
      <Row gutter={24}>
        <Col md={12}>
          <Field
            label="Expected Salary"
            name="expectedSalary"
            addonAfter="THB"
            component={renderInput}
            normalize={normalizeMoney}
            required
          />
        </Col>
      </Row>
      <Button
        type="primary"
        htmlType="submit"
        disabled={pristine || submitting}
      >
        Submit
      </Button>
    </Form>
  )
}

const validate = values => {
  let errors = {}
  if (!values.title) {
    errors.title = 'Required'
  }
  if (!values.firstName) {
    errors.firstName = 'Required'
  }
  if (!values.lastName) {
    errors.lastName = 'Required'
  }
  if (!values.birthday) {
    errors.birthday = 'Required'
  }
  if (!values.phone) {
    errors.phone = 'Required'
  } else if (!isValidPhoneNumber(values.phone)) {
    errors.phone = 'Invalid phone number'
  }
  if (!values.expectedSalary) {
    errors.expectedSalary = 'Required'
  } else if (!/^[0-9]+(\.[0-9]{1,2})?$/.test(values.expectedSalary)) {
    errors.expectedSalary = 'Invalid salary'
  }
  return errors
}

export default reduxForm({ form: 'customer', validate })(CustomerForm)
