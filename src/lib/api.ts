import axios, { AxiosResponse, AxiosRequestConfig } from "axios"
import { AxiosMethods } from "./types/axios-methods.type"

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_API_BASE_URL,
})

const makeRequest = async <T>(
  method: AxiosMethods,
  endpoint: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response: AxiosResponse<T> = await axiosInstance({
    method,
    url: endpoint,
    data,
    ...config,
  })

  return response.data
}

export const apiGet = <T>(
  endpoint: string,
  config?: AxiosRequestConfig
): Promise<T> => makeRequest("get", endpoint, undefined, config)

export const apiPost = <T>(
  endpoint: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => makeRequest("post", endpoint, data, config)

export const apiPut = <T>(
  endpoint: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => makeRequest("put", endpoint, data, config)

export const apiDelete = <T>(
  endpoint: string,
  config?: AxiosRequestConfig
): Promise<T> => makeRequest("delete", endpoint, undefined, config)

export const apiPatch = <T>(
  endpoint: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => makeRequest("patch", endpoint, data, config)
