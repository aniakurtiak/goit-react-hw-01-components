export const FriendListItem = ({listItem}) => {
    return (
        <div>
            <span className="status">{listItem.isOnline}</span>
            <img className="avatar" src={listItem.avatar} alt="User avatar" width="48" />
            <p className="name">{listItem.name}</p>
        </div>
        
    );
}

