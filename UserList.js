import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './UserList.css'; // Optional: Create this file for custom styles

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response) => {
        setListOfUser(response.data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  return (
    <div className="user-container">
      <h2>User List</h2>
      {listOfUser.map(user => (
        <div key={user.id} className="user-card">
          <h4>{user.name}</h4>
          <p><strong>Email:</strong> {user.email}</p>
          <p><strong>Username:</strong> {user.username}</p>
          <p><strong>City:</strong> {user.address.city}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;
