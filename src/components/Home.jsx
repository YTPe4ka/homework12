import React, { useContext } from 'react';
import { UserContext } from '../context/UserContext';

const Home = () => {
  const { users, setUsers } = useContext(UserContext);

  const handleDelete = (indexToRemove) => {
    setUsers(users.filter((_, index) => index !== indexToRemove));
  };

  return (
    <div className="home">
      <h1>Users List</h1>
      {users.length === 0 ? (
        <p>No users found. Add some!</p>
      ) : (
        <div className="card-container">
          {users.map((user, index) => (
            <div key={index} className="card">
              <h2>{user.name}</h2>
              <p>{user.email}</p>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
