// import profile from "../../assets/profile.png"
import {  useEffect, useState } from "react"
import {QRCodeSVG} from 'qrcode.react';

import dashboard from "../../assets/dashboard.png"
import copy from "../../assets/icon/Vector.png"
import verified from "../../assets/icon/verified.png"
import profile3 from "../../assets/pro.jpg"
import copy2 from "../../assets/icon/copy.png"
// import qr from "../../assets/qr.png"
import support from "../../assets/icon/support.png"
import profile from "../../assets/icon/profile.png"
import security from "../../assets/icon/security.png"
import about from "../../assets/icon/About.png"
import help from "../../assets/icon/help.png"
import logout from "../../assets/icon/logout.png"
import { Link, useNavigate } from "react-router-dom";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import AccountPassword from "../../components/AccountPassword";
import PhoneNumber from "../../components/PhoneNumber";
import VerifyAccount from "../../components/VerifyAccount";
import UpdateProfile from "../../components/UpdateProfile";

import {useDispatch} from "react-redux"
import { logOut } from "../../redux/actions/userAction";
import { useSelector} from "react-redux"

const Profile = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {isAuthenticated, user} = useSelector(state=>state.user)
    const balance = user?.spotBalance + user?.fundingBalance + user?.aiBalance


    // const random = Math.floor(Math.random()* 100000-1+1 + 1)

  const referLink = `http://oriontrading.com/r/${user?.reffer}`

  const [verifyAccount, setVerifyAccount] = useState(false)
  const [profileModel, setProfileModel] = useState(false)
  const [passwordModel, setPasswordModel] = useState(false)

    const redirect = location.search ? location.search.split("=")[1] : "/login";
    useEffect(()=>{
        if(!isAuthenticated){
            return navigate(redirect)
        }
    },[isAuthenticated])
  
  return (
    <>
        <div className="container mx-auto pt-28 pb-12 flex">
            <div className="w-8/12 border-r-2 border-[#CB087D]">
                <div className="flex items-center justify-around">
                    <div className="flex items-center">
                        <div className="w-36 h-36 rounded-full overflow-hidden border-2 border-[#CB087D]">
                            <img src={profile3} alt="Profile Image"/>
                        </div>
                        <div className="ml-10">
                            <p className="font-bold text-[#CB087D] text-xl">{user?.name}</p>
                            <div className="flex justify-between items-center text-[#CB087D] font-medium">
                                <p className=""><span>UID:</span> <span >{user?.userId}</span></p>
                                <CopyToClipboard text={user?.userId} className="cursor-pointer ml-3" ><img src={copy}/></CopyToClipboard>
                            </div>
                            <button className="flex justify-center items-center mt-4 py-1 bg-[#FCEEF8] rounded-full text-[#CB0881] px-5"><img src={verified} className="h-5"/><p className="ml-2">{user?.verified?<p>Verified</p>:<p onClick={()=>setVerifyAccount(true)}>Not Verified</p>}</p></button>
                        </div>
                    </div>
                    <div className="flex flex-col ml-10">
                        <button className="bg-[#CB087D] text-white font-medium w-44 py-2 rounded-full">C - Reccived</button>
                        <button className="bg-[#CB087D] text-white font-medium w-44 py-2 rounded-full mt-4">Invite</button>
                    </div>
                </div>
                <div className="h-[500px] flex items-center">
                    <img src={dashboard} className="mx-auto"/>
                </div>
                <div className="w-full flex flex-col items-center">
                    <div className="flex items-center">
                        <p className="bg-[#FCEEF8] py-2 w-52 text-center rounded-md">{balance.toFixed(2)} USDT</p>
                        <button onClick={()=>navigate("/add-fund")} className="bg-[#CB087D] py-2 px-6 ml-5 rounded-md text-white">Add Fund</button>
                    </div>
                    <div className="flex items-center mt-5">
                        <p className="bg-[#FCEEF8] py-2 w-52 text-center rounded-md">120.00 BZIT</p>
                        <button onClick={()=>navigate("/exchange")} className="bg-[#CB087D] py-2 px-6 ml-5 rounded-md text-white">Exchange</button>
                    </div>
                </div>
            </div>
            <div className="w-4/12">
                <div className="flex flex-col items-center">
                    <p className="font-semibold text-md mb-1">Refer Link</p>
                    <div>
                        {/* <QrReader/> */}
                        <QRCodeSVG value={referLink}/>
                    </div>
                    <div className="flex items-center mt-3">
                        <p className="text-[#929292]">{`http://oriontrading.com/r/${user?.reffer}`}</p>
                        <CopyToClipboard text={referLink}><img className="h-4 w-4 cursor-pointer ml-3" src={copy2} /></CopyToClipboard>
                    </div>
                </div>
                <div className="flex flex-col items-center mt-10">
                    {/* <li cls><img src={support}/><Link>Support</Link></li>
                    <li cls><img src={profile}/><Link>Profile Details</Link></li>
                    <li cls><img src={security}/><Link>Security</Link></li>
                    <li cls><img src={about}/><Link>About Us</Link></li>
                    <li cls><img src={help}/><Link>FAQ</Link></li>
                    <li cls><img src={logout}/><Link>Logout</Link></li> */}
                    
                    <Link className="flex items-center bg-[#FCEEF8] py-4 px-5 w-[18rem] rounded-xl"><img src={support}/><p className="ml-5 font-medium text-lg text-[#CB087D]">Support</p></Link>
                    <Link className="flex items-center bg-[#FCEEF8] py-4 px-5 w-[18rem] rounded-xl mt-3" onClick={()=>setProfileModel(true)}><img src={profile}/><p className="ml-5 font-medium text-lg text-[#CB087D]">Profile</p></Link>
                    <Link className="flex items-center bg-[#FCEEF8] py-4 px-5 w-[18rem] rounded-xl mt-3" onClick={()=>setPasswordModel(true)}><img src={security}/><p className="ml-5 font-medium text-lg text-[#CB087D]">Security</p></Link>
                    <Link className="flex items-center bg-[#FCEEF8] py-4 px-5 w-[18rem] rounded-xl mt-3"><img src={about}/><p className="ml-5 font-medium text-lg text-[#CB087D]">About Us</p></Link>
                    <Link className="flex items-center bg-[#FCEEF8] py-4 px-5 w-[18rem] rounded-xl mt-3"><img src={help}/><p className="ml-5 font-medium text-lg text-[#CB087D]">FAQ</p></Link>
                    <button className="flex items-center bg-[#CB087D] py-4 px-5 w-[18rem] rounded-xl mt-3" onClick={()=>dispatch(logOut())}><img src={logout}/><p className="ml-5 font-medium text-lg text-white">Logout</p></button>
                </div>
            </div>
        </div>
        {passwordModel && <AccountPassword setPasswordModel={setPasswordModel}/>}
        {/* <PhoneNumber/> */}
        {verifyAccount && <VerifyAccount setVerifyAccount={setVerifyAccount}/>}
        {profileModel && <UpdateProfile setProfileModel={setProfileModel}/>}
    </>
  )
}

export default Profile