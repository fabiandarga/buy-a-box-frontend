import React, { useState } from 'react';
import Card from './Card';
import Button from './Button';
import Tags from './Tags';
import Popup from './Popup';
import DropDownSelect from './DropDownSelect';
import WojtekmajDaterangePicker from './WojtekmajDaterangePicker';
import SchritteDropDown from './SchritteDropDown';
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
    // new code
    selectedLanguage,
    onLanguageChange,
    languageOptions,
    // new code
  } = props;

  const productFilter = setOptions.map((code) => ({ value: code, label: code }));

  const shopFilter = shopOptions.map((shop) => ({ value: shop, label: shop }));
  // new code
  const languageFilter = languageOptions.map((lang) => ({ value: lang, label: lang }));
  // new code

  const [showPopup, setShowPopup] = useState(false);

  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <Card>
      <div className="filterBox">
        <div className="filterBoxHeader">
          <h2>Filter</h2>
          <Button onClick={togglePopup} text="Open Filter" />
        </div>
        <Tags
          productOptions={selectedProducts}
          shopOptions={selectedShops}
          langOptions={selectedLanguage}
        />
        {showPopup && (
          <Popup
            handleClose={togglePopup}
            content={
              <div>
                <h2>Filter</h2>
                <h3>Shops</h3>
                <DropDownSelect
                  options={shopFilter}
                  value={selectedShops}
                  onChange={onShopsChange}
                />
                <h3>product</h3>
                <DropDownSelect
                  options={productFilter}
                  value={selectedProducts}
                  onChange={onProductsChange}
                />
                <h3>Language</h3>
                <DropDownSelect
                  options={languageFilter}
                  value={selectedLanguage}
                  onChange={onLanguageChange}
                />
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
