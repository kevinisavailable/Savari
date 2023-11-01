import { Button, Form, Input } from 'antd'
import React from 'react'
import { getCurrentUser, updatePhoneSessionForDriver } from '../../Auth/AuthenticationServices'
import { useUserStore } from '../../state/user'

const SessionVerificationForm = ({phoneSessionResult , modalClose}) => {
    const {storeUser , storeSession} = useUserStore()

    const onFinish = async(values)=>{
        const result = await updatePhoneSessionForDriver(phoneSessionResult.userId , values.otp , phoneSessionResult.name)
        
        if(result.$id){
            var user = await getCurrentUser()
            storeUser(user)
            storeSession(true)
            modalClose(false)
        }
    }

  return (
    <div>
        { phoneSessionResult.name && (<><h3>Hello {phoneSessionResult.name} , Please enter your otp sent to your registered phone number</h3></>) }
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
                    message: 'Please input your OTP!',
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