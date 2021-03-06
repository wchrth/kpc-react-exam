import React from 'react'
import moment from 'moment'
import { Form, DatePicker } from 'antd'

const formItemLayout = {
  labelCol: {
    sm: { span: 24 },
    md: { span: 8 }
  },
  wrapperCol: {
    sm: { span: 24 },
    md: { span: 16 }
  }
}

const renderDatePicker = ({
  input,
  meta,
  children,
  hasFeedback,
  label,
  required,
  ...rest
}) => {
  const hasError = meta.touched && meta.invalid
  return (
    <Form.Item
      {...formItemLayout}
      label={label}
      required={required}
      validateStatus={hasError ? 'error' : 'success'}
      hasFeedback={hasFeedback}
      help={hasError && meta.error}
    >
      <DatePicker
        {...input}
        {...rest}
        children={children}
        value={input.value ? moment(input.value) : null}
      />
    </Form.Item>
  )
}

export default renderDatePicker
