/* eslint-disable no-return-await */
const BASE_URL = process.env.REACT_APP_SERVER_URL;
// const BASE_URL = 'https://buy-a-box-backend.herokuapp.com';
const DATA_PATH = `${BASE_URL}/data/`;
const SETS_PATH = `${BASE_URL}/sets/`;
const SHOPS_PATH = `http://localhost:4000/shops/`;

// eslint-disable-next-line prefer-template
console.log('BASE_URL ' + BASE_URL);
// eslint-disable-next-line prefer-template
console.log('DATA_PATH ' + DATA_PATH);

export async function fetchData(from, to) {
  // return Data als Objekt
  const url = new URL(DATA_PATH);
  if (from) {
    url.searchParams.append('from', from);
  }
  if (to) {
    url.searchParams.append('to', to);
  }
  return await fetch(url)
    .then((response) => response.json())
    .catch((err) => err);
}

// eslint-disable-next-line import/prefer-default-export
export async function fetchSets() {
  // return Sets als Array
  return await fetch(SETS_PATH)
    .then((response) => response.json())
    .catch(() => {});
}

export async function fetchShops() {
  // return Shops als Array
  return await fetch(SHOPS_PATH)
    .then((response) => response.json())
    .catch((err) => err);
}

export async function fetchDataCompareProducts() {
  // return Set als Objekt
  const url = new URL(DATA_PATH);
  url.searchParams.append('from', new Date(Date.now() - 86400000).toISOString().slice(0, 10));
  return await fetch(url)
    .then((response) => response.json())
    .catch((err) => err);
}
