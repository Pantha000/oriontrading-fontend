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
    <div>
        <div className="container mx-auto pt-28 pb-12">
            <div className="flex">
                <div className="w-8/12">
                    <WallatNav></WallatNav>
                    <div className="w-10/12 mt-10">
                        <p className="font-semibold text-[#CB0881]">Transfer from Spot</p>
                        <div className="mt-5">
                            <label className="font-semibold text-sm">From Wallet</label>
                            <select onChange={(e)=>setWallet(e.target.value)} className="border-[1px] border-[#CB0881] py-2 px-5 rounded-md w-full mt-2">
                                <option value="AI">AI</option>
                                <option value="Funding">Funding</option>
                            </select>
                        </div>
                        <div className="mt-5">
                            <label className="font-semibold text-sm">Amount</label>
                            <input onChange={(e)=>setAmount(e.target.value)} type="text" placeholder="Enter Amount" className="border-[1px] border-[#CB0881] py-2 px-5 rounded-md w-full mt-2"/>
                        </div>
                        <div>
                            <button onClick={handleTransfer} className="px-10 py-2 bg-[#CB0881] rounded-full text-white font-medium mt-10">{stloading?"Loading....":"Transfer"}</button>
                        </div>
                    </div>
                </div>
                <div className="w-4/12">
                    <div className="bg-[#FCEEF8] p-5 rounded-md">
                        <div className="flex items-center justify-between">
                            <p className="text-md font-medium text-[#CB0881]">P2P Trading</p>
                            <img src={p2p}/>
                        </div>
                        <p className="mt-5">Engage in peer-to-peer (P2P) trading on the TB20 network by connecting directly with other users to by and sell assets without intermediaries </p>
                    </div>
                </div>
            
            </div>
        </div>
        <div className="border-t-2 border-[#CB0881] py-6 w-[100%] ">
            <div className="container mx-auto ">
                <p className="font-semibold text-lg text-[#CB0881]">Orion Trading Roadmap</p>
                <div className="flex justify-center">
                    <img src={roadmap}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default WalletTransfer