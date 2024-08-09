import  { useEffect, useState } from 'react';
import WallatNav from '../../components/WallatNav';
import {useDispatch, useSelector} from "react-redux"
import { clearError, clearSuccessW, userWithdraw } from '../../redux/actions/userAction';
import getToken from '../../components/getToken';
import { toast } from 'react-toastify';

const FundWithdraw = () => {
    const dispatch = useDispatch()
    const {wloading, wsuccess, error} = useSelector(state=>state.transection)
    const [amount, setAmount] = useState()
    const [pass, setPass] = useState()
    const [address, setAddress] = useState()

    const handleWithdraw =(e)=>{
        e.preventDefault()
        const userData = {
            amount:parseFloat(amount),
            address:address,
            password:pass
        }
        const token = getToken()
        dispatch(userWithdraw(userData, token))
    }
    useEffect(()=>{
        if(wsuccess){
            toast(wsuccess)
        }
        dispatch(clearSuccessW())
        if(error){
            toast(error)
        }
        clearError()
    },[wsuccess, error])
    return (
        <div className='container pt-28 mx-auto px-4'>
        <WallatNav />
        <form onSubmit={handleWithdraw}  className='m-4 sm:m-8 md:m-12 lg:m-20'>
            <div className='grid grid-cols-1 gap-4 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto'>
                <h1 className='font-semibold text-xl sm:text-2xl'>Withdraw</h1>
                <input onChange={(e)=>setAmount(e.target.value)} className="appearance-none border rounded py-2 px-3 focus:shadow-outline" id="amount" type="text" placeholder="Enter Amount" />
                <input onChange={(e)=>setAddress(e.target.value)} className="appearance-none border rounded py-2 px-3 focus:shadow-outline" id="address" type="text" placeholder="TRC20 Address" />
                <input className="appearance-none border rounded py-2 px-3 focus:shadow-outline" id="otp" type="text" placeholder="OTP code" />
            </div>
            <div className='mt-6 sm:mt-8 md:mt-10 lg:mt-12 grid grid-cols-1 w-full sm:w-2/3 md:w-1/2 lg:w-1/3 mx-auto'>
                <h1 className='font-semibold text-lg sm:text-xl md:text-2xl'>Withdraw Password</h1>
                <div className='flex flex-col sm:flex-row items-center'>
                    <input onChange={(e)=>setPass(e.target.value)} className="w-full sm:w-4/5 appearance-none border rounded py-2 px-3 focus:shadow-outline" id="withdraw-password" type="text" placeholder="Withdraw password" />
                    <button className='bg-primary p-2 sm:p-4 rounded-lg sm:rounded-2xl mt-4 sm:mt-0 ms-0 sm:ms-5 text-white w-full sm:w-auto'>{wloading ? "Loading....": "Withdraw" }</button>
                </div>
            </div>
            <p className='text-sm sm:text-base md:text-lg text-primary mt-4'>
                <li className='py-2'>To initiate a withdrawal, you need to have a minimum of 10.00 USDT in your account</li>
            </p>
        </form>
    </div>

    );
};

export default FundWithdraw;


