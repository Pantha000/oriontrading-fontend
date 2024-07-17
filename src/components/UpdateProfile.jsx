import { useEffect, useState } from "react"
import close from "../assets/icon/close.png"
import password from "../assets/icon/password.png"
import { useDispatch, useSelector } from "react-redux"
import { updateProfile } from "../redux/actions/userAction"
import getToken from "./getToken"
import { toast } from "react-toastify"

const UpdateProfile = () => {
    const dispatch = useDispatch()
    const {loading, success, error} = useSelector(state=>state.update)
    
    const [email, setEmail] = useState()
    const [name, setName] = useState()
    const [gender, setGender] = useState("MALE")
    const [city, setCity] = useState()
    const [address, setAddress] = useState()
    const [phone, setPhone] = useState()
    
    const handleUpdate = ()=>{
        const userData = {
            email,
            name, 
            gender,
            city,
            address, 
            phone
        }
        const token = getToken()
        dispatch(updateProfile(userData, token))
    }
    useEffect(()=>{
        if(success){
            toast(success)
        }
        if(error){
            toast(error)
        }
    },[success, error])
  return (
    <div className="fixed top-0 left-0 h-[100%] w-[100%] bg-background-opacity flex justify-center items-center overflow-y-auto py-10">
        <div className="bg-white w-5/12 px-10 py-10 mt-20">
            <div className="flex justify-between">
                <div className="flex items-center bg-[#CB084B] px-5 py-2 rounded-md">
                    <p className="text-white text-sm  font-medium">Update Information </p>
                    <img src={password} className="ml-5"/>
                </div>
                <button><img src={close}/></button>
            </div>
            <div className="w-[95%] mt-10">
                <div> 
                    <label className="font-semibold text-sm">Email</label>
                    <input onChange={(e)=>setEmail(e.target.value)} type="email" className="border-[1px] border-[#CB084B] w-full py-1 px-4 rounded-md mt-2"/>
                </div>
                <div className="mt-2">
                    <label className="font-semibold text-sm">Real Name</label>
                    <input onChange={(e)=>setName(e.target.value)} type="text" className="border-[1px] border-[#CB084B] w-full py-1 px-4 rounded-md mt-2"/>
                </div>
                <div className="mt-2">
                    <label className="font-semibold text-sm">Gender</label>
                    <select onChange={(e)=>setGender(e.target.value)} className="border-[1px] border-[#CB084B] text-[#CB084B]  w-full py-1 px-4 rounded-md mt-2">
                        <option className=" text-[#CB084B] text-semibold" value="MALE">MALE</option>
                        <option className=" text-[#CB084B] text-semibold" value="FEMALE">FEMALE</option>
                        <option className=" text-[#CB084B] text-semibold" value="OTHERS">OTHERS</option>
                    </select>
                </div>
                <div className="mt-2">
                    <label className="font-semibold text-sm">City</label>
                    <input onChange={(e)=>setCity(e.target.value)} type="text" className="border-[1px] border-[#CB084B] w-full py-1 px-4 rounded-md mt-2"/>
                </div>
                <div className="mt-2">
                    <label className="font-semibold text-sm">Phone Number</label>
                    <input onChange={(e)=>setPhone(e.target.value)} type="text" className="border-[1px] border-[#CB084B] w-full py-1 px-4 rounded-md mt-2"/>
                </div>
                <div className="mt-2">
                    <label className="font-semibold text-sm" onChange={(e)=>setAddress(e.target.value)}>Address</label>
                    <input type="text" className="border-[1px] border-[#CB084B] w-full py-1 px-4 rounded-md mt-2"/>
                </div>
                <div className="w-full">
                    <button onClick={handleUpdate} className="bg-[#CB084B] mx-auto block px-8 py-2 rounded-full text-white text-xs mt-4">{loading?"Loading...":"Update"}</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default UpdateProfile