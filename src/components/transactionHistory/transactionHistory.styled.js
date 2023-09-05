import styled from "styled-components";

export const TabData = styled.table`
width: 600px;
margin: 0 auto;
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
border-radius: 4px;
border: 4px, solid, black;
`;

export const TabTitles = styled.thead`
width: calc(100% / 3);
color: white;
font-size: 16px;
font-weight: 500;
text-align: center;
text-transform: uppercase;
background-color: rgb(24, 177, 219);
padding: 10px;
`;

export const TabElement = styled.td`
text-align: center;
color: gray;
padding: 8px;
background-color: rgb(240, 253, 255);
`;