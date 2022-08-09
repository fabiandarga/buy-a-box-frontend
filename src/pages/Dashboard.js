/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react';
import InfoText from '../components/InfoText';
import FilterBox from '../components/FilterBox';
import PriceChart from '../components/PriceChart';
import { optionsToStrings, stringsToOptions, pickAttribute } from '../utils/array-utils';
import './dashboard.css';

// http://localhost:4000/scraper/all?from=2022-07-14&to=2022-07-14
const SCRAPER_PATH = 'https://buy-a-box-backend.herokuapp.com/data/';
const SETS_PATH = 'https://buy-a-box-backend.herokuapp.com/sets/';

function Dashboard() {
  const [allItems, setAllItems] = useState([]);
  const [filterSetOptions, setFilterSetOptions] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState(['2X2']);
  const [filterShopsOptions, setFilterShopsOptions] = useState([]);
  const [selectedShops, setSelectedShops] = useState([
    'miracle-games',
    'trader-online',
    'mtg-discount',
  ]);
  const [filterLanguageOptions, setFilterLanguageOptions] = useState([]);
  const [selectedLanguages, setSelectedLanguage] = useState(['deu', 'eng']);
  const [filterTypeOptions, setFilterTypeOptions] = useState([]);
  const [selectedType, setSelectedType] = useState(['draft', 'set', 'collector']);
  const [from, setFrom] = useState(new Date(Date.now() - 2628000000).toISOString().slice(0, 10));
  const [to, setTo] = useState(new Date().toISOString().slice(0, 10));

  /**
   * Takes the server data and calculates the filter option for this set of data
   */
  const calculateOptions = (data) => {
    setFilterLanguageOptions(pickAttribute(data, 'lang'));
    setFilterShopsOptions(pickAttribute(data, 'shop'));
    setFilterSetOptions(pickAttribute(data, 'code'));
    setFilterTypeOptions(pickAttribute(data, 'type'));
  };

  // new code

  const [sets, setSets] = useState([]);

  const fatchSets = async () => {
    await fetch(SETS_PATH)
      .then((response) => response.json())
      .then((data) => {
        setSets(data);
      })
      .catch(() => {});
  };

  useEffect(() => {
    fatchSets();
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
    setSelectedShops(optionsToStrings(selected));
  };

  const handleProductsSelected = (selected) => {
    setSelectedProducts(optionsToStrings(selected));
  };

  const handleLanguagesSelected = (selected) => {
    setSelectedLanguage(optionsToStrings(selected));
  };

  const handleTypeSelected = (selected) => {
    setSelectedType(optionsToStrings(selected));
  };

  const filterItems = allItems.filter((item) => {
    if (selectedProducts.length > 0 && !selectedProducts.includes(item.code)) {
      return false;
    }
    if (selectedType.length > 0 && !selectedType.includes(item.type)) {
      return false;
    }
    if (selectedShops.length > 0 && !selectedShops.includes(item.shop)) {
      return false;
    }
    if (selectedLanguages.length > 0 && !selectedLanguages.includes(item.lang)) {
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
          selectedShops={stringsToOptions(selectedShops)}
          onShopsChange={handleShopsSelected}
          shopOptions={filterShopsOptions}
          selectedProducts={stringsToOptions(selectedProducts)}
          onProductsChange={handleProductsSelected}
          selectedLanguage={stringsToOptions(selectedLanguages)}
          onLanguageChange={handleLanguagesSelected}
          languageOptions={filterLanguageOptions}
          selectedType={stringsToOptions(selectedType)}
          onTypeChange={handleTypeSelected}
          typeOptions={filterTypeOptions}
          items={filterItems}
          setOptions={filterSetOptions}
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
