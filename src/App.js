import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import Impressum from './pages/Impressum';

function App() {
  return (
    <div className="for-desktop">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <div className="page">
                <Dashboard />
              </div>
            </div>
          }
        />
        <Route path="/Impressum" element={<Impressum />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
