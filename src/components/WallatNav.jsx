import { Link, useNavigate } from 'react-router-dom';

const WallatNav = () => {
    const navigate=useNavigate()
    return (
        <div>
            <button className=" px-5 py-2 mr-8 rounded-md "> -- </button>
            <button onClick={()=>navigate("/wallet")} className=" px-5 py-2 mr-8 rounded-md bg-[#FCEEF8] border-[1px] border-[#CB0881]">Spot</button>
            <Link to='/wallet/funding'>   <button className=" px-5 py-2 mr-8 rounded-md bg-[#f1f1f1]">Funding</button></Link>
            <button  onClick={()=>{navigate('/wallet/ots')}} className=" px-5 py-2 mr-8 rounded-md bg-[#CB084B] text-white">OTS P2P</button>
            <button onClick={()=>navigate("/")} className=" px-5 py-2 mr-8 rounded-md bg-[#000] text-white">Rewards</button>
        </div>
    );
};

export default WallatNav;