import axios from 'axios';
const BASE_URL = "https://advertisements.pythonanywhere.com";
export default axios.create(
    {
        baseURL: BASE_URL
    }
);
export const axiosPrivate = axios.create(
    {
        baseURL: BASE_URL,
        headers: {
            // 'Vary':'Accept',
            'Content-Type' : 'application/json'
        },
        withCredentials: true,
    }
);