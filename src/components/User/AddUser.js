import React, { useState, useContext, useReducer, useEffect } from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'
import classes from './AddUser.module.css'
import { LoginContext } from '../../Context/LoginContext'

const emailReducer = (state, action) => {
    if (action.type === "USER_EMAIL_INPUT") {
        // return { value: action.val, isValid: action.val.includes("@") };
    }
    return { value: '', isValid: false };
}
const passwordReducer = (state, action) => {
    if (action.type === "USER_PASSWORD_INPUT") {
        // return { value: action.val, isValid: action.val.length > 6 };
    }
    return { value: '', isValid: false };
}
const AddUser = () => {
    const [formIsValid, setFormIsValid] = useState(false);
    const { Display, setDisplay } = useContext(LoginContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log("email", email);

    const [emailState, dispatchEmail] = useReducer(emailReducer, {
        value: '',
        isValid: null
    })
    const [passwordState, dispatchPassword] = useReducer(passwordReducer, {
        value: '',
        isValid: null
    })
    const { isValid: emailIsValid } = emailState;
    const { isValid: passwordIsValid } = passwordState;
    const handleSubmit = (event) => {
        event.preventDefault();
        setDisplay(Display => !Display)
        localStorage.setItem('isLoggedIn', '1');
    }
    const emailChangeHandler = (event) => { 
        dispatchEmail({ type: "USER_EMAIL_INPUT", val: setEmail(event.target.value) });
       
    };
    const passwordChangeHandler = (event) => {
        dispatchPassword({ type: "USER_PASSWORD_INPUT", val: setPassword(event.target.value) });
      
    };
    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(
                emailIsValid && passwordIsValid
            );
        }, 500)
        return () => {
            clearTimeout(identifier)
        };
    }, [emailIsValid, passwordIsValid])
    return (
        <>
            <div className='header'>
                <Button className={classes.header_button} >Login</Button>
                <Button>Register</Button>
            </div>
            {Display === false && (<form>
                <Input placeholder={"Email or Username"} isValid={emailIsValid} value={emailState} onChange={(e) => { emailChangeHandler(e) }} />
                <Input type={"password"} isValid={passwordIsValid} placeholder={"Password"} value={password} onChange={(e) => { passwordChangeHandler(e) }} />
                <Button type={"submit"} onClick={handleSubmit}>SIGN IN</Button>
            </form>)}
        </>
    )
}
export default AddUser;