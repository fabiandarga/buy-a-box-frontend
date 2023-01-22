/* eslint-disable no-return-await */
const BASE_URL = process.env.REACT_APP_SERVER_URL;
// const BASE_URL = 'https://buy-a-box-backend.herokuapp.com';
const DATA_PATH = `${BASE_URL}/data/`;
const LATEST_PATH = `${BASE_URL}/data/latest`;
const SETS_PATH = `${BASE_URL}/sets/`;
const SHOPS_PATH = `${BASE_URL}/shops/`;

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

export async function fetchDataCompareProducts(product, type) {
  const url = new URL(LATEST_PATH);
  url.searchParams.append('product', product);
  url.searchParams.append('type', type);
  return await fetch(url)
    .then((response) => response.json())
    .catch((err) => err);
}
