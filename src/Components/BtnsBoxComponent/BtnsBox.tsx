import React, { useContext } from "react";
import { DefaultBtn } from "../BtnComponent/DefaultBtn";
import { BtnsBoxStyles } from "./BtnsBoxStyles";
import { useNavigate } from "react-router-dom";
import { LogInContextType, UserCtx } from "../../Contexts/UserContext";

export const BtnsBox = () => {
  const navigate = useNavigate();

  const { user } = useContext(UserCtx) as LogInContextType;

  const handleLoginClick = () => {
    console.log(user);
  };

  const handleRegisterClick = () => {
    navigate("/register");
    console.log("Register");
  };

  const handleForgotPassClick = () => {
    console.log("ForgotPass");
  };

  return (
    <BtnsBoxStyles>
      <DefaultBtn name="Login" action="Login" onClick={handleLoginClick} />
      <DefaultBtn
        name="Cadastrar"
        action="Cadastrar"
        onClick={handleRegisterClick}
      />
      <DefaultBtn
        name="Recuperar senha"
        action="Recuperar"
        onClick={handleForgotPassClick}
      />
    </BtnsBoxStyles>
  );
};
