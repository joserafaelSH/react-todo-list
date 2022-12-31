import React from "react";
import { BtnsBox } from "../../Components/BtnsBoxComponent/BtnsBox";
import { LoginBox } from "../../Components/LoginBoxComponent/LoginBox";
import { Title } from "../../Components/TitleComponent/Title";

import { HomePageContainer } from "./HomePageStyle";

export const HomePage = () => {
  const title: string = "Agenda";

  return (
    <HomePageContainer>
      <Title title={title} />
      <LoginBox />
      <BtnsBox />
    </HomePageContainer>
  );
};
