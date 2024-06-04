import { styled } from "@root/styled-system/jsx";

export const StyledBoard = styled.section`
    width: fit-content;
    display: grid;
    grid-template-areas: 
    "columnMarker columnMarker columnMarker"
    "rowsMarker columns columns"
    ;
`