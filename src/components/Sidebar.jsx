import { Link } from "react-router-dom"


const Sidebar = ({setSidebar}) => {
  return (
    <div className="w-full h-full bg-[#CB0881] text-white fixed z-50 top-0 left-0">
        <div className="bg-black flex justify-between px-5 py-2">
            <p className="text-lg font-bold">Sidebar</p>
            <p className="text-xl"><i onClick={()=>setSidebar(false)} className="ri-scissors-2-line"></i></p>
        </div>
        <div className="text-lg px-4">
            <li onClick={()=>setSidebar(false)} className="mt-6 font-bold text-xl"><Link to="/">Home</Link></li>
            <li onClick={()=>setSidebar(false)} className="mt-6 font-bold text-xl"><Link to="/trade">Trade</Link></li>
            <li onClick={()=>setSidebar(false)} className="mt-6 font-bold text-xl"><Link to="/affilate">Affiliate</Link></li>
            <li onClick={()=>setSidebar(false)} className="mt-6 font-bold text-xl"><Link to="/wallet">Wallet</Link></li>
         
        </div>
    </div>
  )
}

export default Sidebar