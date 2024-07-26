import { useEffect, useState } from "react"
import close from "../assets/icon/close.png"
import password from "../assets/icon/password.png"
import { toast } from "react-toastify"
import { useDispatch, useSelector } from "react-redux"
import { clearError, clearSuccess, sentPasswordToken, updatePassword } from "../redux/actions/userAction"
import getToken from "./getToken"

const AccountPassword = ({setPasswordModel}) => {
    const dispatch = useDispatch()
    const {loading, success, error, uloading} = useSelector(state=>state.update)
    const [oldPass, setOldPass] = useState()
    const [pass, setPass] = useState()
    const [cPass, setCPass] = useState()
    const [token, setToken] =useState()

    const handlePasswordChange =()=>{
       if(pass !== cPass){
        toast("Password Not Matched")
       }else if(!oldPass){
        toast("Old Password is required!")
       }else if(!pass){
        toast("Password is required!")
       }else if(!token){
        toast("Token is required!")
       }else{
         const userData = {
            oldPassword:oldPass,
            newPassword:pass,
            token:token
        }
        const tokens = getToken()
        // console.log(userData)
        dispatch(updatePassword(userData, tokens))
       }
    }
    const handleSentToken = ()=>{
        const tokens = getToken()
        dispatch(sentPasswordToken(tokens))
    }
    useEffect(()=>{
        if(success){
            toast(success)
        }
        dispatch(clearSuccess())
        if(error){
            toast(error)
        }
      
        dispatch(clearError())
    },[success, error,])
  return (
    <div className="fixed top-0 left-0 z-50 h-[100%] w-[100%] bg-background-opacity flex justify-center items-center">
        <div className="bg-white w-5/12 px-10 py-10">
            <div className="flex justify-between">
                <div className="flex items-center bg-[#CB084B] px-5 py-2 rounded-md">
                    <p className="text-white text-sm  font-medium">Account Password </p>
                    <img src={password} className="ml-5"/>
                </div>
                <button onClick={()=>setPasswordModel(false)}><img src={close}/></button>
            </div>
            <div className="w-[95%] mt-10">
                <div> 
                    <label className="font-semibold text-sm">Old Password</label>
                    <input onChange={(e)=>setOldPass(e.target.value)} type="password" className="border-[1px] border-[#CB084B] w-full py-1 px-4 rounded-md mt-2"/>
                </div>
                <div className="mt-2">
                    <label className="font-semibold text-sm">New Password</label>
                    <input onChange={(e)=>setPass(e.target.value)} type="password" className="border-[1px] border-[#CB084B] w-full py-1 px-4 rounded-md mt-2"/>
                </div>
                <div className="mt-2">
                    <label className="font-semibold text-sm">Confirm New Password</label>
                    <input onChange={(e)=>setCPass(e.target.value)} type="password" className="border-[1px] border-[#CB084B] w-full py-1 px-4 rounded-md mt-2"/>
                </div>
                <div className="mt-2">
                    <label className="font-semibold text-sm">OTP Code</label>
                    <input onChange={(e)=>setToken(e.target.value)} type="text" className="border-[1px] border-[#CB084B] w-full py-1 px-4 rounded-md mt-2"/>
                </div>
                <div>
                    <p onClick={handleSentToken} className="text-xs text-right mt-2 font-medium cursor-pointer">{loading?"Loading....":"Sent OTP Code to Email"}</p>
                </div>
                <div className="w-full">
                    <button onClick={handlePasswordChange} className="bg-[#CB084B] mx-auto block px-8 py-2 rounded-full text-white text-xs mt-4">{uloading?"Loading...":"Change"}</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AccountPassword