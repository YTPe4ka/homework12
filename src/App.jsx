import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './context/UserContext';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CreateUser from './components/CreateUser';

const App = () => {
  return (
    <UserProvider>
      <Router>
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateUser />} />
          </Routes>
        </div>
      </Router>
    </UserProvider>
  );
};

export default App;
