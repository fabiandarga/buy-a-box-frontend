/**
 * Transforms an array of label-value objects into a flat string array
 * @param {{label:string, value:string}[]} options
 * @returns {string[]}
 */
export const optionsToStrings = (options) => options.map((item) => item.value);

/**
 * Transforms a flat string array into label-value objects
 * @param {string[]} array
 * @return {{label:string, value:string}[]} options
 */
export const stringsToOptions = (array) => array.map((str) => ({ value: str, label: str }));

/**
 *
 * @param {*} array
 * @param {*} key
 * @returns
 */
export function pickAttribute(array, key) {
  const itemUnique = array.reduce((arrays, item) => {
    const value = item[key];
    if (!arrays.includes(value)) {
      arrays.push(value);
    }
    return arrays;
  }, []);

  return itemUnique;
}

export default {
  optionsToStrings,
  stringsToOptions,
  pickAttribute,
};
