import { getProductTitle } from './set-utils';

export const productCodeToOption = (item) => ({
  label: getProductTitle(item),
  value: item.code,
});

export default {
  productCodeToOption,
};
