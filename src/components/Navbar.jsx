import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../context/UserContext';

const Navbar = () => {
  const { users } = useContext(UserContext);

  return (
    <nav className="navbar">
      <Link to="/" className="nav-item">Home</Link>
      <Link to="/create" className="nav-item">Create User</Link>
      <span className="nav-item">Total Users: {users.length}</span>
    </nav>
  );
};

export default Navbar;
