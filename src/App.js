import React from 'react';
import './App.css';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
