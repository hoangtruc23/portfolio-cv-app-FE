import { Checkbox, FormControlLabel, TextField } from "@mui/material"
import login from '../assets/img/login.png';
import { Link } from "react-router-dom";

function Login() {
    return (
        <div className='mt-[50px] flex justify-center items-center'>
            <div className="flex flex-col gap-3 text-center w-[450px]">
                <h2 className='text-2xl font-bold'>Welcome back!</h2>
                <p>Enter your credentials to access your account</p>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-normal"
                    placeholder="Email"
                    variant="filled"
                    fullWidth
                />
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-normal"
                    placeholder="Password"
                    variant="filled"
                    fullWidth
                />
                <div className="flex justify-between items-center">
                    <FormControlLabel control={<Checkbox defaultChecked />} label="Keep me logged in" />
                    <Link to='#'>Forgot password?</Link>
                </div>
                <button className='bg-blue-500 w-full p-3 text-white'>  <Link to='#'>Login</Link></button>
            </div>
            <div className="w-1/3">
                <img src={login} alt="" />
            </div>
        </div>
    )
}

export default Login
