import React from "react";
import { DefaultBtn } from "../BtnComponent/DefaultBtn";
import { BtnsBoxStyles } from "./BtnsBoxStyles";
import { useNavigate } from "react-router-dom";

export const BtnsBox = () => {
  const navigate = useNavigate();

  const handleLoginClick = () =>{
    navigate('/mainPage')
    console.log('Login');
  }

  const handleRegisterClick = () =>{
    console.log('Register');
  }

  const handleForgotPassClick = () =>{
    console.log('ForgotPass');
  }

  return (
    <BtnsBoxStyles>
      <DefaultBtn name="Login" action="Login"  onClick={handleLoginClick} />
      <DefaultBtn name="Cadastrar" action="Cadastrar" onClick={handleRegisterClick}/>
      <DefaultBtn name="Recuperar senha" action="Recuperar" onClick={handleForgotPassClick}/>
    </BtnsBoxStyles>
  );
};