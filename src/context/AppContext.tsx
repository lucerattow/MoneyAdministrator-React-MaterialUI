import React, {useState, useEffect, createContext, ReactNode} from 'react';
import { userDto } from "@/interfaces/dtos";
import {checkIsLogged} from '@/api';

//Defino el contexto
interface AppContextType {
  user: userDto | null;
  setUser: React.Dispatch<React.SetStateAction<userDto | null>>;
}

export const AppContext = createContext<AppContextType | null>(null);

//Defino el componente que provee el contexto
interface AppContextProviderProps {
  children: ReactNode;
}

export const AppContextProvider: React.FC<AppContextProviderProps> = ({ children }) => {
  const [user, setUser] = useState<userDto | null>(null);

  useEffect(() => {
    checkIsLogged()
      .then((user) => {
        user && setUser(user);
      })
  }, [setUser])

  const data : AppContextType = {
    //Estados
    user,
    //funciones
    setUser,
  };

  return (
    <AppContext.Provider value={data}>
      {children}
    </AppContext.Provider>
  );
}
