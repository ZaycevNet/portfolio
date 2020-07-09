import React, {FormEvent, useRef, useState} from "react";
import {Input, notification} from 'antd';
import axios from 'axios';
import {SmileOutlined} from "@ant-design/icons/lib";

const {TextArea} = Input;

export const BottomRequest: React.FC = () => {

    const emailRef = useRef<HTMLInputElement | null>(null);
    const nameRef = useRef<HTMLInputElement | null>(null);
    const messageRef = useRef<any>(null);

    const onSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const email = emailRef.current!.value;
        const name = nameRef.current!.value;
        const message = messageRef.current!.state.value;

        if(!email || !name || !message){
            notification.error({
                message: 'Required inputs',
                description: 'It is necessary to fill in all the fields for sending',
                duration: 3
            });
        }else{
            axios
                .post('/api/message-request', {email,name,message})
                .then(() => {
                    notification.success({
                        message: 'Message sent',
                        description: 'Thank you, I will answer you soon',
                        icon: <SmileOutlined style={{ color: '#108ee9' }} />,
                        duration: 5
                    });
                });

            emailRef.current!.value = '';
            nameRef.current!.value = '';
            messageRef.current!.setValue('');

        }
    };

    return <div className={'bottom-request'}>
        <form onSubmit={onSubmit}>
            <label>
                <p>E-Mail</p>
                <input placeholder={'jobs@zaycev.dev'} ref={emailRef}/>
            </label>
            <label>
                <p>Organization</p>
                <input placeholder={'OOO Organizatio'} ref={nameRef}/>
            </label>
            <label>
                <p>Message</p>
                <TextArea
                    placeholder="Your message"
                    autoSize={{ minRows: 1, maxRows: 6 }}
                    ref={messageRef}
                />
            </label>
            <button type={"submit"}>Send</button>
        </form>
    </div>
};