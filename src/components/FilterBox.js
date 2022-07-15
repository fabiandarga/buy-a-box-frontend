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
 */
function FilterBox(props) {
  const {
    setOptions,
    shopOptions,
    selectedProducts,
    selectedShops,
    onShopsChange,
    onProductsChange,
  } = props;
  const productFilter = setOptions.map((code) => ({
    value: code,
    label: code,
  }));

  const shopFilter = shopOptions.map((shop) => ({
    value: shop,
    label: shop,
  }));

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
        <Tags productOptions={selectedProducts} shopOptions={selectedShops} />
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
                <h2>Zeit-Achse</h2>
                <WojtekmajDaterangePicker />
                <SchritteDropDown />
                <div className="saveBtnFooter">
                  <Button onClick={togglePopup} text="Save" />
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
