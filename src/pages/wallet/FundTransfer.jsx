import { useEffect, useState } from 'react';
import WallatNav from '../../components/WallatNav';
import RoadMap from '../../components/RoadMap';
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
        <div className='pt-28 container mx-auto'>
            <WallatNav></WallatNav>
            <div className='grid m-20 grid-cols-2 justify-between'>
                <div className=''>
                    <h1 className='text-2xl text-primary my-3'>Transfer to spot</h1>
                    <div className='grid w-3/4 gap-2'>
                        <p>From wallet</p>
                        <input className=" mb-2 appearance-none border rounded py-2   focus:shadow-outline" id="amount" type="text" placeholder="funding"></input>
                        <p>To wallet</p>
                        <input className=" appearance-none border rounded py-2   focus:shadow-outline" id="amount" type="text" placeholder="spot"></input>

                        <p>Amount</p>
                        <input onChange={(e)=>setAmount(e.target.value)} className=" appearance-none border rounded py-2   focus:shadow-outline" id="amount" type="text" placeholder="enter amount"></input>
                    </div>
                    <button onClick={handleTransfer} className='bg-primary p-4 w-1/5 my-4 rounded-xl '>{ftsloading?"Loading....":"Transfer"}</button>
                </div>
                <div>
                    <h1 className='text-end text-primary text-pretty font-semibold'>Available : {user?.fundingBalance.toFixed(2)} USD</h1>
                </div>
            </div>
            <RoadMap></RoadMap>


        </div>
    );
};

export default FundTransfer;