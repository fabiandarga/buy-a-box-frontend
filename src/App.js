import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import Impressum from './pages/Impressum';

function App() {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <Header />
              <div className="App">
                <Dashboard />
              </div>
              <Footer />
            </div>
          }
        />
        <Route path="/Impressum" element={<Impressum />} />
      </Routes>
    </div>
  );
}

export default App;
