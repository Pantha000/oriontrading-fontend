import  { useEffect, useState } from 'react';
import WallatNav from '../../components/WallatNav';
import {useDispatch, useSelector} from "react-redux"
import { clearError, clearSuccess, userOTSTransfer } from '../../redux/actions/userAction';
import getToken from "../../components/getToken.js"
import {toast} from "react-toastify"

const Ots = () => {
    const dispatch = useDispatch()
    const {user} = useSelector(state=>state.user)
    const {oloading,osuccess, oerror} = useSelector(state=>state.transection)

    const [modal, setModal] = useState(false)
    const handelModal = () => {
        setModal(!modal)
        console.log(modal)
    }

    const [amount, setAmount] = useState(null)
    const [reciver, setReciver] = useState(null)

    const handleTransfer = ()=>{
        const userData = {
            amount:parseFloat(amount),
            reciver,
            charge:0
        }
        const token = getToken()
        dispatch(userOTSTransfer(userData, token))
    }
    useEffect(()=>{
        if(osuccess){
            toast(osuccess)
        }
        dispatch(clearSuccess())
        if(oerror){
            toast(oerror)
        }
        clearError()
    }, [osuccess, oerror])
    return (
        <div className='pt-28 mx-auto container'>
            <WallatNav></WallatNav>
            <div className='m-10'>
                <h1 className='text-primary text-2xl font-bold p-2'>Sent history</h1>
                <h1 className='p-2 text-bold'>0 item found</h1>
                <h1 className='p-2 text-bold'>Amount: {user?.fundingBalance.toFixed(2)} usdt</h1>
                <button onClick={() => handelModal()} className='px-6 w-1/3 py-3 mt-4 rounded-xl bg-primary text-white'>Transfer</button>
            </div>
            <div className="ml-9 mt-10">
                <button className=" px-5 py-2 mr-8   bg-[#FCEEF8] border-b-[1px] border-[#CB0881] rounded-t-md">All</button>
                <button className=" px-5 py-2 mr-8 bg-[#f1f1f2]  focus:bg-[#FCEEF8] border-b-[1px] focus:border-[#CB0881] rounded-t-md">Sent</button>
                <button className=" px-5 py-2 mr-8 bg-[#f1f1f2]  focus:bg-[#FCEEF8] border-b-[1px] focus:border-[#CB0881] rounded-t-md">Receive</button>

            </div>
            <div className='m-10'>
                <h1>From Date</h1>
                <div className='grid grid-cols-2'>
                    <input className=" appearance-none border rounded py-2   focus:shadow-outline" type="date" placeholder="select date"></input>
                    <button className='bg-bg2 w-1/3 rounded-lg'>Filter</button>
                </div>
            </div>
            <div className='m-10 bg-bg2 w-2/3 p-5 rounded-xl'>
                <div className='flex text-[#CB084B] justify-between '><p>From date</p>
                    <p className='text-[#CB084B]'>Transfer From</p></div>
                <h1 className='text-center font-bold text-2xl mt-4 text-[#CB084B]'>No Report Found</h1>
            </div>



            {
                modal && <div id="popup-modal" tabindex="-1" className="  inset-0 bg-gray-500 bg-opacity-75 transition-opacity overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 grid justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
                    <div className="relative p-4 w-full  max-h-full">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <button onClick={() => handelModal()} type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                            <div className="p-4 md:p-5 text-center">
                                <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                </svg>

                                <div>
                                    <h1 className='text-primary  text-2xl text-center'>Ballance transfer </h1>
                                    <h1 className=' text-center'>current ballance USD ${user?.fundingBalance.toFixed(2)} </h1>
                                    <div className='grid gap-2 my-5'>
                                        <p className='text-start'>Transfer to</p>
                                        <input onChange={(e)=>setReciver(e.target.value)} className=" mb-2 appearance-none border rounded py-2   focus:shadow-outline" id="amount" type="text" placeholder="user id"></input>
                                  
                                        <p className='text-start'>Amount</p>
                                        <input onChange={(e)=>setAmount(e.target.value)} className=" appearance-none border rounded py-2   focus:shadow-outline" id="amount" type="text" placeholder="enter amount"></input>
                                    </div>
                                    <p className='text-start pb-5'>Service charge 0.00 usd</p>
                                </div>
                                <button onClick={handleTransfer} data-modal-hide="popup-modal" type="button" className="text-white me-10 bg-primary rounded-xl hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium  text-sm inline-flex items-center px-5 py-2.5 text-center">
                                   {oloading ? "Loading..." : "Yes, I'm sure"}
                                </button>
                                <button onClick={() => handelModal()} data-modal-hide="popup-modal" type="button" className="py-2.5 px-5 ms-10 text-sm font-medium text-gray-900 focus:outline-none bg-white border border-gray-200 rounded-xl hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">No, cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            }

        </div>
    );
};

export default Ots;