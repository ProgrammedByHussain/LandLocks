import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { UserProvider } from './providers/user';
import LoginComponent from './components/LoginComponent';
import HomePage from './components/HomePage'; // Create this component
import ValidateProperty from './components/validateProperty';
function App() {
  return (
    <UserProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LoginComponent />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/validate" element={<ValidateProperty />} />

        </Routes>
      </Router>
    </UserProvider>
  );
}

export default App;