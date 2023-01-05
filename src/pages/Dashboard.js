/* eslint-disable no-undef */
import React, { useState } from 'react';
import InfoText from '../components/InfoText';
import FilterBox from '../components/FilterBox';
import FilterPopup from '../components/FilterPopup';
import PriceChart from '../components/PriceChart';
import { stringsToOptions } from '../utils/array-utils';
import './dashboard.css';

function Dashboard(props) {
  const {
    filterItems,
    shopFilter,
    productFilter,
    languageFilter,
    typeFilter,
    handleShopsSelected,
    handleProductsSelected,
    handleLanguagesSelected,
    handleTypeSelected,
    shopsOptions,
    extendedProductOptions,
    languageOptions,
    typeOptions,
    from,
    to,
    setFrom,
    setTo,
    handleFilterSaved,
  } = props;

  const [showPopup, setShowPopup] = useState(false);

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
