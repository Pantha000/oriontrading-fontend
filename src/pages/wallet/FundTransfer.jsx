import { useEffect, useState } from 'react';
import WallatNav from '../../components/WallatNav';
import { useDispatch, useSelector } from 'react-redux';
import { clearError, clearSuccessFTS, fundingToSpot } from '../../redux/actions/userAction';
import getToken from '../../components/getToken';
import { toast } from 'react-toastify';

const FundTransfer = () => {
    const dispatch = useDispatch()
    const {user} = useSelector(state=>state.user)
    const {ftsloading, ftssuccess, ftserror} = useSelector(state=>state.transection)
    const [amount, setAmount]= useState()
    const handleTransfer = ()=>{
        const userData = {
            amount:parseFloat(amount)
        }
        const token = getToken()
        dispatch(fundingToSpot(userData, token))
    }
    useEffect(()=>{
        if(ftssuccess){
            toast(ftssuccess)
        }
        dispatch(clearSuccessFTS())
        if(ftserror){
            toast(ftserror)
        }
        clearError()
    },[ftssuccess, ftserror])
    return (
        <div className='pt-28 container mx-auto px-4'>
            <WallatNav />
            <div className='grid gap-8 sm:gap-12 md:gap-16 lg:gap-20 m-4 sm:m-8 md:m-12 lg:m-20 grid-cols-1 sm:grid-cols-2'>
                <div className='flex flex-col'>
                    <h1 className='text-2xl sm:text-3xl text-primary my-3 font-semibold'>Transfer to Spot</h1>
                    <div className='grid gap-4'>
                        <div>
                            <p className='text-sm sm:text-base'>From Wallet</p>
                            <input className="appearance-none border rounded py-2 px-3 focus:shadow-outline" id="from-wallet" type="text" placeholder="Funding" />
                        </div>
                        <div>
                            <p className='text-sm sm:text-base'>To Wallet</p>
                            <input className="appearance-none border rounded py-2 px-3 focus:shadow-outline" id="to-wallet" type="text" placeholder="Spot" />
                        </div>
                        <div>
                            <p className='text-sm sm:text-base'>Amount</p>
                            <input onChange={(e)=>setAmount(e.target.value)} className="appearance-none border rounded py-2 px-3 focus:shadow-outline" id="amount" type="text" placeholder="Enter Amount" />
                        </div>
                    </div>
                    <button  onClick={handleTransfer} className='bg-primary p-2 sm:p-4 w-full sm:w-1/3 md:w-1/4 lg:w-1/5 my-4 rounded-xl text-white'>{ftsloading?"Loading....":"Transfer"}</button>
                </div>
                <div className='flex items-center justify-center sm:justify-end'>
                    <h1 className='text-end text-primary text-lg sm:text-xl font-semibold'>Available:  {user?.fundingBalance.toFixed(2)} USD</h1>
                </div>
            </div>
        </div>
    );
};

export default FundTransfer;

