import React from 'react'
import { Form, Input } from 'antd'

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

const renderInput = ({
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
      <Input {...input} {...rest} children={children} />
    </Form.Item>
  )
}

export default renderInput
