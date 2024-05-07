import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { products } from './Data';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import '../App.css'
function Home() {
    const users = useSelector((state) => state.users);
    const dispatch = useDispatch();

    return (
        <div className='list-chatroom'>
            <img src='images/e26f21bb42a8278e6b2890d43364591c.jpg'/>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/chatroom'>ChatRoom</a></li>
            </ul>

            <div className='slider-chatroom'>
                <img src='images/Hocbong-100-e-bannerweb.png'/>
            </div>

            <h1 style={{textAlign: 'center'}}>Welcome to simple chat room</h1>

            <div className='footer-chatroom' style={{backgroundColor: 'red', height: '150px', color: 'white', textAlign: 'center'}}>
                @2024 - Created by FPTU
            </div>
        </div>
    )
}

export default Home
