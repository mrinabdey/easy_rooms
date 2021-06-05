import React, { useEffect, useRef, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './login_form.css';
import '../../fontawesome-free-5.15.3-web/css/all.css';
import '../../fontawesome-free-5.15.3-web/js/all';
import CustomButton from '../common_components/CustomButton';
import SignupPage from '../../pages/signup_page';
import LoginPage from '../../pages/login_page';

const LoginForm = (props) => {
    const email = useRef();
    const password = useRef();
    const [message, setMessage] = useState('');
    // const [token, setToken] = useState(null);
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    // const url = 'http://localhost:4000/auth/login';
    const url = 'https://easyrooms.herokuapp.com/auth/login';

    // useEffect(() => {
    //     props.loggedIn(isLoggedIn);
    // }, [setIsLoggedIn]);

    // useEffect(() => {
    //     localStorage.setItem('token', token);
    // }, [token])

    const loginFormHandler = () => {
        fetch(url, {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                "email": email.current.value,
                "password": password.current.value,
            }),
        })
        .then(res => {
            if(parseInt(res.status) === 200) {
                // setIsLoggedIn(true);
                localStorage.setItem('isLoggedIn', true);
            }
            return res.json();
        })
        .then(res => {
            // (localStorage.getItem('isLoggedIn') === 'true') ? localStorage.setItem('token', res) : setMessage(res);
            if(localStorage.getItem('isLoggedIn') === 'true') {
                localStorage.setItem('token', res);
                // setMessage('');
                props.loggedIn(true);
            } else {
                setMessage(res);
            }
            // console.log(localStorage.getItem('isLoggedIn'));
        })
        .catch(err => {
            console.log(err);
        })
    }

    return (
        <>
        <div className="message_container">{message}</div>
        <div className="login_form_container">
            <i class="far fa-envelope icon"></i>
            <input ref={email} className="email_input" type="text" placeholder="email"/>
            <i class="fas fa-unlock-alt icon"></i>
            <input ref={password} className="password_input" type="password" placeholder="password" />
            <CustomButton onClick={loginFormHandler} buttonText="Login" />
            <div className="bottom_text_1">Forgot password?<span className="click_here_text"> Click here</span></div>
            <div className="bottom_text_2">New User? <Link to="/signup" style={{textDecoration: 'none'}}><span className="click_here_text">Signup</span></Link> first</div>
        </div>
        </>
    )
}

export default LoginForm;
