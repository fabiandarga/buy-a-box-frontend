/* eslint-disable no-undef */
import React, { useState } from 'react';
import InfoText from '../components/InfoText';
import FilterBox from '../components/FilterBox';
import FilterPopup from '../components/FilterPopup';
import PriceChart from '../components/PriceChart';
import { optionsToStrings, stringsToOptions } from '../utils/array-utils';
import FilterConfig from '../config/filter';
import './dashboard.css';

function Dashboard(props) {
  const [productFilter, setProductFilter] = useState(FilterConfig.productFilter);
  const [shopFilter, setShopFilter] = useState(FilterConfig.shopFilter);
  const [languageFilter, setLanguageFilter] = useState(FilterConfig.languageFilter);
  const [typeFilter, setTypeFilter] = useState(FilterConfig.typeFilter);
  const {
    shopsOptions,
    extendedProductOptions,
    languageOptions,
    typeOptions,
    from,
    to,
    setFrom,
    setTo,
    handleFilterSaved,
    allItems,
  } = props;

  const filterItems = allItems.filter((item) => {
    if (productFilter.length === 0 || !productFilter.includes(item.code)) {
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

  const [showPopup, setShowPopup] = useState(false);

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

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };
  return (
    <div>
      <PriceChart items={filterItems} />
      <div className="FilterBox-InfoText">
        <FilterBox
          selectedShops={stringsToOptions(shopFilter)}
          selectedProducts={stringsToOptions(productFilter)}
          selectedLanguage={stringsToOptions(languageFilter)}
          selectedType={stringsToOptions(typeFilter)}
          onOpenFilter={togglePopup}
        />
        <InfoText />
      </div>

      <FilterPopup
        show={showPopup}
        selectedShops={stringsToOptions(shopFilter)}
        selectedProducts={stringsToOptions(productFilter)}
        selectedLanguage={stringsToOptions(languageFilter)}
        selectedType={stringsToOptions(typeFilter)}
        onShopsChange={handleShopsSelected}
        onProductsChange={handleProductsSelected}
        onLanguageChange={handleLanguagesSelected}
        onTypeChange={handleTypeSelected}
        shopOptions={shopsOptions}
        productOptions={extendedProductOptions}
        languageOptions={languageOptions}
        typeOptions={typeOptions}
        items={filterItems}
        from={from}
        to={to}
        setFrom={setFrom}
        setTo={setTo}
        onSave={handleFilterSaved}
        onClose={togglePopup}
      />
    </div>
  );
}

export default Dashboard;
