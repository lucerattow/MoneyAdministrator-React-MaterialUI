import axios from "axios"
import {baseApi} from "@/config"
import { userDto } from "@/interfaces/dtos"

axios.defaults.withCredentials = true

export const checkIsLogged = async () => {
  try {
    const response = await axios.get(`${baseApi}/user/login_session_check`)
    const user: userDto = {
      Id: response.data.Id,
      Username: response.data.Username,
    }
    return user
  } catch (error) {
    console.error("Error al obtener información del usuario:", error);
    return null
  }
}

export const userLogin = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${baseApi}/user/login`, {
      username,
      password
    })
    console.log(response);

    const loggedUser = await checkIsLogged()
    return loggedUser
  } catch (error) {
    console.log(error)
    return null
  }
}

export const userRegister = async (username: string, password: string) => {
  try {
    const response = await axios.post(`${baseApi}/user/register`, {
      username,
      password
    })
    console.log(response)

    const loggedUser = await checkIsLogged()
    return loggedUser
  } catch (error) {
    console.log(error)
    return null
  }
}