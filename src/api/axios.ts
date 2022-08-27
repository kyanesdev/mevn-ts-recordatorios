import axios, {AxiosInstance} from "axios";

const axiosInstance: AxiosInstance = axios.create({
    baseURL: "https://mevn-ts-task-app.herokuapp.com/api",
    headers: {
        'Content-Type': 'application/json',
    }
})

export default axiosInstance;