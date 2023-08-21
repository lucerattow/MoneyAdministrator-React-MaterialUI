import React, {useState, useEffect, createContext, ReactNode} from 'react'
// recursos locales
import {checkIsLogged} from '@/api'
import {userDto} from "@/interfaces"

//Defino el contexto
interface AppContextType {
  user: userDto | null
  setUser: React.Dispatch<React.SetStateAction<userDto | null>>
  notificationPanelShow: boolean
  setNotificationPanelShow: React.Dispatch<React.SetStateAction<boolean>>
}

export const AppContext = createContext<AppContextType | null>(null)

//Defino el componente que provee el contexto
interface AppContextProviderProps {
  children: ReactNode
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<userDto | null>(null)
  const [notificationPanelShow, setNotificationPanelShow] = useState<boolean>(false)

  // ejecucion inicial de la app
  useEffect(() => {
    checkIsLogged()
      .then((user) => {
        user && setUser(user)
      })
  }, [setUser])

  const data : AppContextType = {
    //Estados
    user,
    notificationPanelShow,
    //funciones
    setUser,
    setNotificationPanelShow,
  };

  return (
    <AppContext.Provider value={data}>
      {children}
    </AppContext.Provider>
  )
}
