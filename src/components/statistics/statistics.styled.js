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
padding-top: 30px;
width: 300px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 10px;
`;

export const List = styled.ul`
display: flex;
justify-content: center;
align-items: center;
`;

export const ListItem = styled.li`
display: flex;
flex-direction: column;
background-color: ${getRandomColor};
`;