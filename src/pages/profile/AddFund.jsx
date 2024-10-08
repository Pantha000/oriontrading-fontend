import back from "../../assets/icon/back.png"
import deposit from "../../assets/deposit.png"
import profile3 from "../../assets/pro.jpg"
import { Link, useNavigate } from "react-router-dom"
import {useSelector} from "react-redux"

const AddFund = () => {
    const navigate = useNavigate()
    const {user} = useSelector(state=>state.user)
    const balance = user?.fundingBalance + user?.spotBalance + user?.aiBalance
  return (
    <div className="container mx-auto pt-28 pb-12">
        <div className="flex  justify-between items-start  px-4">
           <div className="flex items-start">
                <img src={back} className="mr-4 w-10 h-10 cursor-pointer hidden lg:block" onClick={()=>navigate(-1)}/>
                <img src={deposit}/>
           </div>
           <div className="flex items-center mt-6 lg:mt-0">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-[#CB087D]">
                    <img src={profile3} alt="Profile Image"/>
                </div>
                <div className="ml-10 hidden lg:block">
                    <p className="font-bold  text-xl">Md Biplab Miah</p>
                    <p className="text-[#CB087D]">Beginner</p>
                </div>
            </div>
        </div>
        <div className="ml-5 lg:ml-12 mt-10">
            <Link to="/deposit" className="bg-[#CB0881] px-8 py-3 rounded-full text-xs text-white">Deposit Now</Link>
            <p className="text-md font-semibold mt-20 text-[#CB0881]">All History</p>
            <p className="text-sm mt-5">{user?.deposit.length} items found</p>
            <p className="text-sm font-medium mt-4"><span>Amount</span><span className="ml-5">USDT $</span><span>{balance.toFixed(2)}</span></p>
        </div>
        <div className=" ml-5 lg:ml-12 mt-16 w-11/12 lg:w-6/12">
            <div className="flex flex-col lg:flex-row">
                <button className="bg-[#F1F1F1] px-5 py-3 mr-8 rounded-md mt-2 lg:mt-0 lg:py-1">All</button>
                <button className="bg-[#F1F1F1] px-5 py-3 mr-8 rounded-md mt-2 lg:mt-0 lg:py-1">Pending</button>
                <button className="bg-[#F1F1F1] px-5 py-3 mr-8 rounded-md mt-2 lg:mt-0 lg:py-1">Paid</button>
                <button className="bg-[#F1F1F1] px-5 py-3 mr-8 rounded-md mt-2 lg:mt-0 lg:py-1">Rejected</button>
            </div>
            <div className="bg-[#FCEEF8] mt-10 rounded-lg shadow-box-shadow min-h-36 flex justify-center items-center">
                <p className="text-xl font-bold text-[#CB0881] text-center">No Report Found</p>
            </div>
        </div>
    </div>
  )
}

export default AddFund