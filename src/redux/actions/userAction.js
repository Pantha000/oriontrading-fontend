import axios from "axios";
// const url = 'https://ledisbucket.onrender.com'
const url = `http://localhost:4000`

export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "RegisterRequest" });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post( `${url}/api/v1/register/user`, userData, config);
    localStorage.setItem("token", data.token)
    dispatch({ type: "RegisterSuccess", payload: data.user });
  } catch (err) {
    dispatch({ type: "RegisterFail", payload: err.response.data.message });
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "LoginRequest" });

    const config = { headers: { "Content-Type": "application/json" } };

    const { data } = await axios.post( `${url}/api/v1/login`, userData, config);
    localStorage.setItem("token", data.token)
    dispatch({ type: "LoginSuccess", payload: data.user });
  } catch (err) {
    dispatch({ type: "LoginFail", payload: err.response.data.message });
  }
};

export const loadUser = (token) => async (dispatch) => {
  try {
    dispatch({ type: "LoadUserRequest" });

    const { data } = await axios.get(`${url}/api/v1/profile/me`,{headers:{Authorization:`Bearear ${token}`}});
    dispatch({ type: "LoadUserSuccess", payload: data.user });
  } catch (err) {
    dispatch({ type: "LoadUserFail", payload: err.response.data.message });
    // console.log(error.message);
  }
};

export const forgotPassword = (userData) => async (dispatch) => {
  try {
    dispatch({ type: "ForgotPasswordRequest" });
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.post(
      `${url}/api/v1/password/forgot`,
      userData,
      config
    );
    dispatch({ type: "ForgotPasswordSuccess", payload: data.message });
  } catch (err) {
    dispatch({
      type: "ForgotPasswordFail",
      payload: err.response.data.message,
    });
    // console.log(error.message);
  }
};

//Reset Password
export const resetPassword = (userData, token) => async (dispatch) => {
  try {
    dispatch({ type: "ResetPasswordRequest" });
    const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.put(
      `${url}/api/v1/password/reset/${token}`,
      userData,
      config
    );
    localStorage.setItem("token", data.token)
    dispatch({ type: "ResetPasswordSuccess", payload: data.message });
    // console.log(data);
  } catch (error) {
    dispatch({
      type: "ResetPasswordFail",
      payload: error.response.data.message,
    });
  }
};

//Logout User
export const logOut = () => async (dispatch) => {
  try {
    dispatch({ type: "LogoutRequest" });
    // const config = { headers: { "Content-Type": "multipart/form-data" } };

    const { data } = await axios.get(`/api/v1/logout`);
    dispatch({ type: "LogoutSuccess", payload: data.message });
    localStorage.removeItem("token")
  } catch (error) {
    dispatch({
      type: "LogoutFail",
      payload: error.response.data.message,
    });
  }
};

//User Verification
export const userVerification = (userData, token) => async (dispatch) => {
  try {
    dispatch({ type: "UserVerificationRequest" });
    const config = { headers: { "Content-Type": "multipart/form-data", Authorization:`Bearear ${token}` } };

    const { data } = await axios.put(
      `${url}/api/v1/user/verification`,
      userData,
      config
    );
    dispatch({ type: "UserVerificationSuccess", payload: data.message });
    // console.log(data);
  } catch (error) {
    dispatch({
      type: "UserVerificationFail",
      payload: error.response.data.message,
    });
  }
};

//User Deposit
export const userDeposit = (userData, token) => async (dispatch) => {
  try {
    dispatch({ type: "UserDepositRequest" });
    const config = { headers: { "Content-Type": "multipart/form-data", Authorization:`Bearear ${token}` } };

    const { data } = await axios.post(
      `${url}/api/v1/user/deposit`,
      userData,
      config
    );
    dispatch({ type: "UserDepositSuccess", payload: data.message });
    // console.log(data);
  } catch (error) {
    dispatch({
      type: "UserDepositFail",
      payload: error.response.data.message,
    });
  }
};


//Sent Password Token
export const sentPasswordToken = (token) => async (dispatch) => {
  try {
    dispatch({ type: "SentPasswordTokenRequest" });
    const config = { headers: { Authorization:`Bearear ${token}` } };

    const { data } = await axios.get(
      `${url}/api/v1/sent/password/token`,
      config
    );
    dispatch({ type: "SentPasswordTokenSuccess", payload: data.message });
  } catch (err) {
    dispatch({
      type: "SentPasswordTokenFail",
      payload: err.response.data.message,
    });
    // console.log(error.message);
  }
};

//Sent Password Token
export const updatePassword = (userData, token) => async (dispatch) => {
  try {
    dispatch({ type: "UpdatePasswordRequest" });
    const config = { headers: { "Content-Type": "multipart/form-data", Authorization:`Bearear ${token}` } };

    const { data } = await axios.put(
      `${url}/api/v1/update/password`,
      userData,
      config
    );
    dispatch({ type: "UpdatePasswordSuccess", payload: data.message });
  } catch (err) {
    dispatch({
      type: "UpdatePasswordFail",
      payload: err.response.data.message,
    });
    // console.log(error.message);
  }
};

//Update Profile
export const updateProfile = (userData, token) => async (dispatch) => {
  try {
    dispatch({ type: "UpdateProfileRequest" });
    const config = { headers: { "Content-Type": "multipart/form-data", Authorization:`Bearear ${token}` } };

    const { data } = await axios.put(
      `${url}/api/v1/profile/update`,
      userData,
      config
    );
    dispatch({ type: "UpdateProfileSuccess", payload: data.message });
  } catch (err) {
    dispatch({
      type: "UpdateProfileFail",
      payload: err.response.data.message,
    });
    // console.log(error.message);
  }
};

//Clearing Errors
export const clearError = () => async (dispatch) => {
  dispatch({ type: "ClearErrors" });
};

//Clearing Errors
export const clearSuccess = () => async (dispatch) => {
  dispatch({ type: "ClearSuccess" });
};
/* export const addToCart=(dispatch,product)=>{

  


} */
export const addToCart = (product) => async (dispatch) => {
  dispatch({ type: "addToCart" ,payload:product});
};