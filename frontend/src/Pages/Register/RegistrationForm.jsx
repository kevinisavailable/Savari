import React, { useState } from 'react'
import { Button, Checkbox, Form, Input , Modal } from 'antd';
import { createPhoneSession } from '../../Auth/AuthenticationServices';
import SessionVerificationForm from './SessionVerificationForm';

const RegistrationForm = ({ isModalOpen , modalClose }) => {

    const [otpSent , setOtpSent] = useState(false)
    const [phoneSessionDetails , setPhoneSessionDetails] = useState({})

    const onFinish = async(values) => {

    const phoneSessionResult = await createPhoneSession(values.phoneNo)
    phoneSessionResult.name = values.fullName
    setPhoneSessionDetails(phoneSessionResult)
    if(phoneSessionResult.userId && phoneSessionResult.expire){
        setOtpSent(true)
    }
    };

  return (
    <div>
        <Modal open={isModalOpen} onCancel={modalClose} title={"Register"} footer={null}>
    {
        otpSent ? (<>
            <SessionVerificationForm phoneSessionResult={phoneSessionDetails}/>
            </>) : 
            (<>
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
                label="Full Name"
                name="fullName"
                rules={[
                    {
                    required: true,
                    message: 'Please input your Name!',
                    },
                ]}
                >
                <Input />
                </Form.Item>
        
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
                    <Input  type='number'/>
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
            </>)
    }
    </Modal>
    </div>
  )
}

export default RegistrationForm