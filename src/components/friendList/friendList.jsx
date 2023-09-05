import { FriendListItem } from "components/fiendListItem/fiendListItem"
import {List, ListItem} from './friendList.styled';

export const FriendList = ({friends}) => {
    return (
        <List>
             {friends.map(friend => (
                <ListItem key={friend.id}>
                    <FriendListItem listItem = {friend}/>
               </ListItem>
            ))}
        </List>
    );
}