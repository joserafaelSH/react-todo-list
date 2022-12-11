import React, { useContext, useState } from "react";
import ItemContext, { ItemContextType, ItemCtx } from "../../Contexts/ItemContext";

import { Item } from "../../Types/Item";
import { BoxNewTasks } from "../BoxNewTasksComponents/BoxNewTasks";
import { Header } from "../HeaderComponent/Header";
import { ItemBox } from "../ItemComponent/ItemBox";
import { ContentAreaStyles } from "./ContentAreaStyles";

export const ContentArea = () => {
    
    const {list} = useContext(ItemCtx) as ItemContextType  ;
    
    return (
        
        <ContentAreaStyles>
            <Header/>
            <BoxNewTasks/>
            {list.map((item, index) => (
                <ItemBox item={item} key={index} />
            ))}

        </ContentAreaStyles>
        
    );
};