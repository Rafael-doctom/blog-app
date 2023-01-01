import axios from "axios";

const postsApi = axios.create({
    baseURL: `https://jsonplaceholder.typicode.com`,
    headers: {
        "Content-Type": "application/json",
    },
});

export default postsApi;