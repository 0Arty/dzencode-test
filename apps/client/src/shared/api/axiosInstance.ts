import axios, { AxiosError, type InternalAxiosRequestConfig } from 'axios'

export const axiosInstance = axios.create({
   baseURL: 'https://jsonplaceholder.typicode.com', // add base url here
   timeout: 15000,
   headers: {
      'Content-Type': 'application/json',
   },
})
