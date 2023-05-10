import axios from 'axios'

const API = axios.create({
    baseURL : 'http://localhost:3500/'
});

API.interceptors.request.use((request) => request , (error) => Promise.reject(error));
API.interceptors.response.use((response) => response , (error) => Promise.reject(error));


export default API;