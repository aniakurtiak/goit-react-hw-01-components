import { FriendList } from "./friendList/friendList";
import { FriendListItem } from "./friendListItem/fiendListItem";
import { Profile } from "./profile/profile";
import { Statistics } from "./statistics/statistics";
import { TransactionHistory } from "./transactionHistory/transactionHistory";

export const App = () => {
  return (
    <div>
      <Profile />
      <Statistics />
      <FriendList />
      <FriendListItem />
      <TransactionHistory/>
    </div>
  );
};
