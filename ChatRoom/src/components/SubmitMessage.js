import React from 'react'

import React, { useState } from 'react'
import { addChatRoom } from './ProductReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ChatRoom } from './Data';

function SubmitMessage() {
    const [name, setName] = useState('');
    const [text, setText] = useState('')
    const chatrooms = useSelector((state) => state.chatrooms);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addChatRoom({ id: chatrooms[chatrooms.length - 1].id + 1, name, text }))
        navigate('/chatroom')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor='name'>Name:</label>
                <input type='text' name='name' className='form-control' placeholder='enter name'
                    onChange={e => setName(e.target.value)} />
            </div>
            <div>
                <label htmlFor='text'>Text:</label>
                <input type='text' name='text' className='form-control' placeholder='enter text'
                    onChange={e => setText(e.target.value)} />
            </div><br />
            <button className='btn btn-info'>Send</button>
        </form>
    )
}

export default SubmitMessage
