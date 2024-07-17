import React from 'react';
import WallatNav from '../../components/WallatNav';
import RoadMap from '../../components/RoadMap';
import { useNavigate } from 'react-router-dom';

const Funding = () => {
    const navigate=useNavigate()
    return (
        <div className='container mx-auto pt-28 pb-12'>
            <div><WallatNav></WallatNav>
            <p>00.0 usd</p></div>
            <div className='grid grid-cols-4 gap-12 mx-20 mt-12 justify-center'>
                <button className='bg-primary p-4 rounded-xl text-white font-semibold'>add</button>
                <button onClick={()=>navigate('/wallet/withdraw')} className='bg-primary p-4 rounded-xl text-white font-semibold'>withdraw</button>
                <button className='bg-primary p-4 rounded-xl text-white font-semibold'>transfer</button>
                <button onClick={()=>navigate('/wallet/funding-history')} className='bg-primary p-4 rounded-xl text-white font-semibold'>history</button>
            </div>
            <RoadMap></RoadMap>
        </div>
    );
};

export default Funding;