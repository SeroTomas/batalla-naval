import { styled } from "@root/styled-system/jsx";
 
// Create a styled component
export const StyledBox = styled.div`

    display: grid;
    place-items:center;
    height: 50px;
    width: 50px;
    border: 1px solid black;

    &:hover{
        background-color: aqua;
    }

`
