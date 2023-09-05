import styled from "styled-components";

const getRandomColor = props => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
  return color;
}


export const Wrapper = styled.section`
width: 300px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 5px;
background-color: white;
`;

export const Title = styled.h2`
text-transform: uppercase;
color: gray;
`;

export const List = styled.ul`
width: 100%;
display: flex;
justify-content: space-between;
font-size: 16px;
color: white;
`;

export const ListItem = styled.li`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 10px;
background-color: ${getRandomColor};
padding: 10px;
`;

export const Percent = styled.span`
font-size: 20px;
`;