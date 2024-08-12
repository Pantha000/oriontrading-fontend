import back from "../../assets/icon/back.png"
import {  useNavigate } from "react-router-dom"
import plus from "../../assets/icon/plus.png"
import WallatNav from "../../components/WallatNav"
import {useSelector} from "react-redux"

const SpotHistory = () => {
    const {user} = useSelector(state=>state.user)
    const monthArray = ["January", "February", "March", "April", "May", "June", "July", "Augest", "September", "Octber", "November","December"]
  return (
    <div className="container mx-auto pt-28 pb-12 px-4 sm:px-6 md:px-8">
    <div className="flex  justify-between items-start">
        <div className="items-start w-full">
            <div className="">
                <WallatNav />
                <p className="text-[#CB0881] font-semibold mt-4 sm:mt-10 text-xl sm:text-2xl">Spot History</p>
            </div>
        </div>
    </div>
    <div className="flex flex-wrap gap-4 mt-6 sm:mt-10 ml-0 sm:ml-9">
        <button className="px-4 py-2 sm:px-5 sm:py-2 mr-4 bg-[#FCEEF8] border-b-[1px] border-[#CB0881] rounded-t-md text-xs sm:text-sm">
            All
        </button>
        <button className="px-4 py-2 sm:px-5 sm:py-2 mr-4 bg-[#f1f1f2] hover:bg-[#FCEEF8] border-b-[1px] hover:border-[#CB0881] rounded-t-md text-xs sm:text-sm">
            In
        </button>
        <button className="px-4 py-2 sm:px-5 sm:py-2 mr-4 bg-[#f1f1f2] hover:bg-[#FCEEF8] border-b-[1px] hover:border-[#CB0881] rounded-t-md text-xs sm:text-sm">
            Out
        </button>
    </div>
    <div className="flex flex-wrap gap-4 mt-6 sm:mt-10">
    { user?.spotHistory.map((val, ind)=>{
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
        return <div className="w-full  sm:w-6/12 lg:w-6/12 text-black" key={ind}>
        <div className="bg-[#FCEEF8] mb-6 sm:mb-8 px-4 sm:px-6 py-4 sm:py-5 rounded-md shadow-sm">
            <div className="flex flex-col sm:flex-row items-center justify-between font-semibold text-xs sm:text-sm">
                <div className="flex-1 text-center sm:text-left">
                    <p className="truncate hidden lg:block">{val.history._id}</p>
                </div>
                <div className="flex-1 flex items-center justify-center sm:justify-start">
                    <img src={plus} className="mr-2 h-4 w-4" alt="Plus" />
                    <p>{val.history.amount.toFixed(2)}</p>
                </div>
                <div className="flex-1 text-center sm:text-left">
                    <p>{formatDate}</p>
                </div>
                <div className="flex-1 text-center sm:text-left">
                    <p>{hour}:{minute} {unit}</p>
                </div>
            </div>
            <p className="text-center mt-4 sm:mt-5 font-semibold text-xs sm:text-sm">{val.history.desc}</p>
            <p className="text-center mt-2 sm:mt-3 font-semibold text-xs sm:text-sm">{val.history.title}</p>
        </div>
    </div>
    })}
    </div>
</div>

  )
}

export default SpotHistory







