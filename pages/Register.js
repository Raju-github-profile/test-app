import React from 'react'
import { handleRegister, handleLogin } from '../redux/slices/slice';
const Register = () => {
    const handleRegister = (e) => {
        e.preventDefault();
        dispatch(handleRegister({ bool: true }))
    }
    return (
        <div onClick={handleRegister}>Register</div>
    )
}

export default Register