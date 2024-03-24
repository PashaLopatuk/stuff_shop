import axios from 'axios';
import * as AxiosLogger from 'axios-logger';


const api = {
    baseUrl: 'https://api.escuelajs.co/api/v1'
}

export const axiosConfig = axios.create({
    baseURL: api.baseUrl
})


axiosConfig.interceptors.request.use((request) => (AxiosLogger.requestLogger(request, {
    dateFormat: 'HH:MM:ss',
    method: true,
    url: true,
    headers: true,
    params: true,
    data: false,
})));