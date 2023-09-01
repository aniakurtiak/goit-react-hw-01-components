import { FriendListItem } from "components/friendListItem/fiendListItem"

export const FriendList = ({friends}) => {
    return (
        <ul className="friend-list">
             {friends.map(friend => (
                <li key={friend.id}>
                    <FriendListItem listItem = {friend}/>
               </li>
            ))}
        </ul>
    );
}