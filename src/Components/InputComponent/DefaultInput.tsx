import React, { useContext } from "react";
import { LogInContextType, UserCtx } from "../../Contexts/UserContext";
import { DefaultBtnStyles } from "./DefaultInputStyles";

type inputProps = {
  placeholder: string;
  type: string;
};

export const DefaultInput = ({ placeholder, type }: inputProps) => {
  const { user, saveUser } = useContext(UserCtx) as LogInContextType;

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (type === "text") {
      saveUser({ ...user, email: e.target.value });
      return;
    }

    if (type === "password") {
      saveUser({ ...user, password: e.target.value });
      return;
    }
  };

  return (
    <DefaultBtnStyles
      type={type}
      placeholder={placeholder}
      onChange={(e) => handleInput(e)}
    />
  );
};
