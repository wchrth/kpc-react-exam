import React from 'react'
import { Form, Select } from 'antd'

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

const renderSelect = ({
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
      <Select {...input} {...rest} children={children} />
    </Form.Item>
  )
}

export default renderSelect
