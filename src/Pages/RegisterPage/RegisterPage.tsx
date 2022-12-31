import React from "react";
import { BtnsRegister } from "../../Components/BtnsRegister/BtnsRegister";
import { RegisterBox } from "../../Components/RegisterBoxComponent/RegisterBox";
import { Title } from "../../Components/TitleComponent/Title";

import { RegisterPageContainer } from "./ResgisterPageStyle";

export const RegisterPage = () => {
  const title: string = "Register";

  return (
    <RegisterPageContainer>
      <Title title={title} />
      <RegisterBox />
      <BtnsRegister />
    </RegisterPageContainer>
  );
};
