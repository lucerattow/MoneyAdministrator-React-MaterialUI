import React, { useState, useEffect, createContext, ReactNode } from 'react'
// recursos locales
import { checkIsLogged } from '@/api'
import { userDto} from "@/interfaces"

//Defino el contexto
interface AppContextType {
  //states
  user: userDto | null
  notificationPanelShow: boolean
  breadcrumbItems: string[]
  //setters
  setUser: React.Dispatch<React.SetStateAction<userDto | null>>
  setNotificationPanelShow: React.Dispatch<React.SetStateAction<boolean>>
  setBreadcrumbItems: React.Dispatch<React.SetStateAction<string[]>>
}

export const AppContext = createContext<AppContextType | null>(null)

//Defino el componente que provee el contexto
interface AppContextProviderProps {
  children: ReactNode
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<userDto | null>(null)
  const [notificationPanelShow, setNotificationPanelShow] = useState<boolean>(false)
  const [breadcrumbItems, setBreadcrumbItems] = useState<string[]>([])

  // ejecucion inicial de la app
  useEffect(() => {
    checkIsLogged()
      .then((user) => {
        user && setUser(user)
      })
  }, [setUser])

  const data : AppContextType = {
    //states
    user,
    notificationPanelShow,
    breadcrumbItems,
    //setters
    setUser,
    setNotificationPanelShow,
    setBreadcrumbItems,
    //functions
  };

  return (
    <AppContext.Provider value={data}>
      {children}
    </AppContext.Provider>
  )
}
