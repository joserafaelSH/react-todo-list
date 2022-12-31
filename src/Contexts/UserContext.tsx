import React from "react";
import { createContext, useState } from "react";
import { LogIn } from "../Types/LogIn";

export type LogInContextType = {
  user: LogIn;
  saveUser: (loginInfo: LogIn) => void;
  logOut: () => void;
};

export const UserCtx = createContext<LogInContextType | null>(null);

const UserContext = ({ children }: any) => {
  const [user, setUser] = useState<LogIn>({
    email: "",
    token: "",
    password: "",
  });

  const saveUser = (loginInfo: LogIn) => {
    setUser(loginInfo);
  };

  const logOut = () => {
    setUser({ email: "", token: "", password: "" });
  };

  return (
    <UserCtx.Provider value={{ user, saveUser, logOut }}>
      {children}
    </UserCtx.Provider>
  );
};

export default UserContext;
