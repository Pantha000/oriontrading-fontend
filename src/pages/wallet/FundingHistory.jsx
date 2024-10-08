import WallatNav from '../../components/WallatNav';
import { useNavigate } from 'react-router-dom';
import back from "../../assets/icon/back.png"
import plus from "../../assets/icon/plus.png"
import {useSelector} from "react-redux"

const FundingHistory = () => {
    const navigate = useNavigate()
    const {user} = useSelector(state=>state.user)
    const monthArray = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "Octber", "November","December"]
    return (
        <div className="container mx-auto pt-28 pb-12 px-5 lg:px-0">
        <div className="flex  w-full items-start">
           <div className=" items-start w-full">
                <img src={back} className="mr-4  h-4 w-4 cursor-pointer hidden "  onClick={()=>navigate(-1)}/>
                <div>
                    <WallatNav></WallatNav>
                    <p className="text-[#CB0881] font-semibold mt-10 text-xl">funding History</p>
                </div>
           </div>
           
        </div>
        <div className="flex flex-col lg:flex-row lg:ml-9 mt-10">
            <button className=" px-5 py-2 mt-4 lg:mt-0 lg:mr-8   bg-[#FCEEF8] border-b-[1px] border-[#CB0881] rounded-t-md">All</button>
            <button className=" px-5 py-2 mt-4 lg:mt-0 lg:mr-8 bg-[#f1f1f2]  focus:bg-[#FCEEF8] border-b-[1px] focus:border-[#CB0881] rounded-t-md">In</button>
            <button className=" px-5 py-2 mt-4 lg:mt-0 lg:mr-8 bg-[#f1f1f2]  focus:bg-[#FCEEF8] border-b-[1px] focus:border-[#CB0881] rounded-t-md">Out</button>
            <button className=" px-5 py-2 mt-4 lg:mt-0 lg:mr-8 bg-[#f1f1f2]  focus:bg-[#FCEEF8] border-b-[1px] focus:border-[#CB0881] rounded-t-md">Withdraw record</button>
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap lg:ml-8 mt-10">
            { user?.fundingHistory.map((val, ind)=>{
                const fullDate = new Date(val.history.createdAt)
                const date = fullDate.getDate()
                const month = fullDate.getMonth()
                const year = fullDate.getFullYear()
                const formatDate = `${date} ${monthArray[month]} ${year}`

                var hour  = fullDate.getHours()
                var minute = fullDate.getMinutes()

                if(hour<10){
                    hour = `0${hour}`
                }else{
                    hour = `${hour}`
                }

                if(minute<10){
                    minute = `0${minute}`
                }else{
                     minute = `${minute}`
                }
                
                var unit;

                if(hour>=12){
                    unit = `PM`
                    hour = hour - 12
                }else if(hour==24 || hour ==0){
                    unit= "AM"
                }else{
                    unit = "AM"
                }

                return <div className="w-full lg:w-6/12 text-black" key={ind} >
                <div className="w-full lg:w-[95%] bg-[#FCEEF8] mb-8 px-6 py-5  rounded-md">
                   <div className="flex items-center justify-around font-semibold text-sm">
                        <div>
                            <p className='hidden lg:block'>{val.history._id}</p>
                        </div>
                        <div className="flex items-center">
                            <img src={plus} className="mr-2 mt-[-3px]"/>
                            <p>{val.history.amount.toFixed(2)}</p>
                        </div>
                        <div className="">
                            <p>{formatDate}</p>
                        </div>
                        <div className="">
                            <p>{hour}:{minute} {unit}</p>
                        </div>
                   </div>
                   <p className="text-center mt-5 font-semibold text-sm">{val.history.desc}</p>
                   <p  className="text-center mt-3 font-semibold text-sm">{val.history.title}</p>
                </div>
            </div>
            })}
            
        </div>
       
    </div>
    );
};

export default FundingHistory;