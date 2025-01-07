import TextField from "@mui/material/TextField"
import { Link } from "react-router-dom"
import login from '../assets/img/login.png';

function Signup() {
    return (
        <div className='mt-[50px] flex justify-center items-center'>
            <div className="w-1/3">
                <img src={login} alt="" />
            </div>
            <div className="flex flex-col gap-3 text-center w-[450px]">
                <h2 className='text-2xl font-bold'>Create an account!</h2>
                <p>Star your 30 day free trial</p>
                <TextField
                    hiddenLabel
                    id="filled-hidden-label-normal"
                    placeholder="Full Name"
                    variant="filled"
                    fullWidth
                />
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
                    type='Password'
                    variant="filled"
                    fullWidth
                />
                <button className='bg-blue-500 w-full p-3 text-white'>  <Link to='#'>Sign Up</Link></button>
                <div className="text-center">
                    <p>If you have an account <Link to='#' className='text-blue-500'>Login now</Link></p>
                </div>
            </div>

        </div>
    )
}

export default Signup
