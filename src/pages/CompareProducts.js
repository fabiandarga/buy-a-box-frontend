import { React, useState, useEffect } from 'react';
import Table from '../components/Table';

const items = [
  {
    edition: 'Dominare Remastered',
    produkt: 'Collector-Booster',
    language: 'deu',
    shop: 'Trader-online.de',
    versand: [
      'Deutschland: 2-3 Tage / 3,99€',
      'Osterreich: 4-5 Tage / 5,99€',
      'Schweiz: 4-5 Tage /6,99€',
    ],
    preis: '284,99€',
  },
  {
    edition: 'Dominare Remastered',
    produkt: 'Collector-Booster',
    language: 'eng',
    shop: 'Trader-online.de',
    versand: [
      'Deutschland: 2-3 Tage / 3,99€',
      'Osterreich: 4-5 Tage / 5,99€',
      'Schweiz: 4-5 Tage /6,99€',
    ],
    preis: '284,99€',
  },
  {
    edition: 'Dominare Remastered',
    produkt: 'Collector-Booster',
    language: 'jap',
    shop: 'Trader-online.de',
    versand: [
      'Deutschland: 2-3 Tage / 3,99€',
      'Osterreich: 4-5 Tage / 5,99€',
      'Schweiz: 4-5 Tage /6,99€',
    ],
    preis: '284,99€',
  },
];

const SCRAPER_PATH = 'https://buy-a-box-backend.herokuapp.com/data/';

function CompareProducts() {
  const [allItems, setAllItems] = useState([]);
  // eslint-disable-next-line no-shadow
  const fetchData = async () => {
    const url = new URL(SCRAPER_PATH);
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAllItems(data);
      })
      .catch((err) => err);
  };

  console.log(allItems);
  console.log(items);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Compare Products</h1>
      <Table items={items} />
    </div>
  );
}

export default CompareProducts;
