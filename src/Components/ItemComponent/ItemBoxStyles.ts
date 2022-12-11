import styled from "styled-components";

type itemBoxProps = {
    check: boolean;
}

export const ItemBoxStyles = styled.div(({check}:itemBoxProps) =>(` 
    display: flex;
    background-color: #20212C;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    align-items: center;

    input{
        width: 25px;
        height: 25px;
        margin-right: 5px;
        cursor: pointer;
    }

    label{
        color: #CCC;
        text-decoration: ${check ? 'line-through' : 'initial'};
    }
    h4{
        margin-left: 40px;
        cursor: pointer;
    }
`));