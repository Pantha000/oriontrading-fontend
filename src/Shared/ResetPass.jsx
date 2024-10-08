import  { useEffect, useState } from 'react';
import Forgot from '../assets/forgot.jpeg'
import Logo from '../assets/Logo.png'
import {   useParams } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux"
import {  resetPassword } from '../redux/actions/userAction';
import { toast } from 'react-toastify';

const ResetPass = () => {
    const dispatch = useDispatch()
  
    const {token} = useParams()
    const [pass, setPass] = useState()
    const [cPass, setCPass] = useState()
    const {loading, error} = useSelector(state=>state.forgotPassword)

    const handleReset=()=>{
       if(pass === cPass){
            const userData = {
                password:pass,
                confirmPassword:cPass
            }
            dispatch(resetPassword(userData, token))
       }
       else{
        toast("Password Not Matched")
       }
    }
    useEffect(()=>{
        
        if(error){
            toast(error)
        }
    }, [ error])
    return (
        <div className="font-[sans-serif] text-[#333] bg-white md:h-screen p-4">


            <div className="grid grid-cols-2 justify-center items-center gap-8">
                <form className="max-w-md w-full mx-auto">
                    <div className="mb-12">
                        <h3 className=" text-primary text-center text-4xl font-extrabold">Reset your password</h3>
                        <p className='m-3 text-primary text-center'>Reset Your Orion Trading System Password - Secure Account Recovery</p>
                    </div>
                    <div className='bg-bg2 p-8 rounded-3xl'>
                        <div className=''>
                            <label htmlFor="">Password</label>
                            <div className="relative flex items-center">

                                <input onChange={(e)=>setPass(e.target.value)} name="password" type="text" required className="w-full text-sm border-b border-gray-300 bg-bg2 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Enter password" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                                </svg>
                            </div>
                        </div>
                        <div className="mt-8">
                            <label htmlFor="">Confirm Password</label>
                            <div className="relative flex items-center">
                                <input onChange={(e)=>setCPass(e.target.value)} name="password" type="password" required className="w-full bg-bg2 text-sm border-b border-gray-300 focus:border-blue-600 px-2 py-3 outline-none" placeholder="Enter confirm password" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                                </svg>
                            </div>
                        </div>

                        <div className="mt-12 grid justify-center">
                            <button onClick={handleReset} type="button" className="w-full  shadow-xl py-2.5 px-4 text-sm font-semibold rounded-full text-white bg-primary hover:bg-blue-700 focus:outline-none">
                                {loading?"Loading...":"Reset Password"}
                            </button>
                        </div>
                    </div>

                </form>
                <div className="  w-full  md:rounded-tr-xl md:rounded-br-xl lg:p-12 grid grid-cols-1 justify-center items-center gap-6 p-8">
                    <img src={Logo} className=" object-contain block mx-auto" alt="login-image" />
                    <img src={Forgot} className=" w-full h-full object-contain block mx-auto" alt="login-image" />

                </div>

            </div>

        </div>
    );
};

export default ResetPass;