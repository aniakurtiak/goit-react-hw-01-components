import {List, ListItem, Wrapper} from "./statistics.styled";

export const Statistics = ({title = null, stats}) => {
    return (
        <Wrapper className="statistics">
            <h2 className="title">{title}</h2>
            <List className="stat-list">
                {stats.map(stat=> (
                    <ListItem key={stat.id} color = 'getRandomColor'>
                        <span className="label">{stat.label}</span>
                        <span className="percentage">{stat.percentage}</span>
                    </ListItem>
                ))}
            </List>
        </Wrapper>
    );
}
