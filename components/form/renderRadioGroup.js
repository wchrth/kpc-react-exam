import React from 'react'
import { Form, Radio } from 'antd'

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

const renderRadioGroup = ({
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
      <Radio.Group {...input} {...rest} children={children} />
    </Form.Item>
  )
}

export default renderRadioGroup
