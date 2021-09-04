import Profile from './profile/profile';
import Statistics from './statistics/Statistics';
import FriendList from './friend-list/FriendList';
import user from './profile/user.json';
import statData from './statistics/statistical-data.json';
import friends from './friend-list/friends.json';
import TransactionHistory from './transaction/TransactionHistory';
import transactions from './transaction/transactions.json'

function App() {
  return (
    <div className="App">
      <Profile name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}/>
      <Statistics
        title="Upload stats"
        stats={statData} />
      <Statistics
        stats={statData} />
      <FriendList
        friends={friends} />
      <TransactionHistory
        items={transactions} />
    </div>
  );
}

export default App;
