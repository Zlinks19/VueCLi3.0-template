import axios from "axios";

const server = axios.create({
  baseURL: "",
  timeout: 5000
});

// 添加一个请求拦截器
server.interceptors.request.use(
  function(config) {
    // 在发送请求之前做些什么
    return config;
  },
  function(error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// 添加一个响应拦截器
server.interceptors.response.use(
  function(response) {
    // 对响应数据做点什么
    return response;
  },
  function(error) {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default server;
