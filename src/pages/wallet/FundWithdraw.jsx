import React from 'react';
import WallatNav from '../../components/WallatNav';
import RoadMap from '../../components/RoadMap';

const FundWithdraw = () => {
    return (
        <div className='container pt-28 max-auto'>
            <WallatNav></WallatNav>
            <form action="" className='m-20'>
                <div className='grid grid-cols-1 gap-4 w-1/3'>
                    <h1 className='  font-semibold text-2xl '>Withdraw</h1>
                    <input className=" appearance-none border rounded py-2   focus:shadow-outline" id="amount" type="text" placeholder="Enter Amount"></input>
                    <input className=" appearance-none border rounded py-2   focus:shadow-outline" id="amount" type="text" placeholder="TRC20 Address"></input>
                    <input className=" appearance-none border rounded py-2   focus:shadow-outline" id="amount" type="text" placeholder="OTP code"></input>
                </div>
                <div className='mt-8 grid grid-cols-1 w-1/3'>
                    <h1 className=' font-semibold text-2xl '>Withdraw password</h1>
                    <div className='flex '> <input className="w-full appearance-none border rounded py-2   focus:shadow-outline" id="amount" type="text" placeholder="withdraw password"></input>
                        <button className='bg-primary p-4  rounded-2xl ms-5 text-white'>Withdraw</button></div>
                </div>
                <p><li className='py-2 text-primary'>To initiate a withdrawal,you need to have a minimum of 10.00 USDT in your account</li></p>
            </form>
            <RoadMap></RoadMap>
        </div>
    );
};

export default FundWithdraw;