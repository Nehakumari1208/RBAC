import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import WelcomePage from './pages/WelcomePage';
import LoginRegisterPage from './pages/LoginRegisterPage';
import HomePage from './pages/HomePage';
import AddUser from './components/AddUser';
import ViewUsers from './components/ViewUsers';
import ManageUsers from './components/ManageUsers';

function App() {
  return (
    <Router>
      <div className="bg-gradient-to-br from-blue-200 to-blue-500 min-h-screen">
        <Routes>
          <Route path="*" element={<WelcomePage />} />
          <Route path="/login" element={<LoginRegisterPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/add-user" element={<AddUser />} />
          <Route path="/view-users" element={<ViewUsers />} />
          <Route path="/manage-users" element={<ManageUsers />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

