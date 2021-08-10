import LoginTitle from '../components/login_page/login_title';
import LoginForm from '../components/login_page/login_form';
import { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const LoginPage = (props) => {
    // const [isLoggedIn, setIsLoggedIn] = useState(false);
    const history = useHistory();

    const loginHandler = (email) => {
        props.loggedIn(email);
        history.push('/');
    }

    // const userHandler = (email) => {
    //     props.userHandler(email);
    // }

    // useEffect(() => {
    //     props.loggedIn(isLoggedIn);
    // }, [isLoggedIn])

    return (
        <>
        <LoginTitle />
        {/* <LoginForm /> */}
        <LoginForm loggedIn={loginHandler}/>
        </>
    )
}

export default LoginPage;