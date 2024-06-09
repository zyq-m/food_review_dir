import axios from "axios";

export const api = axios.create({
  baseURL: import.meta.env.VITE_API,
});

// Axios interceptor handle access token authentication
api.interceptors.request.use(
  async function (config) {
    const token = window.localStorage.getItem("access_token");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// // Handle refreshToken
// // Resource: https://www.thedutchlab.com/insights/using-axios-interceptors-for-refreshing-your-api-token
api.interceptors.response.use(
  function (response) {
    return response;
  },
  async function (error) {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      const newToken = await renewToken();

      window.localStorage.setItem("access_token", newToken.data.access_token);

      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${newToken.data.access_token}`;

      return api(originalRequest);
    }
    return Promise.reject(error);
  }
);

async function renewToken() {
  return axios({
    url: `${import.meta.env.VITE_API}/refresh`,
    method: "POST",
    headers: {
      Authorization: `Bearer ${window.localStorage.getItem("refresh_token")}`,
    },
  });
}
