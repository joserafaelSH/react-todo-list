import React, { useContext } from "react";
import { DefaultBtn } from "../BtnComponent/DefaultBtn";

import { useNavigate } from "react-router-dom";
import { LogInContextType, UserCtx } from "../../Contexts/UserContext";
import { BtnsRegisterStyles } from "./BtnsRegisterStyles";

export const BtnsRegister = () => {
  const navigate = useNavigate();

  const { user } = useContext(UserCtx) as LogInContextType;

  const handleRegisterClick = () => {
    console.log(user);
  };

  const handleVoltarClick = () => {
    navigate("/homePage");
  };

  return (
    <BtnsRegisterStyles>
      <DefaultBtn
        name="Register"
        action="Register"
        onClick={handleRegisterClick}
      />
      <DefaultBtn name="Voltar" action="Voltar" onClick={handleVoltarClick} />
    </BtnsRegisterStyles>
  );
};
