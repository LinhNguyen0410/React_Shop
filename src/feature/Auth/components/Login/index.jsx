import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import { loginAction } from '../../userSlice';
import LoginForm from '../LoginForm';


function Login(props) {
    const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (values) => {
        try {
            const action = loginAction(values)
            const resultAction = await dispatch(action)

            const user = unwrapResult(resultAction)
            const { closeDialog } = props
            if (closeDialog) {
                closeDialog()
            }
            // enqueueSnackbar('Login Successfully 🥰🥰 !!!', { variant: 'success' })

        } catch (error) {
            enqueueSnackbar(`${error.message} 😒😒`, { variant: 'error' })
        }
    }
    return (
        <div>
            <LoginForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Login;