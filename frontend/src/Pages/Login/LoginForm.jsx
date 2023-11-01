import { Button, Form, Input, Modal } from 'antd'
import React, { useState } from 'react'
import { createPhoneSessionForDriver } from '../../Auth/AuthenticationServices'
import SessionVerificationForm from '../Register/SessionVerificationForm'

const LoginForm = ({isLoginModalOpen , loginModalClose , setIsLoginModalOpen}) => {
    const [ phoneSessionDetails , setPhoneSessionDetails] = useState({})
    const [otpSent , setOtpSent] = useState(false)

    const onFinish = async(values)=>{
        const phoneSessionResult = await createPhoneSessionForDriver(values.phoneNo , values.userId)
        setPhoneSessionDetails(phoneSessionResult)
        if(phoneSessionResult.userId && phoneSessionResult.$createdAt){
            setOtpSent(true)
        }
    }

  return (
    <div>
        <Modal open={isLoginModalOpen} onCancel={loginModalClose} footer={null} title={'Login'}>
        { otpSent ? (<>
            <SessionVerificationForm phoneSessionResult={phoneSessionDetails} modalClose={setIsLoginModalOpen}/>
        </>) : (
            <div>
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
                label="Phone Number"
                name="phoneNo"
                rules={[
                    {
                    required: true,
                    message: 'Please input your Phone Number!',
                    },
                ]}
                >
                <Input type='number'/>
                </Form.Item>
                <Form.Item
                label="User Id"
                name="userId"
                rules={[
                    {
                    required: true,
                    message: 'Please input your User Id!',
                    },
                ]}
                >
                <Input />
                </Form.Item>
                <Form.Item
                wrapperCol={{
                    offset: 8,
                    span: 16,
                }}
                >
                    <Button type="primary" htmlType="submit">
                       Login
                    </Button>
                    </Form.Item>
        </Form>
            </div>)
    }
        </Modal>
    </div>
  )
}

export default LoginForm