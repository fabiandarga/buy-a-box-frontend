import React, { useState, useEffect } from 'react';
import InfoText from '../components/InfoText';
import FilterBox from '../components/FilterBox';
import PriceChart from '../components/PriceChart';
import './dashboard.css';

// http://localhost:4000/scraper/all?from=2022-07-14&to=2022-07-14
const SCRAPER_PATH = 'https://buy-a-box-backend.herokuapp.com/scraper/all';

function Dashboard() {
  const [allItems, setAllItems] = useState([]);
  const [filterSetOptions, setFilterSetOptions] = useState([]);
  const [selectedSets, setSelectedSets] = useState(['AFR']);
  const [filterShopsOptions, setFilterShopsOptions] = useState([]);
  const [selectedShops, setSelectedShops] = useState(['miracle-games']);
  // new code
  const [filterLanguageOptions, setFilterLanguageOptions] = useState([]);
  const [selectedLanguage, setSelectedLanguage] = useState(['deu']);
  // new code

  const [from, setFrom] = useState(new Date(Date.now() - 2628000000).toISOString().slice(0, 10));
  const [to, setTo] = useState(new Date().toISOString().slice(0, 10));

  useEffect(() => {
    // eslint-disable-next-line no-use-before-define
    fetchData();
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
        // eslint-disable-next-line no-use-before-define
        calculateOptions(data);
        setAllItems(data);
      })
      .catch((err) => err);
  };

  /**
   * @param {Array} data
   */

  const calculateOptions = (data) => {
    const itemCodesUnique = data.reduce((array, item) => {
      const { code } = item;
      if (!array.includes(code)) {
        array.push(code);
      }
      return array;
    }, []);

    const itemShopsUnique = data.reduce((array, item) => {
      const { shop } = item;
      if (!array.includes(shop)) {
        array.push(shop);
      }
      return array;
    }, []);

    // new code
    const itemLanguageUnique = data.reduce((array, item) => {
      const { lang } = item;
      if (!array.includes(lang)) {
        array.push(lang);
      }
      return array;
    }, []);

    setFilterLanguageOptions(itemLanguageUnique);
    // new code

    setFilterShopsOptions(itemShopsUnique);
    setFilterSetOptions(itemCodesUnique);
  };

  const filterSaveHandler = () => {
    // es wurde der save button geklickt
    // from und to
    // request zum server mit from und to
    //    fetch data
    fetchData(from, to);
  };

  const selectedType = ['draft'];

  const filterItems = allItems.filter((item) => {
    if (selectedSets.length > 0 && !selectedSets.includes(item.code)) {
      return false;
    }
    if (selectedType.length > 0 && !selectedType.includes(item.type)) {
      return false;
    }
    if (selectedShops.length > 0 && !selectedShops.includes(item.shop)) {
      return false;
    } // new code
    if (selectedLanguage.length > 0 && !selectedLanguage.includes(item.lang)) {
      return false;
    } // new code
    return true;
  });

  return (
    <div>
      <PriceChart items={filterItems} />
      <div className="FilterBox-InfoText">
        <FilterBox
          selectedShops={selectedShops.map((shop) => ({
            value: shop,
            label: shop,
          }))}
          onShopsChange={(selected) => {
            setSelectedShops(selected.map((item) => item.value));
          }}
          shopOptions={filterShopsOptions}
          selectedProducts={selectedSets.map((code) => ({
            value: code,
            label: code,
          }))}
          onProductsChange={(selected) => {
            setSelectedSets(selected.map((item) => item.value));
          }}
          // new code
          selectedLanguage={selectedLanguage.map((shop) => ({
            value: shop,
            label: shop,
          }))}
          onLanguageChange={(selected) => {
            setSelectedLanguage(selected.map((item) => item.value));
          }}
          languageOptions={filterLanguageOptions}
          // new code

          items={filterItems}
          setOptions={filterSetOptions}
          from={from}
          to={to}
          setFrom={setFrom}
          setTo={setTo}
          onSave={filterSaveHandler}
        />
        <InfoText />
      </div>
    </div>
  );
}

export default Dashboard;
