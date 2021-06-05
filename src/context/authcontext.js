import React from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false
    // loginHandler: () => {},
    // logoutHandler: () => {}
});

export default AuthContext;