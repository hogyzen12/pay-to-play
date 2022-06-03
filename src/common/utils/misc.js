import { localStorageGet, localStorageSet } from 'common/utils/localStorage';
import { fillAnswers } from 'common/utils/fillAnswers';
import { initialResults } from 'common/static/results';

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

export const getTimeDuration = (minutes, seconds) => {
  const min = (59 - minutes).toString();
  const sec = (60 - seconds).toString();
  const formattedMinutes = min.length === 1 ? `0${min}` : min;
  const formattedSeconds = sec.length === 1 ? `0${sec}` : sec;
  const result = `${formattedMinutes}:${formattedSeconds}`;

  return result;
};

export const generateResults = () => {
  const data = localStorageGet('guesses');

  if (data && data.guesses) {
    fillAnswers('across', data.guesses);
    fillAnswers('down', data.guesses);
  }

  localStorageSet('results', initialResults);
};
