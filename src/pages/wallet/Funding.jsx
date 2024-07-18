import React from 'react';
import WallatNav from '../../components/WallatNav';
import RoadMap from '../../components/RoadMap';
import { useNavigate } from 'react-router-dom';
import {useSelector} from "react-redux"

const Funding = () => {
    const navigate=useNavigate()
    const {user} = useSelector(state=>state.user)
    console.log(user)
    return (
        <div className='container mx-auto pt-28 pb-12'>
            <div><WallatNav></WallatNav>
            <p>{user?.fundingBalance.toFixed(2)} usdt</p></div>
            <div className='grid grid-cols-4 gap-12 mx-20 mt-12 justify-center'>
                <button className='bg-primary p-4 rounded-xl text-white font-semibold'>add</button>
                <button onClick={()=>navigate('/wallet/withdraw')} className='bg-primary p-4 rounded-xl text-white font-semibold'>withdraw</button>
                <button onClick={()=>navigate('/wallet/fund-transfer')} className='bg-primary p-4 rounded-xl text-white font-semibold'>transfer</button>
                <button onClick={()=>navigate('/wallet/funding-history')} className='bg-primary p-4 rounded-xl text-white font-semibold'>history</button>
            </div>
            <RoadMap></RoadMap>
        </div>
    );
};

export default Funding;