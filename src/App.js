import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

const url = 'https://api.github.com/users';

function App() {
  const [users, setUsers] = useState([]);  // Correctly declare state using array destructuring

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);

    console.log(users);
  }

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="App">
      <h1>555555555555555555555555555555555555</h1>
      <h1>555555555555555555555555555555555555</h1>
      <h1>555555555555555555555555555555555555</h1>
      <h1>555555555555555555555555555555555555</h1>
      <h1>555555555555555555555555555555555555</h1>
      <h1>555555555555555555555555555555555555</h1>
      <h1>555555555555555555555555555555555555</h1>

      <ul>
        {users.map(user => (
          <li key={user.id}><img src='{user.avatar-url}'></img> {user.login}</li>  // Properly map users to list items with unique key
        ))}
      </ul>
    </div>
  );
}

export default App;
