import WallatNav from '../../components/WallatNav';
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux"

const Funding = () => {
    const navigate=useNavigate()
    const {user} = useSelector(state=>state.user)
    console.log(user)
    return (
        <div className='container mx-auto pt-28 pb-12 px-4'>
            <div><WallatNav></WallatNav>
            <p className='mt-10 font-medium'>{user?.fundingBalance.toFixed(2)} usdt</p></div>
            <div className='grid mb-10 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12 justify-center'>
                <button onClick={()=>navigate("/add-fund")} className='bg-primary p-4 rounded-xl text-white font-semibold'>add</button>
                <button onClick={()=>navigate('/wallet/withdraw')} className='bg-primary p-4 rounded-xl text-white font-semibold'>withdraw</button>
                <button onClick={()=>navigate('/wallet/fund-transfer')} className='bg-primary p-4 rounded-xl text-white font-semibold'>transfer</button>
                <button onClick={()=>navigate('/wallet/funding-history')} className='bg-primary p-4 rounded-xl text-white font-semibold'>history</button>
            </div>
        </div>
    );
};

export default Funding;