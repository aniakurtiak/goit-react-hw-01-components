import {ListStats, StatsItem, Wrapper, Photo, Decription, Name} from "./profile.styled.js"

export const Profile = ({username, tag, location, avatar, stats}) => {
    return (
        <Wrapper>
            <Decription>
                <Photo
                src= {avatar}
                alt="User avatar"
                className="avatar"
                />
                <Name>{username}</Name>
                <p className="tag">@{tag}</p>
                <p className="location">{location}</p>
            </Decription>
            <ListStats className="stats">
                <StatsItem>
                    <span className="label">Followers</span>
                    <span className="quantity">{stats.followers}</span>
                </StatsItem>
                <StatsItem>
                    <span className="label">Views</span>
                    <span className="quantity">{stats.views}</span>
                </StatsItem>
                <StatsItem>
                    <span className="label">Likes</span>
                    <span className="quantity">{stats.likes}</span>
                </StatsItem>
            </ListStats>
        </Wrapper>
    )
};