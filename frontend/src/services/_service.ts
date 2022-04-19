import axios, { Axios, AxiosError } from 'axios'
import { NotFoundError } from '../errors'

const parseAxiosErrors = (error: AxiosError) => {
  if (!error.response && error.message === 'Network Error') {
    throw new NotFoundError(`The URL "${error.config.url}" does not exist`)
  }
  return Promise.reject(error)
}

export const makeAxios = (): Axios => {
  const instance = axios.create()
  instance.interceptors.response.use(config => config, parseAxiosErrors)
  return instance
}
