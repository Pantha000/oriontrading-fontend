import { Route, Routes } from "react-router-dom"
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "./components/Navbar"
import Profile from "./pages/profile/Profile"
import AddFund from "./pages/profile/AddFund"
import Deposit from "./pages/profile/Deposit"
import Exchange from "./pages/profile/Exchange"
import ScrollToTop from "./components/ScrollToTop"
import Trade from "./pages/trade/Trade"
import Transfer from "./pages/trade/Transfer"
import Login from "./Shared/Login"
import SignIn from "./Shared/SignIn"
import ForgotPass from "./Shared/ForgotPass"
import SignUp from "./Shared/SignUp"
import Affilate from "./pages/Affilete/Affilate"
import TradeHistory from "./pages/trade/TradeHistory"
import Wallet from "./pages/wallet/Wallet"
import WalletTransfer from "./pages/wallet/WalletTransfer"
import SpotHistory from "./pages/wallet/SpotHistory"
import Funding from "./pages/wallet/Funding"
import FundWithdraw from "./pages/wallet/FundWithdraw"
import FundTransfer from "./pages/wallet/FundTransfer"
import FundingHistory from "./pages/wallet/FundingHistory"
import Ots from "./pages/wallet/Ots"
import ProtectedRoute from "./components/ProtectedRoute"
import {useDispatch} from "react-redux"
import { useEffect } from "react"
import {loadUser} from "./redux/actions/userAction"
import getToken from "./components/getToken"
import ResetPass from "./Shared/ResetPass";

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    const token = getToken()
    dispatch(loadUser(token))
  },[])
  return (
    <div>
      <ToastContainer/>
      <ScrollToTop/>
      <Navbar/>
      <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signIn" element={<SignIn></SignIn>}></Route>
        <Route path="/reset" element={<ForgotPass></ForgotPass>}></Route>
        <Route path="/password/reset/:token" element={<ResetPass/>}></Route>
        <Route path="/signUp" element={<SignUp></SignUp>}></Route>
        <Route path="/" element={<ProtectedRoute><Profile/></ProtectedRoute>}/>
        <Route path="/add-fund" element={<ProtectedRoute><AddFund/></ProtectedRoute>}/>
        <Route path="/deposit" element={<ProtectedRoute><Deposit/></ProtectedRoute>}/>
        <Route path="/exchange" element={<ProtectedRoute><Exchange/></ProtectedRoute>}/>
        <Route path="/trade" element={<ProtectedRoute><Trade/></ProtectedRoute>}/>
        <Route path="/affilate" element={<ProtectedRoute><Affilate></Affilate></ProtectedRoute>}/>
        <Route path="/trade/transfer" element={<ProtectedRoute><Transfer/></ProtectedRoute>}/>
        <Route path="/trade/history" element={<ProtectedRoute><TradeHistory/></ProtectedRoute>}/>
        <Route path="/wallet" element={<ProtectedRoute><Wallet/></ProtectedRoute>}/>
        <Route path="/wallet/transfer" element={<ProtectedRoute><WalletTransfer/></ProtectedRoute>}/>
        <Route path="/wallet/spot/history" element={<ProtectedRoute><SpotHistory/></ProtectedRoute>}/>
        <Route path="/wallet/funding" element={<ProtectedRoute><Funding/></ProtectedRoute>}/>
        <Route path="/wallet/withdraw" element={<ProtectedRoute><FundWithdraw></FundWithdraw></ProtectedRoute>}/>
        <Route path="/wallet/fund-transfer" element={<ProtectedRoute><FundTransfer></FundTransfer></ProtectedRoute>}/>
        <Route path="/wallet/funding-history" element={<ProtectedRoute><FundingHistory></FundingHistory></ProtectedRoute>}/>
        <Route path="/wallet/ots" element={<ProtectedRoute><Ots></Ots></ProtectedRoute>}/>
      </Routes>
    </div>
  )
}

export default App