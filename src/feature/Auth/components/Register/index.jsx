import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import React from 'react';
import { useDispatch } from 'react-redux';
import { registerAction } from '../../userSlice';
import RegisterForm from '../RegisterForm';


function Register(props) {
    const dispatch = useDispatch()
    const { enqueueSnackbar } = useSnackbar();

    const handleSubmit = async (values) => {
        // console.log('Submit form : ', values);
        try {
            const action = registerAction(values)

            // set value.username = email user enter.
            values.username = values.email
            const resultAction = await dispatch(action)

            // using unwrapResult get result api return.
            const user = unwrapResult(resultAction)
            console.log('new user vua tao :', user);

            // ... do sth after submit form.
            // close diaglog
            const { closeDialog } = props
            if (closeDialog) {
                closeDialog()
            }
            // ... attach noti
            enqueueSnackbar('Register Successfully 🥰🥰 !!!', { variant: 'success' })

        } catch (error) {
            enqueueSnackbar(error.message, { variant: 'error' })
        }
    }
    return (
        <div>
            <RegisterForm onSubmit={handleSubmit} />
        </div>
    );
}

export default Register;