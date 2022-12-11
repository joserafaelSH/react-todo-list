import React from "react";
import { ContentArea } from "../../Components/ContentAreaComponent/ContentArea";
import ItemContext from "../../Contexts/ItemContext";
import { MainPageStyles } from "./MainPageStyles";
import { useNavigate } from "react-router-dom";

export const MainPage = () => {
    const navigate = useNavigate();
    const handleSair = () => {
        navigate('/homePage')
    }

    return( 
        <MainPageStyles>
            <ItemContext>
                <ContentArea/>
            </ItemContext>
            <button onClick={handleSair}>Sair</button>
        </MainPageStyles>
    );
}