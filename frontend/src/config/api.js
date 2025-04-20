import axios from "axios"

export const API_URL = "http://localhost:8080" 

export const api = axios.create({
    baseURL: API_URL,
    headers: {
        "Authorization": `Bearer ${localStorage.getItem("jwtToken")}`,
        "Content-Type": "application/json"
    }
})