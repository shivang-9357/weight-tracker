import React from 'react';

import './Auth.css';

const Auth = (props) =>{

    return <div>
        <div className='login-card'>
        <h1>Shhh.....Don't make noise. Just</h1>
        <button onClick={props.onClickLogin} className='custom-button'>Login Anonymously</button>
        </div>
    </div>
}

export default Auth;