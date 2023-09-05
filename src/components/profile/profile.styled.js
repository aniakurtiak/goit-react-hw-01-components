import styled from "styled-components";

export const Wrapper = styled.div`
padding-top: 30px;
width: 300px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
background-color: white;
`;

export const Decription = styled.div`
font-size: 18px;
`;

export const Name = styled.p`
font-size: 24px;
font-weight: 700;
`;

export const Photo = styled.img`
width: 150px;
height: 150px;
border-radius: 50%;
`;

export const ListStats = styled.ul`
width: 100%;
display: flex;
justify-content: center;
border: 10px, solid, black;
background-color: rgb(242, 250, 255);
`;

export const StatsItem = styled.li`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
gap: 10px;
font-size: 16px;
padding: 20px;
`;

export const Numbers = styled.span`
font-size: 20px;
font-weight: 700;
`;