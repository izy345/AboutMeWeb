import axios from 'axios';



const BASE_URL =  ''


const axiosInstance = axios.create({
    baseURL: BASE_URL,
    withCredentials: false,
    timeout: 40000,
});

const request = async (method, endpoint, data = {}) => {
    try {
        const headers = {
            'Content-Type': 'application/json',
        };

        let resp;
        if (method.toLowerCase() === 'delete') {
            resp = await axiosInstance.delete(endpoint, {
                data: data,
                headers: headers
            });
        } else if (method.toLowerCase() === 'get') {
            resp = await axiosInstance.request({
                method: method,
                url: endpoint,
                params: data, // Use 'params' for GET requests
                headers: headers
            });
        } else {
            resp = await axiosInstance.request({
                method: method,
                url: endpoint,
                data: data,
                headers: headers
            });
        }
        return { data: resp.data, status: resp.status };
    } catch (error) {
        console.error(error);
        return { data: error.response?.data, status: error.response?.status };
    }
};

export default request