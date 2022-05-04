export const toDate = value => {
  if (!value) return;

  return new Date(value.toNumber() * 1000);
};
