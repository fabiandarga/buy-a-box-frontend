/**
 * Transforms an array of label-value objects into a flat string array
 * @param {{label:string, value:string}[]} options
 * @returns {string[]}
 */
export const optionsToStrings = (options) => options.map((option) => option.value);

/**
 * Transforms a flat string array into label-value objects
 * @param {string[]} array
 * @return {{label:string, value:string}[]} options
 */
export const stringsToOptions = (array) =>
  array.map((str) => ({ label: str[0].toUpperCase() + str.substring(1), value: str }));

/**
 *
 * @param {Object[]} array
 * @param {string} key
 * @returns
 */
export function pickAttribute(array, key) {
  return array.reduce(
    (result, item) => (result.includes(item[key]) ? result : [...result, item[key]]),
    []
  );
}

export default {
  optionsToStrings,
  stringsToOptions,
  pickAttribute,
};
