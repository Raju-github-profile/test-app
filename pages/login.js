import React from 'react'
import { useDispatch } from 'react-redux'
import { handleLogin, handleRegister } from '../redux/slices/slice'
const Login = () => {
    const dispatch = useDispatch()
    const handlelogin = () => {
        dispatch(handleLogin({ bool: true }))
    }
    return (
        <div onClick={handlelogin}>Login</div>
    )
}
export default Login