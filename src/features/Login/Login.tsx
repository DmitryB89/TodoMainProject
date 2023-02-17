import React from 'react';
import Grid from "@mui/material/Grid";
import {FormControl, FormControlLabel, FormGroup, FormLabel} from "@mui/material";
import TextField from "@mui/material/TextField";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import {useFormik} from "formik";

export const Login = () => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
        },
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })


    return <Grid container justifyContent={'center'}>
        <Grid item justifyContent={'center'}>
            <FormControl>
                <FormLabel>
                    <p>Please, get registered to log in
                        <a href="https://social-network.samuraijs.com/"
                           target={'_blank'}>here
                        </a>
                    </p>
                    <p> or use common test account credentials </p>
                    <p> Email: free@samuraijs.com </p>
                    <p> Password: free </p>
                </FormLabel>
                <FormGroup>
                    <TextField label={'Email'} margin={'normal'} name={'email'} onChange={formik.handleChange} value={formik.values.email}/>
                    <TextField type={'password'} label={'Password'} margin={'normal'} name={'password'} onChange={formik.handleChange} value={formik.values.password}/>
                    <FormControlLabel label={'Remember me'} control={<Checkbox name={'rememberMe'} onChange={formik.handleChange}/>} checked={formik.values.rememberMe}/>
                    <Button type={'submit'} variant={'contained'} color={'primary'}>
                        Login
                    </Button>
                </FormGroup>
            </FormControl>

        </Grid>

    </Grid>
};
