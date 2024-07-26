import { createReducer } from "@reduxjs/toolkit";


const initialState = {
  isAuthenticated: false,
};
export const userReducer = createReducer(initialState, (builder)=>{

  builder.addCase("RegisterRequest", (state)=>{
    state.loading = true;
    state.isAuthenticated = false;
  })
  builder.addCase("RegisterSuccess", (state, action)=>{
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
  })
  builder.addCase("RegisterFail", (state, action)=>{
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  })

  builder.addCase("LoginRequest", (state)=>{
    state.loading = true;
    state.isAuthenticated = false;
  })
  builder.addCase("LoginSuccess", (state, action)=>{
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
  })
  builder.addCase("LoginFail", (state, action)=>{
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  })

  builder.addCase("LoadUserRequest", (state)=>{
    state.loading = true;
    state.isAuthenticated = false;
  })
  builder.addCase("LoadUserSuccess", (state, action)=>{
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
  })
  builder.addCase("LoadUserFail", (state, action)=>{
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  })

  builder.addCase("LogoutRequest", (state)=>{
    state.loading = true;
    state.isAuthenticated = false;
  })
  builder.addCase("LogoutSuccess", (state, action)=>{
    state.loading = false;
    state.isAuthenticated = true;
    state.user = action.payload;
  })
  builder.addCase("LogoutFail", (state, action)=>{
    state.loading = false;
    state.isAuthenticated = false;
    state.error = action.payload;
  })
})

export const forgotPasswordReducer = createReducer(initialState, (builder)=>{

  builder.addCase("ForgotPasswordRequest", (state)=>{
    state.loading = true;
    state.error = null;
  })
  builder.addCase("ForgotPasswordSuccess", (state, action)=>{
    state.loading = false;
    state.success = action.payload;
  })
  builder.addCase("ForgotPasswordFail", (state, action)=>{
    state.loading = false;
    state.error = action.payload;
  })

  builder.addCase("ResetPasswordRequest", (state)=>{
    state.loading = true;
  })
  builder.addCase("ResetPasswordSuccess", (state, action)=>{
    state.loading = false;
    state.success = action.payload;
  })
  builder.addCase("ResetPasswordFail", (state, action)=>{
    state.loading = false;
    state.error = action.payload;
  })

  builder.addCase("ClearErrors", (state)=>{
    state.error = null;
  })
})

export const verificationReducer = createReducer(initialState, (builder)=>{

  builder.addCase("UserVerificationRequest", (state)=>{
    state.loading = true;
    state.error = null;
  })
  builder.addCase("UserVerificationSuccess", (state, action)=>{
    state.loading = false;
    state.success = action.payload;
  })
  builder.addCase("UserVerificationFail", (state, action)=>{
    state.loading = false;
    state.error = action.payload;
  })


  builder.addCase("ClearErrors", (state)=>{
    state.error = null;
  })
})

export const updateReducer = createReducer(initialState, (builder)=>{

  builder.addCase("SentPasswordTokenRequest", (state)=>{
    state.loading = true;
    state.error = null;
  })
  builder.addCase("SentPasswordTokenSuccess", (state, action)=>{
    state.loading = false;
    state.success = action.payload;
  })
  builder.addCase("SentPasswordTokenFail", (state, action)=>{
    state.loading = false;
    state.error = action.payload;
  })

  builder.addCase("UpdatePasswordRequest", (state)=>{
    state.uloading = true;
    state.error = null;
  })
  builder.addCase("UpdatePasswordSuccess", (state, action)=>{
    state.uloading = false;
    state.success = action.payload;
  })
  builder.addCase("UpdatePasswordFail", (state, action)=>{
    state.uloading = false;
    state.error = action.payload;
  })

  builder.addCase("UpdateProfileRequest", (state)=>{
    state.loading = true;
    state.error = null;
  })
  builder.addCase("UpdateProfileSuccess", (state, action)=>{
    state.loading = false;
    state.success = action.payload;
  })
  builder.addCase("UpdateProfileFail", (state, action)=>{
    state.loading = false;
    state.error = action.payload;
  })


  builder.addCase("ClearErrors", (state)=>{
    state.error = null;
  })
  builder.addCase("ClearSuccess", (state)=>{
    state.success = null;
  })
})

