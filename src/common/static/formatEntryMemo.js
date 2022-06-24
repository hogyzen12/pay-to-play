export const formatEntryMemo = (soldItems, purchaseValue) => {
  const sum = soldItems + purchaseValue;
  const hashedValues = [];

  for (let index = soldItems + 1; index <= sum; index++) {
    hashedValues.push(index);
  }

  return `#[${hashedValues.toString()}]`;
};
