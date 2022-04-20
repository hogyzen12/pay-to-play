import { initialResults } from 'common/static/results';

export const fillAnswers = (direction, guesses) => {
  initialResults[direction].forEach(item => {
    const res = item.grid.reduce((acc, value) => {
      acc += !guesses[value] ? '' : guesses[value];

      return acc;
    }, '');

    item.answer = res;
  });
};
