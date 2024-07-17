import React from 'react';

const Affilate = () => {
    return (
        <div className='container pt-28'>
            <div className='grid grid-cols-2'>
                <div className=' grid grid-cols-1 justify-center items-start p-10 gap-5'>
                    <div className='bg-bg2 rounded-xl p-8'>
                        <h2 className=' text-secondary font-semibold text-2xl'>Direct Referrals</h2>
                        <h1 className=' font-extrabold text-5xl'>0.00</h1>
                    </div>
                    <div className='bg-bg2 rounded-xl p-8'>
                        <h2 className=' text-secondary font-semibold text-2xl'>Direct Referrals</h2>
                        <h1 className=' font-extrabold text-5xl'>0.00</h1>
                    </div>
                    <div className='bg-bg2 rounded-xl p-8'>
                        <h2 className=' text-secondary font-semibold text-2xl'>Direct Referrals</h2>
                        <h1 className=' font-extrabold text-5xl'>0.00</h1>
                    </div>
                    <div className='bg-bg2 rounded-xl p-8'>
                        <h2 className=' text-secondary font-semibold text-2xl'>Direct Referrals</h2>
                        <h1 className=' font-extrabold text-5xl'>0.00</h1>
                    </div>



                </div>
                <div className=" grid ms-96 grid-cols-2 p-10 justify-end  mx-auto gap-4  ">
                    <div className="w-24  ">
                        <img className='rounded-full' src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                    </div>
                    <div className='mt-5'>
                        <h2>MD Hasan </h2>
                        <p className='text-primary'>Beginner</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Affilate;