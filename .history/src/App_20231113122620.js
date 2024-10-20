import './App.css';
import React, { useState } from 'react';
import Login from './components/Login/Login';
import User from './components/User/User';
import Register from './components/Register/Register';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLogin = () => {
    // Replace this with your actual login logic
    // For simplicity, let's assume successful login for any username and password
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    // Replace this with your actual logout logic
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<Login onLogin={handleLogin} isAuthenticated={isAuthenticated} />}
          />
          <PrivateRoute
            path="/user/*"
            element={<User onLogout={handleLogout} />}
            authenticated={isAuthenticated}
          />
          <Route path="/register/*" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
