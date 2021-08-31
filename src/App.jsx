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
      <Profile name={user.name} tag={user.tag} location={user.location} avatar={user.avatar} stats={user.stats}></Profile>
      <Statistics stats={statData}></Statistics>
      <FriendList friends={friends}></FriendList>
      <TransactionHistory items={transactions}></TransactionHistory>
    </div>
  );
}

export default App;
