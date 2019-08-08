import React from 'react'
import moment from 'moment'
import { Form, DatePicker } from 'antd'

const formItemLayout = {
  labelCol: {
    sm: { span: 24 },
    md: { span: 8 },
    lg: { span: 6 }
  },
  wrapperCol: {
    sm: { span: 24 },
    md: { span: 16 },
    lg: { span: 18 }
  }
}

const renderDatePicker = ({
  input,
  meta,
  children,
  hasFeedback,
  label,
  ...rest
}) => {
  const hasError = meta.touched && meta.invalid
  return (
    <Form.Item
      {...formItemLayout}
      label={label}
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
