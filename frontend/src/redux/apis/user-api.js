import axios from 'axios'
const checkauthentication = async (params) => {
    return axios.post("http://localhost:4000/user/authenticate", params)
};
const registeruser = async (params) => {
    return axios.post("http://localhost:4000/user/register", params)
};
const getAllUsers = async (params) => {
    return axios.get("http://localhost:4000/user/getallusers", params)
};
export default {
    checkauthentication,
    registeruser,
    getAllUsers
}