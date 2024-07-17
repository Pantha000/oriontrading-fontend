import React from 'react';
import WallatNav from '../../components/WallatNav';
import RoadMap from '../../components/RoadMap';

const FundTransfer = () => {
    return (
        <div className='pt-28 container mx-auto'>
            <WallatNav></WallatNav>
            <div className='grid m-20 grid-cols-2 justify-between'>
                <div className=''>
                    <h1 className='text-2xl text-primary my-3'>Transfer to spot</h1>
                    <div className='grid w-3/4 gap-2'>
                        <p>From wallet</p>
                        <input className=" mb-2 appearance-none border rounded py-2   focus:shadow-outline" id="amount" type="text" placeholder="funding"></input>
                        <p>To wallet</p>
                        <input className=" appearance-none border rounded py-2   focus:shadow-outline" id="amount" type="text" placeholder="spot"></input>

                        <p>Amount</p>
                        <input className=" appearance-none border rounded py-2   focus:shadow-outline" id="amount" type="text" placeholder="enter amount"></input>
                    </div>
                    <button className='bg-primary p-4 w-1/5 my-4 rounded-xl '>Transfer</button>
                </div>
                <div>
                    <h1 className='text-end text-primary text-pretty font-semibold'>Available :500.00 USD</h1>
                </div>
            </div>
            <RoadMap></RoadMap>


        </div>
    );
};

export default FundTransfer;