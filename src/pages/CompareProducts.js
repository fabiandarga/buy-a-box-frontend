import { React, useState, useEffect } from 'react';
import Table from '../components/Table';

const SCRAPER_PATH = 'https://buy-a-box-backend.herokuapp.com/data/';
const SHOPS_PATH = 'http://localhost:4000/shops';

function CompareProducts() {
  // const [from, setFrom] = useState(new Date(Date.now() - 2628000000).toISOString().slice(0, 10));
  const [allItems, setAllItems] = useState([]);
  const [shops, setShops] = useState([]);
  // eslint-disable-next-line no-shadow
  const fetchData = async () => {
    const url = new URL(SCRAPER_PATH);
    url.searchParams.append('from', new Date(Date.now() - 86400000).toISOString().slice(0, 10));
    await fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setAllItems(data);
      })
      .catch((err) => err);
  };

  const fetchShops = async () => {
    await fetch(SHOPS_PATH)
      .then((response) => response.json())
      .then((data) => {
        setShops(data);
      })
      .catch((err) => err);
  };

  useEffect(() => {
    fetchData();
    fetchShops();
  }, []);

  return (
    <div>
      <h1>Compare Products</h1>
      <Table items={allItems} shops={shops} />
    </div>
  );
}

export default CompareProducts;
