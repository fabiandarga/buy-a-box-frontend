import React, { useState, useEffect } from "react";
import InfoText from "../components/InfoText.js";
import FilterBox from "../components/FilterBox.js";
import PriceChart from "../components/PriceChart.js";

const SCRAPER_PATH = "https://buy-a-box-backend.herokuapp.com/scraper/all";

function Dashboard(props) {
  const [allItems, setAllItems] = useState([]);
  const [filterSetOptions, setFilterSetOptions] = useState([]);
  const [selectedSets, setSelectedSets] = useState(["AFR"]);
  const [filterShopsOptions, setFilterShopsOptions] = useState([]);
  const [selectedShops, setSelectedShops] = useState(["miracle-games"]);

  useEffect(() => {
    fetchRecordsData();
  }, []); // Dependancy Array

  const fetchRecordsData = async () => {
    await fetch(SCRAPER_PATH)
      .then((response) => response.json())
      .then((data) => {
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

    setFilterShopsOptions(itemShopsUnique);

    setFilterSetOptions(itemCodesUnique);
  };

  const selectedType = ["draft"];

  const filterItems = allItems.filter((item, index) => {
    if (selectedSets.length > 0 && !selectedSets.includes(item.code)) {
      return false;
    }
    if (selectedType.length > 0 && !selectedType.includes(item.type)) {
      return false;
    }
    if (selectedShops.length > 0 && !selectedShops.includes(item.shop)) {
      return false;
    }
    return true;
  });

  return (
    <div>
      <PriceChart items={filterItems} />
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
        items={filterItems}
        setOptions={filterSetOptions}
      />
      <InfoText />
    </div>
  );
}

export default Dashboard;
