import {Wrapper, Name, Status} from './fiendListItem.styled.js';

export const FriendListItem = ({listItem: {isOnline, avatar, name}}) => {
    return (
        <Wrapper>
            <Status stat={isOnline}></Status>
            <img className="avatar" src={avatar} alt="User avatar" width="48" />
            <Name className="name">{name}</Name>
        </Wrapper>
        
    );
}

