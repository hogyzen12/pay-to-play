import { results } from 'common/static/results';

export const getResults = guesses => {
  results.across[1].answer =
    guesses['1_0'] +
    guesses['1_1'] +
    guesses['1_2'] +
    guesses['1_3'] +
    guesses['1_4'] +
    guesses['1_5'] +
    guesses['1_6'];
};
