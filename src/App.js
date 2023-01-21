import React, { useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import Impressum from './pages/Impressum';
import CompareProducts from './pages/CompareProducts';
import { pickAttribute } from './utils/array-utils';
import { fetchData, fetchSets } from './utils/api';

function App() {
  const [from, setFrom] = useState(new Date(Date.now() - 2628000000).toISOString().slice(0, 10));
  const [to, setTo] = useState(new Date().toISOString().slice(0, 10));
  const [shopsOptions, setShopsOptions] = useState([]);
  const [allItems, setAllItems] = useState([]);
  const [productOptions, setProductOptions] = useState([]);
  const [languageOptions, setLanguageOptions] = useState([]);
  const [typeOptions, setTypeOptions] = useState([]);

  /**
   * Takes the server data and calculates the filter option for this set of data
   */
  const calculateOptions = (data) => {
    setLanguageOptions(pickAttribute(data, 'lang'));
    setShopsOptions(pickAttribute(data, 'shop'));
    setProductOptions(pickAttribute(data, 'code'));
    setTypeOptions(pickAttribute(data, 'type'));
  };

  const [sets, setSets] = useState([]);

  useEffect(() => {
    fetchSets().then(setSets);
    fetchData().then((data) => {
      setAllItems(data);
      calculateOptions(data);
    });
  }, []); // Dependancy Array

  const handleFilterSaved = () => {
    // reload data with set time range
    fetchData(from, to);
  };

  const extendedProductOptions = productOptions
    .map((code) => sets.find((set) => set.code === code) ?? { code, name: code, date: '-' })
    .map((set) => ({ ...set, dateObj: new Date(set.date) }))
    .sort((a, b) => b.dateObj - a.dateObj);

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
                  <Dashboard
                    // filterItems={filterItems}
                    // shopFilter={shopFilter}
                    // productFilter={productFilter}
                    // languageFilter={languageFilter}
                    // typeFilter={typeFilter}
                    // setShopFilter={setShopFilter}
                    // setProductFilter={setProductFilter}
                    // setLanguageFilter={setLanguageFilter}
                    // setTypeFilter={setTypeFilter}
                    allItems={allItems}
                    shopsOptions={shopsOptions}
                    extendedProductOptions={extendedProductOptions}
                    languageOptions={languageOptions}
                    typeOptions={typeOptions}
                    from={from}
                    to={to}
                    setFrom={setFrom}
                    setTo={setTo}
                    handleFilterSaved={handleFilterSaved}
                  />
                </div>
              </div>
            }
          />
          <Route
            path="/compare"
            element={
              <CompareProducts
                productOptions={extendedProductOptions}
                languageOptions={languageOptions}
                typeOptions={typeOptions}
              />
            }
          />
          <Route path="/Impressum" element={<Impressum />} />
        </Routes>
      </div>
      <Footer />
    </div>
  );
}

export default App;
