import styled from "styled-components";

export const DefaultBtnStyles = styled.input`
    font-size: 18px;
    color: black;
    height: 4vh;
    border: none;
    border-bottom: 1px solid black;
    :focus{
        outline: none;
    }
    ::placeholder{
        font-size: 18px;
    }
`;