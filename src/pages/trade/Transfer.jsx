import stack from "../../assets/icon/stacks.png"
import robot from "../../assets/robot.png"
import back from "../../assets/icon/back.png"

import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useEffect, useState } from "react"
import getToken from "../../components/getToken"
import { aiToSpot, clearError, clearSuccessATS } from "../../redux/actions/userAction"
import {toast} from "react-toastify"

const Transfer = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const {user} = useSelector(state=>state.user)
    const {atsloading, atssuccess, atserror} = useSelector(state=>state.transection)
    const [amount, setAmount]  = useState()
    
    const handleTransfer = ()=>{
        const userData = {
            amount:parseFloat(amount)
        }
        const token = getToken()
        dispatch(aiToSpot(userData, token))
    }
    useEffect(()=>{
        if(atssuccess){
            toast(atssuccess)
        }
        dispatch(clearSuccessATS())
        if(atserror){
            toast(atserror)
        }
        clearError()
    },[atssuccess, atserror])
  return (
    <div className="px-5 lg:px-0">
        <div className="container mx-auto pt-28 pb-12">
            <div className="flex justify-between items-center">
                <div className="flex">
                    <img src={back} className="mr-4 h-5 w-5 cursor-pointer hidden lg:block" onClick={()=>navigate(-1)}/>
                    <p className="text-xl text-[#CB087D] font-semibold">Transfer from AI</p>
                </div>
                <div className="flex items-center">
                    <img src={stack}/>
                    <p className="text-[#CB087D] font-semibold ml-3">Level : <span>0</span></p>
                </div>
            </div>
            <div className="mt-8 lg:ml-9">
                <p className="font-medium text-md">AI Balance: <span>{user?.aiBalance.toFixed(2)}</span> USDT</p>
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between lg:ml-8">
                <div className="w-full lg:w-7/12">
                    <div>
                        <div>
                            <label className="font-semibold text-md">From Wallet</label>
                            <p className="border-[1px] border-[#CB0881] py-[7px] px-5 rounded-md mt-2">AI</p>
                        </div>
                        <div className="mt-5">
                            <label className="font-semibold text-md">To Wallet</label>
                            <div className="border-[1px] border-[#CB0881] py-2 px-5 rounded-md w-full mt-2">Spot</div>
                        </div>
                        <div className="mt-5">
                            <label className="font-semibold text-md">Amount</label>
                            <input onChange={(e)=>setAmount(e.target.value)} type="text" placeholder="Enter Amount" className="border-[1px] border-[#CB0881] py-2 px-5 rounded-md w-full mt-2"/>
                        </div>
                        <div className="mt-5">
                            <button onClick={handleTransfer} className="px-10 py-2 bg-[#CB0881] rounded-full text-white font-medium">{atsloading?"Loading...":"Transfer"}</button>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-5/12 flex lg:justify-center">
                    <img className="h-56 w-56 my-5 lg:my-0"  src={robot}/>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Transfer