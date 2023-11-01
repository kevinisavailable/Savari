import { Button, Form, Input } from 'antd'
import React from 'react'
import { updatePhoneSession } from '../../Auth/AuthenticationServices'

const SessionVerificationForm = ({phoneSessionResult}) => {
    console.log(phoneSessionResult)
    const onFinish = async(values)=>{
        const result = await updatePhoneSession(phoneSessionResult.userId , values.otp , phoneSessionResult.name)
        console.log(result)
    }

  return (
    <div>
        <h3>Hello {phoneSessionResult.name} , Please enter your otp sent to your registered phone number</h3>
            <Form
                name="basic"
                labelCol={{
                span: 8,
                }}
                wrapperCol={{
                span: 16,
                }}
                style={{
                maxWidth: 600,
                }}
                initialValues={{
                remember: true,
                }}
                onFinish={onFinish}
                autoComplete="off"
            >
                <Form.Item
                label="OTP"
                name="otp"
                rules={[
                    {
                    required: true,
                    message: 'Please input your Name!',
                    },
                ]}
                >
                <Input type='number'/>
                </Form.Item>
                <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
                >
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    </Form.Item>
        </Form>
    </div>
  )
}

export default SessionVerificationForm