import React from "react";

import { RegisterBoxStyles } from "./RegisterBoxStyles";
import { DefaultInput } from "../InputComponent/DefaultInput";

export const RegisterBox = () => {
  return (
    <RegisterBoxStyles>
      <DefaultInput type={"text"} placeholder={"User name"} />
      <DefaultInput type={"password"} placeholder={"Password"} />
    </RegisterBoxStyles>
  );
};
