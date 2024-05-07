import React, { useState } from 'react'
import { addChatRoom } from './ProductReducer';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ChatRoom } from './Data';
import '../App.css'

function Create() {
    const [name, setName] = useState('');
    const [text, setText] = useState('')
    const chatrooms = useSelector((state) => state.chatrooms);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(addChatRoom({ id: chatrooms[chatrooms.length - 1].id + 1, name, text }));
        navigate('/chatroom');
    }
    return (
        <div className='container'>
            <div className='list-chatroom'>
                <img src='images/e26f21bb42a8278e6b2890d43364591c.jpg' />
                <ul>
                    <li><a href='/'>Home</a></li>
                    <li><a href='/chatroom'>ChatRoom</a></li>
                </ul>

                <div className='slider-chatroom'>
                    <img src='images/Hocbong-100-e-bannerweb.png' />
                </div>

                <table className='table'>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Text</th>
                            <th>Time</th>
                        </tr>
                    </thead>

                    <tbody>
                        {ChatRoom.map((ChatRoom, index) => (
                            <tr key={index}>
                                <td>{ChatRoom.id}</td>
                                <td>{ChatRoom.name}</td>
                                <td>{ChatRoom.text}</td>
                                <td>{ChatRoom.timestamp}</td>
                            </tr>
                        ))}
                    </tbody>


                </table>
                <form onSubmit={handleSubmit}>
                    <div >
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
                <div className='footer-chatroom' style={{ backgroundColor: 'red', height: '150px', color: 'white', textAlign: 'center' }}>
                    @2024 - Created by FPTU
                </div>
            </div>

        </div>
    );
}

export default Create