import styled from "styled-components";

const isOnline = props => {
    if (props.stat){
        return 'green'
    }else {
        return 'red'
    }};

export const Wrapper = styled.div`
display: flex;
gap: 10px;
background-color: white;
`;

export const Name = styled.p`
font-weight: 700;
`;

export const Status = styled.span`
display: flex;
width: 15px;
height: 15px;
border: 2px;
border-radius: 50%;
background-color:${isOnline};
margin-top: 15px;
`;
