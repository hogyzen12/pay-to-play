import emailjs from '@emailjs/browser';
import { localStorageGet, localStorageSet } from 'common/utils/localStorage';
import { fillAnswers } from 'common/utils/fillAnswers';
import { initialResults } from 'common/static/results';
import { solscanUrl } from 'common/static/constants';

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

export const sendEmail = (sendToEmail, userAddress, role, signature) => {
  const userTemplateID = process.env.REACT_APP_TEMPLATE_ID;
  const memberTemplateID = process.env.REACT_APP_TEMPLATE_PREMIUM_ID;

  const userTemplate = {
    to_email: sendToEmail,
    my_html: `
			<span>Congratulations on successfully claiming your 1 month of CPro with DMNDS! You can find your receipt of payment on chain at the below link. Your CPro account linked to this email will be updated to reflect this within the next 48 hours. We appreciate your patience</span>
			<span>You can check your transaction status:</span>
			<a href="${solscanUrl}/${signature}">
				here
			</a>
			`,
  };

  const memberTemplate = {
    to_email: sendToEmail,
    my_html: `
		<div>
			<span>Email:</span>
			<span>${userAddress}</span>
		</div>
		<div>
			<span>You can check your transaction status:</span>
			<a href="${solscanUrl}/${signature}">
				here
			</a>
		</div>
			`,
  };

  emailjs
    .send(
      process.env.REACT_APP_SERVICE_ID,
      role === 'member' ? memberTemplateID : userTemplateID,
      role === 'member' ? memberTemplate : userTemplate,
      process.env.REACT_APP_PUBKEY,
    )
    .then(console.log)
    .catch(console.log);
};

export const resultsToString = () => {
  const acrossAxisString =
    initialResults.across.reduce((acc, item) => {
      acc += item.answer ? `| ${item.answer} ` : `|  `;

      return acc;
    }, '') + '|';

  const downAxisString =
    initialResults.down.reduce((acc, item) => {
      acc += item.answer ? `| ${item.answer} ` : `|  `;

      return acc;
    }, '') + '|';

  const totalResultsString = (acrossAxisString + downAxisString).replace(
    '||',
    '|',
  );

  return totalResultsString;
};
