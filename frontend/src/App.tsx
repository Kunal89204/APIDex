import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useUser } from '@clerk/clerk-react'; // Adjust based on your auth provider
import Home from './pages/Home';
import Login from './pages/Login';
import Layout from './components/Layout';

const App: React.FC = () => {
  const { isLoaded, isSignedIn} = useUser(); // Get user authentication state

  if (!isLoaded) {
    return <div>Loading...</div>; // Show a loading state while checking auth
  }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={isSignedIn ? <Layout><Home /></Layout> : <Navigate to="/login" replace />}
        />
        <Route
          path="/login"
          element={!isSignedIn ? <Login /> : <Navigate to="/" replace />}
        />
      </Routes>
    </Router>
  );
};

export default App;