export const userTransection = createReducer(initialState, (builder)=>{

  builder.addCase("UserDepositRequest", (state)=>{
    state.loading = true;
    state.error = null;
  })
  builder.addCase("UserDepositSuccess", (state, action)=>{
    state.loading = false;
    state.success = action.payload;
  })
  builder.addCase("UserDepositFail", (state, action)=>{
    state.loading = false;
    state.error = action.payload;
  })

  builder.addCase("UserWithdrawRequest", (state)=>{
    state.wloading = true;
    state.error = null;
  })
  builder.addCase("UserWithdrawSuccess", (state, action)=>{
    state.wloading = false;
    state.wsuccess = action.payload;
  })
  builder.addCase("UserWithdrawFail", (state, action)=>{
    state.wloading = false;
    state.error = action.payload;
  })

  builder.addCase("FundingToSpotRequest", (state)=>{
    state.ftsloading = true;
    state.ftserror = null;
  })
  builder.addCase("FundingToSpotSuccess", (state, action)=>{
    state.ftsloading = false;
    state.ftssuccess = action.payload;
  })
  builder.addCase("FundingToSpotFail", (state, action)=>{
    state.ftsloading = false;
    state.ftserror = action.payload;
  })
  
  builder.addCase("SpotTransferRequest", (state)=>{
    state.stloading = true;
    state.sterror = null;
  })
  builder.addCase("SpotTransferSuccess", (state, action)=>{
    state.stloading = false;
    state.stsuccess = action.payload;
  })
  builder.addCase("SpotTransferFail", (state, action)=>{
    state.stloading = false;
    state.sterror = action.payload;
  })

  builder.addCase("AIToSpotRequest", (state)=>{
    state.atsloading = true;
    state.atserror = null;
  })
  builder.addCase("AIToSpotSuccess", (state, action)=>{
    state.atsloading = false;
    state.atssuccess = action.payload;
  })
  builder.addCase("AIToSpotFail", (state, action)=>{
    state.atsloading = false;
    state.atserror = action.payload;
  })


  builder.addCase("OTSTransferRequest", (state)=>{
    state.oloading = true;
    state.oerror = null;
  })
  builder.addCase("OTSTransferSuccess", (state, action)=>{
    state.oloading = false;
    state.osuccess = action.payload;
  })
  builder.addCase("OTSTransferFail", (state, action)=>{
    state.oloading = false;
    state.oerror = action.payload;
  })

  builder.addCase("ClearErrors", (state)=>{
    state.oerror = null;
  })
  builder.addCase("ClearSuccess", (state)=>{
    state.osuccess = null;
  })
  builder.addCase("ClearSuccessW", (state)=>{
    state.wsuccess = null;
  })
  builder.addCase("ClearSuccessFTS", (state)=>{
    state.ftssuccess = null;
  })
  builder.addCase("ClearSuccessST", (state)=>{
    state.stsuccess = null;
  })
  builder.addCase("ClearSuccessATS", (state)=>{
    state.atssuccess = null;
  })
})


export const tradeReducer = createReducer(initialState, (builder)=>{

  builder.addCase("TradeStatusRequest", (state)=>{
    state.loading = true;
    state.error = null;
  })
  builder.addCase("TradeStatusSuccess", (state, action)=>{
    state.loading = false;
    state.success = action.payload;
  })
  builder.addCase("TradeStatusFail", (state, action)=>{
    state.loading = false;
    state.error = action.payload;
  })

 

  builder.addCase("ClearErrors", (state)=>{
    state.error = null;
  })
  builder.addCase("ClearSuccess", (state)=>{
    state.success = null;
  })
})