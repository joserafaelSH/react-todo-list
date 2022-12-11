import React from "react";
import { DefaultBtnStyles } from "./DefaultInputStyles";

type inputProps = {
    placeholder: string;
    type: string;
    
}

export const DefaultInput = ({placeholder, type}: inputProps) => {
    return(
        <DefaultBtnStyles type={type} placeholder={placeholder}/>
        )
}