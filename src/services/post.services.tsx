import axios from 'axios';
import {IPost} from "../interfaces/IPost";

const axiosInstance = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
});

const getPosts = () => {
    return axiosInstance.get<IPost[]>('/posts');
}

export {getPosts}