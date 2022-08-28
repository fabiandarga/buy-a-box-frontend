/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import InfoText from '../components/InfoText';
import FilterBox from '../components/FilterBox';
import PriceChart from '../components/PriceChart';
import { optionsToStrings, stringsToOptions, pickAttribute } from '../utils/array-utils';
import './dashboard.css';
import FilterConfig from '../config/filter';

// http://localhost:4000/scraper/all?from=2022-07-14&to=2022-07-14
const SCRAPER_PATH = 'https://buy-a-box-backend.herokuapp.com/data/';
const SETS_PATH = 'https://buy-a-box-backend.herokuapp.com/sets/';

function Dashboard() {
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

  // eslint-disable-next-line consistent-return
  const getProductTitle = (code) => {
    // eslint-disable-next-line no-shadow
    const set = sets.find((set) => set.code === code);
    if (set) {
      return `${set.code} / ${set.name} / ${set.date}`;
    }
    return code;
  };

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
    setShopFilter(optionsToStrings(selected));
  };

  const handleProductsSelected = (selected) => {
    setProductFilter(optionsToStrings(selected));
  };

  const handleLanguagesSelected = (selected) => {
    setLanguageFilter(optionsToStrings(selected));
  };

  const handleTypeSelected = (selected) => {
    setTypeFilter(optionsToStrings(selected));
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

  return (
    <div>
      <PriceChart items={filterItems} />
      <div className="FilterBox-InfoText">
        <FilterBox
          // new code
          getProductTitle={getProductTitle}
          // new code
          selectedShops={stringsToOptions(shopFilter)}
          onShopsChange={handleShopsSelected}
          shopOptions={shopsOptions}
          selectedProducts={stringsToOptions(productFilter)}
          onProductsChange={handleProductsSelected}
          selectedLanguage={stringsToOptions(languageFilter)}
          onLanguageChange={handleLanguagesSelected}
          languageOptions={languageOptions}
          selectedType={stringsToOptions(typeFilter)}
          onTypeChange={handleTypeSelected}
          typeOptions={typeOptions}
          items={filterItems}
          setOptions={productOptions}
          from={from}
          to={to}
          setFrom={setFrom}
          setTo={setTo}
          onSave={handleFilterSaved}
        />
        <InfoText />
      </div>
    </div>
  );
}

export default Dashboard;
