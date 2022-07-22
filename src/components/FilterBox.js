import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import Tags from './Tags';
import Popup from './Popup';
import DropDownSelect from './DropDownSelect';
import WojtekmajDaterangePicker from './WojtekmajDaterangePicker';
import SchritteDropDown from './SchritteButtons';
import './filterBox.css';

/**
 * props.selctedShops
 * props.onShopsChange
 * props.selctedProducts
 * props.onProductsChange
 * props.setFrom
 * props.setTo
 * props.onSave()
 */
function FilterBox(props) {
  const {
    setOptions,
    shopOptions,
    selectedProducts,
    selectedShops,
    onShopsChange,
    onProductsChange,
    onSave,
    setFrom,
    setTo,
    from,
    to,
    selectedLanguage,
    onLanguageChange,
    languageOptions,
    selectedType,
    onTypeChange,
    typeOptions,
  } = props;

  const productFilter = setOptions.map((code) => ({ value: code, label: code }));
  const shopFilter = shopOptions.map((shop) => ({ value: shop, label: shop }));
  const languageFilter = languageOptions.map((lang) => ({ value: lang, label: lang }));
  const typeFilter = typeOptions.map((lang) => ({ value: lang, label: lang }));

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <Card>
      <div className="filterBox">
        <div className="filterBoxHeader">
          <h3>Filter</h3>
          <Button onClick={togglePopup} text="Open Filter" />
        </div>
        <Tags
          productOptions={selectedProducts}
          shopOptions={selectedShops}
          langOptions={selectedLanguage}
          typeOptions={selectedType}
        />
        {showPopup && (
          <Popup
            handleClose={togglePopup}
            content={
              <div>
                <div className="section-title">Shops</div>
                <DropDownSelect
                  options={shopFilter}
                  value={selectedShops}
                  onChange={onShopsChange}
                />
                <div className="section-title">product</div>
                <DropDownSelect
                  options={productFilter}
                  value={selectedProducts}
                  onChange={onProductsChange}
                />
                <div className="section-title">Language</div>
                <DropDownSelect
                  options={languageFilter}
                  value={selectedLanguage}
                  onChange={onLanguageChange}
                />
                <div className="section-title">Type</div>
                <DropDownSelect options={typeFilter} value={selectedType} onChange={onTypeChange} />
                <h2>Zeit-Achse</h2>
                <WojtekmajDaterangePicker from={from} to={to} setFrom={setFrom} setTo={setTo} />
                <SchritteDropDown setFrom={setFrom} setTo={setTo} />
                <div className="saveBtnFooter">
                  <Button
                    onClick={() => {
                      onSave();
                      togglePopup();
                    }}
                    text="Save"
                  />
                </div>
              </div>
            }
          />
        )}
      </div>
    </Card>
  );
}

export default FilterBox;
