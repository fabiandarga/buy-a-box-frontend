/**
 * @param {{code:string, name:string, date: string }} set
 */
export const getProductTitle = (set) => `${set.code} / ${set.name} / ${set.date}`;

export default {
  getProductTitle,
};
