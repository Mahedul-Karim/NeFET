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
  name: string;
  email: string;
}

interface ContextType {
  user: User | null | undefined;
  setUser: Dispatch<SetStateAction<User | null | undefined>>;
  items: NftItem[];
  setItems: Dispatch<SetStateAction<any>>;
}

const Context = createContext<ContextType>({
  user: null,
  setUser: () => {},
  items: [],
  setItems: () => {},
});

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null | undefined>(null);
  // const [user, setUser] = useState<User | null | undefined>({ name: "John", email: "test@gmail.com" });
  const [items, setItems] = useState(() => ITEMS);

  return (
    <Context
      value={{
        user,
        setUser,
        items,
        setItems,
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
