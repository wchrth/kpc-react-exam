import React from 'react'
import { Form } from 'antd'
import { css } from '@emotion/core'
import PhoneInput from 'react-phone-number-input'

import 'react-phone-number-input/style.css'

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

const phoneInput = css`
  line-height: 1;
  .react-phone-number-input__icon-image {
    vertical-align: top;
  }
`

const renderPhoneInput = ({
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
      <PhoneInput
        css={phoneInput}
        {...input}
        {...rest}
        children={children}
      />
    </Form.Item>
  )
}

export default renderPhoneInput
