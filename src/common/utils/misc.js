export const toDate = value => {
  if (!value) return;

  return new Date(value.toNumber() * 1000);
};

export const getTimerDisplayed = (pathname, routes) => {
  switch (pathname) {
    case routes.home:
    case `/${routes.raffle}`:
    case `/${routes.membership}`:
    case `/${routes.merchandise}`:
    case `/${routes.crossword}`:
    case `/${routes.articles}`:
      return false;
    default:
      return true;
  }
};
