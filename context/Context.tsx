"use client";

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
}

const Context = createContext<ContextType>({
  user: null,
  setUser: () => {},
});

const ContextProvider: React.FC<Props> = ({ children }) => {
  const [user, setUser] = useState<User | null | undefined>(null);

  return (
    <Context
      value={{
        user,
        setUser,
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
