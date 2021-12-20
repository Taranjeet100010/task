import React, { useState } from 'react'
import Input from '../UI/Input'
import Button from '../UI/Button'
import classes from './AddUser.module.css'

const AddUser = () => {
    const [Display, setDisplay] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log("email", email);
    
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log("Submitted Successfully");
    }
    const handletab = () => {
        setDisplay(Display => !Display)
        console.log("Display", Display);
    }
    return (
        <>
            <div className='header'>
                <Button className={classes.header_button} onClick={handletab}>Login</Button>
                <Button onClick={handletab}>Register</Button>
            </div>
            {Display === false ? (<h1>Register Screen</h1>) : (<form>
                <Input placeholder={"Email or Username"} value = {email} onChange = {(e) => {setEmail(e.target.value)}} />
                <Input type={"password"} placeholder={"Password"} value = {password} onChange = {(e) => {setPassword(e.target.value)}}/>
                <Button type={"submit"} onClick={handleSubmit}>SIGN IN</Button>
            </form>)}
        </>
    )
}
export default AddUser;