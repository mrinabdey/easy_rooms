import React, { useRef, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

import './signup_form.css';
import '../../fontawesome-free-5.15.3-web/css/all.css';
import '../../fontawesome-free-5.15.3-web/js/all';
import CustomButton from '../common_components/CustomButton';
import mode from '../../mode';

const SignupForm = () => {
    const name = useRef();
    const location = useRef();
    const contact = useRef();
    const email = useRef();
    const password = useRef();
    const confirmPassword = useRef();
    const [message, setMessage] = useState('');
    let url;
    if(mode)
        url = 'https://easyrooms.herokuapp.com/auth/signup';
    else
        url = 'http://localhost:4000/auth/signup';

    // const passwordIconHandler = () => {
    //     if(password.current.value !== confirmPassword.current.value) {
    //         document.querySelectorAll('.check_icon_3')[0].classList.add('no_display')
    //         document.querySelectorAll('.check_icon_3')[1].classList.add('no_display')
    //     } else {
    //         document.querySelectorAll('.check_icon_3')[0].classList.remove('no_display')
    //         document.querySelectorAll('.check_icon_3')[1].classList.remove('no_display')
    //     }
    // }

    const formSubmitHandler = () => {
        fetch(url, {
            headers: {
                'Content-Type': 'application/json',

            },
            method: 'POST',
            body: JSON.stringify({
                'name': name.current.value.toString(),
                'email': email.current.value.toString(),
                'password': password.current.value.toString(),
                'contact': contact.current.value.toString(),
                'address': location.current.value.toString(),
            }),
        })
        .then(res => res.json())
        .then(res => setMessage(res))
        .catch(err => {
            console.log(err);
        })
    }

    // const changeIcon = (e) => {
    //     if(e.target.parentNode.classList.contains('check_icon_11') || e.target.parentNode.classList.contains('check_icon_21')) {
    //         document.querySelector('.check_icon_11').classList.toggle('no_display');
    //         document.querySelector('.check_icon_21').classList.toggle('no_display');
    //         document.querySelector('.password_input').type = (document.querySelector('.password_input').type == 'password') ? 'text' : 'password';
    //     }
    //     if(e.target.parentNode.classList.contains('check_icon_12') || e.target.parentNode.classList.contains('check_icon_22')) {
    //         document.querySelector('.check_icon_12').classList.toggle('no_display');
    //         document.querySelector('.check_icon_22').classList.toggle('no_display');
    //         document.querySelector('.confirm_password_input').type = (document.querySelector('.confirm_password_input').type == 'password') ? 'text' : 'password';
    //     }
    // }

    return (
        <>
       <div className="message_container">{message}</div>
        <div className="signup_form_container">
            {/* <i className="far fa-envelope icon"></i> */}
            <input ref={name} className="signup_input" type="text" placeholder="name"/><br/>
            <input ref={email} className="signup_input" type="text" placeholder="email"/><br/>
            {/* <i className="fas fa-unlock-alt icon"></i> */}
            {/* <i className="far fa-check-circle check_icon check_icon_3 no_display"></i> */}
            {/* <span className="check_icon check_icon_1 check_icon_11" onClick={(e) => changeIcon(e)}><i class="far fa-eye "></i></span>
            <span className="check_icon check_icon_2 check_icon_21 no_display" onClick={(e) => changeIcon(e)}><i className="far fa-eye-slash " onClick={(e) => changeIcon(e)}></i></span> */}
            <input ref={password} className="signup_input" type="password" placeholder="password"/><br/>
            <input ref={confirmPassword} className="signup_input confirm_password_input" type="password" placeholder="confirm password"/>
            <input ref={contact} className="signup_input" type="number" placeholder="phone number"/><br/>
            <input ref={location} className="signup_input" type="text" placeholder="address"/><br/>
            {/* <i className="fas fa-unlock-alt icon"></i> */}
            {/* <i className="far fa-check-circle check_icon check_icon_3 no_display"></i> */}
            {/* <span className="check_icon check_icon_1 check_icon_12" onClick={(e) => changeIcon(e)}><i class="far fa-eye "></i></span>
            <span className="check_icon check_icon_2 no_display check_icon_22" onClick={(e) => changeIcon(e)}><i className="far fa-eye-slash " onClick={(e) => changeIcon(e)}></i></span> */}
            <div><CustomButton onClick={formSubmitHandler} buttonText="Signup" /></div>
            <div className="bottom_text">Already have an account? <Link to="/login" style={{textDecoration: 'none'}}><span className="login_text" >Login </span></Link>instead</div>
        </div>
        </>
    )
}

export default SignupForm;
