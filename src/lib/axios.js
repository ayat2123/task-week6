import axios from "axios";
const baseURL=import.meta.env.VITE_API_BASE_URL//url بزرگ

export const client=axios.create({
    baseURL
})