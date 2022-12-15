import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import Impressum from './pages/Impressum';
import CompareProducts from './pages/CompareProducts';

function App() {
  return (
    <div className="for-desktop">
      <Header />
      <div className="content-app">
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
          <Route path="/compare" element={<CompareProducts />} />
          <Route path="/Impressum" element={<Impressum />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
