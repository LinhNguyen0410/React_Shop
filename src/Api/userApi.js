import axiosClient from "./axiosClient";

const userApi = {
  // data dc truyền lên từ component register
  register(user_payload) {
    const url = `/auth/local/register`;
    return axiosClient.post(url, user_payload);
  },
  login(user_payload) {
    const url = `/auth/local`;
    return axiosClient.post(url, user_payload);
  },
};
export default userApi;
