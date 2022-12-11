import React from "react";
import { TitleStyle } from "./TitleStyle";

type titleProps = {
    title: string;
}

export const Title = ({title}:titleProps) => {
  return <TitleStyle>{title}</TitleStyle>;
};