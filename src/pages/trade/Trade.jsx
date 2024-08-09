import stack from "../../assets/icon/stacks.png"
import mode from "../../assets/icon/mode_off_on.png"
import robot from "../../assets/robot.png"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import {  useState } from "react"
import getToken from "../../components/getToken"
import {  tradeStatus } from "../../redux/actions/userAction"


const Trade = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {user} = useSelector(state=>state.user)
    const [bot, setBot] = useState(user?.tradeStatus)
    const { loading} = useSelector(state=>state.trade)


    const handleBot = ()=>{      
        const userData = {
            status : user.tradeStatus
        }
        const token = getToken()
        dispatch(tradeStatus(userData, token))
        setBot(!bot)
    }
  return (
    <div className="px-5 lg:px-0">
        <div className="container mx-auto pt-28 pb-12">
            <div className="flex justify-between items-center">
                <p className="text-xl text-[#CB087D] font-semibold">AI Smart Trade</p>
                <div className="flex items-center">
                    <img src={stack}/>
                    <p className="text-[#CB087D] font-semibold ml-3">Level : <span>0</span></p>
                </div>
            </div>
            <div className="mt-8">
                <p className="font-medium text-md">AI Balance: <span>{user?.aiBalance.toFixed(2)}</span> USDT</p>
            </div>
            <div className="flex flex-col-reverse lg:flex-row items-center justify-between">
                <div className="w-full lg:w-7/12">
                    <div className="w-full">
                        <button onClick={()=>navigate("/trade/transfer")} className="py-2 w-5/12 bg-[#CB0881] rounded-lg text-white font-medium">Transfer</button>
                        <button onClick={()=>navigate("/trade/history")} className="py-2 w-5/12 ml-8 bg-[#CB0881] rounded-lg text-white font-medium">History</button>
                    </div>
                    <div className="bg-[#FCEEF8] min-h-44 flex justify-center items-center rounded-lg mt-20">
                        <div>
                            <div className="flex">
                                <p className="text-2xl font-bold text-[#CB0881]">Current Status</p>
                                <img src={mode} className="h-8 w-8 ml-4"/>
                            </div>
                            <button className="mx-auto bg-[#f1f1f1] px-4 py-1 rounded-md block mt-4 font-medium text-[#CB0881]" onClick={handleBot}>Click to turn {loading ? "wait": bot? "off":"on"}</button>
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

export default Trade