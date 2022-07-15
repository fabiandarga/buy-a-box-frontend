import "./App.css";
import Dashboard from "./pages/Dashboard.js";
import Header from "./components/Header.js";

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
