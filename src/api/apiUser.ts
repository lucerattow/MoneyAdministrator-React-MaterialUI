import axios from "axios"
import {baseApi} from "@/config"
import {userDto} from "@/interfaces"
import {toast} from 'react-toastify';
import {toastUpdateConfig} from '@/config';
import {AxiosError} from "@/api"

axios.defaults.withCredentials = true

export const checkIsLogged = async () => {
  try {
    const url = `${baseApi}/user/session_check`
    const response = await axios.get(url)

    //Si fallo
    if (response.status !== 200) {
      return null
    }

    const user: userDto = {
      id: response.data.id,
      username: response.data.username,
      displayName: response.data.displayName,
    }
    return user

  } catch (error) {
    console.error(error)
    return null
  }
}

export const userRegister = async (username: string, password: string, displayName: string) => {
  const toastId = toast.loading("Registrando usuario...")

  try {
    const url = `${baseApi}/user/register`
    const paramsBody = {
      username,
      password,
      displayName
    }
    const response = await axios.post(url, paramsBody)

    //Si fallo
    if (response.status !== 200) {
      toast.update(toastId, {
        ...toastUpdateConfig,
        render: `${response.data.message}`,
        type: "error",
        isLoading: false
      })
      return null
    }

    toast.update(toastId, {
      ...toastUpdateConfig,
      render: `${response.data.message}`,
      type: "success",
      isLoading: false
    })

    const loggedUser = await checkIsLogged()
    return loggedUser

  } catch (error) {
    const axiosError = error as AxiosError;
    let message = axiosError.message; // valor por defecto

    if (axiosError.response?.data.message) {
      message = axiosError.response.data.message;
    } else if (axiosError.response?.data) {
      message = axiosError.response.data;
    }

    toast.update(toastId, {
      render: message,
      type: "error",
      autoClose: 5000,
      isLoading: false
    })

    return null
  }
}

export const userLogin = async (username: string, password: string) => {
  const toastId = toast.loading("Inisiando sesion...")

  try {
    const url = `${baseApi}/user/login`
    const paramsBody = {
      username,
      password,
      displayName: "",
    }
    const response = await axios.post(url, paramsBody)

    //Si fallo
    if (response.status !== 200) {
      toast.update(toastId, {
        ...toastUpdateConfig,
        render: `${response.data.message}`,
        type: "error",
        isLoading: false
      })
      return null
    }

    toast.update(toastId, {
      ...toastUpdateConfig,
      render: `${response.data.message}`,
      type: "success",
      isLoading: false
    })

    const loggedUser = await checkIsLogged()
    return loggedUser

  } catch (error) {
    const axiosError = error as AxiosError;
    let message = axiosError.message; // valor por defecto

    if (axiosError.response?.data.message) {
      message = axiosError.response.data.message;
    } else if (axiosError.response?.data) {
      message = axiosError.response.data;
    }

    toast.update(toastId, {
      render: message,
      type: "error",
      autoClose: 5000,
      isLoading: false
    })

    return null
  }
}

export const userLogout = async () => {
  try {
    const url = `${baseApi}/user/logout`
    await axios.post(url)
  } catch (error) {
    console.log(error)
  }
}
