import { React, useState, useEffect } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Header from './components/Header';
import Footer from './components/Footer';
import Impressum from './pages/Impressum';
import CompareProducts from './pages/CompareProducts';
import { optionsToStrings, pickAttribute } from './utils/array-utils';
import FilterConfig from './config/filter';

const SCRAPER_PATH = 'https://buy-a-box-backend.herokuapp.com/data/';
const SETS_PATH = 'https://buy-a-box-backend.herokuapp.com/sets/';

function App() {
  const [allItems, setAllItems] = useState([]);
  const [productFilter, setProductFilter] = useState(FilterConfig.productFilter);
  const [shopFilter, setShopFilter] = useState(FilterConfig.shopFilter);
  const [languageFilter, setLanguageFilter] = useState(FilterConfig.languageFilter);
  const [typeFilter, setTypeFilter] = useState(FilterConfig.typeFilter);
  const [from, setFrom] = useState(new Date(Date.now() - 2628000000).toISOString().slice(0, 10));
  const [to, setTo] = useState(new Date().toISOString().slice(0, 10));
  const [productOptions, setProductOptions] = useState([]);
  const [shopsOptions, setShopsOptions] = useState([]);
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

  const fetchSets = async () => {
    await fetch(SETS_PATH)
      .then((response) => response.json())
      .then((data) => {
        setSets(data);
      })
      .catch(() => {});
  };

  useEffect(() => {
    fetchSets();
  }, []); // Dependancy Array

  // eslint-disable-next-line no-shadow
  const fetchData = async (from, to) => {
    const url = new URL(SCRAPER_PATH);
    if (from) {
      url.searchParams.append('from', from);
    }
    if (to) {
      url.searchParams.append('to', to);
    }
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        calculateOptions(data);
        setAllItems(data);
      })
      .catch((err) => err);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilterSaved = () => {
    // reload data with set time range
    fetchData(from, to);
  };

  const handleShopsSelected = (selected) => {
    setShopFilter(optionsToStrings(Array.isArray(selected) ? selected : [selected]));
  };
  const handleProductsSelected = (selected) => {
    setProductFilter(optionsToStrings(Array.isArray(selected) ? selected : [selected]));
  };

  const handleLanguagesSelected = (selected) => {
    setLanguageFilter(optionsToStrings(Array.isArray(selected) ? selected : [selected]));
  };

  const handleTypeSelected = (selected) => {
    setTypeFilter(optionsToStrings(Array.isArray(selected) ? selected : [selected]));
  };

  const filterItems = allItems.filter((item) => {
    if (productFilter.length > 0 && !productFilter.includes(item.code)) {
      return false;
    }
    if (typeFilter.length > 0 && !typeFilter.includes(item.type)) {
      return false;
    }
    if (shopFilter.length > 0 && !shopFilter.includes(item.shop)) {
      return false;
    }
    if (languageFilter.length > 0 && !languageFilter.includes(item.lang)) {
      return false;
    }
    return true;
  });

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
                    filterItems={filterItems}
                    shopFilter={shopFilter}
                    productFilter={productFilter}
                    languageFilter={languageFilter}
                    typeFilter={typeFilter}
                    handleShopsSelected={handleShopsSelected}
                    handleProductsSelected={handleProductsSelected}
                    handleLanguagesSelected={handleLanguagesSelected}
                    handleTypeSelected={handleTypeSelected}
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
