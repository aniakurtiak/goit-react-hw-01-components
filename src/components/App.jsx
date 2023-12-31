import { FriendList } from "./friendList/friendList";
import { Profile } from "./profile/profile";
import { Statistics } from "./statistics/statistics";
import { TransactionHistory } from "./transactionHistory/transactionHistory";
import user from "../json/user.json";
import data from "../json/data.json";
import friends from "../json/friends.json";
import transactions from "../json/transactions.json";
import { GlobalStyle } from "./globalStyle";
import { Layout } from "./layout/layout";
  
export const App = () => {
  return (
    <Layout>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics
        title="Upload stats"
        stats={data}
      />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
      <GlobalStyle/>
    </Layout>
  );
};
