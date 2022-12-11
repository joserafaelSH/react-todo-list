import React from "react"

import { LoginBoxStyles } from "./LoginBoxStyles";
import { DefaultInput } from "../InputComponent/DefaultInput";

export const LoginBox = () => {
    return (
        <LoginBoxStyles>
            <DefaultInput type={"text"} placeholder={"User name"} />
            <DefaultInput type={"password"} placeholder={"Password"}/>
        </LoginBoxStyles>
    )
}