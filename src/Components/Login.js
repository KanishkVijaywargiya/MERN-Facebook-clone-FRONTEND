import { Button } from '@material-ui/core';

import React from 'react'
import './Login.css'

import { auth, provider } from '../firebase'

function Login() {

    const signIn = () => {
        // do clever google login
        auth.signInWithPopup(provider)
        // .catch(err => alert(err.message))
    }

    return (
        <div className='login' >
            <div className="login__logo">
                <img src="https://www.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-facebook-2019-circle-512.png" alt="fb circle" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Facebook_Logo_%282019%29.svg/1280px-Facebook_Logo_%282019%29.svg.png" alt="fb text" />
            </div>
            <Button type='submit' onClick={signIn}>Sign In</Button>
        </div>
    )
}

export default Login
