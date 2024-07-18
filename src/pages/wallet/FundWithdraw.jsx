import  { useEffect, useState } from 'react';
import WallatNav from '../../components/WallatNav';
import RoadMap from '../../components/RoadMap';
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
        <div className='container pt-28 max-auto'>
            <WallatNav></WallatNav>
            <form onSubmit={handleWithdraw} action="" className='m-20'>
                <div className='grid grid-cols-1 gap-4 w-1/3'>
                    <h1 className='  font-semibold text-2xl '>Withdraw</h1>
                    <input onChange={(e)=>setAmount(e.target.value)} className=" appearance-none border rounded py-2   focus:shadow-outline" id="amount" type="text" placeholder="Enter Amount" required></input>
                    <input onChange={(e)=>setAddress(e.target.value)} className=" appearance-none border rounded py-2   focus:shadow-outline" id="amount" type="text" placeholder="TRC20 Address" required></input>
                    <input className=" appearance-none border rounded py-2   focus:shadow-outline" id="amount" type="text" placeholder="OTP code"></input>
                </div>
                <div className='mt-8 grid grid-cols-1 w-1/3'>
                    <h1 className=' font-semibold text-2xl '>Withdraw password</h1>
                    <div className='flex '> <input required onChange={(e)=>setPass(e.target.value)} className="w-full appearance-none border rounded py-2   focus:shadow-outline" id="amount" type="text" placeholder="withdraw password"></input>
                        <button  className='bg-primary p-4  rounded-2xl ms-5 text-white'>{wloading ? "Loading....": "Withdraw" }</button></div>
                </div>
                <p><li className='py-2 text-primary'>To initiate a withdrawal,you need to have a minimum of 10.00 USDT in your account</li></p>
            </form>
            <RoadMap></RoadMap>
        </div>
    );
};

export default FundWithdraw;