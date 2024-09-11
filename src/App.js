import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AuthProvider, useAuth } from './AuthContext';
import Sidebar from './Sidebar';
import Feed from './Feed';
import Widgets from './Widgets';
import Login from './Login';
import './App.css';

const AppContent = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <div className="app">
       {isAuthenticated ? (
        <>
      <Sidebar />
      <Feed />
      <Widgets />
      <button onClick={logout} className="logout-button">Logout</button>
       </>
     ) : (
     <Login />
     )}
    </div>
  );
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<AppContent />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
