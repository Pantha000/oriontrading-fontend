import { useDispatch, useSelector } from "react-redux"
import p2p from "../../assets/icon/p2p.png"
import roadmap from "../../assets/roadmap.png"
import WallatNav from "../../components/WallatNav"
import { useEffect, useState } from "react"
import getToken from "../../components/getToken"
import {toast} from "react-toastify"
import { clearError, clearSuccessST, spotTransfer } from "../../redux/actions/userAction"

const WalletTransfer = () => {
    const dispatch = useDispatch()
    const {stloading, stsuccess, sterror} =useSelector(state=>state.transection)

    const [amount, setAmount] = useState()
    const [wallet, setWallet] = useState("AI")
    const handleTransfer = () =>{
        const userData = {
            amount : parseFloat(amount),
            wallet:wallet
        }
        const token = getToken()
        dispatch(spotTransfer(userData, token))
    }

    useEffect(()=>{
        if(stsuccess){
            toast(stsuccess)
        }
        dispatch(clearSuccessST())
        if(sterror){
            toast(sterror)
        }
        clearError()
    },[stsuccess, sterror])
  return (
    <div className="pt-28 pb-12 container mx-auto px-4 sm:px-6 lg:px-8">
    <WallatNav />
    <div className="flex flex-col lg:flex-row lg:space-x-8">
      <div className="w-full lg:w-8/12">
        <div className="w-full mt-10">
          <p className="font-semibold text-[#CB0881] text-lg md:text-xl">Transfer from Spot</p>
          <div className="mt-5">
            <label className="font-semibold text-sm sm:text-base">From Wallet</label>
            <select  className="border-[1px] border-[#CB0881] py-2 px-4 rounded-md w-full mt-2 text-sm sm:text-base">
              <option  value="AI">AI</option>
              <option value="Funding">Funding</option>
            </select>
          </div>
          <div className="mt-5">
            <label className="font-semibold text-sm sm:text-base">Amount</label>
            <input
              type="text"
              placeholder="Enter Amount"
              className="border-[1px] border-[#CB0881] py-2 px-4 rounded-md w-full mt-2 text-sm sm:text-base"
              onChange={(e)=>setAmount(e.target.value)}
            />
          </div>
          <div>
            <button onClick={handleTransfer} className="px-6 py-2 bg-[#CB0881] rounded-full text-white font-medium mt-10 text-sm sm:text-base">
              Transfer
            </button>
          </div>
        </div>
      </div>
      
    </div>
  </div> 
  )
}

export default WalletTransfer


 

