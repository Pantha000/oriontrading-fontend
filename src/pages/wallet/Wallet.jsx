import { useNavigate } from "react-router-dom"
import p2p from "../../assets/icon/p2p.png"
import roadmap from "../../assets/roadmap.png"
import WallatNav from "../../components/WallatNav"


const Wallet = () => {
    const navigate = useNavigate()
  return (
    <div>
        <div className="container mx-auto pt-28 pb-12">
            <div className="flex">
                <div className="w-8/12">
                    <WallatNav></WallatNav>
                    <p className="font-medium mt-10">0.00 USDT</p>
                    <button onClick={()=>navigate("/wallet/transfer")} className="bg-[#CB0881] px-20 py-2 mr-8 rounded-md text-white mt-20">Transfer</button>
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
            <div className="flex justify-center">
                    <button onClick={()=>navigate("/wallet/spot/history")} className=" bg-[#CB0881] px-20 py-2 mr-8 rounded-md text-white mt-20">History</button>
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

export default Wallet