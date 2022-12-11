import React from "react";
import { DefaultBtnStyles } from "./DefaultBtnStyles";


type btnProps = {
    name: string;
    action: string;
    onClick: () => void;
}

export const DefaultBtn = ({name, action, onClick}: btnProps) => {
  return <DefaultBtnStyles onClick={onClick}>{name}</DefaultBtnStyles>;
};