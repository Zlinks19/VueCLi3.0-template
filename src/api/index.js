import server from "./axiosConfig";

// get 方式
export const get = function() {
  return server({
    method: "get",
    url: "/user/12345",
    params: {
      ID: 12345
    },
    timeout: 5000
  });
};

// post 方式
export const post = function() {
  return server({
    method: "post",
    url: "/user/12345",
    data: {
      ID: 12345
    },
    timeout: 5000
  });
};
