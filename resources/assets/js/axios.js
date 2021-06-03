// axios
import axios from "axios";
import router from "./router";
const baseURL =
  process.env.VUE_APP_API_URL !== undefined
    ? process.env.VUE_APP_API_URL
    : "http://localhost:8100/";

const accessToken = localStorage.getItem("accessToken");
let axiosObj = axios.create({
  baseURL: baseURL
  // You can add your headers here
});

axiosObj.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    if (
      error.response.status == 401 ||
      error.response.data.detail == "Invalid token."
    ) {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("tokenExpiry");
      localStorage.removeItem("userInfo");
      router.push("/auth/login");
    }
    return Promise.reject(error);
  }
);


const setAuthHeader = token => {
  if (token)
    axiosObj.defaults.headers.common["Authorization"] = `Token ${token}`;
};

// Set the initial header from storage or something (should surround with try catch in actual app)
setAuthHeader(accessToken);


Vue.prototype.$axios = axiosObj
