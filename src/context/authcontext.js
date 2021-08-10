import React from 'react';

const AuthContext = React.createContext({
    isLoggedIn: false,
    user: null
});

export default AuthContext;