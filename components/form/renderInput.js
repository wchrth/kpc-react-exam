import React from 'react'
import { Form, Input } from 'antd'

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

const renderInput = ({
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
      <Input {...input} {...rest} children={children} />
    </Form.Item>
  )
}

export default renderInput
