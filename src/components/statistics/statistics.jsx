import {List, ListItem, Wrapper, Percent, Title} from "./statistics.styled";

export const Statistics = ({title = null, stats}) => {
    return (
        <Wrapper >
            <Title>{title}</Title>
            <List>
                {stats.map(stat=> (
                    <ListItem key={stat.id} color = 'getRandomColor'>
                        <span>{stat.label}</span>
                        <Percent>{stat.percentage}%</Percent>
                    </ListItem>
                ))}
            </List>
        </Wrapper>
    );
} 