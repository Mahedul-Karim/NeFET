"use client";

import { ITEMS, NftItem } from "@/lib/data";
import React, {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

interface Props {
  children: React.ReactNode;
}

interface User {
  name: string | null;
  email: string | null;
}

interface ContextType {
  user: User | null ;
  setUser: Dispatch<SetStateAction<User | null >>;
  items: NftItem[];
  setItems: Dispatch<SetStateAction<any>>;
  isLoggedIn:boolean;
  setIsLoggedIn:Dispatch<SetStateAction<boolean>>;
}

const Context = createContext<ContextType>({
  user: null,
  setUser: () => {},
  items: [],
  setItems: () => {},
  isLoggedIn:false,
  setIsLoggedIn:()=>{}
});

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null >(null);
  const [items, setItems] = useState(() => ITEMS);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Context
      value={{
        user,
        setUser,
        items,
        setItems,
        isLoggedIn,
        setIsLoggedIn
      }}
    >
      {children}
    </Context>
  );
};

export const useCtx = () => {
  return useContext(Context);
};

export default ContextProvider;
