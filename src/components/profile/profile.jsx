import {ListStats, StatsItem, Wrapper, Photo, Decription, Name, Numbers} from "./profile.styled.js"

export const Profile = ({username, tag, location, avatar, stats}) => {
    return (
        <Wrapper>
            <Decription>
                <Photo
                src= {avatar}
                alt="User avatar"
                />
                <Name>{username}</Name>
                <p>@{tag}</p>
                <p>{location}</p>
            </Decription>
            <ListStats>
                <StatsItem>
                    <span>Followers</span>
                    <Numbers>{stats.followers}</Numbers>
                </StatsItem>
                <StatsItem>
                    <span>Views</span>
                    <Numbers>{stats.views}</Numbers>
                </StatsItem>
                <StatsItem>
                    <span>Likes</span>
                    <Numbers>{stats.likes}</Numbers>
                </StatsItem>
            </ListStats>
        </Wrapper>
    )
};